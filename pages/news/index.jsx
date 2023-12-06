
import React from 'react'
import { PostCard, Categories, PostWidget, HeaderBerita } from '../../components';
import { getPosts } from '@/services';
import Head from 'next/head';

const News = ({ posts }) => {

    return (
        <>
            <Head>
                <title>News - Indonesia Defense University Cadet Corps</title>
            </Head>
            <div className='bg-gray-300 pt-24 lg:pb-10'>
                <div className="container mx-auto px-10 pb-8">
                    <HeaderBerita />
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className='lg:col-span-8 col-span-1'>
                            {posts.map((post) => (
                                <PostCard post={post.node} key={post.node.title} />
                            ))}
                        </div>
                        <div className="lg:col-span-4 col-span-1">
                            <div className="lg:sticky relative top-8">
                                <PostWidget />
                                <Categories />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default News

export async function getStaticProps() {
    const posts = (await getPosts()) || []

    return {
        props: { posts }
    }
}
