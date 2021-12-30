import {Badge, Card, Col, Image, Row} from "react-bootstrap";
import {MovieData} from "../Service/MovieAPI";
import { Link } from 'react-router-dom';
import {Highlight} from "../Highlight";
import {useFilterContext} from "../../Context/InputValueContext";

interface Props{
    movie: MovieData;
}

function Movie({movie}: Props){
    const path = "http://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
    const {search} = useFilterContext();

    return(
        <Card className="my-2 bg-secondary bg-opacity-25">
            <Card.Body>
                <Row>
                    <Col>
                        <Row>
                            {!movie.backdrop_path ? <h1>MISSING IMAGE</h1>: <Image src={path} fluid/>}
                        </Row>
                        <Row className="mt-3 mx-0">
                            <Link to={'/movie/' + movie.id} className="btn btn-primary">
                                Details
                            </Link>
                        </Row>
                    </Col>
                    <Col>
                        <h2>{Highlight(movie.title, search)} <Badge className="text-uppercase">{movie.original_language}</Badge></h2>

                        <p><b>{movie.release_date}</b></p>
                        <p>{movie.overview}</p>

                        <p>Popularity - <span className="text-info">{movie.popularity}</span></p>
                        <p>Average Rating - <span className="text-info">{movie.vote_average}</span></p>
                        <p>Vote Count - <span className="text-info">{movie.vote_count}</span></p>

                        {movie.video ? <Badge>Contains video</Badge> : <Badge>Does not contain video</Badge>}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Movie;