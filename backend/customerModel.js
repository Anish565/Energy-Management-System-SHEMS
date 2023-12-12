const { pool } = require('./db.js');

const getCustomer  = async (custID) => {
    try{
        return await new Promise(function (resolve, reject) {
            pool.query("Select * from customer where custID = $1",
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

const getCustomerById = async (custID) => {
    try{
        return await new Promise(function (resolve, reject) {
            pool.query("Select * from customer where custID = $1",
            [custID], (error, results) => {
                if (error){
                    reject(error);
                }
                if (results && results.rows){
                    resolve(results.rows[0]);
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

}


// create a new customer
const createCustomer = (client, body) => {
    return new Promise(function (resolve, reject){
        const {custID, cfname, clname, passcode} = body;
        client.query(
            "INSERT INTO customer (custID, cfname, clname, passcode) VALUES ($1, $2, $3, $4) RETURNING *",
            [custID, cfname, clname, passcode],
            (error, results) => {
                if (error){
                    reject(error);
                }
                if (results && results.rows){
                    resolve(
                        results.rows[0]
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
            "DELETE FROM customer WHERE custID = $1",
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
            "UPDATE customer SET cfname=$1, clname=$2 where id = $3 RETURNING *",
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
const registerAddress = (client, body) => {
    return new Promise(function (resolve, reject){
        const {street, unitno, city, state, zipcode} = body;
        client.query(
            "INSERT INTO Address (street, unitno, city, state, zipcode) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [street, unitno, city, state, zipcode],
            (error, results) => {
                if (error){
                    reject(error);
                }
                if (results && results.rows){
                    resolve(results.rows[0])
                }
                else{
                    reject(new Error("No results found"));
                }
            }
        );
    });
};


const registerCustomerAddress = (client, custID, addressID, isBilling) => {
    return new Promise(function (resolve, reject){
        client.query(
            "INSERT INTO CustomerAddress (custID, addressID, isBilling) VALUES ($1, $2, $3) RETURNING *",
            [custID, addressID, isBilling],
            (error, results) => {
                if (error){
                    reject(error);
                }
                if (results && results.rows){
                    resolve(results.rows[0])
                }
                else{
                    reject(new Error("No results found"));
                }
            }
        );
    });

}

// in the above function we can create an option to check which webpage is calling the function and execute accordingly.


// getAddress 
const getAddressByCustomerId = async (custID) => {
    try{
        return await new Promise(function (resolve, reject) {
            pool.query("Select * from Address where addressID in (select addressID from CustomerAddress where custID = $1)",
            [custID], (error, results) => {
                if (error){
                    reject(error);
                }
                if (results && results.rows){
                    resolve(results.rows[0]);
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
}

// service location registration
const registerServiceLoc = (client, addressID, body) => {
    const {moveInDate, squareFoot, numbed, numOccupants} = body;
    return new Promise(function (resolve, reject){
        pool.query(
            "INSERT INTO ServiceLocation (addressID, moveInDate, squareFoot, numbed, numOccupants) VALUES ($1, $2, $3, $4) RETURNING *",
            [addressID, moveInDate, squareFoot, numbed, numOccupants],
            (error, results) => {
                if (error){
                    reject(error);
                }
                if (results && results.rows){
                    resolve(results.rows[0]);
                }
                else{
                    reject(new Error("No results found"));
                }
            }
        );
    });
};


module.exports = {
    getCustomer,
    createCustomer,
    deleteCustomer,
    updateCustomer,
    getCustomerById,
    registerAddress,
    registerCustomerAddress,
    registerServiceLoc
};