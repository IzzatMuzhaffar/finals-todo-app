import { Col, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import { TodoContext } from "./contexts/TodoContext";
import AddTodo from "./pages/AddTodo";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import EditTodo from "./pages/EditTodo";
import IconButton from "./components/IconButton";
import ShoppingList from "./pages/ShoppingList";
import { AuthContext } from "./AuthContext";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";


function Layout() {

  return (
    <Row>
      <Col
        sm={1}
        className='d-flex flex-column justify-content-start align-items-center vh-100 bg-light'
        style={{ position: "sticky", top: 0 }}
      >
        <IconButton className={'bi bi-house'} href="/" isTop />
        <IconButton className={'bi bi-plus-square'} href="/add" />
        <IconButton className={'bi bi-cart'} href="/shopping" />
        <IconButton className={'bi bi-person-circle'} href="/login" />
      </Col>
      <Col sm={11}>
        <Outlet />
      </Col>
    </Row>
  )
}

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", [])
  const [token, setToken] = useLocalStorage("token", null)

  return (
    <AuthContext.Provider value={{token, setToken}}>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />}/>
            <Route path="/" element={<RequireAuth><Layout /></RequireAuth>}>
              <Route index element={<Home />} />
              <Route path="add" element={<AddTodo />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="todo/:id" element={<EditTodo />} />
              <Route path="shopping" element={<ShoppingList />} />              
            </Route>
          </Routes>
        </BrowserRouter>
      </TodoContext.Provider>
    </AuthContext.Provider>

  )
}
