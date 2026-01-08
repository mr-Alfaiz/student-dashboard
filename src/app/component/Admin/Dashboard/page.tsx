"use client"

import Link from "next/link"
import { House } from "lucide-react"
import { useEffect, useState } from "react"

let database: any
let databaseId: string
let studentCollectionId: string
let ID: any

const Dashboard = () => {
  const [student, setStudent] = useState<any[]>([])
  const [newstudent, setNewStudent] = useState({
    student_id: "",
    name: "",
    age: "",
    class: ""
  })

  useEffect(() => {
    const loadAppwrite = async () => {
      const appwrite = await import("@/lib/appwrite")
      database = appwrite.database
      databaseId = appwrite.databaseId
      studentCollectionId = appwrite.studentCollectionId
      ID = appwrite.ID

      fetchStudent()
    }

    loadAppwrite()
  }, [])

  const fetchStudent = async () => {
    if (!database) return
    const res = await database.listDocuments(databaseId, studentCollectionId)
    setStudent(res.documents)
  }

  const addStudent = async () => {
    if (!database) return
    await database.createDocument(databaseId, studentCollectionId, ID.unique(), {
      ...newstudent,
      age: Number(newstudent.age),
      student_id: Number(newstudent.student_id),
    })
    fetchStudent()
  }

  return (
    <div>
      <div className="p-4 text-sky-600">
        <Link href="../">
          <House />
        </Link>
      </div>

      <div className="p-24">
        <h1 className="text-4xl text-sky-600 mb-9">Admin</h1>

        <div className="flex gap-4">
          <input
            type="number"
            placeholder="ID#"
            className="border w-60 h-9"
            onChange={(e) =>
              setNewStudent({ ...newstudent, student_id: e.target.value })
            }
          />
          <input
            placeholder="Name"
            className="border w-60 h-9"
            onChange={(e) =>
              setNewStudent({ ...newstudent, name: e.target.value })
            }
          />
          <input
            placeholder="Class"
            className="border w-60 h-9"
            onChange={(e) =>
              setNewStudent({ ...newstudent, class: e.target.value })
            }
          />
          <input
            placeholder="Age"
            className="border w-60 h-9"
            onChange={(e) =>
              setNewStudent({ ...newstudent, age: e.target.value })
            }
          />
        </div>

        <button
          className="mt-7 px-5 py-3 bg-sky-600 text-white rounded-md"
          onClick={addStudent}
        >
          + Add student
        </button>

        <div>
          {student.map((s) => (
            <div key={s.$id} className="flex justify-between p-4">
              <h1>{s.name} ({s.class})</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
