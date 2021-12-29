import {Badge, Col, Image, Row} from "react-bootstrap";
import {Company, Country, Genre, Language} from "./MoviePage";

interface Props{
    backdrop_path: string | null | undefined;
    production_companies: Company[] | undefined;
    production_countries: Country[] | undefined;
    spoken_languages: Language[] | undefined;
    genres: Genre[] | undefined;
}

function MovieMain({backdrop_path, production_companies, production_countries, spoken_languages, genres}: Props) {
    return(
        <Row className="bg-secondary p-4 bg-opacity-10 rounded">
            <Col>
                <Image src={"http://image.tmdb.org/t/p/w500/" + backdrop_path} fluid/>
            </Col>
            <Col>
                <h4>Production Companies</h4>
                {production_companies != null ? production_companies.map((value, index) =>{
                    return <Badge key={index} className="mx-1 my-1 text-uppercase">
                        {value.name}, {value.origin_country}
                    </Badge>
                }): null}

                <h4>Production Countries</h4>
                {production_countries != null ? production_countries.map((value, index) =>{
                    return <Badge key={index} className="mx-1 my-1">
                        {value.name}, {value.iso_3166_1}
                    </Badge>
                }): null}

                <h4 className="mt-2">Spoken languages</h4>
                {spoken_languages != null ? spoken_languages.map((value, index) =>{
                    return <Badge key={index} className="mx-1 my-1">
                        {value.name} , {value.iso_639_1}
                    </Badge>
                }): null}

                <h4 className="mt-2">Genres</h4>
                {genres != null ? genres.map((value, index) =>{
                    return <Badge key={index} className="mx-1 my-1">
                        {value.name}
                    </Badge>
                }) : null}
            </Col>
        </Row>
    )
}

export default MovieMain;