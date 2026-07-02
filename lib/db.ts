import mysql from "mysql2/promise";

const globalForDb = global as unknown as { pool: mysql.Pool };

export const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ถ้าไม่ได้อยู่ใน Production ให้เก็บ pool ไว้ใน global object
if (process.env.NODE_ENV !== "production") globalForDb.pool = db;
