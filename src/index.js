// import a from './a';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    debugger
    res.send({ success: "true" });
});

app.listen(3000, () =>
    console.log('express ready')
);

