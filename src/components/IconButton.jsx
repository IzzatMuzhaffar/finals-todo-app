import { Button } from 'react-bootstrap'

export default function IconButton({ isTop, className, onClick, href }) {
    let margin = "light my-3"

    if (isTop) {
        margin = "light my-4"
    }

    return (
        <Button variant={margin} style={{ marginBottom: "7px" }} onClick={onClick} href={href}>
            <i className={className} style={{ "font-size": "24px" }}></i>
        </Button>
    )
}
