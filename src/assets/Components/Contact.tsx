import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../StyleSheets/Contact.css';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { ArrowLeftSvg } from './ArrowLeftSvg';

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  otherDetails: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    otherDetails: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px', // Adjust this value to change the trigger point
  });

  useEffect(() => {
    // You can add any logic here if needed
  }, [inView]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      otherDetails: '',
    });
  };

  return (
    <section
      ref={ref}
      className="contactSection"
    >
      <div className="contactContent">

        <div className='backHomeDiv'>
          <Link to='/lux43/' className='linkStyle3'><ArrowLeftSvg /><p className='backHomeText'>Back home</p></Link>
        </div>

        <div className='pictureHeader'>
          <h1 className='pictureHeaderText'>Start Your Journey With Us</h1>
        </div>

        <div className="contactHeader">
          <h2 className="contactHeaderText">Fill out the form below</h2>
        </div>

        <div className='formWrapper'>
          <form onSubmit={handleSubmit} className='formContainer'>
            <label className='labelStyle'>
              Name
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className='inputStyle' />
            </label>

            <label className='labelStyle'>
              Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className='inputStyle' />
            </label>

            <label className='labelStyle'>
              Phone Number
              <input
                className='inputStyle'
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </label>

            <label className='labelStyle'>
              Detail Your Dream Interior
              <textarea
                className='textAreaStyle'
                name="otherDetails"
                value={formData.otherDetails}
                onChange={handleChange}
                rows={4}
              />
            </label>

            <button type="submit" className='submitBtn'>Submit</button>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};
