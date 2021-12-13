const myLectureCheckQuery = `
SELECT id
FROM SelectedLecture
WHERE userId = ? AND lectureId = ?;`;

const myLectureStatusCheckQuery = `
SELECT id
FROM SelectedLecture
WHERE userId = ? AND lectureId = ? AND status = 'ACTIVE';`;

const postMyLectureQuery = `
INSERT INTO SelectedLecture(userId, lectureId, grade)
VALUES(?, ?, ?);`;

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

const getPopularLectureQuery = `
SELECT a.id as lectureId
    , a.name as lectureName
    , a.lecturer as lecturer
    , a.imageUrl as lectureImage
    , a.link as lectureLink
    , c.name as subject
    , a.info as lectureInfo
FROM Lecture a
LEFT JOIN ( SELECT id, userId, lectureId, count(lectureId) as 'selectCount'
            FROM SelectedLecture
            GROUP BY lectureId) as b
            ON a.id = b.lectureId
LEFT JOIN ( SELECT id, name
            FROM Subject ) as c
            ON a.subjectId = c.id
ORDER BY selectCount DESC LIMIT 10;`;

const getPopularLecturerQuery = `
SELECT a.id as lecturerId 
    , a.name as lecturerName
    , a.imageUrl as lecturerImage
FROM Lecturer a
LEFT JOIN ( SELECT id, lecturerId
            FROM Lecture ) as b
            ON a.id = b.lecturerId
LEFT JOIN ( SELECT id, userId, lectureId, count(lectureId) as 'selectCount'
            FROM SelectedLecture
            GROUP BY lectureId) as c
            ON b.id = c.lectureId
ORDER BY selectCount DESC LIMIT 10;`;

const getLectureByLectureIdQuery = `
SELECT a.id as lectureId
    , a.name as lectureName
    , b.name as lecturer
    , a.imageUrl as lectureImage
    , a.link as lectureLink
    , d.name as subject
    , a.info as lectureInfo
    , case when starAvg is null then 0 else starAvg end as starAvg
FROM Lecture a
LEFT JOIN ( SELECT id, name
            FROM Lecturer ) as b
            on a.lecturerId = b.id
LEFT JOIN ( SELECT id, lectureId, star, round(sum(star)/count(lectureId),1) as 'starAvg'
            FROM Review
            GROUP BY lectureId) as c
            on a.id = c.lectureId
LEFT JOIN ( SELECT id, name
            FROM Subject ) as d
            ON a.subjectId = d.id
WHERE a.id = ?;`;

const getReviewCountQuery = `
SELECT count(lectureId) AS reviewCount
FROM Review
WHERE lectureId = ? and status = 'ACTIVE'
GROUP BY lectureId;`;

const getLectureReviewQuery = `
SELECT a.id as reviewId
    , b.id as userId
    , b.nickName as userNickname
    , a.star as starPoint
    , a.contents as reviewContents
    , date_format(a.createdAt, "%Y-%m-%d %H:%i") as createdAt
FROM Review a
LEFT JOIN ( SELECT id, nickName
            FROM User ) as b
            on a.userId = b.id
WHERE a.lectureId = ? and a.status = 'ACTiVE'
ORDER BY a.createdAt DESC LIMIT 5;`;

const getReviewSummaryQuery = `
SELECT count(lectureId) AS reviewCount
        , round(sum(star)/count(lectureId),1) as starAvg
FROM Review
WHERE lectureId = ? and status = 'ACTIVE'
GROUP BY lectureId;`;

const getLectureTotalReviewQuery = `
SELECT a.id as reviewId
    , b.id as userId
    , b.nickName as userNickname
    , a.star as starPoint
    , a.contents as reviewContents
    , date_format(a.createdAt, "%Y-%m-%d %H:%i") as createdAt
FROM Review a
LEFT JOIN ( SELECT id, nickName
            FROM User ) as b
            on a.userId = b.id
WHERE a.lectureId = ? and a.status = 'ACTiVE'
ORDER BY a.createdAt DESC;`;

const postReviewQuery = `
INSERT Review(userId, lectureId, star, contents)
VALUES(?,?,?,?);`;

const searchLectureQuery = `
SELECT a.id as lectureId
    , a.name as lectureName
    , a.lecturerId as lecturerId
    , d.name as lecturer
    , a.imageUrl as lectureImage
    , a.link as lectureLink
    , c.name as subject
    , a.info as lectureInfo
FROM Lecture a
LEFT JOIN ( SELECT id, userId, lectureId, count(lectureId) as 'selectCount'
            FROM SelectedLecture
            GROUP BY lectureId) as b
            ON a.id = b.lectureId
LEFT JOIN ( SELECT id, name
            FROM Subject ) as c
            ON a.subjectId = c.id
LEFT JOIN ( SELECT id, name
            FROM Lecturer) as d
            ON a.lecturerId = d.id
WHERE a.name like ? or d.name like ?`;

const lectureBySubjectQuery = `
SELECT a.id as lectureId
    , a.name as lectureName
    , b.name as lecturer
    , a.imageUrl as lectureImage
    , a.link as lectureLink
    , d.name as subject
    , a.info as lectureInfo
    , case when starAvg is null then 0 else starAvg end as starAvg
FROM Lecture a
LEFT JOIN ( SELECT id, name
            FROM Lecturer ) as b
            ON a.lecturerId = b.id
LEFT JOIN ( SELECT id, lectureId, star, round(sum(star)/count(lectureId),1) as 'starAvg'
            FROM Review
            GROUP BY lectureId) as c
            ON a.id = c.lectureId
LEFT JOIN ( SELECT id, name
            FROM Subject ) as d
            ON a.subjectId = d.id
LEFT JOIN ( SELECT id, userId, lectureId, count(lectureId) as lectureCount
            FROM SelectedLecture
            GROUP BY lectureId ) as e
            ON a.id = e.lectureId
WHERE d.id = ? 
ORDER BY lectureCount DESC;`;

const subjectNameQuery = `
SELECT id, name
FROM Subject
WHERE id = ?;`;

const getUsersGradeQuery = `
SELECT userId, subjectId, grade
FROM Grade
WHERE userId = ? AND subjectId = ?;`;

const getRecommendLectureQuery = `
SELECT a.id as lectureId
    , a.name as lectureName
    , b.name as lecturer
    , a.imageUrl as lectureImage
    , a.link as lectureLink
    , d.name as subject
    , a.info as lectureInfo
    , case when starAvg is null then 0 else starAvg end as starAvg
FROM Lecture a
LEFT JOIN ( SELECT id, name
            FROM Lecturer ) as b
            ON a.lecturerId = b.id
LEFT JOIN ( SELECT id, lectureId, star, round(sum(star)/count(lectureId),1) as 'starAvg'
            FROM Review
            GROUP BY lectureId) as c
            ON a.id = c.lectureId
LEFT JOIN ( SELECT id, name
            FROM Subject ) as d
            ON a.subjectId = d.id
LEFT JOIN ( SELECT id, userId, lectureId, count(lectureId) as lectureCount, round(sum(grade)/count(lectureId),1) as gradeAvg
            FROM SelectedLecture
            GROUP BY lectureId ) as e
            ON a.id = e.lectureId
WHERE a.subjectId = ? AND (ROUND(gradeAvg, 0) = ?)
ORDER BY lectureCount DESC LIMIT 5;`;

const getLecturerInfoQuery = `
SELECT a.id as lecturerId
      , a.name as lecturerName
      , a.imageUrl as lecturerImage
      , b.name as subject
      , a.company as company
FROM Lecturer a
LEFT JOIN Subject as b
ON a.subjectId = b.id
WHERE a.id = ?;`;

const getLecturerLectureQuery = `
SELECT a.id as lectureId
    , a.name as lectureName
    , b.name as lecturer
    , a.imageUrl as lectureImage
    , a.link as lectureLink
    , d.name as subject
    , a.info as lectureInfo
    , case when starAvg is null then 0 else starAvg end as starAvg
FROM Lecture a
LEFT JOIN ( SELECT id, name
            FROM Lecturer ) as b
            ON a.lecturerId = b.id
LEFT JOIN ( SELECT id, lectureId, star, round(sum(star)/count(lectureId),1) as 'starAvg'
            FROM Review
            GROUP BY lectureId) as c
            ON a.id = c.lectureId
LEFT JOIN ( SELECT id, name
            FROM Subject ) as d
            ON a.subjectId = d.id
LEFT JOIN ( SELECT id, userId, lectureId, count(lectureId) as lectureCount
            FROM SelectedLecture
            GROUP BY lectureId ) as e
            ON a.id = e.lectureId
WHERE a.lecturerId = ? and a.status = 'ACTIVE'
ORDER BY lectureCount DESC LIMIT 10;`;

module.exports = {
  myLectureCheckQuery,
  myLectureStatusCheckQuery,
  postMyLectureQuery,
  patchMyLectureQuery,
  cancelMyLectureQuery,
  getMyLectureQuery,
  getPopularLectureQuery,
  getPopularLecturerQuery,
  getLectureByLectureIdQuery,
  getReviewCountQuery,
  getLectureReviewQuery,
  getReviewSummaryQuery,
  getLectureTotalReviewQuery,
  postReviewQuery,
  searchLectureQuery,
  lectureBySubjectQuery,
  subjectNameQuery,
  getLecturerInfoQuery,
  getLecturerLectureQuery,
  getUsersGradeQuery,
  getRecommendLectureQuery,
};
