import React from 'react';
import { toast } from 'react-hot-toast';

const ContactForm = ({setAddForm}) => {
    
    // save contact handler
    const saveContact = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const number = form.number.value;

        console.log(name, number)
        const contactData = {
            name,
            number
        }

        // save to DB
        fetch('http://localhost:5500/contact', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(contactData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data?.name){
                toast.success('Contact Saved');
                form.reset();
            setAddForm(false);
            }
        })
        .catch(error => {
            toast.error('Number already exist!')
            console.log(error.message)
        })
    }
    return (
        <div className='p-4 shadow-lg rounded-md'>
            <h2 className="text-xl text-center font-semibold">Add new contact</h2>
            <form onSubmit={saveContact}>
                <div className='my-1'>
                <div className="relative mr-4 lg:w-full  w-2/4">
          <label for="hero-field" className="leading-7 text-sm text-gray-600">Name</label>
          <input 
          type="text" 
          id="hero-field" 
          name="name" 
          maxLength='15'
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
                </div>
                <div className='mb-1'>
                <div className="relative mr-4 lg:w-full  w-2/4">
          <label for="hero-field" className="leading-7 text-sm text-gray-600">Number</label>
          <input 
          type="tel" 
          id="hero-field" 
          name="number"
          maxLength="15" 
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
                </div>
                <div className='my-2'>
                <input 
                type="submit" 
                value="Save" 
                className='text-white w-full rounded-md mb-1 bg-gradient-to-br from-blue-500 to-pink-600' />
                </div>
            </form>
            <button onClick={() => setAddForm(false)} className='px-3 w-full text-white rounded-md bg-gradient-to-br from-blue-500 to-pink-600'>Close</button>
            
        </div>
    );
};

export default ContactForm;