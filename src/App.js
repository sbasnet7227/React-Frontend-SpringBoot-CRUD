//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
 import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import 'react-app-polyfill/stable';
import HomeComponent from './components/HomeComponent';

function App() {
  return ( 
  <div >
      <Router >

        <HeaderComponent />
          <div className = "container" >
            <Switch >
                <Route path = "/" exact component = {HomeComponent}></Route> 
                 <Route path = "/employees"component = {ListEmployeeComponent}></Route> 

                 {/*   step  1 */}
                <Route path= "/add-employee/:id" component= {CreateEmployeeComponent}></Route>
                 <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route> 
              </Switch>
          </div>  
        <FooterComponent /> 

      </Router> 
    </ div >
  );
}

export default App;