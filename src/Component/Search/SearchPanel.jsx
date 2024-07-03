import axios from 'axios';
import React, { useState } from 'react'

export default function SearchPanel() {

    const [data, setData]= useState({
        name: '',
        email: '',
        course: '',
        dob: '',
        phone: '',
        college: ''
      });
    
      const searchData =(e)=>{
        const id=e.target.value;
        axios.get('http://localhost:4000/StudentData/'+id)
        .then((res)=>{
        //   console.log(res);
          setData(res.data)
        })};

  return (
    <div className="p-8 rounded border border-gray-200">
    <div className="flex flex-col">
    <h1 className="font-medium text-3xl">Search Your Data Here!</h1><br/>
    <div className='columns-2xs'>
    <div className="flex flex-col">
    <div>
            <input
              type="text"
              onChange={searchData}
              name="text"
              id="text"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Search"
            />
          </div>
    </div>
    </div>
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light text-surface dark:text-black">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th scope="col" className="px-6 py-4">
                ID
              </th>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Email
              </th>
              <th scope="col" className="px-6 py-4">
                Course
              </th>
              <th scope="col" className="px-6 py-4">
                DOB
              </th>
              <th scope="col" className="px-6 py-4">
                Phone
              </th>
              <th scope="col" className="px-6 py-4">
                College
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 font-medium">{data.id}</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">{data.name}</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">{data.email}</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">{data.course}</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">{data.dob}</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">{data.phone}</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">{data.college}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </div>
</div>
  )
}
