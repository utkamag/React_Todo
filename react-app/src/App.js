import './App.css';
import Header from "./Components/Header";
import Input from "./Components/Input";
import ListTodo from "./Components/ListTodo";
import GitHubLink from "./Components/GitHubLink";

function App() {
  return (
    <div className="App">
        <Header/>
        <Input/>
        <ListTodo/>
        <GitHubLink/>

    </div>
  );
}

export default App;
