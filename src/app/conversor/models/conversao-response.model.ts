export class ConversaoResponse{
  /*constructor(
    public base: string,
    public date: string,
    public rates: any) {}*/
  constructor(
    public code: string,
    public create_date: string,
    public codeIn: string,
    public bid: number) {}
}

//{"base":"USD","date":"2017-03-08","rates":{"BRL":3.1405}}
