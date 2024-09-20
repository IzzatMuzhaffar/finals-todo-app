import { useState, useEffect } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../features/items/itemsSlice";

export default function UpdateItemModal({ show, handleClose, itemId }) {
    // const { description, quantity } = useContext(ListContext)
    const dispatch = useDispatch()

    const item = useSelector((state) =>
        state.items.find((item) => item.id === itemId)
    )
    const [itemDesc, setItemDesc] = useState("")
    const [itemQty, setItemQty] = useState("")
    const [invalidDesc, setInvalidDesc] = useState(false)
    const [purchased, setPurchased] = useState(false)

    useEffect(() => {
        if (item) {
            setItemDesc(item.description)
            setItemQty(item.quantity)
        }
    }, [item])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (itemDesc) {
            dispatch(updateItem({ id: item.id, description: itemDesc, quantity: itemQty, status: purchased }))
            setItemDesc("")
            setItemQty("")
            handleClose()
        } else {
            setInvalidDesc(true)
        }
    }

    return (
        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header>
                <Modal.Title>Edit item</Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Label>Item</Form.Label>
                    <Form.Control
                        value={itemDesc}
                        onChange={(e) => setItemDesc(e.target.value)}
                        className=""
                        placeholder="Enter item name"
                    />
                    {invalidDesc && (
                        <div className="text-danger">
                            Please provide item name
                        </div>
                    )}

                    <Form.Label className="mt-3">Quantity</Form.Label>
                    <Form.Control
                        value={itemQty}
                        onChange={(e) => setItemQty(e.target.value)}
                        className="mb-3"
                        placeholder="Enter item quantity"
                    />
                    <Form.Check
                        type="checkbox"
                        id="completed"
                        label="Mark as completed"
                        checked={purchased}
                        onChange={(e) => setPurchased(e.target.checked)}
                        className="mb-4"
                    />
                    <Button type="submit" style={{ width: "100%" }}>
                        Submit
                    </Button>
                </Modal.Body>
            </Form>
        </Modal>
    )
}
