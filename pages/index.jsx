
import React from 'react'
import { BodyHome, Program, ContactForm } from '../components'
import { getFeaturedPosts } from '@/services';
import Head from 'next/head';


function test({ posts }) {
  return (
    <>
      <Head>
        <title>Indonesia Defense University Cadet Corps</title>
      </Head>
      <BodyHome featuredPosts={posts} />
      <div className="container mx-auto w-3/4">
        <ContactForm />
      </div>
    </>
  )
}

export default test;

export async function getStaticProps() {
  const posts = (await getFeaturedPosts()) || []

  return {
    props: { posts }
  }
}

