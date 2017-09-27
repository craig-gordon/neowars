DROP DATABASE IF EXISTS neowars;

CREATE DATABASE neowars;

USE neowars;

CREATE TABLE games (
  id int NOT NULL AUTO_INCREMENT,
  map varchar(20) NOT NULL,
  current_day int NOT NULL,
  current_turn varchar(20) NOT NULL,
  country_one varchar(20) NOT NULL,
  country_two varchar(20) NOT NULL,
  country_three varchar(20),
  country_four varchar(20),
  PRIMARY KEY (id),
  FOREIGN KEY (map)
  REFERENCES maps(id)
);

CREATE TABLE units (
  id int AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  country varchar(20) NOT NULL,
  current_hp int NOT NULL,
  game_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (game_id)
  REFERENCES games(id)
);

CREATE TABLE maps (
  id int AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  height int NOT NULL,
  width int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE spaces (
  id int AUTO_INCREMENT,
  map_id int,
  row_no int NOT NULL,
  col_no int NOT NULL,
  type varchar(10) NOT NULL,
  capture_points int,
  PRIMARY KEY (id),
  FOREIGN KEY (map_id)
  REFERENCES maps(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  On your personal computer, if you haven't set up
 *  a password, it'll be 
 *    mysql -u root < schema.sql
*/