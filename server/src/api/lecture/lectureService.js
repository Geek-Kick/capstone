const dao = require('./lectureDao');
const { pool } = require('../../../config/db');

exports.postMyLecture = async (userId, req_body) => {
  const con = await pool.getConnection(async conn => conn);
  const check = dao.myLectureCheckQuery;
  const checkStatus = dao.myLectureStatusCheckQuery;
  const postMyLecture = dao.postMyLectureQuery;
  const patchMyLecture = dao.patchMyLectureQuery;
  const cancelMyLecture = dao.cancelMyLectureQuery;
  const { lectureId, grade } = req_body;
  try {
    const checkRow = await con.query(check, [userId, lectureId]);
    if (checkRow[0].length > 0) {
      const checkStatusRow = await con.query(checkStatus, [userId, lectureId]);
      if (checkStatusRow[0].length > 0) {
        const cancelMyLectureRow = await con.query(cancelMyLecture, [userId, lectureId]);
      } else {
        const patchMyLectureRow = await con.query(patchMyLecture, [grade, userId, lectureId]);
      }
    } else {
      const postMyLectureRow = await con.query(postMyLecture, [userId, lectureId, grade]);
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

exports.getPopularLecture = async () => {
  const con = await pool.getConnection(conn => conn);
  const popularLecture = dao.getPopularLectureQuery;
  try {
    const popularLectureRow = await con.query(popularLecture);
    return popularLectureRow[0];
  } catch (e) {
    console.log(`Service error \n${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.getPopularLecturer = async () => {
  const con = await pool.getConnection(conn => conn);
  const popularLecturer = dao.getPopularLecturerQuery;
  try {
    const popularLecturerRow = await con.query(popularLecturer);
    return popularLecturerRow[0];
  } catch (e) {
    console.log(`Service error \n${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.getLectureByLectureId = async lectureId => {
  const con = await pool.getConnection(conn => conn);
  const lectureByLectureId = dao.getLectureByLectureIdQuery;
  try {
    const lectureRow = await con.query(lectureByLectureId, [lectureId]);
    return lectureRow[0];
  } catch (e) {
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.getLectureReview = async lectureId => {
  const con = await pool.getConnection(conn => conn);
  const reviewCount = dao.getReviewCountQuery;
  const lectureReview = dao.getLectureReviewQuery;
  try {
    const reviewCountRow = await con.query(reviewCount, [lectureId]);
    const lectureReviewRow = reviewCountRow[0];
    const reviewRow = await con.query(lectureReview, [lectureId]);
    const reviewRows = reviewRow[0];
    lectureReviewRow.push(reviewRows);
    return lectureReviewRow;
  } catch (e) {
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.getLectureTotalReview = async lectureId => {
  const con = await pool.getConnection(conn => conn);
  const reviewSummary = dao.getReviewSummaryQuery;
  const lectureTotalReview = dao.getLectureTotalReviewQuery;
  try {
    const reviewSummaryRow = await con.query(reviewSummary, [lectureId]);
    const lectureTotalReviewRow = reviewSummaryRow[0];
    const reviewRow = await con.query(lectureTotalReview, [lectureId]);
    const reviewRows = reviewRow[0];
    lectureTotalReviewRow.push(reviewRows);
    return lectureTotalReviewRow;
  } catch (e) {
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.postReview = async (userId, req_body) => {
  const con = await pool.getConnection(conn => conn);
  const postReview = dao.postReviewQuery;
  const { lectureId, star, contents } = req_body;
  try {
    const postReviewRow = await con.query(postReview, [userId, lectureId, star, contents]);
    return 1;
  } catch (e) {
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.searchLecture = async (lectureKeyword, lecturerKeyword) => {
  const con = await pool.getConnection(conn => conn);
  const searchLecture = dao.searchLectureQuery;
  try {
    const searchLectureRow = await con.query(searchLecture, [lectureKeyword, lecturerKeyword]);
    return searchLectureRow[0];
  } catch (e) {
    console.log(`Service error \n${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.getLectureBySubject = async () => {
  const con = await pool.getConnection(conn => conn);
  const lectureBySubject = dao.lectureBySubjectQuery;
  const subjectName = dao.subjectNameQuery;
  const result = [];
  try {
    for (let i = 1; i <= 22; i++) {
      const subjectNameRow = await con.query(subjectName, [i]);
      const lectureBySubjectRow = await con.query(lectureBySubject, [i]);
      const subject = subjectNameRow[0];
      subject.push(lectureBySubjectRow[0]);
      result.push(subject);
    }
    return result;
  } catch (e) {
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.getRecommendLecture = async (userId, req_body) => {
  const con = await pool.getConnection(conn => conn);
  const usersGrade = dao.getUsersGradeQuery;
  const recommendLecture = dao.getRecommendLectureQuery;
  const { subjectId } = req_body;
  try {
    const usersGradeRow = await con.query(usersGrade, [userId, subjectId]);
    const gradeRow = usersGradeRow[0];
    const recommendLectureRow = await con.query(recommendLecture, [subjectId, gradeRow[0].grade]);
    return recommendLectureRow[0];
  } catch (e) {
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};

exports.getLecturerInfo = async lecturerId => {
  const con = await pool.getConnection(conn => conn);
  const lecturerInfo = dao.getLecturerInfoQuery;
  const lecturerLecture = dao.getLecturerLectureQuery;
  try {
    const lecturerInfoRow = await con.query(lecturerInfo, [lecturerId]);
    const lectureRow = await con.query(lecturerLecture, [lecturerId]);
    const result = lecturerInfoRow[0];
    result.push(lectureRow[0]);
    return result;
  } catch (e) {
    console.log(`Service error \n ${e}`);
    return null;
  } finally {
    con.release();
  }
};
