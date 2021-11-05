const dao = require('./lectureDao');
const { pool } = require('../../../config/db');

exports.postMyLecture = async (userId, req_body) => {
  const con = await pool.getConnection(async conn => conn);
  const check = dao.myLectureCheckQuery;
  const checkStatus = dao.myLectureStatusCheckQuery;
  const postMyLecture = dao.postMyLectureQuery;
  const patchMyLecture = dao.patchMyLectureQuery;
  const cancelMyLecture = dao.cancelMyLectureQuery;
  const { lectureId } = req_body;
  try {
    const checkRow = await con.query(check, [userId, lectureId]);
    if (checkRow[0].length > 0) {
      const checkStatusRow = await con.query(checkStatus, [userId, lectureId]);
      if (checkStatusRow[0].length > 0) {
        const cancelMyLectureRow = await con.query(cancelMyLecture, [userId, lectureId]);
      } else {
        const patchMyLectureRow = await con.query(patchMyLecture, [userId, lectureId]);
      }
    } else {
      const postMyLectureRow = await con.query(postMyLecture, [userId, lectureId]);
    }
    return 1;
  } catch (e) {
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.getMyLecture = async userId => {
  const con = await pool.getConnection(conn => conn);
  const myLectures = dao.getMyLectureQuery;
  try {
    const myLectureRow = await con.query(myLectures, [userId]);
    return myLectureRow[0];
  } catch (e) {
    console.log(`Service error \n${e}`);
    return null;
  } finally {
    con.release();
  }
};
