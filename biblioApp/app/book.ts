export class Book {
  public id: number;
  constructor(
    public title: string,
    public author: string,
    public year: number,
    public available: boolean
  ){}
}
