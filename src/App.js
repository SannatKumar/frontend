import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import View from './components/View';
import PostView from './components/Postview';

function App (){
  return(
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {View} />
        <Route exact path='/postView' component = {PostView} />
      </Switch>
      </BrowserRouter>
    </div>
    )
}
export default App;