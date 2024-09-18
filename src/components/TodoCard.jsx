import { Card, Button } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoCard({ todo }) {
    const completed = todo.completed
    const border = completed ? "success" : "danger"
    const setTodos = useContext(TodoContext).setTodos

    const deleteTodo = () => {
        setTodos((prevTodos) =>
            prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
        )
    }

    return (
        <>
            <Card border={border} className="my-3">
                <Card.Header>{todo.date}</Card.Header>
                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                    <Button variant="primary" href="" className="me-2">
                        <i className="bi bi-basket"></i>
                    </Button>
                    <Button variant="secondary" href={`todo/${todo.id}`} className="me-2">
                        <i className="bi bi-pencil"></i>
                    </Button>
                    <Button variant="danger" onClick={deleteTodo} className="me-2">
                        <i className="bi bi-trash3"></i>
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}