import React from 'react';

const ContactForm = ({setAddForm}) => {
    return (
        <div className='p-4 shadow-lg rounded-md'>
            <h2 className="text-xl text-center font-semibold">Add new contact</h2>
            <form>
                <div className='my-1'>
                <div class="relative mr-4 lg:w-full  w-2/4">
          <label for="hero-field" class="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
                </div>
                <div className='mb-1'>
                <div class="relative mr-4 lg:w-full  w-2/4">
          <label for="hero-field" class="leading-7 text-sm text-gray-600">Number</label>
          <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
                </div>
                <div className='my-2'>
                <input type="submit" value="Save" className='text-white w-full rounded-md mb-1 bg-gradient-to-br from-blue-500 to-pink-600' />
                </div>
            </form>
            <button onClick={() => setAddForm(false)} className='px-3 w-full text-white rounded-md bg-gradient-to-br from-blue-500 to-pink-600'>Close</button>
            
        </div>
    );
};

export default ContactForm;