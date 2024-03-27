import useWishLocalStorage from "../../Hooks/useWishLocalStorage";
import Wish from "../../components/Wish/Wish";

const WishList = () => {
  const {localData} = useWishLocalStorage();
  console.log(localData);
  return (
    <div>
       {
          localData.map(data => <Wish key={data.bookId} data={data}></Wish>)
        }
    </div>
  );
};

export default WishList;