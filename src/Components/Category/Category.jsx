import React from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';


const Category = () => {
    return (
        <div className='m-10 flex justify-end'>
          <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-slate-200 px-4 py-2 text-sm font-medium text-black/80 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          Category
          <ChevronDownIcon 
           className="ml-2 -mr-1 h-5 w-5 text-black/80 hover:text-violet-100"
              aria-hidden="true"
          ></ChevronDownIcon>
        </Menu.Button>
      </div>
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        <div className="px-1 py-1 ">
          <Menu.Item>
            {({ active }) => (
              
              <Link to={`/`}
                className={`${
                  active ? 'bg-violet-500 text-white' : 'text-gray-900'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                All Products
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link to={`/categoryData/Mobile`}
                className={`${
                  active ? 'bg-violet-500 text-white' : 'text-gray-900'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                Mobile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link to={`/categoryData/Laptop`}
                className={`${
                  active ? 'bg-violet-500 text-white' : 'text-gray-900'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
               Laptop
              </Link>
            )}
          </Menu.Item>
        </div>
        <div className="px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <Link to={`/categoryData/Drone`}
                className={`${
                  active ? 'bg-violet-500 text-white' : 'text-gray-900'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
               Drone
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link to={`/categoryData/Camera`}
                className={`${
                  active ? 'bg-violet-500 text-white' : 'text-gray-900'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                Camera
              </Link>
            )}
          </Menu.Item>
        </div>
        <div className="px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <Link to={`/categoryData/HeadPhone`}
                className={`${
                  active ? 'bg-violet-500 text-white' : 'text-gray-900'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                HeadPhone
              </Link>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
        </div>
    );
};

export default Category;