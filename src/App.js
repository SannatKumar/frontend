import './App.css';
import PostNewEvent from './components/PostNewEvent';
import useBookEvent from './custom_hooks/useBookEvent';
import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';



function App (){
  //const {data} = useEvent();
  const {dataBook} = useBookEvent();
  console.log(dataBook);

    return(
        <>
        <Header/>
        <Table />
        <PostNewEvent />
        <Footer />
        </>
    )
}
export default App;