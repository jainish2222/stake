import { useState,useEffect,useContext } from 'react';
import { ResContext } from '../hooks/ResContext';
import { BalContext } from '../hooks/BalContext';
import axios from "axios"

import toast, { Toaster } from 'react-hot-toast';

const BettingComponent = () => {
  const [betAmount, setBetAmount] = useState(0.000000);
  const {numBombs, setNumBombs }=useContext(ResContext)
  const {bal,setBal,Count,setbet} =useContext(BalContext)

async function subbal(){
    if (betAmount > bal) {
      alert("Insufficient Balance")
    }
    else{
      const res = await axios.post("https://stake-1.onrender.com/api/v1/account/balupdate",
      {
        betAmount:-betAmount
      },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      )
      setBal(res.data.balance)

    }
}
let profit =  (Count*0.24*betAmount)+betAmount/100;
async function addbal(){
    if (betAmount > bal) {
      alert("Insufficient Balance")
    }
    else{
      const res = await axios.post("https://stake-1.onrender.com/api/v1/account/balupdate",
      {
        betAmount:profit
      },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      )
      setBal(res.data.balance)

    }
}
  return (
    <>
    <div className="bg-gray-800 p-4 rounded-lg w-72">
      <div className="flex justify-between mb-4">
        <h2 className="text-gray-400 text-xl"><div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {bal}
        </div>
    </div></h2>
      </div>
      
      <div className="flex justify-between mb-4">
        <h2 className="text-gray-400 text-xl"><div className="flex">
        <div className="font-bold text-lg">
           Your profit is {profit}
        </div>
    </div></h2>
      </div>
      <div className="mb-4 mt-20">
        <label className="block text-gray-400 mb-1">Bet Amount</label>
        <div className="flex items-center">
          <input
            type="number"
            value={betAmount}
            onChange={(e) => {
              setBetAmount(e.target.value)
              
            }}
            className="bg-gray-700 text-white px-3 py-2 rounded-l focus:outline-none flex-grow"
          />
          <span className="bg-yellow-400 text-gray-800 px-3 py-2 rounded-r">₹</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 mb-1">Mines</label>
        <select
          value={numBombs}
          onChange={(e) => setNumBombs(e.target.value)}
          className="bg-gray-700 text-white  px-3 py-2 rounded w-full focus:outline-none"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <button onClick={()=>{subbal()
      setbet(true)
      // toast.success('amount debited')
      toast.success('amount debited');
      }}
        className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 mb-5 rounded w-full focus:outline-none">Bet</button>
      <button onClick={()=>{addbal()
        toast.success('amount credited');
        setbet(false)
        setTimeout(() => {
          location.reload()
        }, 2000);
        
      }} 
      className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 mb-5 rounded w-full focus:outline-none">Cashout</button>
    </div>
<Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
  );
  
}
export default BettingComponent;
