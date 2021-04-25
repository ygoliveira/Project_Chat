import { http } from "./http";
import "./websocket/client";

const port = 3333;
const url = `http://localhost:${port}/`

http.listen(port, () => {
    console.log(`Server is running on ${url}`)
});