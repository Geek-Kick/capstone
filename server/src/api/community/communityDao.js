const postPostQuery = `
INSERT INTO Post(userId, title, category, contents)
VALUES(?,?,?,?);`;

const getPostQuery = `
SELECT id
FROM Post
WHERE userId = ? and title = ? and category = ? and contents = ?;`;

const postImageQuery = `
INSERT INTO PostImage(postId, imageUrl)
VALUES(?,?);`;

const patchQuery = `
UPDATE Post
SET contents=?
WHERE id = ? and userId = ?;`;

const deletePostQuery = `
UPDATE Post
SET status = 'DELETED'
WHERE id = ? and userId = ?;`;

module.exports = {
  postPostQuery,
  getPostQuery,
  postImageQuery,
  patchQuery,
  deletePostQuery,
};
