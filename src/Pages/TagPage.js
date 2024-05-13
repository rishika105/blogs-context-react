import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import Header from '../Components/Header'
import Blogs from '../Components/Blogs'
import Pagination from '../Components/Pagination'

const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    
  return (
    <div className='max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] mx-auto'>
      <Header/>
      <div className='relative flex -mb-[110px] gap-4 ml-[20px]'>
        <button
        onClick= {() => navigation(-1)}
        className='border-2 border-gray-300 py-1 px-4 rounded-md'
        >
            Back
        </button>
        <h2 className='font-bold text-xl'>
            Blogs Tagged <span className='underline'>#{tag}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>

    </div>
  )
}

export default TagPage
