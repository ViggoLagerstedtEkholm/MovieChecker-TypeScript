import {useFilterContext} from "../../../Context/InputValueContext";
import {Card} from "react-bootstrap";

function FilterInfo() {
    const {search, selectedOption} = useFilterContext();

    return (
        <Card className="bg-secondary p-4 bg-opacity-10 rounded text-white">
            <Card.Body>
                <h1>Search terms</h1>
                <ul className="list-group">
                    <li className="list-group-item bg-secondary text-white">Search - <b>{search === '' ? <span className="text-info">No search string applied</span> : search}</b></li>
                    <li className="list-group-item bg-secondary text-white">Selected Option - <b>{selectedOption}</b></li>
                </ul>
            </Card.Body>
        </Card>
    )
}

export default FilterInfo;