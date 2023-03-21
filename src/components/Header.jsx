/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Header({ dashbord }) {
  return (
    <>
      {dashbord && (
      <header className="container mx-auto">
        <div className="px-4 py-2 text-white flex items-center justify-between">
          <h1 className="text-[28px] text-[#4E5D78] font-bold">Stack</h1>
          <div>
            <select id="countries" className="border border-gray-300 text-[#B0B7C3] text-sm rounded-[16px] block w-[146px] h-[43px] px-[18px] py-[14px] bg-[#F0F5FA] outline-none">
              <option selected value="UK">English (UK)</option>
              <option value="BD">Bangla</option>
            </select>
          </div>
        </div>
      </header>
      )}

      {!dashbord && (
      <header className="">
        <div className="px-4 py-2 text-white flex items-center justify-between">
          <div className="relative w-full max-w-[539px]">
            <div className="absolute inset-y-0 right-[15px] flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
            </div>
            <input type="text" id="simple-search" className="bg-[#F0F5FA] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full max-w-[539px] h-[54px] pr-10 p-2.5 outline-none" placeholder="Search" required />
          </div>
          <div>
            <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
          </div>
        </div>
      </header>
      )}
    </>
  );
}

export default Header;
