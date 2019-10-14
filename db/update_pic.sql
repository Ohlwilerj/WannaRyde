UPDATE riders
SET profile_pic = ${profile_pic}
WHERE id = $1;
RETURNING *