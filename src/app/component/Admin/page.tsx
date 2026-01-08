"use client";

export const dynamic = "force-dynamic";


import { House } from "lucide-react"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { account } from '@/lib/appwrite'
import Link from "next/link"

const Admin = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        try {
            await account.createEmailPasswordSession(email, password)

            const user = await account.get()

            if (
                user.email === 'alfaisibrahim3@gmail.com' ||
                user.email === 'brahim3@gmail.com'
            ) {
                alert("Welcome")
                router.push('/component/Admin/Dashboard')
            } else {
                router.push('/')
            }
        } catch (error) {
            console.error(error)
            alert("Invalid login")
        }
    }

    return (
        <div>
            <div className="p-4 text-sky-600">
                <Link href="../">
                    <House />
                </Link>
            </div>

            <div className='p-30'>
                <div className="h-63 w-90 shadow-2xl mx-auto">
                    <h1 className='text-center p-4 text-2xl font-semibold text-sky-600'>Admin</h1>

                    <div className='ml-5'>
                        <label className='text-sky-600'>Email</label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-80 mb-2 h-8 rounded-sm border border-gray-500"
                        />

                        <label className='text-sky-600'>Password</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-80 h-8 mb-3 rounded-sm border border-gray-500"
                        />

                        <button
                            onClick={login}
                            className="w-80 h-9 bg-sky-600 text-white rounded-sm"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
