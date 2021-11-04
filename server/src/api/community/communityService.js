const dao = require('./communityDao');
const { pool } = require('../../../config/db');
const bcrypt = require('bcrypt');
const createJWT = require('../../function/createJWT');

exports.postPost = async (req_body, userId, imageUrl_body) => {
  const con = await pool.getConnection(async conn => conn);
  const postQuery = dao.postPostQuery;
  const imageQuery = dao.postImageQuery;
  const getPostQuery = dao.getPostQuery;
  const { title, category, contents } = req_body;
  const { imageUrl } = imageUrl_body;
  try {
    await con.beginTransaction();
    const postRow = await con.query(postQuery, [userId, title, category, contents]);
    const getPostRow = await con.query(getPostQuery, [userId, title, category, contents]);
    if (imageUrl_body) {
      for (let i = 0; i < imageUrl_body.length; i++) {
        const imageRow = await con.query(imageQuery, [getPostRow[0].id, imageUrl_body[i].imageUrl]);
      }
    }
    await con.commit();
    return 1;
  } catch (e) {
    await con.rollback();
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.patchPost = async (req_body, userId) => {
  const con = await pool.getConnection(async conn => conn);
  const query = dao.patchQuery;
  const { id, contents } = req_body;
  try {
    const patchPostRow = await con.query(query, [contents, id, userId]);
    return 1;
  } catch (e) {
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.deletePost = async (req_body, userId) => {
  const con = await pool.getConnection(async conn => conn);
  const query = dao.deletePostQuery;
  const { id } = req_body;
  try {
    const row = await con.query(query, [id, userId]);
    return 1;
  } catch (e) {
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.getPost = async req_query => {
  const con = await pool.getConnection(async conn => conn);
  const populerQuery = dao.getPopularQuery;
  const latestQuery = dao.latestQuery;
  const scrapQuery = dao.scrapQuery;
  const viewQuery = dao.viewQuery;
  const commentQuery = dao.commentQuery;
  const { category, sort } = req_query;
  try {
    if (sort === 'POPULAR') {
      const row = await con.query(populerQuery, [category]);
      return row[0];
    } else if (sort === 'LATEST') {
      const row = await con.query(latestQuery, [category]);
      return row[0];
    } else if (sort === 'SCRAP') {
      const row = await con.query(scrapQuery, [category]);
      return row[0];
    } else if (sort === 'VIEW') {
      const row = await con.query(viewQuery, [category]);
      return row[0];
    } else if (sort === 'COMMENT') {
      const row = await con.query(commentQuery, [category]);
      return row[0];
    }
  } catch (e) {
    console.log(`Service error \n ${e}`);
  } finally {
    con.release();
  }
};

exports.getDetail = async (req_query, userId) => {
  const con = await pool.getConnection(async conn => conn);
  const addViewQuery = dao.addViewQuery;
  const getDetailQuery = dao.getDetailQuery;
  const { postId } = req_query;
  try {
    await con.beginTransaction();
    await con.query(addViewQuery, [postId, userId]);
    const row = await con.query(getDetailQuery, [postId]);
    await con.commit();
    return row[0];
  } catch (e) {
    await con.rollback();
    console.log(`Service error \n ${e}`);
  } finally {
    con.release();
  }
};

exports.getDetailComment = async req_query => {
  const con = await pool.getConnection(async conn => conn);
  const getDetailCommentQuery = dao.getDetailCommentQuery;
  const getReplyQuery = dao.getReplyQuery;
  const getCommentImageQuery = dao.getCommentImageQuery;
  const { postId } = req_query;
  const result = [];
  try {
    const row = await con.query(getDetailCommentQuery, [postId]);
    const rows = row[0];
    for (let i = 0; i < rows.length; i++) {
      const replyRow = await con.query(getReplyQuery, [rows[i].id]);
      const imageRow = await con.query(getCommentImageQuery, [rows[i].id]);
      console.log(rows[i].id);
      result.push({ Comment: rows[i], Image: imageRow[0], Reply: replyRow[0] });
    }
    return result[0];
  } catch (e) {
    console.log(`Service error \n ${e}`);
  } finally {
    con.release();
  }
};

exports.getSearch = async req_query => {
  const con = await pool.getConnection(async conn => conn);
  const query = dao.getSearchQuery;
  const { keyword } = req_query;
  const titleKeyword = '%' + keyword + '%';
  try {
    const row = await con.query(query, [titleKeyword]);
    return row[0];
  } catch (e) {
    console.log(`Service error \n ${e}`);
  } finally {
    con.release();
  }
};

exports.postComment = async (userId, req_body, image_body) => {
  const con = await pool.getConnection(async conn => conn);
  const commentQuery = dao.postCommentQuery;
  const imageQuery = dao.postCommentImageQuery;
  const getCommentIdQuery = dao.getCommentIdQuery;
  const { postId, contents } = req_body;
  const { imageUrl } = image_body;
  try {
    await con.beginTransaction();
    const postCommentRow = await con.query(commentQuery, [userId, postId, contents]);
    const getCommentIdRow = await con.query(getCommentIdQuery, [userId, postId, contents]);
    if (image_body) {
      for (let i = 0; i < image_body.length; i++) {
        const postImageRow = await con.query(imageQuery, [getCommentIdRow[0].id, image_body[i].imageUrl]);
      }
    }
    await con.commit();
    return 1;
  } catch (e) {
    await con.rollback();
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.postRecommend = async (userId, req_body) => {
  const con = await pool.getConnection(async conn => conn);
  const check = dao.recommendCheckQuery;
  const checkStatus = dao.recommendStatusCheckQuery;
  const postRecommend = dao.postRecommendQuery;
  const patchRecommend = dao.patchRecommendQuery;
  const cancelRecommend = dao.cancelRecommendQuery;
  const { postId } = req_body;
  try {
    const checkRow = await con.query(check, [userId, postId]);
    if (checkRow[0].length > 0) {
      const checkStatusRow = await con.query(checkStatus, [userId, [postId]]);
      if (checkStatusRow[0].length > 0) {
        const cancelRecommendRow = await con.query(cancelRecommend, [userId, postId]);
      } else {
        const patchRecommendRow = await con.query(patchRecommend, [userId, postId]);
      }
    } else {
      const postRecommendRow = await con.query(postRecommend, [userId, postId]);
    }
    return 1;
  } catch (e) {
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.postScrap = async (userId, req_body) => {
  const con = await pool.getConnection(async con => con);
  const check = dao.scrapCheckQuery;
  const checkStatus = dao.scrapCheckStatusQuery;
  const postScrap = dao.postScrapQuery;
  const patchScrap = dao.patchScrapQuery;
  const cancelScrap = dao.cancelScrapQuery;
  const { postId } = req_body;
  try {
    const checkRow = await con.query(check, [userId, postId]);
    if (checkRow[0].length > 0) {
      const checkStatusRow = await con.query(checkStatus, [userId, postId]);
      if (checkStatusRow[0].length > 0) {
        const cancelScrapRow = await con.query(cancelScrap, [userId, [postId]]);
      } else {
        const patchScrapRow = await con.query(patchScrap, [userId, postId]);
      }
    } else {
      const postScrapRow = await con.query(postScrap, [userId, postId]);
    }
    return 1;
  } catch (e) {
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.commentSelection = async (userId, req_body) => {
  const con = await pool.getConnection(async con => con);
  const check = dao.selectionCheckQuery;
  const commentSelection = dao.commentSelectionQuery;
  const { postId, commentId } = req_body;
  try {
    const checkRow = await con.query(check, [userId, postId]);
    const checking = checkRow[0];
    if (checking[0].commentId === null) {
      const commentSelectionRow = await con.query(commentSelection, [commentId, userId, postId]);
      return 1;
    } else {
      return null;
    }
  } catch (e) {
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.getMyPost = async userId => {
  const con = await pool.getConnection(async con => con);
  const myPost = dao.getMyPostQuery;
  try {
    const myPostRows = await con.query(myPost, [userId]);
    return myPostRows[0];
  } catch (e) {
    console.log(`Service erro \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};
