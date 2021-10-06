const dao = require('./communityDao');
const { pool } = require('../../../config/db');
const bcrypt = require('bcrypt');
const createJWT = require('../../function/createJWT');

exports.postPost = async (req_body, userId, imageUrl_body) => {
  const con = await pool.getConnection(async conn => conn);
  const postQuery = dao.postPostQuery;
  const imageQuery = dao.postImageQuery;
  const { title, category, contents } = req_body;
  const { imageUrl } = imageUrl_body;
  try {
    await con.beginTransaction();
    const postRow = await con.query(postQuery, [userId, title, category, contents]);
    const getPostRow = await con.query(getPostQuery, [userId, title, category, contents]);
    for (let i = 0; i < imageUrl_body.length; i++) {
      const imageRow = await con.query(imageQuery, [getPostRow[0].id, imageUrl_body[i].imageUrl]);
    }
    await con.commit();
    return postRow[0].postRows;
  } catch (e) {
    await con.rollback();
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};
