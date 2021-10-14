import React, {useState} from 'react';

function PostNewEvent(){
    let phantom = {
        backgroundColor: "red",
        display: 'block',
        padding: '20px',
        height: '60px',
        width: '100%',
      }
    const[id, setId] = useState();
    const[title, setTitle] = useState("");
    const[author, setAuthor] = useState("");
    const[publicationYear, setPublicationYear]= useState("");
    const[isAvailable, setIsAvailable] = useState(false);
    const[callingNumber, setCallingNumber]= useState("");

    const onIdChange = e => setId(e.target.value);
    const onTitleChange = e => setTitle(e.target.value);
    const onAuthorChange = e => setAuthor(e.target.value);
    const onPublicationYearChange = e => setPublicationYear(e.target.value);
    const onIsAvailableChange = e => setIsAvailable(e.target.value);
    const onCallingNumberChange = e => setCallingNumber(e.target.value);

    const data = { id, title, author, publicationYear, isAvailable, callingNumber };

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
      .then(res => console.log("This Response", res));
};
  return(
      <div className="postnewevent" style={phantom}>
        <form>
            <input  placeholder="Id" value={id} onChange = {onIdChange} required />
            <input  placeholder="Title" value={title} onChange = {onTitleChange} required />
            <input  placeholder="Author" value={author} onChange = { onAuthorChange} required />
            <input  placeholder="Publication Year" value={publicationYear} onChange = {onPublicationYearChange} required />
            <input  placeholder="Is Available" value={isAvailable} onChange = {onIsAvailableChange} required />
            <input  placeholder="Calling Number" value={callingNumber} onChange = {onCallingNumberChange} required />
            <button type="submit" onClick={handleSubmit}>Add New</button>
        </form>
      </div>
  );
}

export default PostNewEvent;