export default async function handler(req, res) {
  const tokenIsValid = req.query.secret === process.env.NEXT_REVALIDATION_TOKEN;
  const pathToRevalidate = req.query.path;

  if (!tokenIsValid) {
    return res.status(401).json({ message: "Token is invalid" });
  }

  try {
    await res.revalidate(pathToRevalidate);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send(`Error revalidating ${pathToRevalidate}`);
  }
}
