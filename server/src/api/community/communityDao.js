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

const getPopularQuery = `
SELECT a.id as postId
        , a.title as postTitle
        , f.imageUrl as postImage
        , g.nickName as userName
        , DATE_FORMAT(a.createdAt, "%Y-%m-%d %H:%i") as createdAt
        , case when recommendCount is null then 0 else recommendCount end as recommentCount
        , case when commentCount is null then 0 else commentCount end as commentCount
        , case when viewCount is null then 0 else viewCount end as viewCount
        , case when scrapCount is null then 0 else scrapCount end as scrapCount
FROM Post a
LEFT JOIN ( SELECT id, postId, count(postId) as 'recommendCount'
            FROM Recommend
            GROUP BY postId) as b
            on a.id = b.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'commentCount'
            FROM Comment
            GROUP BY postId) as c
            on a.id = c.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'viewCount'
            FROM View
            GROUP BY postId) as d
            on a.id = d.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'scrapCount'
            FROM Scrap
            GROUP BY postId) as e
            on a.id = e.postId
LEFT JOIN ( SELECT id, postId, imageUrl
            FROM PostImage
            GROUP BY postId) as f
            on a.id = f.postId
LEFT JOIN ( SELECT id, nickName
            FROM User) as g
            ON a.userId = g.id
WHERE a.category = ? AND a.status = 'ACTIVE'
ORDER BY recommendCount desc;`;

const latestQuery = `
SELECT a.id as postId
        , a.title as postTitle
        , f.imageUrl as postImage
        , g.nickName as userName
        , DATE_FORMAT(a.createdAt, "%Y-%m-%d %H:%i") as createdAt
        , case when recommendCount is null then 0 else recommendCount end as recommentCount
        , case when commentCount is null then 0 else commentCount end as commentCount
        , case when viewCount is null then 0 else viewCount end as viewCount
        , case when scrapCount is null then 0 else scrapCount end as scrapCount
FROM Post a
LEFT JOIN ( SELECT id, postId, count(postId) as 'recommendCount'
            FROM Recommend
            GROUP BY postId) as b
            on a.id = b.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'commentCount'
            FROM Comment
            GROUP BY postId) as c
            on a.id = c.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'viewCount'
            FROM View
            GROUP BY postId) as d
            on a.id = d.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'scrapCount'
            FROM Scrap
            GROUP BY postId) as e
            on a.id = e.postId
LEFT JOIN ( SELECT id, postId, imageUrl
            FROM PostImage
            GROUP BY postId) as f
            on a.id = f.postId
LEFT JOIN ( SELECT id, nickName
            FROM User) as g
            ON a.userId = g.id
WHERE a.category = ? AND a.status = 'ACTIVE'
ORDER BY a.createdAt desc;`;

const scrapQuery = `
SELECT a.id as postId
        , a.title as postTitle
        , f.imageUrl as postImage
        , g.nickName as userName
        , DATE_FORMAT(a.createdAt, "%Y-%m-%d %H:%i") as createdAt
        , case when recommendCount is null then 0 else recommendCount end as recommentCount
        , case when commentCount is null then 0 else commentCount end as commentCount
        , case when viewCount is null then 0 else viewCount end as viewCount
        , case when scrapCount is null then 0 else scrapCount end as scrapCount
FROM Post a
LEFT JOIN ( SELECT id, postId, count(postId) as 'recommendCount'
            FROM Recommend
            GROUP BY postId) as b
            on a.id = b.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'commentCount'
            FROM Comment
            GROUP BY postId) as c
            on a.id = c.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'viewCount'
            FROM View
            GROUP BY postId) as d
            on a.id = d.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'scrapCount'
            FROM Scrap
            GROUP BY postId) as e
            on a.id = e.postId
LEFT JOIN ( SELECT id, postId, imageUrl
            FROM PostImage
            GROUP BY postId) as f
            on a.id = f.postId
LEFT JOIN ( SELECT id, nickName
            FROM User) as g
            ON a.userId = g.id
WHERE a.category = ? AND a.status = 'ACTIVE'
ORDER BY scrapCount desc;`;

const viewQuery = `
SELECT a.id as postId
        , a.title as postTitle
        , f.imageUrl as postImage
        , g.nickName as userName
        , DATE_FORMAT(a.createdAt, "%Y-%m-%d %H:%i") as createdAt
        , case when recommendCount is null then 0 else recommendCount end as recommentCount
        , case when commentCount is null then 0 else commentCount end as commentCount
        , case when viewCount is null then 0 else viewCount end as viewCount
        , case when scrapCount is null then 0 else scrapCount end as scrapCount
FROM Post a
LEFT JOIN ( SELECT id, postId, count(postId) as 'recommendCount'
            FROM Recommend
            GROUP BY postId) as b
            on a.id = b.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'commentCount'
            FROM Comment
            GROUP BY postId) as c
            on a.id = c.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'viewCount'
            FROM View
            GROUP BY postId) as d
            on a.id = d.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'scrapCount'
            FROM Scrap
            GROUP BY postId) as e
            on a.id = e.postId
LEFT JOIN ( SELECT id, postId, imageUrl
            FROM PostImage
            GROUP BY postId) as f
            on a.id = f.postId
LEFT JOIN ( SELECT id, nickName
            FROM User) as g
            ON a.userId = g.id
WHERE a.category = ? AND a.status = 'ACTIVE'
ORDER BY viewCount desc;`;

const commentQuery = `
SELECT a.id as postId
        , a.title as postTitle
        , f.imageUrl as postImage
        , g.nickName as userName
        , DATE_FORMAT(a.createdAt, "%Y-%m-%d %H:%i") as createdAt
        , case when recommendCount is null then 0 else recommendCount end as recommentCount
        , case when commentCount is null then 0 else commentCount end as commentCount
        , case when viewCount is null then 0 else viewCount end as viewCount
        , case when scrapCount is null then 0 else scrapCount end as scrapCount
FROM Post a
LEFT JOIN ( SELECT id, postId, count(postId) as 'recommendCount'
            FROM Recommend
            GROUP BY postId) as b
            on a.id = b.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'commentCount'
            FROM Comment
            GROUP BY postId) as c
            on a.id = c.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'viewCount'
            FROM View
            GROUP BY postId) as d
            on a.id = d.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'scrapCount'
            FROM Scrap
            GROUP BY postId) as e
            on a.id = e.postId
LEFT JOIN ( SELECT id, postId, imageUrl
            FROM PostImage
            GROUP BY postId) as f
            on a.id = f.postId
LEFT JOIN ( SELECT id, nickName
            FROM User) as g
            ON a.userId = g.id
WHERE a.category = ? AND a.status = 'ACTIVE'
ORDER BY commentCount desc;`;

const addViewQuery = `
INSERT INTO View(postId, userId)
VALUES (?, ?);`;

const getDetailQuery = `
SELECT a.id as postId
        , a.userId as userId
        , b.nickName as userNickName
        , b.imageUrl as userImage
        , a.title as postTitle
        , a.category as postCategory
        , a.contents as postContents
        , date_format(a.createdAt, "%Y-%m-%d %H:%i") as createdAt
FROM Post a
LEFT JOIN ( SELECT id, nickName, imageUrl, totalPoint
            FROM User ) as b
            on a.userId = b.id
WHERE a.id = ?;`;

const getDetailCommentQuery = `
SELECT a.id as id
        , a.userId as userId
        , b.nickName as nickName
        , b.imageUrl as userImage
        , a.contents as commentComtents
        , date_format(a.createdAt, "%Y-%m-%d %H:%i") as createdAt
FROM Comment a
LEFT JOIN ( SELECT id, nickName, imageUrl
            FROM User ) AS b
            ON a.userId = b.id
WHERE a.postId = ? AND a.status = 'ACTIVE'
ORDER BY a.createdAt ASC;`;

const getReplyQuery = `
SELECT a.id as replyId
        , a.userId as userId
        , b.nickName as nickName
        , b.imageUrl as userImage
        , a.contents as replyContents
        , date_format(a.createdAt, "%Y-%m-%d %H:%i") as createdAt
FROM Reply a
LEFT JOIN ( SELECT id, nickName, imageUrl
            FROM User ) AS b
            on a.userId = b.id
WHERE a.commentId = ? AND a.status = 'ACTIVE'
ORDER BY a.createdAt ASC;`;

const getCommentImageQuery = `
SELECT id, imageUrl
FROM CommentImage
WHERE commentId = ? AND status = 'ACTIVE'
ORDER BY createdAt ASC;`;

const getSearchQuery = `
SELECT a.id as postId
        , a.title as postTitle
        , f.imageUrl as postImage
        , g.nickName as userName
        , DATE_FORMAT(a.createdAt, "%Y-%m-%d %H:%i") as createdAt
        , case when recommendCount is null then 0 else recommendCount end as recommentCount
        , case when commentCount is null then 0 else commentCount end as commentCount
        , case when viewCount is null then 0 else viewCount end as viewCount
        , case when scrapCount is null then 0 else scrapCount end as scrapCount
FROM Post a
LEFT JOIN ( SELECT id, postId, count(postId) as 'recommendCount'
            FROM Recommend
            GROUP BY postId) as b
            on a.id = b.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'commentCount'
            FROM Comment
            GROUP BY postId) as c
            on a.id = c.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'viewCount'
            FROM View
            GROUP BY postId) as d
            on a.id = d.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'scrapCount'
            FROM Scrap
            GROUP BY postId) as e
            on a.id = e.postId
LEFT JOIN ( SELECT id, postId, imageUrl
            FROM PostImage
            GROUP BY postId) as f
            on a.id = f.postId
LEFT JOIN ( SELECT id, nickName
            FROM User) as g
            ON a.userId = g.id
WHERE a.title like ? AND a.status = 'ACTIVE'
ORDER BY a.createdAt desc;`;

const postCommentQuery = `
INSERT INTO Comment(userId, postId, contents)
VALUES(?,?,?);`;

const postCommentImageQuery = `
INSERT INTO CommentImage(postId, imageUrl)
VALUES(?,?);`;

const getCommentIdQuery = `
SELECT id
FROM Comment
WHERE userId =? AND postId =? AND contents=?;`;

const recommendCheckQuery = `
SELECT id
FROM Recommend
WHERE userId = ? AND postId = ?;`;

const recommendStatusCheckQuery = `
SELECT id
FROM Recommend
WHERE userId = ? AND postId = ? AND status = 'ACTIVE';`;

const postRecommendQuery = `
INSERT INTO Recommend(userId, postId)
VALUES(?,?);`;

const patchRecommendQuery = `
UPDATE Recommend
SET status = 'ACTIVE'
WHERE userId = ? and postId = ?;`;

const cancelRecommendQuery = `
UPDATE Recommend
SET status = 'DELETED'
WHERE userId = ? and postId = ?;`;

const scrapCheckQuery = `
SELECT id
FROM Scrap
WHERE userId = ? AND postId = ?;`;

const scrapCheckStatusQuery = `
SELECT id
FROM Scrap
WHERE userId = ? AND postId = ? AND status = 'ACTIVE';`;

const postScrapQuery = `
INSERT INTO Scrap(userId, postId)
VALUES(?,?);`;

const patchScrapQuery = `
UPDATE Scrap
SET status = 'ACTIVE'
WHERE userId = ? and postId = ?;`;

const cancelScrapQuery = `
UPDATE Scrap
SET status = 'DELETED'
WHERE userId = ? and postId = ?;`;

const selectionCheckQuery = `
SELECT commentId
FROM Post
WHERE userId = ? and id = ? and status = 'ACTIVE';`;

const commentSelectionQuery = `
UPDATE Post
SET commentId = ?
WHERE userId = ? and id = ? and status = 'ACTIVE';`;

const getMyPostQuery = `
SELECT a.id as postId
        , a.title as postTitle
        , f.imageUrl as postImage
        , g.nickName as userName
        , DATE_FORMAT(a.createdAt, "%Y-%m-%d %H:%i") as createdAt
        , case when recommendCount is null then 0 else recommendCount end as recommentCount
        , case when commentCount is null then 0 else commentCount end as commentCount
        , case when viewCount is null then 0 else viewCount end as viewCount
        , case when scrapCount is null then 0 else scrapCount end as scrapCount
FROM Post a
LEFT JOIN ( SELECT id, postId, count(postId) as 'recommendCount'
            FROM Recommend
            GROUP BY postId) as b
            on a.id = b.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'commentCount'
            FROM Comment
            GROUP BY postId) as c
            on a.id = c.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'viewCount'
            FROM View
            GROUP BY postId) as d
            on a.id = d.postId
LEFT JOIN ( SELECT id, postId, count(postId) as 'scrapCount'
            FROM Scrap
            GROUP BY postId) as e
            on a.id = e.postId
LEFT JOIN ( SELECT id, postId, imageUrl
            FROM PostImage
            GROUP BY postId) as f
            on a.id = f.postId
LEFT JOIN ( SELECT id, nickName
            FROM User) as g
            ON a.userId = g.id
WHERE a.userId = ? AND a.status = 'ACTIVE'
ORDER BY a.createdAt desc;`;

module.exports = {
  postPostQuery,
  getPostQuery,
  postImageQuery,
  patchQuery,
  deletePostQuery,
  getPopularQuery,
  latestQuery,
  scrapQuery,
  viewQuery,
  commentQuery,
  addViewQuery,
  getDetailQuery,
  getDetailCommentQuery,
  getReplyQuery,
  getCommentImageQuery,
  getSearchQuery,
  postCommentQuery,
  postCommentImageQuery,
  getCommentIdQuery,
  recommendCheckQuery,
  recommendStatusCheckQuery,
  postRecommendQuery,
  patchRecommendQuery,
  cancelRecommendQuery,
  scrapCheckQuery,
  scrapCheckStatusQuery,
  postScrapQuery,
  patchScrapQuery,
  cancelScrapQuery,
  selectionCheckQuery,
  commentSelectionQuery,
  getMyPostQuery,
};
