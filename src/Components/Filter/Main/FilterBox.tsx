import React, {useEffect, useState} from "react";
import FilterConfigurationBox from "./FilterConfigurationBox";
import Pagination from "../Pagination/Pagination";
import {useFilterContext} from "../../../Context/InputValueContext";
import {FetchMovies, FetchMoviesSearch, SearchData} from "../../Service/MovieAPI";
import MovieList from "../../Movies/MovieList";
import Loading from "../Loading";
import TopPagination from "../Pagination/TopPagination";

function FilterBox() {
    const {selectedOption, page, search, applyPageCount, applyResultCount} = useFilterContext();
    const [results, setResults] = useState<SearchData | null>(null);

    useEffect(() => {
        if(search){
            searchByText().then((response: SearchData)  => {
                setResults(response);
                applyPageCount(response.total_pages);
                applyResultCount(response.total_results);
            }).catch(error => console.log(error));
        }else{
            discoverAll().then((response: SearchData)  => {
                setResults(response);
                applyPageCount(response.total_pages);
                applyResultCount(response.total_results);
            }).catch(error => console.log(error));
        }
    }, [selectedOption, page, search])

    const discoverAll = async () =>{
        return FetchMovies(selectedOption, page);
    }

    const searchByText = async () => {
        return FetchMoviesSearch(search, page);
    }

    return (
        <div>
            <FilterConfigurationBox/>
            <hr/>
            <TopPagination/>
            {results ? <MovieList movies={results}/> : <Loading/>}
            <Pagination/>
        </div>
    )
}

export default FilterBox;
