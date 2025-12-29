'use client'
import Link from "next/link"
import { House } from "lucide-react"


import { database, databaseId, ID, studentCollectionId } from "@/lib/appwrite"
import { useEffect, useState } from "react"
const Dashboard = () => {
    const [student, setStudent] = useState<any[]>([])
    const [newstudent, setNewStudent] = useState({ student_id: "", name: "", age: "", class: "" })
    const fetchStudent = async () => {
        const res = await database.listDocuments(databaseId, studentCollectionId)
        setStudent(res.documents)
    }
    const addStudent = async () => {
        await database.createDocument(databaseId, studentCollectionId, ID.unique(), {
            ...newstudent,
            age: Number(newstudent.age),
            student_id: Number(newstudent.student_id)
        })
        console.log('student created successfully')
        fetchStudent()
    }
    useEffect(() => {
        fetchStudent()
    }, [])
    return (
        <div>
                  <div className="p-4 text-sky-600">
                <Link  href="../" >
                < House/>
            </Link>
                </div>
        <div className="p-24">
            <div className="mb-9" >
                <h1 className="text-4xl  text-gradient-to-r- from-sky-400 to text-sky-600 hover:text-black transition-all duration-300    ">Admin</h1>
            </div>
            <div className="gap-4 flex ">
                <input type="number"
                    placeholder=" ID#"
                    className="border border-gray-400 w-60 h-9  rounded-sm "
                    onChange={(e) => setNewStudent({ ...newstudent, student_id: e.target.value })}
                />
                <input
                    placeholder=" name"
                    onChange={(e) => setNewStudent({ ...newstudent, name: e.target.value })}
                    className="border border-gray-400 w-60 h-9 rounded-sm"
                />


                <input type="text"
                    placeholder=" Class"
                    className="border border-gray-400 w-60 h-9  rounded-sm"
                    onChange={(e) => setNewStudent({ ...newstudent, class: e.target.value })}
                />


                <input type="age"
                    placeholder=" Age"
                    className="border border-gray-400 w-60 h-9  rounded-sm"
                    onChange={(e) => setNewStudent({ ...newstudent, age: e.target.value })} />
            </div>
            <div className="mb-6">
                <button className="mt-7  rounded-md px-5 py-3   bg-gradient-to-r- from-sky-400 to bg-sky-600  shadow-lg hover:shadow-xl transition-all duration-300    text-white" onClick={addStudent}>+Add student</button>
            </div>
            <div>
                {
                    student.map((s) => (
                        < div key={s.$id} className="flex p-7 justify-between">

                            <h1>{s.name}({s.class})</h1>

                            <div className="">
                                <button className="px-3 py-1 mr-2 bg-green-500 rounded-md text-white">update</button>
                                <button className="px-3 py-1   bg-red-500 rounded-md text-white">delete</button>

                            </div>
                        </div>
                    ))

                }
            </div>
        </div >
        </div>

    )
}
export default Dashboard

