import React from 'react'
import Header from '../Components/Header'
import Blogs from '../Components/Blogs'
import Pagination from '../Components/Pagination'
import { useNavigate, useLocation } from 'react-router-dom'

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
        <div className='max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] mx-auto'>
      <Header/>
      <div className='relative flex -mb-[110px] gap-4 ml-[20px]'>
        <button
        className='border-2 border-gray-300 py-1 px-4 rounded-md'
        onClick= {() => navigation(-1)}>
            Back
        </button>
        <h2 className='font-bold text-xl'>
            Blogs on <span className='underline'>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
