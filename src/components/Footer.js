import React from 'react';
function Footer(){    
    var style = {
        backgroundColor: "#ece7e7",
        color: "#808285",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    }
    
    var phantom = {
      display: 'block',
      padding: '20px',
      height: '60px',
      width: '100%',
    }
        return (
            <div>
                <div style={phantom} />
                <div style={style}>
                   <h3> @Softwares Made in Finland.</h3>
                </div>
            </div>
        )
    
}
export default Footer;

