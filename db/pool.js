require("dotenv").config();

const { Pool } = require("pg");

const connectionString =
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_URL // Use private endpoint on Railway
    : process.env.DATABASE_PUBLIC_URL; // Use public endpoint locally

module.exports = new Pool({
  connectionString: connectionString,
});
