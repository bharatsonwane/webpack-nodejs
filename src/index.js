import express from 'express';
import config from './config/config';
import { testAdd } from './decoratorTest/geek.decorator';

const app = express();

app.get('/', (req, res) => {
    testAdd()
    res.send({ success: "true" });
});

app.listen(config.PORT, () => {
    console.log(`Server is listening on port '${config.PORT}'`);
});

