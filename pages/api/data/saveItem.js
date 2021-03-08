import { GistDB } from "gist-io";

const db = new GistDB({
  token: process.env.githubToken,
});

export default async function handler(req, res) {
  const newItem = req.body;
  newItem.active = true;

  const content = await db.get({
    gistId: process.env.gistId,
    filename: "market-list.json",
  });

  content.push(newItem);

  await db.put({
    gistId: process.env.gistId,
    filename: "market-list.json",
    content,
  });

  res.status(200).json(content);
}
