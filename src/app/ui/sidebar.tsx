import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <nav>
      <ul>
          <li>
              <div className="flex items-center space-x-2 cursor-pointer menu-item p-2" >
                  <i className="fas fa-database"></i>
                  <span>Data Structures</span>
                  <i className="fas fa-chevron-down ml-auto"></i>
              </div>
              <ul id="ds-menu" className="ml-6 mt-2 text-sm space-y-1 hidden">
                <a href="/data-structure">
                  <li className="cursor-pointer sub-item p-2">
                        <i className="fas fa-info-circle"></i> 
                        What is?
                    </li>
                </a>
                  <li className="cursor-pointer menu-item p-2" >
                      <i className="fas fa-folder"></i> Catalog
                  </li>
                  <ul id="ds-catalog" className="ml-4 mt-1 text-md hidden">
                    <a href="/array.html">
                      <li className="cursor-pointer sub-item p-2">Arrays</li>
                    </a>
                      <a href="/data-structure/stacks.html">
                        <li className="cursor-pointer sub-item p-2">Stacks</li>
                      </a>
                  </ul>
              </ul>
          </li>
          <li>
              <div className="flex items-center space-x-2 cursor-pointer menu-item p-2">
                  <i className="fas fa-code"></i>
                  <span>Algorithms</span>
                  <i className="fas fa-chevron-down ml-auto"></i>
              </div>
              <ul id="alg-menu" className="ml-6 mt-2 text-sm space-y-1 hidden">
                  <li className="cursor-pointer sub-item p-2"><i className="fas fa-info-circle"></i> What is?</li>
                  <li className="cursor-pointer menu-item p-2">
                      <i className="fas fa-folder"></i> Catalog
                  </li>
                  <ul id="alg-catalog" className="ml-4 mt-1 text-sm hidden">
                      <li className="cursor-pointer menu-item p-2">
                          <i className="fas fa-sort"></i> Sort
                      </li>
                      <ul id="sort-menu" className="ml-4 mt-1 text-sm hidden">
                          <li className="cursor-pointer sub-item p-2"><a href="/bubble-sort.html">Bubble Sort</a></li>
                          <li className="cursor-pointer sub-item p-2"><a href="/quick-sort.html">Quick Sort</a></li>
                      </ul>
                      <li className="cursor-pointer menu-item p-2">
                          <i className="fas fa-search"></i> Search
                      </li>
                      <ul id="search-menu" className="ml-4 mt-1 text-sm hidden">
                          <li className="cursor-pointer sub-item p-2"><a href="/binary-search.html">Binary Search</a></li>
                          <li className="cursor-pointer sub-item p-2"><a href="/linear-search.html">Linear Search</a></li>
                      </ul>
                  </ul>
              </ul>
          </li>
      </ul>
    </nav>
  )
}