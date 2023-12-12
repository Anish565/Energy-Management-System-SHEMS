const { pool } = require('../db'); 

const tx = async (cb) => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    try {
      await cb(client);
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    }
  } finally {
    client.release();
  }
} 

module.exports = { tx };