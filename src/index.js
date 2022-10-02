// import a from './a';
import express from 'express';
import config from './config/config';

const app = express();

app.get('/', (req, res) => {
    debugger
    res.send({ success: "true" });
});

app.listen(config.PORT, () => {
    console.log(`Server is listening on port '${config.PORT}'`);
});

