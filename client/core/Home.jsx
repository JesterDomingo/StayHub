// Import the IconButtons component
import React from 'react';
import IconButtons from '../src/components/IconButtons/IconButtons';
import CardGrid from '../src/components/CardGrid/CardGrid';

export default function Home() {
  return (
    <div className='container'>
      {/* Include the IconButtons component */}
      <div className="landscape-layout">
        <IconButtons />
        <CardGrid />
      </div>
    </div>
  )
}