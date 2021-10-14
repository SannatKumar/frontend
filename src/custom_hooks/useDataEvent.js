import {useState, useEffect} from 'react';

//Custom Hooks to fetch the data
const useDataEvent = () =>{

const [error, setError] = useState(null);
const [loading, setLoading]= useState(false);
const [dataEvent, setDataEvent]= useState([]);   
useEffect(()=>{
    async function init()
    {
        try
        {
            const BASEURL = "https://localhost:44361/api/XmlContent";        
            const res = await  fetch(BASEURL);
            const response = await res.json();
            console.log("This is After Conversion",response);
            setDataEvent(response);
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
return {dataEvent, loading, error};
}
export default useDataEvent;