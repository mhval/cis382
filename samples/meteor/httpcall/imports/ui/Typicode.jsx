import React, { Component, PropTypes } from 'react';
import { check } from 'meteor/check'

export default class Typicode extends Component {
  render() {
    if (Object.keys(this.props.data).length > 0) {
        let results = JSON.parse(this.props.data.content);
        // Why an array? Each element is an object, so make an array of objects
        // http://stackoverflow.com/questions/22876978/loop-inside-react-jsx
        let listItems = [];
        // You could use the standard for loop or ES6 arrow function with map
        /*
        for (let i = 0; i < results.length; i++) {
            let s = results[i].name;
            let id = results[i].id;
            // Try without key and see what error you get
            listItems.push(<li key={id}>{s}</li>);
        }
        */
        // ES6 arrow function uses less code
        results.map(user => listItems.push(<li key={user.id}>{user.name}</li>));
        return (
            <div>
            <ul>
            { listItems }
            </ul>
            </div>
        );
    } else {
        return null;        
    }
  }
}

Typicode.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  data: PropTypes.object.isRequired,
};