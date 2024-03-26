import UseLocalStorage from "../../Hooks/UseLocalStorage";
import Read from "../../components/Read/Read";

const ListedBooks = () => {
  const {localData} = UseLocalStorage();
  console.log(localData);
  return (
    <div>
      {
        localData.map(data => <Read key={data.public/data.json} data={data}></Read>)
      }
    </div>
  );
};

export default ListedBooks;