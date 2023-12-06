'use client';

import React from 'react';
import Image from 'next/image';

export default function ImageCard({ imgUrl, altDescription }) {
  return (
    <li style={{ border: '1px solid red' }}>
      {/* Image component from NextJS https://nextjs.org/docs/pages/api-reference/components/image */}
      <Image
        style={{ objectFit: 'cover' }}
        src={imgUrl}
        alt={altDescription}
        width={200}
        height={200}
        loading="lazy"
        className="rounded"
      />
    </li>
  );
}
