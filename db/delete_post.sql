delete from posts
where id = $1;
select * from posts
where resort_id = $1;