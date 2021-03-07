import React,{Component} from "react";
import 'default-passive-events'
import Hello from "./components/Hello";
import './App.css';

class App extends Component {
  render() {
    return <div>
        <Hello/>
    </div>;
  }
}
export default App;
