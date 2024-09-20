import { Button, Table } from 'react-bootstrap'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import UpdateItemModal from "./UpdateItemModal";
import { addLine, deleteItem } from '../features/items/itemsSlice';

export default function ListTable() {
    const dispatch = useDispatch()

    const items = useSelector((state) => state.items)
    const [show, setShow] = useState(false)
    const [currentItem, setCurrentItem] = useState(null)

    const handleClose = () => {
        setCurrentItem(null)
        setShow(false)
    }
    const handleShow = (item) => {
        setCurrentItem(item)
        setShow(true)
    }

    const handleDelete = (item) => {
        dispatch(deleteItem(item.id))

    }
    const handleAddLine = () => {
        dispatch(addLine())
    }

    const renderItems = () => {
        return items.map((item) => (
            <tr key={item.id}>
                <td style={{ width: "40%" }}>{item.description}</td>
                <td style={{ width: "15%" }}>{item.quantity}</td>
                <td style={{ width: "15%" }}>{item.description && (item.status ? "Purchased" : "Not Purchased")}</td>
                <td style={{ width: "20%" }}>
                    <span>
                        <Button variant="secondary" onClick={() => handleShow(item)} className="me-2" style={{ fontSize: "10px" }}>
                            <i className="bi bi-pencil"></i>
                        </Button>
                        <Button variant="danger" onClick={() => handleDelete(item)} className="me-2" style={{ fontSize: "10px" }}>
                            <i className="bi bi-trash3"></i>
                        </Button>
                    </span>
                </td>
            </tr>
        ))
    }

    return (
        <>
            <h1 className='my-3'>Shopping List</h1>
            <Table>
                <thead>
                    <tr>
                        <th style={{ width: "40%" }}>Item</th>
                        <th style={{ width: "15%" }}>Quantity</th>
                        <th style={{ width: "15%" }}>Status</th>
                        <th style={{ width: "20%" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </Table>
            <span>
                <Button variant="primary" onClick={() => handleAddLine()}>Add Line</Button>
            </span>
            {currentItem && (
                <UpdateItemModal
                    show={show}
                    handleClose={handleClose}
                    itemId={currentItem.id}
                />
            )}
        </>
    )
}
