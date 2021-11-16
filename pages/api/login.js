export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    res.setHeader("Set-Cookie", "a_name=Deok;Max-Age=3600;HttpOnly");
    res.statusCode = 200;
    res.json({ message: "되지 않냐" });
  }
}
