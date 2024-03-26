const Read = ({data}) => {
  const {image,bookName,author,category,tags,publisher,yearOfPublishing,rating} = data || {};
  return (
    <div className=" flex flex-col max-w-6xl mx-auto p-6 sm:flex-row border-2 mb-6">
      <div className="flex fle space-x-2 sm:space-x-4">
        <div className="bg-[#1313130D] p-10 rounded-lg">
        <img className=" flex-shrink-0 object-cover  dark:border- rounded outline-none h-32 w-40 dark:bg-gray-500" src={image} alt="Polaroid camera" />
        </div>
        
        {/* <div className="flex flex-col justify-between w-full pb-4"> */}
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">{bookName}</h3>
              <p className="text-sm dark:text-gray-600">By : {author}</p>
              <div>
                 <h1>Tag</h1>
                 <p>{tags[0]}</p>
                 <p>{tags[1]}</p>
                 <div>
                   <img src="/location.png" alt="" />
                   <p>Year of Publishing: {yearOfPublishing}</p>
                 </div>
                 <hr className="my-3" />
              </div>
              <div>
                <p>Category: {category}</p>
                <p> Rating: {rating}</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Read;