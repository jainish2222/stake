import { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const GridComponent = () => {
  const [grid, setGrid] = useState([]);
  const [numBombs, setNumBombs] = useState(3);
//   const arr= Array(25).fill(false)
  const [count,setcount]= useState(0);
  useEffect(() => {
    const ab = fetchGrid();
    console.log(ab)
  }, [numBombs]);

  const fetchGrid = async () => {
    const response = await axios.get(`https://stake-lo8m.onrender.com/generate-array/?name=${numBombs}`)
      setGrid(response.data)
  };
 


//   const renderCellContent = (content) => {
//     console.log(content)
//     if (content) {
//       return <div  className={`${click ? 'visible' : 'invisible'} bg-green-600 min-h-[90px] p-2 rounded-md`}>gem</div>
//     }
//     else{
//         return <div  className={`${click ? 'visible' : 'invisible'} bg-red-600 min-h-[90px] p-2 rounded-md`}>bomb</div>
//     }
//   };
function changecolor(e,value){
{
    console.log(e.target.className)
    e.target.className=`${value ? 'bg-green-600 min-h-[90px] p-2 rounded-md' : 'bg-red-600 min-h-[90px] p-2 rounded-md'}`
    setcount(count+1);
    if(!value)
        {
            alert("game is over! and you lose money")
            location.reload()
        }
}
}   
  return (
   <>
   <div className="grid grid-cols-5 gap-2 justify-center">
    {
    grid.map((value, index) => {
              return <div key={index} onClick={(e)=>{changecolor(e,value)}} className="bg-gray-600 min-h-[90px] p-2 rounded-md">{value}
            
    </div>
            })
    }     
  </div>
  <div className="bg-gray-800 p-4 rounded-lg w-72">
      <div className="flex justify-between mb-4">
        <h2 className="text-gray-400 text-xl">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {count/2}X
        </div>
       </h2>
      </div>
      </div>
   </>
  );
}

export default GridComponent;