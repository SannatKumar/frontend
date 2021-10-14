import React, {useState} from 'react';

const PostNewEvent = () =>{
    // let phantom = {
    //     backgroundColor: "red",
    //     display: 'block',
    //     padding: '20px',
    //     height: '60px',
    //     width: '100%',
    //   }
    const[monitorEvent, setMonitorEvent] = useState("");
    const[folder, setFolder] = useState("");
    const[filter, setFilter] = useState("");
    const[action, setAction]= useState("");
    const[property, setProperty] = useState("");
    const[query, setQuery]= useState("");


    const onMonitorEventChange = e => setMonitorEvent(e.target.value);
    const onFolderChange = e => setFolder(e.target.value);
    const onFilterChange = e => setFilter(e.target.value);
    const onActionChange = e => setAction(e.target.value);
    const onPropertyChange = e => setProperty(e.target.value);
    const onQueryChange = e => setQuery(e.target.value);

    const data = { monitorEvent, folder, filter, action, property, query};

    const handleSubmit = (e)=> {
        e.preventDefault();    
    
    
    console.log(data);
    const requestOptions = {
      method: "POST",
      headers: {'Content-Type': 'application/json', 'charset':'utf-8' },
      body: JSON.stringify(data),
    };
    fetch("https://localhost:44361/api/xmlcontent/content", requestOptions)
      .then(response => response.json())
      .then(res => console.log("Ole Hyva",res));
      const url = "http://localhost:3000";
      window.location.assign(url);
    };
      
    
  return(
      <div >
        <form className="postNewEvent">
            <input  placeholder="TypeName" value={monitorEvent} onChange = {onMonitorEventChange} required />
            <input  placeholder="Folder" value={folder} onChange = {onFolderChange} required />
            <input  placeholder="Filter" value={filter} onChange = { onFilterChange} required />
            <input  placeholder="Action" value={action} onChange = {onActionChange} required />
            <input  placeholder="Property" value={property} onChange = {onPropertyChange} required />
            <input  placeholder="Query" value={query} onChange = {onQueryChange} required />
            <button className = "addNew" type="submit" onClick={handleSubmit} >Save</button>
        </form>
      </div>
  );
}

export default PostNewEvent;