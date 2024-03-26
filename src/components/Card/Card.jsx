import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { bookId, author, bookName, image, rating, category, tags } = item || {};
  return (
    <Link to={`books-details/${bookId}`}>
      <div className="border-2 py-4 px-5 card shadow-xl flex flex-col cursor-pointer">
        <figure className="bg-[#F3F3F3] p-3 rounded-lg"><img className="h-52 object-cover object-center" src={image} alt="Shoes" /></figure>
        <div className="my-5 flex-1">
          <div className="flex items-center gap-6 mb-5">
            <div className="bg-[#23BE0A0D] text-[#23BE0A] text-base px-3 py-2 rounded-full font-medium">{tags[0]}</div>
            <div className="bg-[#23BE0A0D] font-medium text-[#23BE0A] text-base px-3 rounded-full p-2">{tags[1]}</div>
          </div>
          <h1 className="text-2xl text-[#131313] font-bold mb-3">{bookName}</h1>
          <p className="text-[#131313CC]">By: {author}</p>

        </div>
        <hr className="border-dashed mb-3" />
        <div className="flex justify-between items-center">
          <h1>{category}</h1>
          <div className="flex gap-3 items-center">
            <p>{rating}</p>
            <img className="text-white" src="/rating.png" alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;