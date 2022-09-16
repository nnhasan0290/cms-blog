import { useEffect, useState } from "react";
import { getRecentPosts } from "../services";
import moment from "moment";
import Image from "next/image";

function RecentPosts() {
  const [recentPosts, setRecentPosts] = useState([]);
  console.log(recentPosts);

  useEffect(() => {
    getRecentPosts().then((data) => setRecentPosts(data.posts));
  }, []);
  return (
    <div className="bg-white p-5 rounded-md">
      <h1 className="text-xl font-bold mb-5">Recent Posts</h1>
      {recentPosts.map((each, index) => (
        <div
          key={index}
          className="grid grid-cols-3 items-center py-2 border-b"
        >
          <div>
            <Image
              className="rounded-full"
              src={each.featuredImage[0].url}
              width={60}
              height={60}
            ></Image>
          </div>
          <p>{moment(each.createdAt).format("MMM DD, YYYY")}</p>
          <h1>{each.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default RecentPosts;
