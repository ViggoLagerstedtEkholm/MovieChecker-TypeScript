import {useFilterContext} from "../../../Context/InputValueContext";
import {Row, Col} from "react-bootstrap";

function ResultInfo(){
    const {resultCount, pageCount, page} = useFilterContext();

    return(
        <Row className="bg-secondary p-4 bg-opacity-10 rounded text-center">
            <Col>
                Total Amount of Results - <span className="text-info">{resultCount}</span>
            </Col>

            <Col>
                Total Amount of Pages - <span className="text-info">{pageCount}</span>
            </Col>

            <Col>
                 Page - <span className="text-info">{page}</span>
            </Col>

            <Col>
                Results Per Page - <span className="text-info">20</span>
            </Col>
        </Row>
    )
}

export default ResultInfo;