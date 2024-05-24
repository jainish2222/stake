import { useState,useEffect , createContext } from "react";
import axios from "axios"

const ResContext = createContext()

const ResProvider = ({children})=>{
    const [grid, setGrid] = useState([]);
    const [numBombs, setNumBombs] = useState(3);
  //   const arr= Array(25).fill(false)

    useEffect(() => {
      const ab = fetchGrid();
      console.log(ab)
    }, [numBombs]);
  
    const fetchGrid = async () => {
      const response = await axios.get(`https://stake-lo8m.onrender.com/generate-array/?name=${numBombs}`)
        setGrid(response.data)
    };
      return (
        <ResContext.Provider value={{ grid,setGrid,numBombs, setNumBombs }}>
          {children}
        </ResContext.Provider>
      );
}


export {ResContext, ResProvider}