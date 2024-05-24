import { useState,useEffect , createContext } from "react";
import axios from "axios"

const BalContext = createContext()

const BalProvider = ({children})=>{

    const [bal,setBal] = useState(0);
    const [Count,setCount] = useState(1);
    const [bet,setbet]= useState(false);

    useEffect(() => {
        const fetchBalance = async () => {
          try {
            const response = await axios.get("https://stake-lo8m.onrender.com/api/v1/account/balance", {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            });
            setBal(response.data.balance);
          } catch (error) {
            console.error("Error fetching balance:", error);
          }
        };
    
        fetchBalance();
      }, []);
      return (
        <BalContext.Provider value={{ bal, setBal,Count,setCount,bet,setbet}}>
          {children}
        </BalContext.Provider>
      );
}


export {BalContext, BalProvider}