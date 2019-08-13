const express = require("express");
const { createElement, Fragment } = require("react");
const { renderToString } = require("react-dom/server");
const {
  Circle,
  DualRing,
  Ellipsis,
  Facebook,
  Grid,
  Heart,
  Hourglass,
  Ring,
  Ripple,
  Roller,
  Spinner
} = require("react-css-spinners");

const port = 5000;
const app = express();

const html = renderToString(
  createElement(
    Fragment,
    null,
    createElement(Ring),
    createElement(Circle),
    createElement(DualRing),
    createElement(Ellipsis),
    createElement(Facebook),
    createElement(Grid),
    createElement(Heart),
    createElement(Hourglass),
    createElement(Ring),
    createElement(Ripple),
    createElement(Roller),
    createElement(Spinner)
  )
);

app.get("*", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body style="background-color: black">
        ${html}
    </body>
    </html>
  `);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
