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

INSERT INTO resorts (name, website, image)
VALUES ('Brighton', 'www.brghtonresort.com', 'https://pbs.twimg.com/profile_images/547133020801495040/sJ-1T2JU.png'),
('Solitude', 'www.Solitudemountain.com', 'http://snowbrains.com/wp-content/uploads/2018/06/Solitude_Primary_Consumer_129-and-2955_Horizontal.png'),
('Snowbird', 'www.snowbird.com', 'https://www.adventuregearfest.com/wp-content/uploads/2017/03/Snowbird-circle-logo-01.png'),
('Alta', 'www.alta.com', 'https://www.alta.com/resources/Media/logos/altabluedot.jpg'),
('Brianhead', 'www.brianhead.com', 'https://www.angelfireresort.com/wp-content/uploads/2014/09/BrianHeadResort_big.jpg'),
('Eagle Point', 'www.eaglepointresort.com', 'https://www.eaglepointresort.com/sites/all/themes/ep/images/logo_10th_anniversary_1.png'),
('Sundance', 'www.sundanceresort.com/winter-activities/', 'https://www.sundanceresort.com/wp-content/themes/sundance-wp-theme/build/img/Logo.svg'),
('Deer Valley', 'www.deervalley.com', 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Deer_Valley_Resort_logo.svg/1200px-Deer_Valley_Resort_logo.svg.png'),
('Park City', 'www.parkcitymountain.com', 'https://www.parkcitylodging.com/wp-content/uploads/2015/07/Park-City-Stacked-Logo_Secondary_CMYK.jpg'),
('Snowbasin', 'www.snowbasin.com', 'https://www.snowbasin.com/resources/img/logo-main-social.png'),
('Nordic Valley', 'www.nordicvalley.com', 'https://www.snowbowl.ski/wp-content/uploads/2019/06/APPROVED-VARIATIONS_V1Light.png'),
('Powder Moutain', 'www.powdermountain.com', 'https://gzg764m8l73gtwxg366onn13-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/powder-mountain-logo.gif'),
('Cherry Peak', 'www.skicherrypeak.com', 'https://www.cachevalleysavings.com/wp-content/uploads/2017/10/Logo-2.jpg'),
('Beaver Mountain', 'www.skithebeav.com', 'https://bookthebeav.com/wp-content/uploads/2018/06/beaver_LOGO.png');
