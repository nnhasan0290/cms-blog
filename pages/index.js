import Head from 'next/head'
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { getPosts } from '../services';
export default function Home({posts}) {
  console.log(posts)
  return (
    <div>
      <Head>
        <title>CMS blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {
        posts.map((each,index) => (
          <PostCard post={each} key={index}/>

        ))
      }
     
    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];
  return{
    props: {posts}
  }
}
