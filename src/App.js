import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css'
import CRUD from './CRUD'
import CA1 from './CA1'
import Showdata from "./Showdata" 
import Delete from './Delete'
import Update from "./Update" 
function App() {
    return (
    <Router>
        <div>
        <Switch>
            <Route exact path="/" component={CRUD}></Route>
            <Route exact path="/CRUD" component={CRUD}></Route> 
            <Route exact path="/CA1" component={CA1}></Route> 
            <Route exact path="/Showdata" component={Showdata}></Route> 
            <Route exact path="/Update" component={Update}></Route>
            <Route exact path="/Delete" component={Delete}></Route>  
        </Switch>
        </div>
    </Router>
    );
}

export default App