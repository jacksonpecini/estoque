const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('mysql://root:root@example.com:3306/estoque') // Example for mysql