import moment from "moment";
import Link from "next/link";

function PostCard({ post }) {
  return (
    <div className="flex flex-col p-5 space-y-5 mb-10 text-center capitalize bg-white rounded-md">
      <div className="">
        <img
          className="overflow-hidden rounded-md w-full"
          src={post?.featuredImage[0]?.url}
          alt="featured"
        />
      </div>
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <div className="flex justify-center space-x-3">
        <img
          className="w-[40px] rounded-full items-center border border-gray-500"
          src={post.author.photo.url}
          alt=""
        />
        <p className="flex items-center">{post.author.name}</p>
      </div>
      <div className="flex justify-center space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>

        <p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
      </div>
      <p className="px-5 max-w-[500px] mx-auto">{post.excerpt}....</p>
      <div className="pt-5 pb-10">
        <Link href={"/webdev"}>
          <span className="px-6 py-3 text-white bg-black rounded-full transition duration-300 cursor-pointer hover:bg-gray-700">
            continue reading
          </span>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
