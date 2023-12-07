import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import connection from '/config/db.jsx'; // Sesuaikan dengan path file db.js

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        connection.query(
            'SELECT * FROM users WHERE username = ? AND password = ?',
            [username, password],
            (err, results) => {
                if (err) {
                    console.error('Error executing query:', err);
                    return;
                }
                if (results.length > 0) {
                    router.push('/dashboard');
                } else {
                    // Tampilkan pesan kesalahan karena login gagal
                }
            }
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/2">
                <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">NIM:</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <div> <Link href="/register"><div className="text-red-700 hover:text-red-900" >Forgot Password?</div></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
