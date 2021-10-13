import {useState, useEffect} from 'react';



const useBookEvent = () =>{

const [error, setError] = useState(null);
const [loading, setLoading]= useState(false);
const [dataBook, setDataBook]= useState([]);   
useEffect(()=>{
    async function init()
    {
        try
        {
            const BASEURL = "https://localhost:44361/api/XmlContent";        
            const res = await  fetch(BASEURL);
            const response = await res.json();
            console.log("This is After Conversion",response);
            setDataBook(response);
        }
        catch(error)
        { 
          setError(error);
          setLoading(true);
        }
        finally
        { 
          setLoading(true);
        }     
    }
    init();
}, []);

console.log("This is about to pass");
return {dataBook, loading, error};
}
export default useBookEvent;