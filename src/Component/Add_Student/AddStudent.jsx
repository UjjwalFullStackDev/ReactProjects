import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const [data, setData] = useState({
    name: '',
    email: '',
    course: '',
    dob: '',
    phone: '',
    college: ''
    });

  const [msg, setMsg] = useState('');

  const _useNavigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", data);
    axios.post('http://localhost:4000/StudentData', data)
      .then((res) => {
        toast.success('Data Added Successfully!');
        setData();  // Reset the form fields
      })
      .catch((error) => {
        console.error("Data Submission Failed", error);
      });
  };

  const handleCancel=((e)=>{
    e.preventDefault();
    _useNavigate("/")

  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(value);
  };

  return (
    <div className="p-8 rounded border border-gray-200">
    <Toaster />
      <h1 className="font-medium text-3xl">Add Student Details</h1>
      <p className="text-gray-600 mt-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        dolorem vel cupiditate laudantium dicta.
      </p>
      <form onSubmit={handleSubmit}>
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
              onChange={handleChange}
              name="name"
              id="name"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter your name"
              required
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
              onChange={handleChange}
              name="email"
              id="email"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="yourmail@provider.com"
              required
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
              onChange={handleChange}
              name="course"
              id="course"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="(ex. BCA)"
              required
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
              type="date"
              onChange={handleChange}
              name="dob"
              id="dob"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="(01/01/1993)"
              required
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
              onChange={handleChange}
              name="phone"
              id="phone"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="(9876543210)"
              required
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
              onChange={handleChange}
              name="college"
              id="college"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="(ex. Delhi University)"
              required
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
  );
}

export default AddStudent;
