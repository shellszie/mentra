import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom';
export default function Domain() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/q1';
        navigate(path);
    }
    return (
        <Form>
            <Form.Group className="mb-3 w-50">
                <Form.Label>Enter the topic, domain, skill, or exam you want to be assessed on:</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Button variant="primary" onClick={routeChange} type="submit">
                Start Quiz
            </Button>
        </Form>
    );
}