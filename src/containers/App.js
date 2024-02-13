import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

// THIS IS A 'SMART COMPONENT' BECAUSE IT HAS 'STATE'

class App extends Component {
    constructor() {
        super()                     //needed
        this.state = {              //something that can change and affect our app, lives in the parent of the children that interract
            robots: [],         //not necessary here, but will be if we get our database from a website and it may change
            searchfield: ''         //this will be change by the 'onSearchChange' function to the input of the search field
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    //this function changes the state 'searchfield' seen just above here
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        //destructuring to avoid using 'this.state' in repetition
        const { robots, searchfield } = this.state;
        //this function filters the 'robots' object from the searchfield
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return !robots.length ?                                     //add ternary in case the API is too slow too load
        <h1>Loading</h1> : 
        (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>     {/* when we use the prop 'searchChange' in the component 'SearchBox', it will call the function 'onSearchChange'*/}
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>             {/* when we use the prop 'robots', it will call the function 'filteredRobots', which will return only the needed robots*/}
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;