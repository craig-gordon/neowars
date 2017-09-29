DROP DATABASE IF EXISTS neowars;

CREATE DATABASE neowars;

USE neowars;

CREATE TABLE maps (
  id int AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  height int NOT NULL,
  width int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE games (
  id int NOT NULL AUTO_INCREMENT,
  map_id int NOT NULL,
  current_day int NOT NULL,
  current_turn varchar(20) NOT NULL,
  country_one varchar(20) NOT NULL,
  country_two varchar(20) NOT NULL,
  country_three varchar(20),
  country_four varchar(20),
  PRIMARY KEY (id),
  FOREIGN KEY (map_id)
  REFERENCES maps(id)
);

CREATE TABLE spaces (
  id int AUTO_INCREMENT,
  map_id int,
  row_no int NOT NULL,
  col_no int NOT NULL,
  terrain varchar(10) NOT NULL,
  capture_points int,
  PRIMARY KEY (id),
  FOREIGN KEY (map_id)
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

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  On your personal computer, if you haven't set up
 *  a password, it'll be 
 *    mysql -u root < schema.sql
*/

INSERT INTO maps (name, height, width) VALUES ("Sandalwood Plains", 5, 5);
INSERT INTO maps (name, height, width) VALUES ("Folzor's Tundra", 10, 10);
INSERT INTO maps (name, height, width) VALUES ("Relic", 20, 20);

INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 0, 0, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 0, 1, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 0, 2, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 0, 3, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 0, 4, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 1, 0, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 1, 1, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 1, 2, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 1, 3, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 1, 4, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 2, 0, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 2, 1, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 2, 2, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 2, 3, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 2, 4, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 3, 0, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 3, 1, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 3, 2, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 3, 3, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 3, 4, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 4, 0, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 4, 1, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 4, 2, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 4, 3, 'P');
INSERT INTO spaces (map_id, row_no, col_no, terrain) VALUES ((SELECT id FROM maps WHERE name="Sandalwood Plains"), 4, 4, 'P');