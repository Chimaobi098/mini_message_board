require("dotenv").config();

const { Pool } = require("pg");

const connectionString =
  process.env.DATABASE_URL || process.env.DATABASE_PUBLIC_URL;

module.exports = new Pool({
  connectionString: connectionString,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});
