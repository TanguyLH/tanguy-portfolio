import { NextApiRequest, NextApiResponse } from "next";
import { Author } from "../../types/Author";
import { Quote } from "../../types/Quote";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quote>
) : Promise<Quote> {
  const quote : Quote = await fetch("https://api.fisenko.net/v1/quotes/en/random").then((res) =>
    res.json()
  );
  res.status(200).json(quote);
  return quote;
}