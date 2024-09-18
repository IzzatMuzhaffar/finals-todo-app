import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [completed, setCompleted] = useState(false)
    const setTodos = useContext(TodoContext).setTodos
    const todos = useContext(TodoContext).todos
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());

    function addTodo(event) {
        event.preventDefault()
        setTodos([...todos, { id: Date.now(), title, description, completed, date: startDate.toDateString() }])
        navigate("/")
    }



    return (
        <Container>
            <h1 className="my-3">Add Event</h1>
            <Form onSubmit={addTodo}>
                {/* Title */}
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Anne's birthday"
                        required
                    />
                </Form.Group>

                {/* Description */}
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        as="textarea"
                        rows={3}
                        placeholder={`- Friends & family\n- Barbeque\n- Casual`}
                        required
                    />
                </Form.Group>

                {/* Date */}
                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label><br />
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="form-control"
                        dateFormat="d/MM/yyyy"
                    />
                </Form.Group>

                {/* Checkbox */}
                <Form.Check
                    type="checkbox"
                    id="completed"
                    label="Mark prep as completed"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                    className="mb-3"
                />

                {/* Button */}
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}
