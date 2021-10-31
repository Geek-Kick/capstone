const duplicateTestQuery = `
SELECT email, nickName, phone FROM User
WHERE email = ? OR nickName = ? OR phone = ?
`;

const singInDao = `
INSERT INTO User
(email, nickName, password, phone, emailAdv, smsAdv, schoolId)
VALUES(?,?,?,?,?,?,?)
`;

const getUserByEamilQuery = `
SELECT * FROM User
WHERE email = ?
`;

const getUserProfile = `
SELECT * FROM User
WHERE id = ?
`;

const updateUserQuery = `
UPDATE User 
SET nickName = ? , password = ? , phone = ? , emailAdv = ?, smsAdv = ?, schoolId = ?
WHERE id = ?
`;

const updateUserImageQeury = `
UPDATE User
SET imageUrl = ?
WHERE id = ?
`;

const getUserImageQuery = `SELECT imageUrl FROM User WHERE id = ?`;

module.exports = {
  duplicateTestQuery,
  singInDao,
  getUserByEamilQuery,
  getUserProfile,
  updateUserQuery,
  updateUserImageQeury,
  getUserImageQuery,
};
