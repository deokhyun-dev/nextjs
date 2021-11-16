export default function handler(req, res) {
  res.setHeader("Set-Cookie", "a_name=Deok;Max-Age=0;HttpOnly");
  res.statusCode = 200;
  res.json({ message: "로그아웃 성공" });
}
