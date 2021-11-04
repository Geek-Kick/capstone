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

module.exports = {
  myLectureCheckQuery,
  myLectureStatusCheckQuery,
  postMyLectureQuery,
  patchMyLectureQuery,
  cancelMyLectureQuery,
};
