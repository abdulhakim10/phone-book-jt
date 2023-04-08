import React, { useEffect, useState } from 'react';
import './ContactList.css'
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { BiSearchAlt2 } from 'react-icons/bi';

const ContactList = ({setAddForm}) => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5500/contact/all-contact")
        .then(res => res.json())
        .then(data => setContacts(data))
        .catch(e => {
            console.error(e)
        })
    },[contacts])
    return (
        <div className=''>
            <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center px-3 py-5">
                <div className="w-full bg-white text-gray-800 overflow-hidden border-4 border-white rounded-3xl shadow-lg relative" style={{ maxWidth: "414px" }}>
                    <div className="phone-top"><div className="phone-top-inner"></div></div>
                    <div className="w-full bg-gradient-to-br from-blue-500 to-pink-600 pt-12 pb-12 px-16 text-white">
                        <div className="mb-5">
                            <input type="text" className="w-full text-white bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50" placeholder="Search..." />
                        </div>
                        <h1 className="text-2xl font-light mb-1">My Contacts</h1>
                        
                    </div>
                    <div className="bg-gray-50 h-96 overflow-hidden hover:overflow-y-scroll px-2">
                        <ul className="">
                        {
                            contacts?.map(contact => <li key={contact?._id} className="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                            <div className="flex gap-2 items-center">
                                <div className="w-12 text-3xl text-blue-700 leading-none">
                                    {/* <i className="cc XRP text-blue-700"></i> */}
                                    <FaUserCircle/>
                                </div>
                                <div className='w-full'>
                                <h3 className=" text-md capitalize">{contact?.name}</h3>
                                <small>{contact?.number}</small>
                                </div>
                                <FiEdit/>
                            </div>
                        </li>)
                        }
                        </ul>
                    </div>
                    <div onClick={() => setAddForm(true)} className='flex justify-center py-2'>
                        <BsFillPlusCircleFill className='text-5xl  text-white border-8 border-pink-400 bg-gradient-to-br from-blue-500 to-pink-600 rounded-full'/>
                    </div>
                    <div className="relative hidden lg:block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                    <BiSearchAlt2 className='text-xl' />
                                </button>
                            </span>
                            <input type="search" name="Search" placeholder="Search..." className="w-32 py-1.5 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-300 focus:bg-gray-300" />
                        </div>
                    {/* <div className="px-5 bg-white pb-2">
                        <div className="flex">
                            <div className="flex-1 group">
                                <a href="#" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                                    <span className="block px-1">
                                        <i className="far fa-home text-xl pt-1 mb-1 block"></i>
                                        <span className="block text-xs pb-1">Home</span>
                                    </span>
                                </a>
                            </div>
                            <div className="flex-1 group">
                                <a href="#" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                                    <span className="block px-1">
                                        <i className="far fa-compass text-xl pt-1 mb-1 block"></i>
                                        <span className="block text-xs pb-1">Explore</span>
                                    </span>
                                </a>
                            </div>
                            <div className="flex-1 group">
                                <a href="#" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                                    <span className="block px-1">
                                        <i className="far fa-search text-xl pt-1 mb-1 block"></i>
                                        <span className="block text-xs pb-1">Search</span>
                                    </span>
                                </a>
                            </div>
                            <div className="flex-1 group">
                                <a href="#" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                                    <span className="block px-1">
                                        <i className="far fa-cog text-xl pt-1 mb-1 block"></i>
                                        <span className="block text-xs pb-1">Settings</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ContactList;