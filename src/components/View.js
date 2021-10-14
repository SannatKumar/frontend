import {Link} from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Table from './Table';
import Footer from './Footer';

function View (){
    return(
      <>
      <Header/>
          <Table />
          <Link to={'/postView'}>
            <button id = "postLink" className= "post-buttons" color="primary">Post New Data
            </button>
        </Link>        
      <Footer />
      </>
      )
  }
  export default View;
