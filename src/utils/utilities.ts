export const transformKanban = (docs) => {
    const booksByTheirYears = {};

    docs.forEach(doc => {
        let lastPublishYear = Math.max(...doc.publish_year)
        /* console.log(lastPublishYear) */
        if (!booksByTheirYears.hasOwnProperty(lastPublishYear)) {
            booksByTheirYears[lastPublishYear] = [doc]
            console.log(doc, lastPublishYear )
        }
        booksByTheirYears[lastPublishYear].push(doc);
    })
    return booksByTheirYears;
}