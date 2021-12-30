import Movie from "./Movie";
import React from "react";
import {Card} from "react-bootstrap";
import {SearchData} from "../Service/MovieAPI";
import ResultInfo from "../Filter/Main/ResultInfo";
import NoResult from "./NoResult";

interface Props{
    movies: SearchData;
}

function MovieList({movies} : Props){
    return(
        <Card className="p-1 my-1 bg-secondary p-4 bg-opacity-10 text-white">
            <Card.Title>
                <ResultInfo/>
            </Card.Title>
            <Card.Body>
                {movies.results.length > 0 ? <>
                    {
                        movies.results.map((value, index) =>{
                            return <Movie key={index} movie={value}/>
                        })
                    }
                </> : <NoResult/>}
            </Card.Body>
        </Card>
    )
}

export default MovieList;