const myLectureCheckQuery = `
SELECT id
FROM SelectedLecture
WHERE userId = ? AND lectureId = ?;`;

const myLectureStatusCheckQuery = `
SELECT id
FROM SelectedLecture
WHERE userId = ? AND lectureId = ? AND status = 'ACTIVE';`;

const postMyLectureQuery = `
INSERT INTO SelectedLecture(userId, lectureId)
VALUES(?, ?);`;

const patchMyLectureQuery = `
UPDATE SelectedLecture
SET status = 'ACTIVE'
WHERE userId = ? AND lectureId = ?;`;

const cancelMyLectureQuery = `
UPDATE SelectedLecture
SET status = 'DELETED'
WHERE userId = ? AND lectureId = ?;`;

const getMyLectureQuery = `
SELECT b.id as lectureId
    , b.name as lectureName
    , b.lecturer as lecturer
    , b.imageUrl as lectureImage
    , b.link as lectureLink
    , c.name as subject
    , CONCAT(DATE_FORMAT(a.createdAt, "%Y-%m-%d")," ~ ") as createdAt
FROM SelectedLecture a
LEFT JOIN ( SELECT id, name, lecturer, imageUrl, subjectId, link
            FROM Lecture ) as b
            ON a.lectureId = b.id
LEFT JOIN ( SELECT id, name
            FROM Subject ) as c
            ON b.subjectId = c.id
WHERE a.userId = ? AND a.status = 'ACTIVE'
ORDER BY c.id ASC, a.createdAt DESC;`;

module.exports = {
  myLectureCheckQuery,
  myLectureStatusCheckQuery,
  postMyLectureQuery,
  patchMyLectureQuery,
  cancelMyLectureQuery,
  getMyLectureQuery,
};
