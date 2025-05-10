import Link from "next/link";

export default function NavButtons() {
  return (
    <div className="flex gap-4 mt-10">
      <div className="w-1/2 flex flex-col">
        <p className="uppercase font-bold text-gray-500">return</p>
        <Link href="/pages/data-structure/linked-list" className="btn-disabled">
          <i className="mr-2 fa fa-arrow-left" aria-hidden="true"></i>
          Home
        </Link>
      </div>

      <div className="w-1/2 flex flex-col">
        <p className="uppercase font-bold text-right text-blue-custom">read next</p>
        <Link href="/data-structures/arrays" className="btn-info">
          Arrays
          <i className="ml-2 fa fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>  
    </div>
  )
}