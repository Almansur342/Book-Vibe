import { Bounce, ToastContainer, toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';

export const LocalStorage = (data) => {
    const saveData = JSON.parse(localStorage.getItem("read")) || [];
    const existedData = saveData.find(item => item.bookId == data.bookId);
    if(!existedData){
      saveData.push(data);
      localStorage.setItem("read",JSON.stringify(saveData));
      toast.success('Added Successfully', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }else{
      toast.warn('Already Exist', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  }
  export  const getFromLocalStorage = () =>{
      const data = JSON.parse(localStorage.getItem("read")) || [];
      return data;
    }
    


    export const wishLocalStorage = (data) => {
      const saveData = JSON.parse(localStorage.getItem("wish")) || [];
      const wishData = JSON.parse(localStorage.getItem("read")) || [];
      const existedData = saveData.find(item => item.bookId == data.bookId);
      const existedWishData = wishData.find(item => item.bookId == data.bookId);

      if(!existedData && !existedWishData){
        saveData.push(data);
        localStorage.setItem("wish",JSON.stringify(saveData));
        toast.success('Added Successfully', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }else{
        toast.warn('Already Exist', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    }
  
 
    export  const getFromWishLocalStorage = () =>{
      const data = JSON.parse(localStorage.getItem("wish")) || [];
      return data;
    }
    
  