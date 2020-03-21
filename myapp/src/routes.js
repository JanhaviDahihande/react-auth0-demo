import React, {Component} from 'react';
import Callback from './functional/callback';
import {Router, Route, Switch} from 'react-router';
import history from './utils/history';
import Auth from './utils/auth';
import Container1 from './ containers/container1';

const auth = new Auth();

const handleAuthentication = (props) => {
    if(props.location.hash) {
        auth.handleAuth();
    }
}
class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Switch>
                            <Route exact path='/' render={() => <Container1 auth={auth}/> }/>
                            <Route path='/callback' render={(props) => { handleAuthentication(props); return <Callback />}}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Routes;