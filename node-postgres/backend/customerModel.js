const Pool = require('pg').Pool
const pool = new Pool({
    user: 'my_user',
    host: 'localhost',
    database: 'my_database',
    password: 'root',
    port: 5432,
});
// get all customers our database

const getCustomers  = async () => {
    try{
        return await new Promise(function (resolve, reject) {
            pool.query("Select * from customers", (error, results) => {
                if (error){
                    reject(error);
                }
                if (results && results.rows){
                    resolve(results.row);
                }
                else{
                    reject (new Error("No records found"));
                }
            });
        });
    } catch (error_1){
        console.error(error_1);
        throw new Error("Internal server error");
    }
};


// create a new customer
const createCustomer = (body) => {
    return new Promise(function (resolve, reject){
        const {custID, cfname, clname, passcode} = body;
        pool.query(
            "INSERT INTO customers (custID, cfname, clname, passcode) VALUES ($1, $2, $3, $4) RETURNING *",
            [custID, cfname, clname, passcode],
            (error, results) => {
                if (error){
                    reject(error);
                }
                if (results && results.rows){
                    resolve(
                        `A new customer has been added: ${JSON.stringify(results.row[0])}`
                    );
                }
                else{
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

// delete a customer
const deleteCustomer = (custID) => {
    return new Promise(function (resolve, reject){
        pool.query(
            "DELETE FROM customers WHERE custID = $1",
            [custID],
            (error, results) => {
                if (error){
                    reject(error);
                }
                resolve(`Customer deleted with ID: ${custID}`);
            }
        );
    });
};

// Update a customer record
const updateCustomer = (custID, body) => {
    return new Promise(function (resolve, reject){
        const {custID, cfname, clname} = body;
        pool.query(
            "UPDATE customers SET cfname=$1, clname=$2 where id = $3 RETURNING *",
            [cfname, clname, custID],
            (error, results) => {
                if (error){
                    reject(error);
                }
                if (results && results.rows){
                    resolve(`Customer updated: ${JSON.stringify(results.rows[0])}`);
                }
                else{
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

module.exports = {
    getCustomers,
    createCustomer,
    deleteCustomer,
    updateCustomer
};