INSERT INTO riders (first_name, last_name, email, profile_pic, username, hash)
VALUES (${firstName}, ${lastName}, ${email}, ${profilePic}, ${username}, ${hash})
RETURNING id;
