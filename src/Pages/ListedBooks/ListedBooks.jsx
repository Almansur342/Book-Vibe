
import UseLocalStorage from "../../Hooks/UseLocalStorage";
import Read from "../../components/Read/Read";
const ListedBooks = () => {
 
  const { localData } = UseLocalStorage();
  // console.log(localData);
  // const [products, setProducts] = useState([]);

  // const newData = [...localData];
  // setProducts(newData);
  // console.log(products);
  // console.log('heloo')


  return (
      <div>
        {
          localData.map(data => <Read key={data.bookId} data={data}></Read>)
        }
      </div>
  );
};

export default ListedBooks;