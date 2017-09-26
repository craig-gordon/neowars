DROP DATABASE IF EXISTS neowars;

CREATE DATABASE neowars;

USE neowars;

CREATE TABLE games (
  id int NOT NULL AUTO_INCREMENT,
  current_day int NOT NULL,
  current_turn varchar(20) NOT NULL,
  country_one varchar(20) NOT NULL,
  country_two varchar(20) NOT NULL,
  country_three varchar(20),
  country_four varchar(20),
  PRIMARY KEY (id)
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

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  On your personal computer, if you haven't set up
 *  a password, it'll be 
 *    mysql -u root < schema.sql
*/