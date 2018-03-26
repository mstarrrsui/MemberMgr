var React = require('react');
var Popular = require('./Popular');
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';
import DemoGrid from './DemoGrid';



class App extends React.Component {
    
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/battle' component={Battle} />
                        <Route path='/battle/results' component={Results} />
                        <Route path='/popular' component={Popular} />
                       
                        <Route exact path='/grid' component={DemoGrid} />
                        
                        <Route render={function() { 
                           return <p>Not Found</p>    
                        }} />
                    </Switch>
                </div>
            </Router>
        );
    }

}

module.exports = App;
