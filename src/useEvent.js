import {useState, useEffect} from 'react';


const useEvent = () =>{

const [error, setError] = useState(null);
const [loading, setLoading]= useState(false);
const [data, setData]= useState([]);   
useEffect(()=>{
    async function init()
    {
        try
        {
            const BASEURL = "https://localhost:44361/api/xmlvalues";
            const res = await  fetch(BASEURL);
            const response = await res.json();
            console.log("This is After Conversion",response);
            setData(response);
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
return {data, loading, error};
}
export default useEvent;