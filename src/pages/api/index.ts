export const getAuthor = async (authorID: string) => {
    const author = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/search.json?language=eng&author=${authorID}`)
        .then(res => res.json())
        .then(res => res.docs);
    return author;
}