export default function NavButtons() {
  return (
    <div className="flex gap-4 mt-10">
      <div className="w-1/2 flex flex-col">
        <p className="uppercase font-bold text-gray-500">return</p>
        <a href="/pages/data-structure/linked-list.html" className="btn-disabled">
          <i className="mr-2 fa fa-arrow-left" aria-hidden="true"></i>
          Home
        </a>
      </div>

      <div className="w-1/2 flex flex-col">
        <p className="uppercase font-bold text-right text-blue-custom">read next</p>
        <a href="/pages/data-structure/arrays" className="btn-info">
          Arrays
          <i className="ml-2 fa fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>  
    </div>
  )
}