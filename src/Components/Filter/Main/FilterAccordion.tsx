import {Accordion} from "react-bootstrap";
import {ReactNode} from "react";

interface Props{
    children: ReactNode;
}

function FilterAccordion({children}: Props){
    return(
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="bg-secondary bg-opacity-10 text-white">
                <Accordion.Header>Filters</Accordion.Header>
                <Accordion.Body>
                    {children}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default FilterAccordion;