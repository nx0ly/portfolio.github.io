const express = require("express");
const path = require("node:path")

const app = express();

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/html/main.html"));
});

app.listen(7801, () => {
	console.log(`listening on port ${7801}`);
	console.log("OK");
});
