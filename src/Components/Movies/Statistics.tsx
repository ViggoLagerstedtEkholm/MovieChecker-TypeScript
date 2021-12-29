import {Col, Row} from "react-bootstrap";

interface Props{
    popularity: number | undefined;
    vote_average: number | undefined;
    vote_count: number | undefined;
}

function Statistics({popularity, vote_average, vote_count} : Props){
    return(
        <Row xs="auto" className="my-2 rounded mb-3">
            <Col>
                <h4>Popularity - <span className="text-info">{popularity}</span></h4>
            </Col>
            <Col>
                <h4>Vote Average - <span className="text-info">{vote_average}</span></h4>
            </Col>
            <Col>
                <h4>Vote Count - <span className="text-info">{vote_count}</span></h4>
            </Col>
        </Row>
    )
}

export default Statistics;