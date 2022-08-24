import express from 'express';
import dogHandlers from './dogHandlers.js';

const app = express();
const port = process.env.port || 5000;

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