import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

// const app = props => {
//   const [personsState, setPersonsState] = useState(
//     {
//       persons: [
//         {name: "Max", age: 28},
//         {name: "Manu", age: 29},
//         {name: "Stephanie", age: 26}
//       ],
//       otherState: "some other value"
//     });

//   const switchNameHandler = () => {
//     // DON'T DO THIS  this.state.persons[0].name = "Maximilian";
//     setPersonsState({
//       persons: [
//       {name: "Maximilian", age: 28},
//       {name: "Manu", age: 29},
//       {name: "Stephanie", age: 27}
//     ]
//   });
//   };
  
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch name</button>
//       <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
//       <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}/>
//       <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}>My hobby: racing</Person>
//   </div>
//   )
// }

// export default app;


class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 26}
    ],
    otherState: "some other value"
  }

  switchNameHandler = (newName) => {
      console.log("was clicked");
      // DON'T DO THIS  this.state.persons[0].name = "Maximilian";
      this.setState({
        persons: [
        {name: newName, age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 27}
      ]
    });
  }
  
  nameChangehandler = (event) => {
    this.setState({
      persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: event.target.value, age: 27}
    ]
  });
  }

  // state = { apiResponse: "" };

  // callAPI() {
  //     fetch("http://localhost:9000/testAPI")
  //         .then(res => res.text())
  //         .then(res => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //     this.callAPI();
  // }

    render() {
      return (
        <div className="App">

          {/* <h1> {this.state.apiResponse}</h1> */}
          <h1>Hi, I'm a React Website</h1>
          <p>This is really working!</p>
          <button onClick={() => this.switchNameHandler('Maximillian')}>Switch name</button>
          <Person 
            name = {this.state.persons[0].name} 
            age = {this.state.persons[0].age}/>
          <Person 
            name = {this.state.persons[1].name} 
            age = {this.state.persons[1].age}/>
          <Person 
            name = {this.state.persons[2].name} 
            age = {this.state.persons[2].age} 
            click={this.switchNameHandler.bind(this, "Max!!")} 
            changed={this.nameChangehandler}>My hobby: racing</Person>
        </div>
      );
    }
}

export default App;
