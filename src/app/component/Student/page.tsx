'use client'
import { database, databaseId,  studentCollectionId } from "@/lib/appwrite"
import { Query } from "appwrite"
import { useState } from "react"
import { House } from "lucide-react"
import Link from "next/link"
const page = () => {
    const [id, setID] = useState('')
    const [student, setStudent] = useState<any>(null)
    const [error, setError] = useState('')
// npm dedupe

    const checkstudent = async (e:React.FormEvent) => {
        e.preventDefault()
        try{
            const ogID = Number(id)
        const appId = await database.listDocuments(databaseId, studentCollectionId, [
            Query.equal('student_id', ogID)
        ])
        if (appId.documents.length > 0) {
            alert(' student found successfully')
            setStudent(appId.documents[0])
            
            setError('')
        
        }
        else {
             alert('No student Found with this ID')
        }
        }
        catch(error){
            alert('check your connection ')
        }
    }
    return (
        <div>     
             <div className="p-4 text-sky-600">
                <Link  href="../" >
                <House />
            </Link>
                </div>
             
                                  <div className='p-28'>
        
            <div className="h-70 w-90 shadow-2xl rounded-xl  mx-auto">
                <h1 className='text-center p-4 text-2xl font-semibold text-sky-600'>Student details</h1>
 
                <div className='ml-5'>

                    <input type="number"
                        placeholder=" enter student-ID "
                        onChange={(s)=> setID(s.target.value)}
                        className="w-80 mb-4   h-8 rounded-sm border border-gray-500 "

                    />

                    <div className="-ml-2">
                        <button className="w-84 h-8 rounded-sm  bg-gradient-to-r- from-sky-400 to bg-sky-600 text-white shadow-lg hover:shadow-xl transition-all duration-300" onClick={checkstudent}>View info</button>
                    </div>
                    <p>{error}</p>
                    <div className="mt-10">
                        {student &&
                        
                            <div className="w-50 h-20 bg-gray-300 ml-15 rounded-sm ">
                                <div className="text-white p-1">
                                <h1 className="text-1xl ml-2 font-semibold  ">name: {student.name}</h1>
                                <p className="text-1xl ml-2 font-semibold  ">age: {student.age}</p>
                                <p className="text-1xl ml-2 font-semibold  ">class: {student.class}</p>
                                </div>
                            </div>
                        
                    }
                    </div>
                </div>
            </div>
        </div>
        </div>

    )

}
export default page
