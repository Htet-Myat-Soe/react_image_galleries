import React from 'react';
import { useState } from 'react';


export const Header = ({ searchText }) => {
  const [text,setText] = useState('');

  const search = (e) => {
    e.preventDefault();

    searchText(text);

  }
  return (
      <header className='shadow-lg w-100 h-16 flex justify-around items-center'>
        <h1 className='uppercase text-3xl semibold'>React Galleries</h1>
        <form onSubmit={search}>
            <input type="text" placeholder='Search Image...' onChange={e => setText(e.target.value)} className='border border-sky-500 p-2 focus:outline-none' />
            <input type="submit" value="Search" className='bg-sky-500 p-2 text-white border border-sky-500' />
        </form>
      </header>
  );
};
