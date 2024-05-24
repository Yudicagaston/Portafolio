import React, { useState } from 'react';
import Swal from 'sweetalert2'
const Contact = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {

        Swal.fire({

            icon: "success",
            title: "Thank you for your message!",
            text: "I'll get in touch with you soon.",
            showConfirmButton: false,
            timer: 2500
        });
    };

    return (

        <section id='contact'>
            <h1 className="text-3xl lg:text-5xl font-bold text-center mt-9 mb-6 bg-gray-900 p-2">CONTACT</h1>
            <div className="max-w-3xl  mx-auto mt-8  ">

                <form className='mx-4 ' action="https://formsubmit.co/gastonyudicaz@gmail.com" method="POST" onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-row">
                        <div className='w-1/2 mr-2'>

                            <input type="text" id="name" name='name' placeholder='FIRST NAME' value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 p-4 border rounded-md text-white bg-black border-blue-500" required />

                        </div>
                        <div className='w-1/2 ml-2'>

                            <input type="text" id="lastName" name='lastName' placeholder='LAST NAME' value={lastName} onChange={(e) => setLastName(e.target.value)} className=" w-full mt-1 p-4 border rounded-md text-white bg-black border-blue-500" required />
                        </div>

                    </div>
                    <div className="mb-4">

                        <input type="email" id="email" name='email' placeholder='EMAIL' value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-1 p-4 border rounded-md text-white bg-black border-blue-500" required />
                    </div>
                    <div className="mb-6">

                        <textarea id="message" name='message' placeholder='MESSAGE' value={message} onChange={(e) => setMessage(e.target.value)} className="w-full mt-1 p-4 border rounded-md text-white bg-black border-blue-500" rows="4" required />
                    </div>
                    <div className='flex justify-center items-center mb-6'>
                        <button type="submit" className="bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-cyan-600  w-full h-30 mb-4">SEND</button>


                    </div>
                    <input type="hidden" name="_next" value={"https://portafolio-navy-five.vercel.app/"} />
                    <input type="hidden" name="_captcha" value={"false"} />
                </form>

            </div>
        </section>
    );
};

export default Contact