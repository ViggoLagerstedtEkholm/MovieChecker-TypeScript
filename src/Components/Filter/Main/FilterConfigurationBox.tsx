import {useState} from "react";
import FilterOptions from "./FilterOptions";
import FilterInfo from "./FilterInfo";
import {Button, Card} from "react-bootstrap";

function FilterConfigurationBox() {
    const [showFilterBoxState, setShowFilterBoxState] = useState(false);

    const toggle = () => {
        if (showFilterBoxState) {
            setShowFilterBoxState(false);
        } else {
            setShowFilterBoxState(true);
        }
    }

    return (
        <Card className="bg-secondary p-4 bg-opacity-10 text-white">
            <Card.Header className="bg-light bg-opacity-10">
                <Button className="btn btn-primary w-100" onClick={toggle}> Toggle filtering.</Button>
            </Card.Header>
            <Card.Body className="bg-secondary p-4 bg-opacity-10 text-white">
                {showFilterBoxState ? <FilterOptions/> : <FilterInfo/>}
            </Card.Body>
        </Card>
    );
}

export default FilterConfigurationBox;