import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
export default function Question1() {
    return (
        <Container>
            <p>Question: Which of the following is not a type of machine learning algorithm used in Artificial
                Intelligence?</p>

            <p>Choose your answer:</p>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="mach_learn" id="1"/>
                <label className="form-check-label" htmlFor="1">
                    A) Decision Trees
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="mach_learn" id="2"/>
                <label className="form-check-label" htmlFor="2">
                    B) Support Vector Machines
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="mach_learn" id="3"/>
                <label className="form-check-label" htmlFor="3">
                    C) Convex Optimization
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="mach_learn" id="4"/>
                <label className="form-check-label" htmlFor="4">
                    D) Recurrent Neural Networks
                </label>
            </div>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Container>
    );
}