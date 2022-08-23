import express from 'express';
import dogHandlers from './dogHandlers.js';
import {LIMIT_DEFAULT, LIST_OF_FILTERS} from './data.js';

const app = express();
const port = 5000;

app.get("/", dogHandlers.getWelcomePage);
app.get("/api/dogs", dogHandlers.getDogs);
app.get("/api/dogs/:id", dogHandlers.getDogById);


app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Server is listening on port ${port}`);
    }
});