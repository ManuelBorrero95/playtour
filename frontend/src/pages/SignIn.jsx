import React from 'react'
import { useState } from "react";

function SignIn() {
    const [showPwd, setShowPwd] = useState(false);
    return (
        <>

            <div className='min-h-[calc(100vh-400px)] grid place-items-center'>

                <section className='w-full max-w-md'>

                    <h1 className='text-2xl font-extrabold tracking-tight mb-6'>
                        Sign in
                    </h1>
                    <form>
                        <div>
                            <label htmlFor='email' className='block text-sm mb-1'>Email</label>
                            <div className='relative'>
                                <input id='email'
                                    type='email'
                                    required
                                    className='w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C2C719]'
                                    placeholder='email@example.com' />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm mb-1">Password</label>

                            </div>
                            <div className='relative'>
                                <input
                                    id="password"
                                    type={showPwd ? "text" : "password"}
                                    required
                                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPwd((v) => !v)}
                                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 hover:text-black"
                                    aria-label={showPwd ? "Hide password" : "Show password"}
                                >
                                    {/* icona occhio */}
                                    {showPwd ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 2l20 20" /><path d="M10.58 10.58A2 2 0 0 0 12 14a2 2 0 0 0 1.42-.58" /><path d="M16.24 16.24A9.77 9.77 0 0 1 12 18c-5 0-9-6-9-6a18.3 18.3 0 0 1 4.28-4.69" /><path d="M9.88 5.46A9.64 9.64 0 0 1 12 5c5 0 9 6 9 6a18.66 18.66 0 0 1-2.36 3.11" /></svg>
                                    ) : (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                    )}
                                </button>
                            </div>
                            <a href="/forgot-password" className="text-xs text-gray-600 hover:underline">
                                Forgot your password?
                            </a>

                            <button type='submit' className='w-full rounded-md bg-[#C2C719] py-2 text-white font-semibold hover:bg-[#AAAE16] transition'>
                                                   Sign in
                            </button>

                        </div>
                    </form>
                </section>


            </div>




        </>
    )
}

export default SignIn