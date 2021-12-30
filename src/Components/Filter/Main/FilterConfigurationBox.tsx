import {useState} from "react";
import FilterOptions from "./FilterOptions";
import FilterInfo from "./FilterInfo";
import {Button, Card} from "react-bootstrap";
import FilterAccordion from "./FilterAccordion";

interface Props{
    open: boolean;
}

function FilterConfigurationBox({open}: Props) {
    const [showFilterBoxState, setShowFilterBoxState] = useState(open);

    const toggle = () => {
        setShowFilterBoxState(!showFilterBoxState);
    }

    return (
        <FilterAccordion>
            <Card className="bg-secondary bg-opacity-10 text-white">
                <Card.Header className="bg-light bg-opacity-10">
                    <Button className="btn btn-primary w-100" onClick={toggle}> Toggle filtering.</Button>
                </Card.Header>
                <Card.Body className="bg-secondary p-4 bg-opacity-10 text-white">
                    {showFilterBoxState ? <FilterOptions/> : <FilterInfo/>}
                </Card.Body>
            </Card>
        </FilterAccordion>
    );
}

export default FilterConfigurationBox;