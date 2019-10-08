create database anime_db;
use anime_db;
CREATE TABLE `hero_academia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hero_name` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `quirk` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1

insert into hero_academia values (1, "Izuku Midoriya", "Deku", "One For All");

select * from hero_academia;