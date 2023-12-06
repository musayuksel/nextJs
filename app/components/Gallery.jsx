'use client';
import React, { useState, useEffect } from 'react';
import ImageCard from './Image';
import { fetchImages } from '../utils/fetchData';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  //   fetch images from the API and set the images state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchImages(currentPage);
        setImages([...images, ...data]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  //   handle scroll
  useEffect(() => {
    // when user scrolls to the bottom of the page, fetch more images

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        console.log(
          "you're at the bottom of the page new data will be fetched"
        );
        setCurrentPage(currentPage + 1);
        // Show loading spinner and make fetch request to api
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // STYLES :https://tailwindcss.com/docs/grid-template-columns
  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-4 "
      style={{ height: '100%' }}
    >
      {/* for each image create an Image component */}
      {images.map((image) => (
        <ImageCard
          key={image.id}
          imgUrl={image.urls.small}
          altDescription={image.alt_description}
        />
      ))}
    </ul>
  );
}
