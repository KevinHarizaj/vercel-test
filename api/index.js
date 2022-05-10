export default function handler(request, response) {
  response.status(200).json({
    body: "vercel function test",
    query: request.query,
    cookies: request.cookies,
  });
}
