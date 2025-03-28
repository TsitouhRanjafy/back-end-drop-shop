CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255)NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    tel VARCHAR(255) NOT NULL,
    pays VARCHAR(255) NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    role CHAR NOT NULL
    code_postal VARCHAR(255) NOT NULL
);

CREATE TABLE Admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255)NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    tel VARCHAR(255) NOT NULL,
    pays VARCHAR(255) NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    code_postal VARCHAR(255) NOT NULL
)

CREATE TABLE Message (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_admin INTEGER NOT NULL,
    id_user INTEGER NOT NULL,
    content TEXT NOT NULL,
    sender_date DATETIME NOT NULL,
    sender_id INTEGER NOT NULL,
    FOREIGN KEY(id_admin) REFERENCES Admins(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(id_user) REFERENCES Users(id) ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE Post (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type CHAR NOT NULL, 
    description TEXT,
    unit_price FLOAT, /* required if type article */
    stock FLOAT, /* required if type article */ 
    create_at DATETIME NOT NULL,
    image_url TEXT, /* object or array */
    id_user INTEGER NOT NULL,
    FOREIGN KEY(id_user) REFERENCES Users(id) ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE Suppression (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_admin INTEGER NOT NULL,
    id_post INTEGER NOT NULL,
    date_suppresion DATETIME NOT NULL,
    reason TEXT NOT NULL
    FOREIGN KEY(id_admin) REFERENCES Admins(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(id_post) REFERENCES Post(id) ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE Command (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_article INTEGER NOT NULL, /* id post of type article */
    id_client INTEGER NOT NULL,
    date_command DATETIME NOT NULL,
    status CHAR NOT NULL,
    FOREIGN KEY(id_article) REFERENCES Post(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(id_client) REFERENCES Users(id) ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE Livraison (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_command INTEGER NOT NULL,
    delivery_date DATETIME NOT NULL,
    status CHAR NOT NULL,
    starting_adresse VARCHAR(255) NOT NULL,
    arrival_adresse VARCHAR(255) NOT NULL,
    time_limit INTEGER NOT NULL, /* en heurs */
    FOREIGN KEY(id_command) REFERENCES Command(id) ON DELETE CASCADE ON UPDATE CASCADE
)
