import * as http from "http";

import { Application } from "./App";
import { AppUtils } from "./App.Utils";

let App = new Application().AppExpress;
const port = AppUtils.NormalizePort(process.env.PORT || 3000);
App.set("port", port);

const server = http.createServer(App);

server.listen(port, () => { 
    console.log("Node server listening on port " + port);
 });

server.on("error", (error) => AppUtils.OnError(error, port));
server.on("listening", () => AppUtils.OnListening(server));

