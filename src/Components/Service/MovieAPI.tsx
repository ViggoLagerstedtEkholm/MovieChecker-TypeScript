import axios from "axios";

export interface MovieData {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface SearchData {
    page: number;
    total_pages: number;
    total_results: number;
    results: MovieData[];
}

export const selectOptions = new Map();
selectOptions.set('Popularity Descending', 'popularity.desc');
selectOptions.set('Popularity Ascending', 'popularity.asc');

selectOptions.set('Release Date Descending', 'release_date.desc');
selectOptions.set('Release Date Ascending', 'release_date.asc');

selectOptions.set('Revenue Descending', 'release_date.desc');
selectOptions.set('Revenue Ascending', 'release_date.asc');

selectOptions.set('Primary Release Date Descending', 'primary_release_date.desc');
selectOptions.set('Primary Release Date Ascending', 'primary_release_date.asc');

selectOptions.set('Original Title Descending', 'original_title.desc');
selectOptions.set('Original Title Ascending', 'original_title.asc');

selectOptions.set('Vote Average Descending', 'vote_average.desc');
selectOptions.set('Vote Average Ascending', 'vote_average.asc');

selectOptions.set('Vote Count Descending', 'vote_count.desc');
selectOptions.set('Vote Count Ascending', 'vote_count.asc');

//This method will be used to get all the movies filtered.
export const FetchMovies = async (selectedOption: string, page: number): Promise<SearchData> => {
    let url = new URL("https://api.themoviedb.org/3/discover/movie?");
    url.searchParams.append("api_key", "0a2046e3e90682387123e7a46f0d486b");
    url.searchParams.append("language", "en-US");
    url.searchParams.append("include_video", "false");
    url.searchParams.append("include_adult", "false");
    url.searchParams.append("sort_by", selectedOption);
    url.searchParams.append("page", String(page));
    url.searchParams.append("vote_average.gte", '8');
    url.searchParams.append("vote_count.gte", '5000');

    const promise = axios.get(url.toString());
    return promise.then(response => response.data).catch((error) => Promise.reject(error));
}

//This method will be used to find all movies that matches the provided string.
export const FetchMoviesSearch = async (query: string, page: number) => {
    let url = new URL("https://api.themoviedb.org/3/search/movie?");
    url.searchParams.append("api_key", "0a2046e3e90682387123e7a46f0d486b");
    url.searchParams.append("language", "en-US");
    url.searchParams.append("query", query);
    url.searchParams.append("page", String(page));
    url.searchParams.append("include_adult", "false");

    const promise = axios.get(url.toString());
    return promise.then(response => response.data).catch((error) => Promise.reject(error));
}

//This method will get the detailed information about a specific movie.
export const GetMovieInformation = async (movieID: string | undefined) => {
    let url = new URL(`https://api.themoviedb.org/3/movie/${movieID}?`);
    url.searchParams.append("api_key", "0a2046e3e90682387123e7a46f0d486b");
    url.searchParams.append("language", "en-US");
    url.searchParams.append("append_to_response", "videos");

    const promise = axios.get(url.toString());
    return promise.then(response => response.data).catch((error) => Promise.reject(error));
}