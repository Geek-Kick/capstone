async function getRankBySubject(con, subjectId, userId) {
  const getRankQuery = `
  SELECT name, userId, score, A.rank, A.status
  FROM (SELECT userId, name, score, RANK() over (ORDER BY score desc) as 'rank', UR.status
         FROM UserRank as UR 
            LEFT JOIN (SELECT id, name, status FROM Subject) as SJ on SJ.id = UR.subjectId
  WHERE subjectId = ?) A WHERE userId = ? AND A.status = 'Active';
  `;
  const [subjectRows] = await con.query(getRankQuery, [subjectId, userId]);
  return subjectRows;
}

async function getSubjectTopRanking(con, subjectId) {
  const getRankQuery = `
  SELECT RANK() over (ORDER BY score desc) as 'rank', userId, name as 'subjectName', nickName, schoolName
  FROM UserRank UR
    LEFT JOIN(SELECT id, name FROM Subject) as SJ on SJ.id = UR.subjectId
    LEFT JOIN (SELECT nickName, id, schoolId FROM User) US on UR.userId =US.id
    LEFT JOIN (SELECT id, schoolName FROM School) S on US.schoolId = S.id WHERE subjectId = ? AND UR.status = 'Active';
  `;
  const [rankingRows] = await con.query(getRankQuery, subjectId);
  return rankingRows;
}

async function getTopHundredRank(con) {
  const getRankQuery = `
  SELECT RANK() over (ORDER BY SUM(score) desc) as 'rank', userId, nickName, schoolName, status
  FROM UserRank UR
    LEFT JOIN (SELECT id, nickName, schoolId FROM User) US on UR.userId = US.id
    LEFT JOIN (SELECT id, schoolName FROM School) S on US.schoolId = S.id WHERE UR.status = 'Active'
    GROUP BY userId;
  `;
  const [rankingRows] = await con.query(getRankQuery);
  return rankingRows;
}

async function getTopRankBySchoolSubject(con, subjectId) {
  const getRankQuery = `
  SELECT RANK() over (ORDER BY score desc) as 'rank', name, schoolName, status
  FROM UserRank UR
    LEFT JOIN (SELECT schoolId, id FROM User) US on UR.userId = US.id
    LEFT JOIN (SELECT name, id FROM Subject) SJ on SJ.id = UR.subjectId
    LEFT JOIN (SELECT schoolName, id FROM School) SC on SC.id = US.schoolId WHERE subjectId = ? AND UR.status = 'Active';
  `;
  const [rankingRows] = await con.query(getRankQuery, subjectId);
  return rankingRows;
}

module.exports = {
  getRankBySubject,
  getSubjectTopRanking,
  getTopHundredRank,
  getTopRankBySchoolSubject,
};
