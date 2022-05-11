const { DB_NAME } = require('../utils/secrets')

const createDB = `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`;

const dropDB = `DROP DATABASE IF EXISTS ${DB_NAME}`;

const createTableUSers = `
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(255) NULL,
    lastname VARCHAR(255) NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_on TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
)
`;

module.exports = {
    createDB,
    dropDB,
    createTableUSers
};
