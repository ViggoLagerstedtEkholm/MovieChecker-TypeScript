import {useFilterContext} from "../../../Context/InputValueContext";
import {Button, Col, Row} from "react-bootstrap";
import React from "react";

function TopPagination(){
    const {incrementPage, decrementPage, page, pageCount} = useFilterContext();

    return (
        <Row>
            <h2 className="text-center text-white">{page} / {pageCount}</h2>

            <Col>
                {page > 1 ?
                    <Button type="submit" className="w-100" onClick={decrementPage}>🡸</Button>
                    : null}
            </Col>
            <Col>
                {page <= pageCount - 1 ?
                    <Button type="submit" className="w-100" onClick={incrementPage}>🡺</Button>
                    : null}
            </Col>
        </Row>
    )
}

export default TopPagination;