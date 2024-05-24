import { Appbar } from "../components/Appbar"
import { Users } from "../components/Users "
import { useState,useContext } from "react"
import { useEffect } from "react"
import {Button} from "../components/Button"
import BettingComponent from "../components/BettingComponent"

// import axios from "axios"
import GridComponent from "../components/GridComponent"
import {BalContext} from "../hooks/BalContext"
// import { useNavigate } from "react-router-dom"
// import { BottomWarning } from "../components/BottomWarning"
export const Dashboard = ()=>{
    // const navigate = useNavigate();
     const {bal}=useContext(BalContext)
   return(
    <div >
        <Appbar/>
      <div className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-12 mt-10">
        <div className="sm:col-span-3 rounded-lg sm:ml-11 ml-[10vw]"><BettingComponent/></div>
        <div className="sm:col-span-6 rounded-lg sm:mr-11"><GridComponent/></div>
        <div className="sm:col-span-3 rounded-lg "><Users/></div>
      </div>
      <div>{bal}</div>
    </div>
   )
}