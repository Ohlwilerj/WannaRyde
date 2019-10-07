INSERT INTO posts (title, content, rider_id, resort_id)
VALUES ($1, $2, $3, $4)
SELECT * from posts;
