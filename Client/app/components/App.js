var React = require('react');
import log from 'loglevel';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import DemoGrid from './DemoGrid';
import MemberTable from './MemberTable';
import MemberCardView from './MemberCardView';



class App extends React.Component {
   
    componentDidMount() {
        log.setDefaultLevel(3);
        log.setLevel(1, true);
        log.debug("App Mounted");
    }

    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />                      
                        <Route path='/membertable' component={MemberTable} />
                        <Route path='/membercards' component={MemberCardView} />
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
