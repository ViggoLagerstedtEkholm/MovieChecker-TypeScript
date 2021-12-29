import React, {useState} from "react";

export interface Filter{
    page: number;
    search: string;
    showFilter?: boolean;
    selectedOption: string;
}

const incrementPage = (page: number): number => page + 1;
const decrementPage = (page: number): number => page - 1;

// Custom hook implementation
const useFilter = (initialState: Filter) => {
    const [page, setPage] = useState(initialState.page);
    const [search, setSearch] = useState(initialState.search);
    const [selectedOption, setSelectedOption] = useState(initialState.selectedOption);
    const [pageCount, setPageCount] = useState(0);
    const [resultCount, setResultCount] = useState(0);

    return {
        page,
        selectedOption,
        search,
        pageCount,
        resultCount,
        incrementPage: () => setPage((page) => incrementPage(page)),
        decrementPage: () => setPage((page) => decrementPage(page)),
        goToPage: (newPage: number) => setPage(newPage),
        applySearch: (text: string) => setSearch(text),
        applySelectedOption: (option: string) => setSelectedOption(option),
        applyPageCount: (count: number) => setPageCount(count),
        applyResultCount: (count: number) => setResultCount(count)
    }
};

const TodoContext = React.createContext<ReturnType<typeof useFilter> | null>(
    null
);

export const useFilterContext = () => React.useContext(TodoContext)!;

export function FilterProvider({ startFilter, children }: { startFilter: Filter, children: React.ReactNode }) {
    return (
        <TodoContext.Provider value={useFilter(startFilter)}>
            {children}
        </TodoContext.Provider>
    );
}