import { useEffect, useState } from "react";
import { getFromWishLocalStorage } from "../utilites/LocalStorage";

const useWishLocalStorage = () => {
  const [localData, setLocalData] = useState([]);
  useEffect(()=>{
    setLocalData(getFromWishLocalStorage())
  },[])
  // console.log(localData);
  return {localData};
 
};

export default useWishLocalStorage;