'use client'; // use client-side rendering
import React from 'react';
import Image from 'next/image';

export default function ImageModal({ imgUrl, altDescription, closeModal }) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div className="relative">
        <Image
          src={imgUrl}
          alt={altDescription}
          layout="intrinsic"
          width={800}
          height={600}
          objectFit="contain"
          objectPosition="center"
          className="rounded"
        />
        <button
          className="absolute top-4 right-4 bg-white rounded-full p-2"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
