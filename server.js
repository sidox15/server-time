const express = require('express');
const app = express();

app.get('/time', (req, res) => {
    res.json({ serverTime: Date.now() }); 
});

app.listen(3000, () => console.log("Server running on port 3000"));
