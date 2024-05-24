import { useState,useContext } from 'react';
// import axios from 'axios';
import { ResContext } from '../hooks/ResContext';
import {BalContext} from '../hooks/BalContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom"
const GridComponent = () => {
  const [count,setcount]= useState(0);
 const {grid}=useContext(ResContext)
 const {setCount,bet,setbet}=useContext(BalContext)
//  const navigate = useNavigate();

 // use for test
//   const renderCellContent = (content) => {
//     console.log(content)
//     if (content) {
//       return <div  className={`${click ? 'visible' : 'invisible'} bg-green-600 min-h-[90px] p-2 rounded-md`}>gem</div>
//     }
//     else{
//         return <div  className={`${click ? 'visible' : 'invisible'} bg-red-600 min-h-[90px] p-2 rounded-md`}>bomb</div>
//     }
//   };

function changecolor(e,value,bet){
  if(bet)
    {
      console.log(e.target.className)
      e.target.className=`${value ? 'bg-green-600 min-h-[90px] p-2 rounded-md' : 'bg-red-600 min-h-[90px] p-2 rounded-md'}`
      setcount(count+1);
      setCount(count+1);
      if(!value)
          {
            toast.error('game is over! and you lose money!', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark"
              });
              setbet(false);
              setTimeout(() => {
                location.reload()
              }, 2000);
          }
    }
}   
  return (
   <>
   <div className="grid grid-cols-5 gap-2 justify-center">
    {
    grid.map((value, index) => {
              return <div key={index} onClick={(e)=>{changecolor(e,value,bet)}} className="bg-gray-600 min-h-[90px] p-2 rounded-md">{value}
            
    </div>
            })
    }     
  </div>
  <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"/>
   </>
  );
}

export default GridComponent;