import { Appbar } from "../components/Appbar"
import { Users } from "../components/Users "
import { useState } from "react"
import { useEffect } from "react"
import {Button} from "../components/Button"
import BettingComponent from "../components/BettingComponent"
import axios from "axios"
import GridComponent from "../components/GridComponent"
// import { useNavigate } from "react-router-dom"
// import { BottomWarning } from "../components/BottomWarning"
export const Dashboard = ()=>{
    // const navigate = useNavigate();
    const [bal, setbal] = useState(0);
useEffect(async() => {
       const response = await axios.get("https://stake-lo8m.onrender.com/api/v1/account/balance",
         {
             headers: {
                 Authorization: "Bearer " + localStorage.getItem("token")
             }
         })
         setbal(response.data.balance)
     }, [])
     
   return(
    <div >
        <Appbar/>
      <div className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-12">
        <div className="sm:col-span-3 rounded-lg"><BettingComponent/></div>
        <div className="sm:col-span-6 rounded-lg"><GridComponent/></div>
        <div className="sm:col-span-3 rounded-lg"><Users/></div>
      </div>
    </div>
   )
}