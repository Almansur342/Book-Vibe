import { useParams } from "react-router-dom";
import UseBookData from "../../Hooks/UseBookData";
import { useEffect, useState } from "react";

const BooksDetails = () => {
  const { id } = useParams();
  const { data } = UseBookData();
  const [matchedData, setMatchedData] = useState({})

  useEffect(() => {
    const singleData = data.find(item => item?.bookId === parseInt(id));
    setMatchedData(singleData);
  }, [data, id, matchedData])
  // console.log(matchedData); 
  const { bookId, author, bookName, image, rating, category, tags,review } = matchedData || {};
   console.log(tags);
  return (
    <section className=" mb-16 rounded-lg max-w-6xl mx-auto">
      <div className="container gap-8 flex flex-col mx-auto   lg:flex-row">
      <div className="rounded-lg dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center p-20 mt-8 lg:mt-0 :h-96">
          <img src={image} alt="" className="object-cover h-80" />
        </div>
        <div className="flex flex-col  rounded-sm lg:max-w-xl xl:max-w-xl lg:text-left">
          <h1 className="text-4xl text-[#131313] font-bold">{bookName}</h1>
          <p className="text-[#131313CC] text-xl">By: {author}</p>
          <hr className="my-4" />
          <p className="text-[#131313CC] text-xl">{category}</p>
          <hr className="my-4" />
           <h1 className="text-base font-bold text-[#131313B3]"><span className="text-lg text-[#131313]"> Review: </span>{review}</h1>
            
           <div className="flex items-center gap-6 my-5">
            <h1 className="bg-[#23BE0A0D] text-[#23BE0A] text-base px-6 py-2 rounded-full font-medium">{tags==undefined?"undefined":`${tags[0]}`}</h1>
            <h1 className="bg-[#23BE0A0D] text-[#23BE0A] text-base px-6 py-2 rounded-full font-medium">{tags==undefined?"undefined":`${tags[1]}`}</h1>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BooksDetails;