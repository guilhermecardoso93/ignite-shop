import { NextApiRequest, NextApiResponse } from "next";

export default function hanlder(req: NextApiRequest, res:NextApiResponse) {
  return res.json({message: 'Hello World'})
}