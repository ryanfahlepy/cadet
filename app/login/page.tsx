import React from 'react'

const LoginPage = () => {
    return (
        <>
            <div className=" min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <form>
                        {/* Kolom NIM */}
                        <div className="mb-4">
                            <label htmlFor="nim" className="block text-sm font-bold mb-2">
                                NIM:
                            </label>
                            <input
                                type=""
                                maxLength={12}
                                minLength={12}
                                id="nim"
                                name="nim"
                                className="w-full p-2 border rounded-lg"
                                placeholder="Masukkan NIM Anda"
                            />
                        </div>

                        {/* Kolom Password */}
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-bold mb-2">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-2 border rounded-lg"
                                placeholder="Masukkan Password Anda"
                            />
                        </div>

                        {/* Tombol Login */}
                        <div className='bg-primary rounded-lg hover:bg-accent'>
                            <button
                                type="submit"
                                className="w-full text-[#ffffff] p-2 rounded-md transition duration-300"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    {/* Opsi Lupa Password */}
                    <div className="mt-4 text-center">
                        <a href="#" className="text-sm text-primary hover:underline">
                            Lupa Password?
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
