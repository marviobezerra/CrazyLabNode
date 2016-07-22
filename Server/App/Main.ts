import { Server } from "./Server";

console.log("Listening on port 4000...");
let server: Server = new Server();
server.App.listen(4000);