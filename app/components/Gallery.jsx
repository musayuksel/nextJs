'use client';
import React, { useState, useEffect } from 'react';
import Image from './Image';
import { fetchImages } from '../utils/fetchData';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchImages();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <ul>
      {images.map((image) => (
        <Image
          key={image.id}
          imgUrl={image.urls.small}
          altDescription={image.alt_description}
        />
      ))}
    </ul>
  );
}
