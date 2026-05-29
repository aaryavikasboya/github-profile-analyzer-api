import mysql from "mysql2"
const createProfileTable = async (db) => {
    await db.query(`
        CREATE TABLE IF NOT EXISTS profiles(
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL UNIQUE,
            name VARCHAR(255),
            followers INT DEFAULT 0,
            following INT DEFAULT 0,
            public_repos INT DEFAULT 0,
            profile_url TEXT,
            avatar_url TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);

    console.log("Profiles table ready");
};

export default createProfileTable; 