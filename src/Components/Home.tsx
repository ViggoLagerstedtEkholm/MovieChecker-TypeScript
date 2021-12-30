import {selectOptions} from "./Service/MovieAPI";
import React from "react";
import {FilterProvider} from "../Context/InputValueContext";
import FilterBox from "./Filter/Main/FilterBox";

function Home() {

    const filter = {
        page: 1,
        search: "",
        selectedOption: selectOptions.values().next().value
    }

    return (
        <FilterProvider startFilter={filter}>
            <h2 className="text-white">MovieChecker</h2>
            <p className="text-white">Your website for looking up movies.</p>
            <p className="text-white">API Provider: <a href="https://www.themoviedb.org/">TMDB</a></p>
            <FilterBox/>
        </FilterProvider>
    )
}

export default Home;