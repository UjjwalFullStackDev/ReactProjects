import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';



function Edit() {
  const [data, setData] =useState({
    name: '',
    email: '',
    course: '',
    dob: '',
    phone: '',
    college: ''
  })

  const params= useParams()
  // console.log(id)

  const _useNavigate=useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/StudentData/'+params.id)
  .then((res) =>{
    setData(res.data)
    console.log(res.data);
  })
  }, [])

  const handler=((e) =>{
    const {name,value}=e.target;
    setData({...data,[name]:value})
  })

  const updateData=((e)=>{
    e.preventDefault();
    axios.put('http://localhost:4000/StudentData/'+params.id,data)
    .then((res)=>{
      toast.success('Data Updated Successfully!')
    })
  })

  const handleCancel=((e)=>{
    e.preventDefault();
    _useNavigate("/Student-List")

  })
  

  return (
    <div className="p-8 rounded border border-gray-200">
    <Toaster />
      <h1 className="font-medium text-3xl">Update Details</h1>
      <form onSubmit={updateData}>
        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={handler}
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Email Address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={data.email}
              onChange={handler}
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="course"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Course
            </label>
            <input
              type="text"
              name="course"
              id="course"
              value={data.course}
              onChange={handler}
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="dob"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              DOB
            </label>
            <input
              type="text"
              name="dob"
              id="dob"
              value={data.dob}
              onChange={handler}
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={data.phone}
              onChange={handler}
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="college"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              College
            </label>
            <input
              type="text"
              name="college"
              id="college"
              value={data.college}
              onChange={handler}
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            />
          </div>
        </div>
        <div className="space-x-4 mt-8">
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
          >
            Save
          </button>
          <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
          onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default Edit