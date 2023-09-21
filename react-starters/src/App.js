import React from 'react';
//React Hooks
import { useState } from 'react'; //useState to manage State


////ES6 Check

//Class
class Name{
  constructor({name, job}){
    this.name = name;
    this.job = job;
  }
  myJob(){
    return 'I am a '+ this.job;
  }
}

// Inhertance

export class NewComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hello: false
    }
  }
  render(){
    const myName = new Name({name:"Ram", job:"SDE"});

    //Arrow function
    const callHello = ()=>{
      this.setState({hello: !this.state.hello})
    }

    //type of variable 
    let letVariable = 2;
    const constVariable = 5;
    var varVariable = 3;

    // Array functions
    let myArray = [1,2,3,4];

    const newElement = myArray.map(key =>{
      return(
        <div>
          <h4 key ={key}>{key}</h4>
        </div>
      )
    })
    return (
      <div className="App">
        <h1>{this.state.hello?"Hello":""} I am {myName.name} <button onClick={callHello}>Click me</button></h1>
        <h2>{myName.myJob()}</h2>
        <h3>"letVariable" : {letVariable}, "constVariable" : {constVariable}, "varVariable" : {varVariable}</h3>
        <>{newElement}</>
      </div>
    );
  }
}

//Form
function FormComponent(){
  const [input, setInput] = useState("");

  const handleChange = (event)=>{
    event.preventDefault();
    const key = event.target.name;
    const value = event.target.value;
    setInput(values =>({
      ...values, 
      [key] : value
    }))
  }
  
  const handleSubmit = (event)=>{
    event.preventDefault();
    alert(JSON.stringify(input));
  }
  return(
    <form onSubmit={handleSubmit}>
      <label> Username 
        <input 
          type = "text"
          name = "username" 
          value = {input.username || ""} 
          onChange ={handleChange}
        />
      </label>
      <label> Password 
        <input 
          type = "password"
          name = "password" 
          value = {input.password || ""} 
          onChange ={handleChange}
        />
      </label>
      <textarea type="text" name ="about" value={input.about || ""}onChange={handleChange}/>
      <select name ="weakness" value={input.weakness} onChange={handleChange}>
        <option> Lazzyness</option>
        <option> Lazzyness max</option>
        <option> Lazzyness Ultramax </option>
      </select>
      <input type ="submit"/>
    </form>
  )
}


function App(){
  return (<>
    <NewComponent/>
    <FormComponent/>
  </>)
}

export default App;
