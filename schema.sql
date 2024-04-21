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