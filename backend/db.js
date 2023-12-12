const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'SHEMS-database',
    password: 'admin', // TODO: change this to your own password
    port: 5432,
});

const getConnection = () => {
    return new Promise(function (resolve, reject){
        pool.connect((error, client, release) => {
            if (error){
                reject(error);
            }
            resolve(client);
        });
    });
};


module.exports = { getConnection, pool }; 