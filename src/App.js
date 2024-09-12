import './App.css';
import MyForm from "./MyForm";
import Question1 from "./Question1";
import Container from "react-bootstrap/Container";

function App() {

    return (
      <Container>
          <h1 className="mb-5">Assessments</h1>
          <h3 className="mb-4">Take a 10 question quiz on your chosen topic!</h3>
          <MyForm></MyForm>
          {/*<Question1></Question1>*/}
    </Container>
  );
}

export default App;
