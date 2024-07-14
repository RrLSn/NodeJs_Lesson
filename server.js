import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT;

//Get current Path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  //   res.setHeader("content-Type", "text/html");
  //   res.statusCode = 404;
  //   res.write("Hello World!");
  //   res.end("<h1>Hello World</h1>");
  try {
    // check if Get request
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }
      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "content-Type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
