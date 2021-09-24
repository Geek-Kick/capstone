const dao = require("./userDao");
const { pool } = require("../../../config/db");

exports.duplicateTest = async (duplicateTestInfo) => {
  const con = await pool.getConnection(async (conn) => conn);
  const query = dao.duplicateTestQuery;
  try {
    await con.beginTransaction();
    const row = await con.query(query, duplicateTestInfo);
    await con.commit();
    return row[0][0] ? 0 : 1;
  } catch (e) {
    await con.rollback();
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.signIn = async (signInInfo) => {
  const con = await pool.getConnection(async (conn) => conn);
  const query = dao.singInDao;
  try {
    await con.beginTransaction();
    const row = await con.query(query, signInInfo);
    await con.commit();
    return row[0].affectedRows;
  } catch (e) {
    await con.rollback();
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.getUserByEmail = async (email) => {
  const con = await pool.getConnection(async (conn) => conn);
  const query = dao.getUserByEamilQuery;
  try {
    await con.beginTransaction();
    const row = await con.query(query, email);
    await con.commit();
    return row[0][0];
  } catch (e) {
  } finally {
    con.release();
  }
};
