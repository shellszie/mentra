import './App.css';
import Domain from "./Domain";
import Question1 from "./Question1";
import Container from "react-bootstrap/Container";
import {BrowserRouter} from "react-router-dom";
import {Link, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Container>
              <h1 className="mb-5">Assessments</h1>
              <h3 className="mb-4">Take a 10 question quiz on your chosen topic!</h3>

                <Routes>
                    <Route exact path="/" element={<Domain/>} />
                    <Route path="/q1" element={<Question1/>} />
                </Routes>
            </Container>
        </BrowserRouter>
  );
}

export default App;
