#!/usr/bin/env node

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false, limit: "150mb" }));
app.use(express.json());
const fs = require("fs");
const { nanoid } = require("nanoid");
const cors = require("cors");
app.use('*',cors({
	origin: "*",
}));
const open = require('open');
// *SERVE THE SPA
app.use(express.static(__dirname + "/public/client/dist"));

app.get("*", (req, res) => {
	res.sendFile(__dirname + "/public/client/dist/index.html");
});

// * Function declarations

const folder = __dirname + "/database";
const file = __dirname + "/database/db.json";

if (!fs.existsSync(folder)) {
	fs.mkdirSync(folder);
}

if (!fs.existsSync(file)) {
	fs.writeFileSync(file, JSON.stringify({ Users: [] }));
}

// function to read the database

function readDB() {
	return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeDB(data) {
    return fs.writeFileSync(file, JSON.stringify(data));
}
// function to verify sent data

function verify(req, res, next) {
	const route = req.body.route;
	const response = req.body.response;
	if (
		route &&
		response &&
		route != null &&
		response != null
	) {
		next();
	} else {
		return res.sendStatus(400);
	}
}

// * POST API ROUTES

app.post("/routes", (req, res) => {
	res.send(readDB().Users);
});


app.post("/user/add", (req, res) => {
	const newRoute = {
		id: nanoid(10),
		routes: [],
	};
	const db = readDB();
	db.Users.push(newRoute);
	writeDB(db);
	res.send({ data: newRoute });
});

app.post("/routes/add", verify, (req, res) => {
	const db = readDB();
    const route = db.Users.find(user => user.id == req.body.id);
	const routes = route.routes.map(r => r.route);
	if (routes.includes(req.body.route)) return res.sendStatus(400);
    route.routes.push({
		route: req.body.route,
		response: req.body.response,
		desc: req.body.desc || null,
	});
	writeDB(db);
	res.send({ endpoint: `/${req.body.id}/${req.body.route}` });
});

app.delete("/routes/del", (req, res) => {
	let db = readDB();
	let user = db.Users.find((r) => r.id === req.body.id);
    user.routes = user.routes.filter((r) => r.route !== req.body.route);
	writeDB(db);
	res.sendStatus(200);
});

app.patch("/routes/update", (req, res) => {
	let db = readDB();
	let user = db.Users.find((r) => r.id === req.body.id);
    const route = user.routes.find((r) => r.route === req.body.route);
    route.response = req.body.response;
	writeDB(db);
	res.sendStatus(204);
});

// * get all routes for a user

app.post("/api/:id", (req, res) => {
	const db = readDB();
	const user = db.Users.find((r) => r.id === req.params.id);
	res.send(user.routes);
});

// * query the api

app.post("/api/:id/:route", (req, res) => {
	const db = readDB().Users;
	const index = db.findIndex((r) => r.id === req.params.id);
	if (index >= 0) {
        const resp = db[index].routes.find((r) => r.route === req.params.route);
        res.send(resp.response);
	} else {
		res.sendStatus(404);
	}
});

// * Start the server

app.listen(process.env.PORT || 8008, () => {
	console.log("🚀 MOCK SERVER running on http://localhost:8008");
	console.log("✨ Method for all requests is POST");
	console.log("⚡ Get all users: http://localhost:8008/routes");
	console.log("⚡ Get end points for a user: http://localhost:8008/<user-id>");
	open('http://localhost:8008');
});
