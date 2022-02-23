import Buttons from "./Buttons";
import Container from "../../common/Container";
import Form from "./Form";
import Header from "../../common/Header";
import Section from "../../common/Section";
import TaskList from "./TaskList";

function Tasks() {
  return (
    <div className="App">
      <Container>
        <Header
          title="Lista zadań"
        />
        <Section
          title="Dodaj nowe zadanie"
          body={
            <Form />
          }
        />
        <Section
          title="Lista zadań"
          body={
            <TaskList />
          }
          extraHeaderContent={
            <Buttons />
          }
        />
      </Container>
    </div>
  );
};

export default Tasks;