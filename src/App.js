import {useState} from "react"
import Buttons from "./Buttons";
import Container from "./Container";
import Form from "./Form"; 
import Header from "./Header";
import Section from "./Section";
import Tasks from "./Tasks";



function App() {
  const tasks = [ 
    {id: 1, content: "przejsć na Reacta", done: false},
    {id: 2, content: "podjąć próbę przejścia na Reacta", done: true},
  ];
  
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone (hideDone => !hideDone)
  }

  return (
    <div className="App">
      <Container>
        <Header
          title = "Lista zadań"
        />
        <Section 
          title = "Dodaj nowe zadanie"
          body = {<Form/>}
        />
        <Section 
          title = "Lista zadań"
          body = {<Tasks tasks = {tasks} hideDone ={hideDone}/>}
          extraHeaderContent = {<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone ={toggleHideDone}/>}
        />
      </Container>
    </div>
  );
};

export default App;
