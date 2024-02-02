"use client"
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'

interface Employee  {
id : number,
Fname: string,
Lname: string,
Salary: string
}

function Login() {
  const router = useRouter()
    const [employee, setEmployee] = useState<Employee[]>([])
   
    useEffect(() => {
    fetch("http://localhost:6660/api/get")
    .then(response => 
        response.json()      
         ).then(
            data => {
                console.log(data.employee)
                setEmployee(data.employee)
            }
         )
         
        },[])

        const handleRegistration = () => {
          router.push("/registration")
        }
        const handleRegistrationDetails = () => {
          router.push("/employeeDetails")
        }
  return (

    <main className='h-full '>
    <div className='pt-5 pb-5 text-lg font-bold underline underline-offset-1 '>Employee Details</div>
    
    <div>
      
        <table className="min-w-full table-auto">
          <thead>
            <tr className='bg-slate-200'>
              {/* <th className="border px-4 py-2">ID</th> */}
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Salary</th>
              <th className='border px-4 py-2'>Add details</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr key={employee.id} className='odd: bg-white even:bg-slate-50'>
                {/* <td className="border px-4 py-2 text-center">{employee.id}</td> */}
                <td className="border px-4 py-2 text-center">{employee.Fname}</td>
                <td className="border px-4 py-2 text-center">{employee.Lname}</td>
                <td className="border px-4 py-2 text-center">{employee.Salary}</td>
                <td className='border px-4 py-2 text-center'>
                  <button className="text-blue-500 hover:text-blue-700 focus:outline-none"
                   onClick={handleRegistrationDetails} >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> 
      </div>
      <div className='mt-16 text-center'>
        <button className='border px-2 py-2 text-white bg-orange-400 hover:bg-orange-500 rounded'
        type='submit'
        onClick={handleRegistration}
        >
          Add Employee 
        </button>
      </div>
    

    </main>
  )
}

export default Login