"use client"
import React, { use } from 'react';
import { useState } from 'react';


function EmployeeDetails() {

  const [resumeFile, setResumeFile] = useState(null);
  const [employeeDetails, setEmployeeDetails] = useState({
    empId: "",
    address: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    DOB: "",
    gender: ""

  })

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEmployeeDetails({
      ...employeeDetails,
      [name]: value,
    });
  }
  const employeeId = employeeDetails.empId

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      if (!resumeFile) {
        throw new Error('Resume file is required');
      }
      const formData = new FormData();
      formData.append('images', resumeFile);
      formData.append('employeeId', employeeId);

      const resumeResponse = await fetch("http://localhost:6660/single", {
        method: 'POST',
        body: formData,
      });

      if (!resumeResponse.ok) {
        throw new Error('Failed to upload resume');
      }
      // alert("Document upload successfully.")

      const response = await fetch("http://localhost:6660/api/add/details", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeDetails),
      })
      if (!response.ok) {
        throw new Error('Failed to add employee');
      }
      setEmployeeDetails({
        empId: "",
        address: "",
        city: "",
        country: "",
        email: "",
        phone: "",
        DOB: "",
        gender: ""
      })
      setResumeFile(null);
      alert('Employee details added successfully!');
      console.log(response, "response")

    } catch (err: any) {
      console.log("Error", err.message)
    }
  }

 
  return (
    <main>
      <div className='m-auto text-center px-8 py-2 font-bold text-2xl mt-8'>Employee Details Form</div>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8">
        <div className='mx-4'>
          <div className='mb-4'>
            <label className='block mb-1'>Email</label>
            <input
              type="text"
              name="email"
              value={employeeDetails.email}
              onChange={handleChange}
              placeholder='Enter Email'
              className='border-2 px-4 py-1 w-full rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-1'>Phone</label>
            <input
              type="text"
              name="phone"
              value={employeeDetails.phone}
              onChange={handleChange}
              placeholder='Enter mobile number'
              className='border-2 px-4 py-1 w-full rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-1'>Date of Birth</label>
            <input
              type='date'
              name="DOB"
              value={employeeDetails.DOB}
              onChange={handleChange}
              placeholder='Enter date of birth'
              className='border-2 px-4 py-1 w-full rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-1'>Address</label>
            <input
              type="text"
              name="address"
              value={employeeDetails.address}
              onChange={handleChange}
              placeholder='Enter address'
              className='border-2 px-4 py-1 w-full rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-1'>City</label>
            <input
              type="text"
              name="city"
              value={employeeDetails.city}
              onChange={handleChange}
              placeholder='Enter city name'
              className='border-2 px-4 py-1 w-full rounded'
              required
            />
          </div>
          <div className='flex flex-wrap -mx-2'>
            <div className='w-full md:w-1/2 px-2 mb-4 md:mb-0'>
              <label className='block mb-1'>Country</label>
              <input
                type="text"
                name="country"
                value={employeeDetails.country}
                onChange={handleChange}
                placeholder='Enter country name'
                className='border-2 px-4 py-1 w-full rounded'
                required
              />
            </div>
            <div className='w-full md:w-1/2 px-2'>
              <label className='block mb-1'>Gender</label>
              <select name="gender" className='border-2 px-4 py-1 w-full rounded' value={employeeDetails.gender} onChange={handleChange}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="na">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className='mt-4'>
            <label className="block mb-1">Upload Resume</label>
            <input type="file"
              name='images'
              onChange={(e: any) => setResumeFile(e.target.files[0])}
              className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className='mt-8 text-center'>
          <button className='border px-4 py-2 text-white bg-orange-400 hover:bg-orange-500 rounded'
            type='submit'
            onChange={handleChange}
            
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

export default EmployeeDetails;
