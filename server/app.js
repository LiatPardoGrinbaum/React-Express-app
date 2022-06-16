const express = require("express");
const { default: axios } = require("axios");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());

app.get("/weather/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c7655ed43d404d960e1709cac30f60be`);
    // const temp = (data.list[0].main.temp - 273).toFixed(1);
    res.status(200).send({ city: data.city.name, temp: (data.list[0].main.temp - 273).toFixed(1) + "°" });
  } catch (e) {
    res.status(400).send(e.message);
  }
});

const listenServer = (e) => console.log(e ? "Something went wrong" : "server is listening on port " + PORT);
app.listen(PORT, listenServer);
