CREATE TABLE "riders" (
	"id" serial NOT NULL,
	"first_name" varchar(20) NOT NULL,
	"last_name" varchar(30) NOT NULL,
	"email" varchar(70) NOT NULL,
	"profile_pic" TEXT NOT NULL,
	"username" varchar(30) NOT NULL,
	CONSTRAINT "riders_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "posts" (
	"id" serial NOT NULL,
	"title" varchar(40) NOT NULL,
	"content" TEXT NOT NULL,
	"rider_id" integer NOT NULL,
	"resort_id" integer NOT NULL,
	CONSTRAINT "posts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "hash" (
	"id" serial NOT NULL,
	"hash" TEXT NOT NULL,
	"rider_id" integer NOT NULL,
	CONSTRAINT "hash_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "resorts" (
	"id" serial NOT NULL,
	"name" varchar(70) NOT NULL,
	"website" TEXT NOT NULL,
	"image" TEXT NOT NULL,
	CONSTRAINT "resorts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "messages" (
	"id" serial NOT NULL,
	"message" TEXT NOT NULL,
	"rider_id" integer NOT NULL,
	"post_id" integer NOT NULL,
	CONSTRAINT "messages_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("rider_id") REFERENCES "riders"("id");
ALTER TABLE "posts" ADD CONSTRAINT "posts_fk1" FOREIGN KEY ("resort_id") REFERENCES "resorts"("id");
ALTER TABLE "hash" ADD CONSTRAINT "hash_fk0" FOREIGN KEY ("rider_id") REFERENCES "riders"("id");
ALTER TABLE "messages" ADD CONSTRAINT "messages_fk0" FOREIGN KEY ("rider_id") REFERENCES "riders"("id");
ALTER TABLE "messages" ADD CONSTRAINT "messages_fk1" FOREIGN KEY ("post_id") REFERENCES "posts"("id");

