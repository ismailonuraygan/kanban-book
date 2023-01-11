import { Book } from "../../types/type";

export const transformKanban = (docs: Book[]) => {
    const booksByTheirYears: Record<string, Book[]> = {};

    docs.forEach(doc => {
        let lastPublishYear = Math.max(...doc.publish_year)
        if (!booksByTheirYears.hasOwnProperty(lastPublishYear)) {
            booksByTheirYears[lastPublishYear] = [doc]
        }
        else booksByTheirYears[lastPublishYear].push(doc);
    })

    return booksByTheirYears;
}