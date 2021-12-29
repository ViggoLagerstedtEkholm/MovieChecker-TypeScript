import Movie from "./Movie";
import React from "react";
import {Card} from "react-bootstrap";
import {SearchData} from "../Service/MovieAPI";
import ResultInfo from "../Filter/Main/ResultInfo";

interface Props{
    movies: SearchData;
}

function MovieList({movies} : Props){
    return(
        <Card className="p-2 my-2 bg-secondary p-4 bg-opacity-10 text-white">
            <Card.Title>
                <ResultInfo/>
            </Card.Title>
            <Card.Body>
                {
                    movies.results.map((value, index) =>{
                        return <Movie key={index} movie={value}/>
                    })
                }
            </Card.Body>
        </Card>
    )
}

export default MovieList;