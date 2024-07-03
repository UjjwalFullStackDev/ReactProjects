import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import ReactPaginate from 'react-paginate';

function StudentList() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState([]);
  const n = 3;

  useEffect(() => {
    axios.get('http://localhost:4000/StudentData')
      .then((res) => {
        setData(res.data);
        setPage(0);  // Reset page to 0 whenever new data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    setFilterData(
      data.slice(page * n, (page + 1) * n)
    );
  }, [data, page]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this student?");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:4000/StudentData/${id}`);
        toast.success('Data Deleted Successfully!');
        setData(data.filter(item => item.id !== id)); // Update the data state after deletion
      } catch (error) {
        console.error('Error deleting data:', error);
        toast.error('Error deleting data');
      }
    }
  };

  return (
    <div className="p-8 rounded border border-gray-200">
      <div className="flex flex-col">
        <Toaster />
        <h1 className="font-medium text-3xl mb-4">List Of Students</h1>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-gray-800">
                <thead className="border-b font-medium">
                  <tr>
                    <th scope="col" className="px-6 py-4">ID</th>
                    <th scope="col" className="px-6 py-4">Name</th>
                    <th scope="col" className="px-6 py-4">Email</th>
                    <th scope="col" className="px-6 py-4">Course</th>
                    <th scope="col" className="px-6 py-4">DOB</th>
                    <th scope="col" className="px-6 py-4">Phone</th>
                    <th scope="col" className="px-6 py-4">College</th>
                    <th scope="col" className="px-6 py-4">Edit</th>
                    <th scope="col" className="px-6 py-4">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {filterData.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="px-6 py-4 font-medium">{item.id}</td>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item.course}</td>
                      <td className="px-6 py-4">{item.dob}</td>
                      <td className="px-6 py-4">{item.phone}</td>
                      <td className="px-6 py-4">{item.college}</td>
                      <td className="px-6 py-4">
                        <Link to={`/edit/${item.id}`} className="text-blue-500">✎</Link>
                      </td>
                      <td className="text-center cursor-pointer px-6 py-4">
                        <button
                          className="py-2 px-4 bg-red-500 text-white rounded"
                          onClick={() => handleDelete(item.id)}
                        >
                          🗑
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-4">
              <ReactPaginate
                containerClassName={"pagination flex justify-center space-x-2"}
                pageClassName={"page-item"}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                pageLinkClassName={'page-link p-2 border rounded'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link p-2 border rounded'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link p-2 border rounded'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link p-2 border rounded'}
                activeClassName={'bg-blue-500 text-white'}
                onPageChange={(event) => setPage(event.selected)}
                pageCount={Math.ceil(data.length / n)}
                breakLabel="..."
                previousLabel={'Previous'}
                nextLabel={'Next'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
