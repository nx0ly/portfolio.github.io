const express = require("express");
const path = require("node:path")

const app = express();
require("dotenv").config();

app.use(express.static("public/view", {
	extensions: ["html"]
}));

app.get("/panel", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/admin/panel.html"));
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, req.url));
	console.log(req.url);
})

app.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});
