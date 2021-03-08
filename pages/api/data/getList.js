import { GistDB } from "gist-io";

const db = new GistDB({
  token: process.env.githubToken,
});

export default async function handler(req, res) {
  const content = await db.get({
    gistId: process.env.gistId,
    filename: "market-list.json",
  });

  res.status(200).json(content);
}
