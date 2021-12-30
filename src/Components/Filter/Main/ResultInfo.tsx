import {useFilterContext} from "../../../Context/InputValueContext";
import {Row, Col} from "react-bootstrap";

function ResultInfo(){
    const {resultCount, pageCount, page} = useFilterContext();

    return(
        <div>
            <Row className="bg-secondary bg-opacity-10 rounded text-center small p-2 gap-2">
                <Col className="bg-secondary bg-opacity-25 p-1">
                    Total Amount of Results
                </Col>

                <Col className="bg-secondary bg-opacity-25 p-1">
                    Total Amount of Pages
                </Col>

                <Col className="bg-secondary bg-opacity-25 p-1">
                    Page
                </Col>

                <Col className="bg-secondary bg-opacity-25 p-1">
                    Results Per Page
                </Col>
            </Row>

            <Row className="bg-secondary bg-opacity-10 rounded text-center small">
                <Col className="bg-secondary bg-opacity-25 p-1">
                    <span className="text-info">{resultCount}</span>
                </Col>

                <Col className="bg-secondary bg-opacity-25 p-1">
                    <span className="text-info">{pageCount}</span>
                </Col>

                <Col className="bg-secondary bg-opacity-25 p-1">
                    <span className="text-info">{page}</span>
                </Col>

                <Col className="bg-secondary bg-opacity-25 p-1">
                    <span className="text-info">20</span>
                </Col>
            </Row>
        </div>
    )
}

export default ResultInfo;