export interface Book {
    author_alternative_name: string[];
    author_facet: string[];
    author_key: string[];
    author_name: string[];
    contributor: string[];
    cover_edition_key: string;
    cover_i: number;
    ddc: string[];
    ddc_sort: string;
    ebook_access: string;
    ebook_count_i: number;
    edition_count: number;
    edition_key: string[];
    first_publish_year: number;
    has_fulltext: boolean;
    ia: string[];
    ia_box_id: string[];
    ia_collection: string[];
    ia_collection_s: string;
    id_amazon: string[];
    id_goodreads: string[];
    id_librarything: string[];
    id_wikidata: string[];
    isbn: string[];
    key: string;
    language: string[];
    last_modified_i: number;
    lcc: string[];
    lcc_sort: string;
    lccn: string[];
    lending_edition_s: string;
    lending_identifier_s: string;
    number_of_pages_median: number;
    oclc: string[];
    person: string[];
    person_facet: string[];
    person_key: string[];
    place: string[];
    place_facet: string[];
    place_key: string[];
    printdisabled_s: string;
    public_scan_b: boolean;
    publish_date: string[];
    publish_place: string[];
    publish_year: number[];
    publisher: string[];
    publisher_facet: string[];
    seed: string[];
    subject: string[];
    subject_facet: string[];
    subject_key: string[];
    title: string;
    title_suggest: string;
    type : string;
    _version_: number;
}

export interface ColumnsProps{
    transformedBook: Book[];
    year: string;
}

export interface CardProps{
    book: Book;
}