import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const DynamicListPage = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <div>
      <h1 className="text-3xl font-bold bg-[#1313130D] text-center py-4 mb-8">Books</h1>
      <div className="flex justify-center mb-8">
        <ul className="menu w-40 rounded-box">
          <li>
            <details >
              <summary className="bg-[#23BE0A] text-white hover:bg-[#23BE0A] text-lg font-semibold">Sort By</summary>
              <ul className="text-sm w-40 space-y-0 border-2 p-0">
                <li className="hover:bg-blue-500 hover:rounded"><a>Rating</a></li>
                <li className="hover:bg-blue-500 hover:rounded"><a>Number of Pages</a></li>
                <li className="hover:bg-blue-500 hover:rounded"><a>Published Year</a></li>
              </ul>
            </details>
          </li>
        </ul>
        {/* <button className="btn">Sort By</button> */}
      </div>
      {/* tabs */}

      <div className="flex items-center max-w-6xl mx-auto mb-6  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-500 dark:text-gray-500`}>
          <span>Read Books</span>
        </Link>

        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-500 dark:text-gray-500`}>
          <span>Wishlist Books</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default DynamicListPage;