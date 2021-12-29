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
            <FilterBox/>
        </FilterProvider>
    )
}

export default Home;