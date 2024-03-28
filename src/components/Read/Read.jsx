import { Link, NavLink } from "react-router-dom";

const Read = ({data}) => {
  const {image,bookName,author,category,tags,publisher,yearOfPublishing,rating,totalPages,bookId} = data || {};
  return (
    <div className=" flex flex-col  max-w-6xl mx-auto p-6 sm:flex-row border-2 mb-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="bg-[#1313130D] p-20 lg:p-10 rounded-lg">
        <img className=" flex-shrink-0 object-cover  dark:border- rounded outline-none h-40 lg:h-40 w-full lg:w-40 dark:bg-gray-500" src={image} alt="Polaroid camera" />
        </div>
        
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold sm:pr-8 text-[#131313]">{bookName}</h3>
              <p className="text-base text-[#131313CC]">By : {author}</p>
              <div className="flex flex-col lg:flex-row gap-5 items-center mb-8">
                 <div className="flex -ml-14 lg:ml-0 gap-3 items-center">
                 <h1 className="text-[#131313] font-bold">Tag</h1>
                 <p className="bg-[#23BE0A0D] font-medium text-[#23BE0A] text-xs lg:text-base px-2 lg:px-4 rounded lg:rounded-full p-2">{tags[0]}</p>
                 <p className="bg-[#23BE0A0D] font-medium text-[#23BE0A] text-xs lg:text-base px-2 lg:px-4 rounded lg:rounded-full p-2">{tags[1]}</p>
                 </div>
                 <div className="flex -ml-20 lg:ml-0 gap-1">
                   <img src="/location.png" alt="" />
                   <p className="text-[#131313CC]">Year of Publishing: {yearOfPublishing}</p>
                 </div>
               
              </div>
              <div className="flex  flex-col lg:flex-row gap-7">
                <div className="flex gap-2">
                  <img src="/add.png" alt="" />
                <h1 className="text-[#13131399]">Publisher: {publisher}</h1>
                </div>
                <div className="flex gap-1">
                  <img src="/page.png" alt="" />
                  <h1 className="text-[#13131399]">Page: {totalPages}</h1>
                </div>
                 
              </div>
              <hr className="" />
              <div className="flex gap-5">
                <p className="bg-[#328EFF26] font-medium text-[#328EFF] text-xs lg:text-base px-4 rounded lg:rounded-full p-1 lg:p-2">Category: {category}</p>
                <p className="bg-[#FFAC3326] font-medium text-[#FFAC33] text-xs lg:text-base px-4 rounded lg:rounded-full p-1 lg:p-2"> Rating: {rating}</p>
                <Link to={`/books-details/${bookId}`} className="bg-[#23BE0A] font-medium text-[#FFFFFF] text-xs lg:text-base px-4 rounded lg:rounded-full p-1 lg:p-2">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div> 
  );
};

export default Read;