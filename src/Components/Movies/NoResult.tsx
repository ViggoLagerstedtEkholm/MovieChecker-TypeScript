import {Card} from "react-bootstrap";

function NoResult(){
    return(
        <Card className="bg-secondary p-2 bg-opacity-10 rounded">
            <Card.Body>
                <h5>Sorry, no results!</h5>
            </Card.Body>
        </Card>
    )
}

export default NoResult;