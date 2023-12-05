import React from 'react';

export default function Image({ imgUrl, altDescription }) {
  return (
    <li>
      <img src={imgUrl} alt={altDescription} />
    </li>
  );
}
