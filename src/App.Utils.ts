import * as http from "http";

export class AppUtils {

    public static NormalizePort(val: number | string): number | string | boolean {
        let port: number = (typeof val === "string") ? parseInt(val, 10) : val;
        if (isNaN(port)) return val;
        else if (port >= 0) return port;
        else return false;
    }

    public static OnError(error: NodeJS.ErrnoException, port: number | string | boolean): void {
        if (error.syscall !== "listen") throw error;
        let bind = (typeof port === "string") ? "Pipe " + port : "Port " + port;
        switch (error.code) {
            case "EACCES":
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case "EADDRINUSE":
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                console.log(error);
                throw error;
        }
    }

    public static OnListening(server: http.Server): void {
        let addr = server.address();
        let bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
        console.log("Running and Listening");
    }
}