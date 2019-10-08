create database anime_db;

use anime_db;

CREATE TABLE `hero_academia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hero_name` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `quirk` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1

CREATE TABLE fate (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20) DEFAULT NULL,
  country varchar(20) DEFAULT NULL,
  noble_phantasm varchar(100) DEFAULT NULL,
  primary key(id)
);

insert into fate(name, country, noble_phantasm ) value ("Gilgamesh", "Babylon", "EA");
insert into fate(name, country, noble_phantasm ) value ("King Arthur", "Britain", "Excalibur");
insert into fate(name, country, noble_phantasm ) value ("Heracles", "Greece", "Nine Lives Blade Works");
insert into fate(name, country, noble_phantasm ) value ("Cu Chulainn", "Ireland", "Gae Bolg");
insert into fate(name, country, noble_phantasm ) value ("Karna", "India", "Vasavi Shakti");
insert into fate(name, country, noble_phantasm ) value ("Gilgamesh", "Babylon", "EA");

select * from fate;
