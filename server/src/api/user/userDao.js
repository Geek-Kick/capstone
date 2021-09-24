const duplicateTestQuery = `
SELECT email, nickName, phone FROM User
WHERE email = ? OR nickName = ? OR phone = ?
`;

const singInDao = `
INSERT INTO User
(email, nickName, password, phone, emailAdv, smsAdv)
VALUES(?,?,?,?,?,?)
`;

const getUserByEamilQuery = `
SELECT * FROM User
WHERE email = ?
`;

module.exports = {
  duplicateTestQuery,
  singInDao,
  getUserByEamilQuery,
};
