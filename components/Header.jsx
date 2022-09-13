import Link from "next/link";

function Header() {
  return (
    <div className="container px-10 mx-auto mb-8">
      <div className="inline-block py-8 w-full border-b border-blue-400">
        <div className="md:float-left">
          <Link href={"/"}>
            <span className="text-4xl font-bold text-white"> GRAPH CMS</span>
          </Link>
        </div>
        <div className="hidden mt-1 md:float-right md:block">
          <Link href={"/webdev"}>
            <span className="ml-5 font-semibold text-white align-middle cursor-pointer">
            Web Development
            </span>
           </Link>
          <Link href={"/webdev"}>
            <span className="ml-5 font-semibold text-white align-middle cursor-pointer">
             Development
            </span>
           </Link>
          <Link href={"/webdev"}>
            <span className="ml-5 font-semibold text-white align-middle cursor-pointer">
             Development
            </span>
           </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
