import UseBookData from "../../Hooks/UseBookData";
import Card from "../Card/Card";

const Cards = () => {
 const {data} = UseBookData();
//  console.log(data);

  return (
    <div className="mb-16">
      <h1 className="text-center font-bold text-[#131313] text-4xl mb-5">Books</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
      {
        data.map(item => <Card key={item.id} item={item}></Card>)
      }
      </div>
      
    </div>
  );
};

export default Cards;