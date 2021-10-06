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
