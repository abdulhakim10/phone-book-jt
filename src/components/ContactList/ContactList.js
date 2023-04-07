import React from 'react';
import './ContactList.css'
import { BsFillPlusCircleFill, BsPlusCircleFill } from 'react-icons/bs';

const ContactList = () => {
    return (
        <div className=''>
            <div class="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center px-3 py-5">
                <div class="w-full bg-white text-gray-800 overflow-hidden border-4 border-white rounded-3xl shadow-lg relative" style={{ maxWidth: "414px" }}>
                    <div class="phone-top"><div class="phone-top-inner"></div></div>
                    <div class="w-full bg-gradient-to-br from-blue-500 to-pink-600 pt-12 pb-12 px-4 text-white">
                        <div class="mb-5">
                            <input type="text" class="w-full text-white bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50" placeholder="Search..." />
                        </div>
                        <h1 class="text-2xl font-light mb-1">My Contacts</h1>
                        
                    </div>
                    <div class="bg-gray-50 h-96 overflow-hidden hover:overflow-y-scroll px-2">
                        <ul class="">
                            <li class="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                                <div class="flex items-center">
                                    <div class="w-16 text-3xl leading-none">
                                        <i class="cc BTC text-yellow-500"></i>
                                    </div>
                                    <div class="w-full">Bitcoin <span class="ml-3 text-gray-400">BTC</span></div>
                                    <div class="text-green-500">+0.65%</div>
                                </div>
                            </li>
                            <li class="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                                <div class="flex items-center">
                                    <div class="w-16 text-3xl leading-none">
                                        <i class="cc ETH text-gray-700"></i>
                                    </div>
                                    <div class="w-full">Ethereum <span class="ml-3 text-gray-400">ETH</span></div>
                                    <div class="text-green-500">+0.98%</div>
                                </div>
                            </li>
                            <li class="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                                <div class="flex items-center">
                                    <div class="w-16 text-3xl leading-none">
                                        <i class="cc XLM text-blue-300"></i>
                                    </div>
                                    <div class="w-full">Stellar <span class="ml-3 text-gray-400">XLM</span></div>
                                    <div class="text-red-500">-1.24%</div>
                                </div>
                            </li>
                            <li class="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                                <div class="flex items-center">
                                    <div class="w-16 text-3xl leading-none">
                                        <i class="cc XRP text-blue-700"></i>
                                    </div>
                                    <div class="w-full">Ripple <span class="ml-3 text-gray-400">XRP</span></div>
                                    <div class="text-green-500">+0.30%</div>
                                </div>
                            </li>
                            <li class="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                                <div class="flex items-center">
                                    <div class="w-16 text-3xl leading-none">
                                        <i class="cc XRP text-blue-700"></i>
                                    </div>
                                    <div class="w-full">Ripple <span class="ml-3 text-gray-400">XRP</span></div>
                                    <div class="text-green-500">+0.30%</div>
                                </div>
                            </li>
                            <li class="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                                <div class="flex items-center">
                                    <div class="w-16 text-3xl leading-none">
                                        <i class="cc XRP text-blue-700"></i>
                                    </div>
                                    <div class="w-full">Ripple <span class="ml-3 text-gray-400">XRP</span></div>
                                    <div class="text-green-500">+0.30%</div>
                                </div>
                            </li>
                            <li class="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                                <div class="flex items-center">
                                    <div class="w-16 text-3xl leading-none">
                                        <i class="cc XRP text-blue-700"></i>
                                    </div>
                                    <div class="w-full">Ripple <span class="ml-3 text-gray-400">XRP</span></div>
                                    <div class="text-green-500">+0.30%</div>
                                </div>
                            </li>
                            <li class="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                                <div class="flex items-center">
                                    <div class="w-16 text-3xl leading-none">
                                        <i class="cc XRP text-blue-700"></i>
                                    </div>
                                    <div class="w-full">Ripple <span class="ml-3 text-gray-400">XRP</span></div>
                                    <div class="text-green-500">+0.30%</div>
                                </div>
                            </li>
                            <li class="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                                <div class="flex items-center">
                                    <div class="w-16 text-3xl leading-none">
                                        <i class="cc XRP text-blue-700"></i>
                                    </div>
                                    <div class="w-full">Ripple <span class="ml-3 text-gray-400">XRP</span></div>
                                    <div class="text-green-500">+0.30%</div>
                                </div>
                            </li>
                            <li class="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                                <div class="flex items-center">
                                    <div class="w-16 text-3xl leading-none">
                                        <i class="cc XRP text-blue-700"></i>
                                    </div>
                                    <div class="w-full">Ripple <span class="ml-3 text-gray-400">XRP</span></div>
                                    <div class="text-green-500">+0.30%</div>
                                </div>
                            </li>
                            <li class="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                                <div class="flex items-center">
                                    <div class="w-16 text-3xl leading-none">
                                        <i class="cc XRP text-blue-700"></i>
                                    </div>
                                    <div class="w-full">Ripple <span class="ml-3 text-gray-400">XRP</span></div>
                                    <div class="text-green-500">+0.30%</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-center py-2'>
                        <BsFillPlusCircleFill className='text-5xl  text-white border-8 border-pink-400 bg-gradient-to-br from-blue-500 to-pink-600 rounded-full'/>
                    </div>
                    {/* <div class="px-5 bg-white pb-2">
                        <div class="flex">
                            <div class="flex-1 group">
                                <a href="#" class="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                                    <span class="block px-1">
                                        <i class="far fa-home text-xl pt-1 mb-1 block"></i>
                                        <span class="block text-xs pb-1">Home</span>
                                    </span>
                                </a>
                            </div>
                            <div class="flex-1 group">
                                <a href="#" class="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                                    <span class="block px-1">
                                        <i class="far fa-compass text-xl pt-1 mb-1 block"></i>
                                        <span class="block text-xs pb-1">Explore</span>
                                    </span>
                                </a>
                            </div>
                            <div class="flex-1 group">
                                <a href="#" class="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                                    <span class="block px-1">
                                        <i class="far fa-search text-xl pt-1 mb-1 block"></i>
                                        <span class="block text-xs pb-1">Search</span>
                                    </span>
                                </a>
                            </div>
                            <div class="flex-1 group">
                                <a href="#" class="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                                    <span class="block px-1">
                                        <i class="far fa-cog text-xl pt-1 mb-1 block"></i>
                                        <span class="block text-xs pb-1">Settings</span>
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