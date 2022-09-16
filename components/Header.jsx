import Link from "next/link";
import { useEffect, useState } from "react";
function Header() {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    getCategories().then((data) => setCategories(data.categories));
  }, []);
  return (
    <div className="container px-10 mx-auto mb-8">
      <div className="inline-block py-8 w-full border-b border-blue-400">
        <div className="md:float-left">
          <Link href={"/"}>
            <span className="text-4xl font-bold text-white"> GRAPH CMS</span>
          </Link>
        </div>
        <div className="hidden mt-1 md:float-right md:flex space-x-5">
          {categories.map((each, index) => {
            return (
              <div key={index} className="">
                <Link href="/">
                  <span className="text-lg font-semibold text-white capitalize">
                    {each.name}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
