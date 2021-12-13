const dao = require("./userDao");
const { pool } = require("../../../config/db");
const bcrypt = require("bcrypt");
const createJWT = require("../../function/createJWT");

exports.duplicateTest = async (req_body) => {
  const con = await pool.getConnection(async (conn) => conn);
  const query = dao.duplicateTestQuery;
  const { email, nickName, phone } = req_body;
  const duplicateTestInfo = [email, nickName, phone];

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

exports.signIn = async (req_body) => {
  const { email, nickName, password, phone, emailAdv, smsAdv, schoolId } =
    req_body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const signInInfo = [
    email,
    nickName,
    hashedPassword,
    phone,
    emailAdv,
    smsAdv,
    schoolId,
  ];

  const con = await pool.getConnection(async (conn) => conn);
  const query = dao.singInDao;
  const updateSchoolNumStudents = dao.singInUpdateStudentNum;
  try {
    await con.beginTransaction();
    await con.query(updateSchoolNumStudents, schoolId);
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

exports.login = async (req_body) => {
  const con = await pool.getConnection(async (conn) => conn);
  const query = dao.getUserByEamilQuery;
  const { email, password } = req_body;
  try {
    await con.beginTransaction();
    const row = await con.query(query, email);
    await con.commit();
    const user = row[0][0];

    if (!user) {
      return "noEmail";
    }

    const hashedPassword = user.password;
    const compare = bcrypt.compareSync(password, hashedPassword);
    if (!compare) {
      return "wrongPassword";
    }
    return await createJWT(user.id);
  } catch (e) {
    await con.rollback();
    console.log(`Service Error \n ${e}`);
  } finally {
    con.release();
  }
};

exports.getProfile = async (userId) => {
  const nameQuery = dao.getUserNameById;
  const getMyLectureQuery = dao.getMyLectureQuery;
  const con = await pool.getConnection(async (conn) => conn);
  try {
    await con.beginTransaction();
    var nickName = await con.query(nameQuery, userId);
    nickName = nickName[0][0];
    var lecuture = await con.query(getMyLectureQuery, userId);
    // console.log(lecuture[0]);
    await con.commit();
    const result = {
      nickName: nickName.nickName,
      lecuture: lecuture[0],
    };
    console.log(result);
    return result;
  } catch (e) {
    await con.rollback();
    console.log(`service Error \n ${e}`);
  } finally {
    con.release();
  }
};

exports.updateUser = async (req_body, userId) => {
  const { nickName, password, phone, emailAdv, smsAdv, schoolId } = req_body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  const updateUserInfo = [
    nickName,
    hashedPassword,
    phone,
    emailAdv,
    smsAdv,
    schoolId,
    userId,
  ];
  const query = dao.updateUserQuery;
  const con = await pool.getConnection(async (conn) => conn);
  try {
    await con.beginTransaction();
    const row = await con.query(query, updateUserInfo);
    await con.commit();
    return row[0].changedRows;
  } catch (e) {
    await con.rollback();
    console.log(`Service Error \n ${e}`);
  } finally {
    con.release();
  }
};

exports.updateImage = async (data) => {
  const query = dao.updateUserImageQeury;
  const con = await pool.getConnection(async (conn) => conn);
  try {
    const row = await con.query(query, data);
    return row[0].affectedRows;
  } catch (e) {
    console.log(`Service Error\n ${e}`);
  } finally {
    con.release();
  }
};

exports.getUserImage = async (userId) => {
  const query = dao.getUserImageQuery;
  const con = await pool.getConnection(async (conn) => conn);

  try {
    const row = await con.query(query, userId);
    const imageUrl = process.env.IMAGE_URL + row[0][0].imageUrl;
    row[0][0].imageUrl = imageUrl;
    return row[0][0];
  } catch (e) {
    console.log(`Service Error \n ${e}`);
  } finally {
    con.release();
  }
};
