const express = require('express');
const app = express();
const cors = require('cors');
const urlRoute = require('./routes/url.js');
const { connectdb } = require('./routes/data.js');

app.use(express.json());  // Corrected line
app.use(cors());

const PORT = process.env.PORT || 8001;

connectdb("mongodb://localhost:27017/shorturl").then(
    () => console.log("mongodb connected")
);

app.use("/url", urlRoute);

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
