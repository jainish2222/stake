import { useState,useEffect } from 'react';
import axios from "axios"
const BettingComponent = () => {
  const [betAmount, setBetAmount] = useState(0.00);
 const [mines, setMines] = useState(3);
  const [bal, setbal] = useState(0);
  useEffect(async() => {
         const response = await axios.get("http://localhost:3000/api/v1/account/balance",
           {
               headers: {
                   Authorization: "Bearer " + localStorage.getItem("token")
               }
           })
           setbal(response.data.balance)
       }, [])


     

  return (
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

      <div className="mb-4 mt-20">
        <label className="block text-gray-400 mb-1">Bet Amount</label>
        <div className="flex items-center">
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            className="bg-gray-700 text-white px-3 py-2 rounded-l focus:outline-none flex-grow"
          />
          <span className="bg-yellow-400 text-gray-800 px-3 py-2 rounded-r">₹</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 mb-1">Mines</label>
        <select
          value={mines}
          onChange={(e) => setMines(e.target.value)}
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

      <button className="bg-green-500 text-white px-4 py-2 mb-5 rounded w-full focus:outline-none">Bet</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded w-full focus:outline-none">Cashout</button>
    </div>
   
  );
  
}
export default BettingComponent;
