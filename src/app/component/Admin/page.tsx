
'use client'

import { House } from "lucide-react"
import React, { useState, useEffect } from 'react';
// import { account } from '../lib/appwrite';/
import { ID } from 'appwrite';
import type { Models } from 'appwrite';
import { useRouter } from 'next/navigation';
import { account } from '@/lib/appwrite';
import Link from "next/link";

const Admin = () => {

    //  function useAuth() {
    const [current, setCurrent] = useState<Models.Session | null>(null);
    const [loading, Loading] = useState(true);
    const router = useRouter();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const login = async (): Promise<void> => {
        // await account.createEmailVerification({email})
        let getCurrentuser;
        try {
            getCurrentuser = await account.get()
        }
        catch {
            getCurrentuser = null
        }
        if (!getCurrentuser) {
            const session = await account.createEmailPasswordSession({
                email,
                password
            });

            setCurrent(session);
            router.push('/');

        }
        const user = await account.get()
        if (user.email === 'alfaisibrahim3@gmail.com' || user.email === 'brahim3@gmail.com'
        ) {
            router.push('../component/Admin/Dashboard')
  alert("wlecome")
        }
    };

    const logout = async (): Promise<void> => {
        await account.deleteSession('current');
        setCurrent(null);
        router.push('/');
    };

    // const getCurrentUser = async () => {
    //     try {
    //         const user = await account.get();
    //         setCurrent(user);
    //     } catch (error) {
    //         setCurrent(null);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    useEffect(() => {
        // getCurrentUser();
    }, []);


    return (
        <div>
             <div className="p-4 text-sky-600">
                <Link  href="../" >
                
                <House/>
                </Link>
            
                </div>
        <div className='p-30'>
            <div className="h-63 w-90 shadow-2xl  mx-auto">
                <h1 className='text-center p-4 text-2xl font-semibold text-sky-600'>Admin</h1>

                <div className='ml-5'>
                    <label htmlFor="" className='text-sky-600 '>email</label>
                    <br />
                    <input type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=" enter your email"
                        className="w-80 mb-2 h-8 rounded-sm border border-gray-500 "

                    />
                    <br />
                    <label htmlFor="" className='text-sky-600'>password</label>
                    <br />
                    <input type=" passwrod"
                        placeholder=" enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-80 h-8 mb-3  rounded-sm border   border-gray-500 "
                    />

                    <div>

                        <button onClick={login} className="w-80 rounded-sm  h-9 bg-gradient-to-r-from-sky-400 to bg-sky-600 text-white">Login</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
// }
export default Admin