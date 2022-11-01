//http 프로토콜을 사용하는 서버를 시작
import http from "http";
import app from "./app.js";

const server = http.createServer(app);
const serverConfig = {
  host: "localhost",
  port: 3000,
};

server.on("listening", () => {
  console.log("Server Start Listening!!!");
  console.log(
    `Web Browser Connect http://${serverConfig.host}:${serverConfig.port}`
  );
});

server.listen(serverConfig);
