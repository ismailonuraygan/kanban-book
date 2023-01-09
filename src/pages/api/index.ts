export const getAuthor = async (authorID: string) => {
    const author = await fetch(`https://openlibrary.org/search.json?language=eng&author=${authorID}&limit=10`)
        .then(res => res.json())
        .then(res => res.docs);
    return author;
}