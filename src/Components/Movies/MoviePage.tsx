import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {GetMovieInformation} from "../Service/MovieAPI";
import {Badge, Col, Container, Row} from "react-bootstrap";
import Statistics from "./Statistics";
import MovieMain from "./MovieMain";
import Trailer from "./Trailer";

export interface Genre {
    id: number;
    name: string;
}

export interface Company {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
}

export interface Country {
    iso_3166_1: string;
    name: string;
}

export interface Language {
    iso_639_1: string;
    name: string;
}

interface Video {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
}

interface Videos {
    results: Video[];
}

interface MovieData {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | object;
    budget: number;
    genres: Genre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: Company[];
    production_countries: Country[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: Language[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    videos: Videos;
}

function MoviePage() {
    const {id} = useParams();
    const [movie, setMovie] = useState<MovieData>();

    useEffect(() => {
        async function FetchMovie() {
            return await GetMovieInformation(id);
        }

        FetchMovie().then((response: MovieData) => setMovie(response)).catch(error => console.log(error));
    }, [])

    return (
        <Container className="mt-5 text-white">
            <Link to={'/'}>Go back</Link>
            <h1>{movie?.title}</h1>

            <Row xs="auto" className="bg-secondary p-4 bg-opacity-10 rounded">
                <Col>
                    <b>Release Date - </b> {movie?.release_date}
                </Col>
                <Col>
                    <b>Runtime - </b> {movie?.runtime}
                </Col>
                <Col>
                    <b>Status - </b> {movie?.status}
                </Col>
                <Col>
                    {movie?.homepage ? <a href={movie?.homepage}>{movie?.homepage}</a> : null}
                </Col>
            </Row>

            <Row className="mt-4">
                <p>{movie?.overview}</p>
            </Row>

            <Statistics popularity={movie?.popularity} vote_average={movie?.vote_average}
                        vote_count={movie?.vote_count}/>

            <MovieMain
                backdrop_path={movie?.backdrop_path}
                genres={movie?.genres}
                production_companies={movie?.production_companies}
                production_countries={movie?.production_countries}
                spoken_languages={movie?.spoken_languages}/>

            <h2 className="mt-3">Trailers</h2>
            <Row className="bg-secondary p-4 bg-opacity-10 rounded">
                {movie?.videos.results.map((value, index) => {
                    return (<div key={index}>
                        <h2>{value.name}</h2>
                        <Row xs="auto" className="bg-secondary p-4 bg-opacity-10 rounded my-3">
                            <Col>
                                <b>Website - </b> {value.site}
                            </Col>
                            <Col>
                                <b>Language - </b> <Badge className="text-uppercase">{value.iso_639_1}</Badge>
                            </Col>
                            <Col>
                                <b>Country - </b> <Badge className="text-uppercase">{value.iso_3166_1}</Badge>
                            </Col>
                            <Col>
                                <b>Country - </b> <Badge
                                className="text-uppercase">{value.official ? "Official" : "Unofficial"}</Badge>
                            </Col>
                            <Col>
                                <b>Published - </b> {new Date(value.published_at).toString()}
                            </Col>
                            <Col>
                                <b>Type - </b> <Badge>{value.type}</Badge>
                            </Col>
                        </Row>

                        <Row>
                            <Trailer videoID={value.key}/>
                        </Row>
                        <hr/>
                    </div>)
                })}

            </Row>

            <Row xs="auto" className="bg-secondary p-4 bg-opacity-10 rounded mt-4">
                <Col>
                    <b>Budget - </b> {movie?.budget}
                </Col>
                <Col>
                    <b>Revenue - </b> {movie?.revenue}
                </Col>
            </Row>
        </Container>
    )
}

export default MoviePage;