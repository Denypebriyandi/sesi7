const { Pool } = require('pg');

const pool = new Pool({
    user: 'sys_rest',
    host: 'localhost',
    database: 'user_rest',
    password: 'p@$$w0rd01',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params)
}