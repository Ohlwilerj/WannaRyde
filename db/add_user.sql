INSERT INTO riders (first_name, last_name, email, profile_pic, hash)
VALUES (${firstName}, ${lastName}, ${email}, ${profile_pic}, ${hash})
RETURNING id;
