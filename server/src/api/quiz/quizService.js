const { pool } = require("../../../config/db");
const dao = require("./quizDao");

exports.getAllQuiz = async () => {
  const con = await pool.getConnection(async (conn) => conn);
  const query = dao.getAllQuizQuery;

  try {
    await con.beginTransaction();
    const row = await con.query(query);
    await con.commit();
    return row[0];
  } catch (e) {
    await con.rollback();
    console.log(`Service Error\n ${e}`);
  } finally {
    con.release();
  }
};
