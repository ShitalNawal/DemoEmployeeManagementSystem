"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const addEmployeeForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        Fname: "",
        Lname: "",
        Salary: 0
    })
    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:6660/api/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if (!response.ok) {
                throw new Error('Failed to add employee');
            }
            // Clear form after successful submission
            setFormData({
                Fname: '',
                Lname: '',
                Salary: 0,
            });
            alert('Employee added successfully!');
        } catch (error: any) {
            console.error('Error adding employee:', error.message);
            alert('Failed to add employee');
        }
    }

const handleLogin = () => {
    router.push("/login")
}


    return (
        <div className='m-4 border-grey-400'>
            <div className=''>
                <div className='mx-auto text-center border border-spacing-3 p-4 max-w-md flex flex-col bg-slate-300 pb-4 mt-4'>
                    <h2 className='font-bold text-lg underline underline-offset-1 mb-4 '>Employee Registration</h2>
                    <form onSubmit={handleSubmit} className='text-left '>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2 p-2 pb-0'>
                                First Name: 
                            </label>
                            <input
                                type="text"
                                name="Fname"
                                value={formData.Fname}
                                onChange={handleChange}
                                className='border-2 ml-2 p-2 rounded w-full'
                                required
                            />

                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2 p-2 pb-0'>
                                Last Name:
                            </label>
                            <input
                                type="text"
                                name="Lname"
                                value={formData.Lname}
                                onChange={handleChange}
                                className='border-2 ml-2 p-2 rounded w-full'
                                required
                            />

                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2 p-2 pb-0'>
                                Salary:
                            </label>
                            <input
                                type="text"
                                name="Salary"
                                value={formData.Salary}
                                onChange={handleChange}
                                className='border-2 ml-2 p-2 rounded w-full'
                                required
                            />

                        </div>
                        
                        <div className='mt-16 text-center'>
        <button className='border px-2 py-2 text-white bg-orange-400 hover:bg-orange-500 rounded'
        type='submit'
        onClick={handleLogin}
        >
          Add Employee 
        </button>
      </div>
    
                    </form>
                </div>
            </div>
            <br /><br />
            <hr />
            <div>
                {/* <Login></Login> */}
            </div>
        </div>
    );


}

export default addEmployeeForm