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
  
  const hideDone = false;

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
          extraHeaderContent = {<Buttons tasks={tasks} hideDone={hideDone}/>}
        />
      </Container>
    </div>
  );
};

export default App;
