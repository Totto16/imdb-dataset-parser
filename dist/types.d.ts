export type IMappedTypes<T extends Record<string, any>> = {
    order: Array<keyof T>;
    declaration: MappedParsers<T>;
};
export type Parser<T> = (value: string) => T;
export type MappedParsers<T extends Record<string, any>> = {
    [key in keyof T]: Parser<T[key]>;
};
export type ImdbID = string;
export type Float = number;
export type Int = number;
export interface ITitleRating {
    tconst: ImdbID;
    averageRating: Float;
    numVotes: Int;
}
export type ANY = "A" | "B" | "C" | "TODO";
export type RegionString = symbol;
export type LanguageString = symbol;
export interface ITitleAlternate {
    titleId: ImdbID;
    ordering: Int;
    title: string;
    region: RegionString | null;
    language: LanguageString | null;
    types: AlternativeType[];
    attributes: string[];
    isOriginalTitle: boolean | null;
}
export declare enum Genre {
    Action = "Action",
    Adventure = "Adventure",
    Animation = "Animation",
    Biography = "Biography",
    Comedy = "Comedy",
    Crime = "Crime",
    Documentary = "Documentary",
    Drama = "Drama",
    Family = "Family",
    Fantasy = "Fantasy",
    FilmNoir = "Film Noir",
    History = "History",
    Horror = "Horror",
    Music = "Music",
    Musical = "Musical",
    Mystery = "Mystery",
    Romance = "Romance",
    SciFi = "Sci-Fi",
    Short = "Short",
    Sport = "Sport",
    Superhero = "Superhero",
    Thriller = "Thriller",
    War = "War",
    Western = "Western"
}
export declare enum TitleType {
    Short = "short",
    Movie = "movie",
    TVEpisode = "tvEpisode",
    TVMovie = "tvMovie",
    TVSeries = "tvSeries",
    TVShort = "tvShort",
    Video = "video",
    TVMiniSeries = "tvMiniSeries"
}
export declare enum AlternativeType {
    "Alternative" = "alternative",
    "DVD" = "dvd",
    "Festival" = "festival",
    "TV" = "tv",
    "Video" = "video",
    "Working" = "working",
    "Original" = "original",
    "ImdbDisplay" = "imdbDisplay"
}
export interface ITitleBasic {
    tconst: ImdbID;
    titleType: TitleType;
    primaryTitle: string;
    originalTitle: string;
    isAdult: boolean;
    startYear: Int | null;
    endYear: Int | null;
    runtimeMinutes: Int | null;
    genres: Genre[];
}
export type NameID = string;
export interface ITitleCrew {
    tconst: ImdbID;
    directors: NameID[];
    writers: NameID[];
}
export interface ITitleEpisode {
    tconst: ImdbID;
    parentTconst: string;
    seasonNumber: Int | null;
    episodeNumber: Int | null;
}
export interface ITitlePrincipal {
    tconst: ImdbID;
    ordering: Int;
    nconst: NameID;
    category: string;
    job: string | null;
    characters: string | null;
}
export interface INameBasic {
    nconst: NameID;
    primaryName: string;
    birthYear: Int | null;
    deathYear: Int | null;
    primaryProfession: string[];
    knownForTitles: ImdbID[];
}
