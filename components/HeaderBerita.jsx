import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { getCategories } from '@/services'



const HeaderBerita = () => {
    const[categories,setCategories] = useState([])
    useEffect(()=>{
        getCategories()
        .then((newCategories)=>setCategories(newCategories))
    },[])

  return (
    <div>
        <div className="container mx-auto px-10 mb-8 ">
            <div className="border-b-4 w-full inline-block border-[#650000] py-8">
                <div className="md:float-left block">
                <Link href="/news">
                    <span className="cursor-pointer font-bold text-4xl text-black">Narawarta</span>
                </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category)=>(
                        <Link key={category.slug} href={`/news/category/${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderBerita
