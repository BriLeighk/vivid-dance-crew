'use client'

import { useState, useEffect } from 'react';
import { faStar, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const PHOTOS_PER_PAGE = 12; // 3 rows of 4 photos each

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const listRef = ref(storage);
        const res = await listAll(listRef);
        const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
        console.log('Fetched URLs:', urls); // Debug log
        setPhotos(urls);
      } catch (error) {
        console.error('Error fetching photos:', error); // Error handling
      }
    };

    fetchPhotos();
  }, []);

  const totalPages = Math.ceil(photos.length / PHOTOS_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const currentPhotos = photos.slice(
    currentPage * PHOTOS_PER_PAGE,
    (currentPage + 1) * PHOTOS_PER_PAGE
  );

  return (
    <div className="">
      <div className="relative isolate px-6 lg:px-8">
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
        <div className="flex justify-center mt-12">
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

          <div className="text-center mt-8">
            <h2 className="text-2xl mb-10 font-bold tracking-tight sm:text-4xl text-[#785C92]">
              Gallery
            </h2>
        </div>

        <div className="flex justify-center items-center">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            className="cursor-pointer mx-2 text-[#785C92]"
            onClick={handlePrevPage}
          />
          <div className="grid grid-cols-4 gap-2 ">
            {currentPhotos.map((photo, index) => (
              <div key={index} className="relative w-full h-[60px] sm:h-[100px] md:h-[140px] lg:h-[180px]">
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="object-cover w-full h-full border-4 border-[#CBC9FF] rounded-lg shadow-lg shadow-[#C4B5EE]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="2x"
            className="cursor-pointer mx-2 text-[#785C92]"
            onClick={handleNextPage}
          />
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
    </div>
  );
}
