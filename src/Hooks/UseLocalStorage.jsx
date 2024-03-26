import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utilites/LocalStorage";

const UseLocalStorage = () => {
  const [localData, setLocalData] = useState([]);
  useEffect(()=>{
    setLocalData(getFromLocalStorage())
  },[])
  // console.log(localData);
  return {localData};
};

export default UseLocalStorage;