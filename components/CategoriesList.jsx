import { useEffect, useState } from "react";
import { getCategories } from "../services";

function CategoriesList() {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    getCategories().then((data) => setCategories(data.categories));
  }, []);
  return (
    <div className="bg-white p-5 rounded-md mt-10 capitalize">
      <h1 className="text-xl font-bold mb-5">Categories</h1>
      {categories.map((each, index) => (
        <div
          key={index}
          className="grid grid-cols-3 items-center py-2 border-b"
        >
          <h1>{each.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default CategoriesList;
