CREATE SCHEMA dnd_note_taker;
USE dnd_note_taker;

CREATE TABLE users (
	id CHAR(36) NOT NULL,
  email VARCHAR(60) UNIQUE NOT NULL,
  password VARCHAR(60) NOT NULL,
  first_name VARCHAR(60) NOT NULL,
  last_name VARCHAR(60) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY (id)
);

CREATE TABLE notes (
	id CHAR(36) NOT NULL,
  userid CHAR(36) NOT NULL,
  body VARCHAR(2000) NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY (id),
  FOREIGN KEY (userid) REFERENCES users (id)
);

# 5.x with mysql
CREATE USER 'dnd_note_taker'@'localhost' IDENTIFIED BY 'dnd_note_taker';

# 8.0.x with mysql
CREATE USER 'dnd_note_taker'@'localhost' IDENTIFIED WITH mysql_native_password BY 'dnd_note_taker';

# 8.1.x with mysql2
CREATE USER 'dnd_note_taker'@'localhost' IDENTIFIED BY 'dnd_note_taker';

# grant privileges
GRANT ALL PRIVILEGES ON dnd_note_taker.* TO 'dnd_note_taker'@'localhost';
FLUSH PRIVILEGES;

# Test Data 
INSERT INTO users (id, email, password, first_name, last_name) VALUE 
(
	'7d2e6aed-36b5-41e4-b900-d3c7b48c50cd',
	'guest@test.com' , 
	'$2b$10$22nrHaw5weMP0lJuG1oqnuEqOYxgqxB0O95y.dlwTj2Pxw4FSI7BC', 
	'Guest', 
	'User'
);

INSERT INTO notes (id, userid, body) VALUE (
	'a5c1a6ba-0045-47af-9306-e3aa692aa93e',
  '7d2e6aed-36b5-41e4-b900-d3c7b48c50cd',
  'Animal domain battle grid charm class constrict copper piece critical roll death domain 
  earth domain elf domain energy drained favored class helpless lawful lethal damage miniature 
  figure modifier paralysis poison shadow subschool spell domain stable starvation time domain 
  travel domain.'
);

INSERT INTO notes (id, userid, body) VALUE (
	'0c32892d-941c-4660-b432-477319fa5ffa',
  '7d2e6aed-36b5-41e4-b900-d3c7b48c50cd',
  'Ability drained action animal type base attack bonus calling subschool compulsion dodge bonus 
  earth domain energy drained extraordinary ability falling objects heat dangers inherent bonus 
  lawful manufactured weapons melee weapon ooze type rend repose domain shapechanger subtype skill 
  rank spell-like ability strength telepathy water domain will save.'
);