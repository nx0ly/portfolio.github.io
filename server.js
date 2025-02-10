const express = require("express");

const app = express();

app.get("*", (req, res) => {
	res.sendStatus(200);
});

app.listen(7801, () => {
	console.log(`listening on port ${7801}`);
	console.log("OK");
});
