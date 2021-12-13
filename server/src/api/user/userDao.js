const duplicateTestQuery = `
SELECT email, nickName, phone FROM User
WHERE email = ? OR nickName = ? OR phone = ?
`;

const singInDao = `
INSERT INTO User
(email, nickName, password, phone, emailAdv, smsAdv, schoolId)
VALUES(?,?,?,?,?,?,?)
`;

const singInUpdateStudentNum = `
UPDATE School
SET numStudents = numStudents + 1
WHERE id = ?
`;

const getUserByEamilQuery = `
SELECT * FROM User
WHERE email = ?
`;

const getUserNameById = `
SELECT nickName FROM User
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

const getMyLectureQuery = `
SELECT b.id as lectureId
    , b.name as lectureName
    , b.lecturerId as lecturer
    , b.imageUrl as lectureImage
    , b.link as lectureLink
    , c.name as subject
    , CONCAT(DATE_FORMAT(a.createdAt, "%Y-%m-%d")," ~ ") as createdAt
FROM SelectedLecture a
LEFT JOIN ( SELECT id, name, lecturerId, imageUrl, subjectId, link
            FROM Lecture ) as b
            ON a.lectureId = b.id
LEFT JOIN ( SELECT id, name
            FROM Subject ) as c
            ON b.subjectId = c.id
WHERE a.userId = ? AND a.status = 'ACTIVE'
ORDER BY c.id ASC, a.createdAt DESC;`;

module.exports = {
  duplicateTestQuery,
  singInDao,
  singInUpdateStudentNum,
  getUserByEamilQuery,
  getUserNameById,
  updateUserQuery,
  updateUserImageQeury,
  getUserImageQuery,
  getMyLectureQuery,
};
