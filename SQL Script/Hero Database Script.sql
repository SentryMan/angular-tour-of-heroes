create database anime_db;
use anime_db;
CREATE TABLE hero_academia (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) DEFAULT NULL,
  hero_name varchar(100) DEFAULT NULL,
  quirk varchar(100) DEFAULT NULL,
  primary key(id)
);

insert into hero_academia values (1, "Izuku Midoriya", "Deku", "One For All");

select * from hero_academia;