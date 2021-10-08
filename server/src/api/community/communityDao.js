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
        , DATE_FORMAT(a.createdAt, "%Y-%m-%d %H:%i") as CreatedAt
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
WHERE a.category = ? AND a.status = 'ACTIVE'
ORDER BY recommendCount desc;`;

const latestQuery = `
SELECT a.id as postId
        , a.title as postTitle
        , f.imageUrl as postImage
        , DATE_FORMAT(a.createdAt, "%Y-%m-%d %H:%i") as CreatedAt
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
WHERE a.category = ? AND a.status = 'ACTIVE'
ORDER BY a.createdAt desc;`;

const scrapQuery = `
SELECT a.id as postId
        , a.title as postTitle
        , f.imageUrl as postImage
        , DATE_FORMAT(a.createdAt, "%Y-%m-%d %H:%i") as CreatedAt
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
WHERE a.category = ? AND a.status = 'ACTIVE'
ORDER BY scrapCount desc;`;

const viewQuery = `
SELECT a.id as postId
        , a.title as postTitle
        , f.imageUrl as postImage
        , DATE_FORMAT(a.createdAt, "%Y-%m-%d %H:%i") as CreatedAt
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
WHERE a.category = ? AND a.status = 'ACTIVE'
ORDER BY viewCount desc;`;

const commentQuery = `
SELECT a.id as postId
        , a.title as postTitle
        , f.imageUrl as postImage
        , DATE_FORMAT(a.createdAt, "%Y-%m-%d %H:%i") as CreatedAt
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
WHERE a.category = ? AND a.status = 'ACTIVE'
ORDER BY commentCount desc;`;

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
};
