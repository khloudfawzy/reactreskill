export interface BookModel {
    title: string,
    author: string,
    imgUrl: string,
}

export interface BookListModel {
    currentlyReading: BookModel[],
    wantToRead: BookModel[],
    read: BookModel[],
}