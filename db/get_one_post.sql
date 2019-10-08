SELECT p.id as post_id, p.title, p.content, r.id as rider_id, r.first_name, r.last_name, r.profile_pic FROM posts p
JOIN riders r ON p.rider_id = r.id
WHERE p.id = $1;