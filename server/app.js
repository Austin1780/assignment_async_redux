const express = require("express");
const app = express();

// ----------------------------------------
// XML2JS
// ----------------------------------------
const xml2js = require("xml2js");
const parser = new xml2js.Parser();

// ----------------------------------------
// App Variables
// ----------------------------------------
app.locals.appName = "My App";

// ----------------------------------------
// ENV
// ----------------------------------------
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// ----------------------------------------
// Body Parser
// ----------------------------------------
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// ----------------------------------------
// Sessions/Cookies
// ----------------------------------------
const cookieSession = require("cookie-session");

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET || "secret"]
  })
);

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// ----------------------------------------
// Flash Messages
// ----------------------------------------
const flash = require("express-flash-messages");
app.use(flash());

// ----------------------------------------
// Method Override
// ----------------------------------------
const methodOverride = require("method-override");
const getPostSupport = require("express-method-override-get-post-support");

app.use(
  methodOverride(
    getPostSupport.callback,
    getPostSupport.options // { methods: ['POST', 'GET'] }
  )
);

// ----------------------------------------
// Referrer
// ----------------------------------------
app.use((req, res, next) => {
  req.session.backUrl = req.header("Referer") || "/";
  next();
});

// ----------------------------------------
// Public
// ----------------------------------------
app.use(express.static(`${__dirname}/public`));

// ----------------------------------------
// Logging
// ----------------------------------------
const morgan = require("morgan");
const morganToolkit = require("morgan-toolkit")(morgan);

app.use(morganToolkit());

// ----------------------------------------
// Fetch
// ----------------------------------------

const fetch = require("node-fetch");
require("es6-promise").polyfill();
require("isomorphic-fetch");

const GOOD_READS_API_KEY = process.env.GOOD_READS_KEY;
const baseUrl = "https://www.goodreads.com/";

const getBookList = query => {
  let { author, title } = query;
  let response = fetch(
    `${baseUrl}search.xml?key=${GOOD_READS_API_KEY}&q=${query}`
  );
  return response;
};

// ----------------------------------------
// Routes
// ----------------------------------------
//app.use("/", (req, res) => {});

// app.get("/", async (req, res) => {
//   let query = "hobbit";
//   console.log(query);
//   let result = await getBookList(query);
//   console.log(result);
//   res.end();
// });

app.get("/", async (req, res) => {
  try {
    //let query = req.query;
    let query = "hobbit";
    let response = await getBookList(query);
    response = await response.text();
    response = parser.toJson(response);
    console.log(response);
    res.json(response);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
  res.end();
});

// ----------------------------------------
// Template Engine
// ----------------------------------------
const expressHandlebars = require("express-handlebars");
const helpers = require("./helpers");

const hbs = expressHandlebars.create({
  helpers: helpers,
  partialsDir: "views/",
  defaultLayout: "application"
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// ----------------------------------------
// Server
// ----------------------------------------
const port = process.env.PORT || process.argv[2] || 3000;
const host = "localhost";

let args;
process.env.NODE_ENV === "production" ? (args = [port]) : (args = [port, host]);

args.push(() => {
  console.log(`Listening: http://${host}:${port}\n`);
});

if (require.main === module) {
  app.listen.apply(app, args);
}

// ----------------------------------------
// Error Handling
// ----------------------------------------
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.stack) {
    err = err.stack;
  }
  res.status(500).render("errors/500", { error: err });
});

module.exports = app;
