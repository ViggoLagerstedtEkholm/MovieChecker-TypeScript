import React, {FormEvent, useState} from "react";
import { useFilterContext} from "../../../Context/InputValueContext";
import {Button, Card, Col, Form, Row} from "react-bootstrap";

function PaginationBox() {
    const {incrementPage, decrementPage, goToPage, page, pageCount} = useFilterContext();
    const [goToPageNumber, setGoToPageNumber] = useState(1);

    const onGoToPage = (e: FormEvent) =>{
        e.preventDefault();
        console.log(pageCount);
        if(goToPageNumber > 1 && goToPageNumber <= pageCount){
            goToPage(goToPageNumber);
        }else{
            goToPage(1);
        }
    }

    return (
        <Card className="p-2">
            <h2 className="text-center">{page} / {pageCount}</h2>

            <Row>
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

            <Form onSubmit={onGoToPage} className="mt-4">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="text"
                                      placeholder="Go to page"
                                      value={goToPageNumber}
                                      onChange={e => {
                                          const number = parseInt(e.target.value);
                                          setGoToPageNumber(number);
                                      }}/>
                    </Form.Group>

                    <Button type="submit" className="btn-primary w-100">
                        GO TO PAGE
                    </Button>
            </Form>
        </Card>
    );
}

export default PaginationBox;
