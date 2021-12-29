import {useFilterContext} from "../../../Context/InputValueContext";
import {Card, Form, Row} from "react-bootstrap";
import {selectOptions} from "../../Service/MovieAPI";

function FilterOptions() {
    const {
        applySearch,
        applySelectedOption,
        goToPage,
        search,
        selectedOption,
    } = useFilterContext();

    function renderOptions() {
        return Array.from(selectOptions).map(([key, value], i) => {
            return (<option key={i} value={value}>{key}</option>)
        });
    }

    return (
        <Card className="bg-secondary bg-opacity-10 rounded">
            <Card.Body>
                <Row>
                    <Form.Group controlId="formBasicSelect">
                        <Form.Label>Filter Settings</Form.Label>
                        <Form.Select
                            size="lg"
                            value={selectedOption}
                            onChange={e => {
                                applySelectedOption(e.target.value);
                            }}>
                            {
                                renderOptions()
                            }
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mt-2">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Search"
                                      value={search}
                                      onChange={(e) => {
                                          applySearch(e.target.value);
                                          goToPage(1);
                                      }}/>
                    </Form.Group>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default FilterOptions;