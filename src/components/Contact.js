import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const templateId = 'template_th7o8es';
  const publicKey = 'KHtTrEJ6QGu34lnbj';
  const serviceId = 'service_cvfxmrj';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setSuccessMessage('Message sent successfully!');
          setErrorMessage(''); // Clear any previous error messages
          e.target.reset(); // Reset form after successful submission
        },
        (error) => {
          setErrorMessage('Failed to send the message. Please try again.');
          setSuccessMessage(''); // Clear any previous success messages
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className='py-16 lg:mt-[30rem]' id='contact'>
      <div className='container mx-auto'>
        {/* Success/Error Message */}
          {successMessage && (
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial='hidden'
              viewport={{ once: false, amount: 0.3 }}
              className='text-white-500 mt-4 bg-green-500 rounded-full p-2  max-w-[250px] text-center mb-4'
            >
              {successMessage}
            </motion.div>
          )}
          {errorMessage && (
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial='hidden'
             
              viewport={{ once: false, amount: 0.3 }}
              className='text-red-500 mt-4 bg-red-500 rounded-full p-2 max-w-[250px] text-center mb-4'
            >
              {errorMessage}
            </motion.div>
          )}
        <div className='flex flex-col lg:items-center justify-between lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              <h4 className='text-xl uppercase font-medium mb-2 tracking-wide'>
                Get in Touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's Work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='max-w-[600px] flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              name='name'
              placeholder='Your name'
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              name='email'
              placeholder='Your email'
              required
            />
            <textarea
              className='bg-transparent h-[10rem] border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              name='message'
              placeholder='Your message'
              required
            ></textarea>

            <button type='submit' className='btn btn-lg'>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
