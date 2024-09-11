import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Newsletter.css'; // Import the CSS file

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [fadeOut, setFadeOut] = useState(false); // State to control fade-out

  // Function to clear the message after a delay
  useEffect(() => {
    if (message) {
      setFadeOut(false); // Reset fade-out state
      const timer = setTimeout(() => {
        setFadeOut(true); // Start fade-out
        setTimeout(() => {
          setMessage('');
        }, 1000); // Clear message after fade-out duration
      }, 3000); // Start fade-out after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [message]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting email:', email); // Add logging
      const response = await axios.post('/api/addContact', { email });
      if (response.status === 200) {
        setMessage(response.data.message); // Use the message from the API response
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error); // Add logging
      setMessage('An error occurred. Please try again.');
    }
    setEmail('');
  };

  return (
    <div className="mb-20">
        <div className="flex justify-center mb-32">
            
            {/* For small screens, display one of each star color */}
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#A790C6] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#A790C6] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#A790C6] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B297E0] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B297E0] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B297E0] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B9A8E0] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B9A8E0] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B9A8E0] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#BDB5EC] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#BDB5EC] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#BDB5EC] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#D5BBED] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#D5BBED] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#D5BBED] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#E5C3DE] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#E5C3DE] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#E5C3DE] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />        
        </div>
        
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight  text-[#785C92] sm:text-4xl">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8  text-[#785C92]">
              Subscribe to our newsletter to stay up to date with anything VIVID!
            </p>
            <form onSubmit={handleFormSubmit} className="mt-6 flex gap-x-4">
              <input
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-[#785C92] font-bold shadow-sm border-[#785C92] border-[2px] focus:border-[#CBC9FF] focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm border bg-[#C4B5EE] hover:bg-[#785C92] rounded"
                style={{ transition: 'background-color 0.3s ease-in-out' }}
              >
                Subscribe
              </button>
            </form>
            {message && (
              <p className={`mt-4 text-sm text-[#785C92] ${fadeOut ? 'fade-out' : ''}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
    </div>
  )
}