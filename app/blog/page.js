import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import fs, {readFileSync} from "fs";


const blogs = [
    {
        title: 'First Blog',
        description: 'This is the first blog description.',
        slug: 'first-blog',
        date: '01/10/2024',
        author: 'Fayaz Ahmed',
        image: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        title: 'Second Blog',
        description: 'This is the second blog description.',
        slug: 'second-blog',
        date: '01/10/2024',
        author: 'Fayaz Ahmed',
        image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        title: 'Third Blog',
        description: 'This is the third blog description.',
        slug: 'third-blog',
        date: '01/10/2024',
        author: 'Fayaz Ahmed',
        image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
];

const Blog = () => {
  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-4xl font-semibold mb-8 text-center'>Blog</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogs.map((blog, index) => (
                <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden'>
                    <img src={blog.image} alt={blog.title} className='w-full h-64 object-cover' />
                    <div className='p-4'>
                        <h2 className='text-2xl font-semibold mb-2'>{blog.title}</h2>
                        <p className='text-gray-600 mb-4'>{blog.description}</p>
                        <div className='text-sm text-gray-500 mb-4'>
                            <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString()}</span>
                        </div>

                        <Link href={`/blogpost/${blog.slug}`} className={buttonVariants ? buttonVariants({ variant: "outline" }) : "border border-gray-400 rounded px-4 py-2 hover:bg-gray-100"}>
                            Click Here
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blog;
