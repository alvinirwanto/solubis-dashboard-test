import React, { useState, useEffect } from 'react'
import axios from 'axios'

const apiData = "https://jsonplaceholder.typicode.com/users"


const TableData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        // Using axios
        const response = await axios.get(apiData)
        const jsonData = await response.data

        setData(jsonData)
    }

    return (
        <div className='w-full py-4 items-center justify-start'>
            <table className='table-auto bg-white dark:bg-[color:var(--darker-bg)] rounded-md overflow-clip'>
                <thead className='bg-[#ef8122] text-[#f8f8f8]'>
                    <tr>
                        <th className='p-4'>Id</th>
                        <th className='p-4'>Name</th>
                        <th className='p-4'>Username</th>
                        <th className='p-4'>Email</th>
                        <th className='p-4'>Phone</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 text-black dark:text-[#f8f8f8]'>
                    {data.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td className='p-4 text-center'>{user.id}</td>
                                <td className='p-4'>{user.name}</td>
                                <td className='p-4'>{user.username}</td>
                                <td className='p-4'>{user.email}</td>
                                <td className='p-4'>{user.phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableData