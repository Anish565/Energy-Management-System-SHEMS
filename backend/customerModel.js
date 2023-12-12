const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'SHEMS-database',
    password: 'anish1017',
    port: 5432,
});
// get all customers our database

const getUser  = async () => {
    try{
        return await new Promise(function (resolve, reject) {
            pool.query("Select * from customers where custID = $1",
            [custID], (error, results) => {
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
const createUser = (body) => {
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
const deleteUser = (custID) => {
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
const updateUser = (custID, body) => {
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

// registerAddress
const registerAddress = (body) => {
    return new Promise(function (resolve, reject){
        const {street, unitno, city, state, zipcode} = body;
        pool.query(
            "INSERT INTO Address (street, unitno, city, state, zipcode) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [street, unitno, city, state, zipcode],
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

// in the above function we can create an option to check which webpage is calling the function and execute accordingly.


// getAddress 



// service location registration
const registerServiceLoc = (body) => {
    return new Promise(function (resolve, reject){
        const {addressID, moveInDate, squareFoot, numbed, numOccupants} = body;
        pool.query(
            "INSERT INTO ServiceLocation (addressID, moveInDate, squareFoot, numbed, numOccupants) VALUES ($1, $2, $3, $4) RETURNING *",
            [addressID, moveInDate, squareFoot, numbed, numOccupants],
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
    getUser,
    createUser,
    deleteUser,
    updateUser
};