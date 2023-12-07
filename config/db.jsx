// db.jsx

import mysql from 'mysql';

// Konfigurasi koneksi ke database MySQL
const connection = mysql.createConnection({
    host: 'localhost', // Ganti dengan host database Anda
    user: 'root', // Ganti dengan username database Anda
    password: '', // Ganti dengan password database Anda
    database: 'cadet', // Ganti dengan nama database Anda
});

// Fungsi untuk melakukan koneksi
const connectToDB = () => {
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            return;
        }
        console.log('Connected to database');
    });
};

// Export koneksi dan fungsi connectToDB
export { connection, connectToDB };
