import React from 'react';
function Header(){    
    var style = {
        backgroundColor: "#000000",
        color: "#fff",
        fonts: "sans-serif",
        fontsize: "34",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        top : "0",
        height: "60px",
        width: "100%",
    }
    
    var phantom = {
      display: 'block',
      padding: '20px',
      height: '60px',
      width: '100%',
    }
    // var headerStyle = {
    //     border: '2px',
    //     backgroundColor: 'EDB204',
    // }
        return (
            <div>
                <div style={phantom} />
                <div style={style}>
                   <h1 > Aventra Config</h1>
                </div>
            </div>
        )
    
}
export default Header;

