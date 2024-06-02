const express = require("express");
const app = express();
const port = 5005;

app.get("/24-hours-pair", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.binance.com/api/v3/ticker/24hr?symbol=${req.query.pair}`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
