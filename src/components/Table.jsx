import { Button } from 'react-bootstrap'
import "./Table.css";

export default function Table() {

    return (
        <div className='table-wrapper'>
            <h1 className="my-3">Shopping List</h1>
            <table className='table' border={"dark"}>
                <thead>
                    <tr>
                        <th className='expand'>Item</th>
                        <th>Quantity</th>
                        <th style={{ textAlign: 'center' }}>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>item name</td>
                        <td>unit</td>
                        <td style={{ textAlign: 'center' }}><span className='label label-live'>purchased</span></td>
                        <td>
                            <span className='actions'>
                                <Button variant="secondary" href="" className="me-2" style={{ "font-size": "10px" }}>
                                    <i className="bi bi-pencil"></i>
                                </Button>
                                <Button variant="danger" onClick="" className="me-2" style={{ "font-size": "10px" }}>
                                    <i className="bi bi-trash3"></i>
                                </Button>
                            </span>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>item name2</td>
                        <td>unit2</td>
                        <td style={{ textAlign: 'center' }}><span className='label label-draft'>not purchased</span></td>
                        <td>
                            <span className='actions'>
                                <Button variant="secondary" href="" className="me-2" style={{ "font-size": "10px" }}>
                                    <i className="bi bi-pencil"></i>
                                </Button>
                                <Button variant="danger" onClick="" className="me-2" style={{ "font-size": "10px" }}>
                                    <i className="bi bi-trash3"></i>
                                </Button>
                            </span>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>item name3</td>
                        <td>unit3</td>
                        <td style={{ textAlign: 'center' }}><span className='label label-error'>error</span></td>
                        <td>
                            <span className='actions'>
                                <Button variant="secondary" href="" className="me-2" style={{ "font-size": "10px" }}>
                                    <i className="bi bi-pencil"></i>
                                </Button>
                                <Button variant="danger" onClick="" className="me-2" style={{ "font-size": "10px" }}>
                                    <i className="bi bi-trash3"></i>
                                </Button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button className='me-2'>Add Item</Button>
            <Button>Save List</Button>
        </div>
    )
}
