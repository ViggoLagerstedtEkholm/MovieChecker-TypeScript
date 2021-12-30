import {useFilterContext} from "../../../Context/InputValueContext";
import {Card, Col, Form, Row} from "react-bootstrap";
import {selectOptions} from "../../Service/MovieAPI";
import Slider from 'rc-slider';
import {useState} from "react";

function FilterOptions() {
    const {
        applySearch,
        applySelectedOption,
        goToPage,
        applyAverageRating,
        applyVoteCount,
        applyYear,
        search,
        selectedOption,
        averageRating,
        voteCount,
        year
    } = useFilterContext();

    const[averageRatingChange, setAverageRatingChange] = useState(averageRating);
    const[voteCountChange, setVoteCountChange] = useState(voteCount);
    const[yearChange, setYearChange] = useState(year);

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

                <Row>
                    <Col className="text-center">
                        <h5>Average score: {averageRatingChange}</h5>
                        <Slider startPoint={averageRating} defaultValue={averageRating} min={0} max={10} step={0.1} onAfterChange={(value) => applyAverageRating(value)}
                                onChange={(value) => {
                                    setAverageRatingChange(value);
                                    goToPage(1);
                                }}/>
                        <Form.Control size="sm" type="number" placeholder="Average score" className="mt-3" onChange={(e) => {
                            applyAverageRating(parseInt(e.target.value));
                            setAverageRatingChange(parseInt(e.target.value));
                            goToPage(1);
                        }}/>
                    </Col>
                    <Col className="text-center">
                        <h5>Vote count: {new Intl.NumberFormat().format(voteCountChange)}</h5>
                        <Slider startPoint={voteCount} defaultValue={voteCount} min={0} max={200000} step={100} onAfterChange={(value) => {
                            applyVoteCount(value);
                            goToPage(1);
                        }} onChange={(value) => setVoteCountChange(value)}/>
                        <Form.Control size="sm" type="number" placeholder="Vote count" className="mt-3" onChange={(e) =>{
                            applyVoteCount(parseInt(e.target.value));
                            setVoteCountChange(parseInt(e.target.value));
                            goToPage(1);
                        }}/>
                    </Col>
                    <Col className="text-center">
                        <h5>Results up to year - {yearChange}</h5>
                        <Slider startPoint={year} defaultValue={year} min={new Date().getFullYear() - 150} max={new Date().getFullYear()} step={1} onAfterChange={(value) => {
                            applyYear(value);
                            goToPage(1);
                        }} onChange={(value) => setYearChange(value)}/>
                        <Form.Control size="sm" type="number" placeholder="Year" className="mt-3" onChange={(e) =>{
                            applyYear(parseInt(e.target.value));
                            setYearChange(parseInt(e.target.value));
                            goToPage(1);
                        }}/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default FilterOptions;