import Image from "next/image";

function PostCard({post}) {
    console.log(post)
  return (
    <div className="p-5">
        <div>
            <h1>Post Card</h1>
            <Image className="w-full" src={post?.featuredImage[0]?.url} alt="featured" width={100} height={100}></Image>
        </div>
    </div>
  )
}

export default PostCard