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

module.exports = {
  getRankBySubject,
  getSubjectTopRanking,
};
