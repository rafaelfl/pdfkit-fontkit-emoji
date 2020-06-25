var fs = require("fs");
var http = require("http");
var fontkit = require("fontkit");
const makeSvg = require("./makeSvg");
const makePdf = require("./makePdf");

async function handler(req, res) {
  console.log('handler');
  makePdf();

  // const font = fontkit.openSync("./fonts/NotoEmoji-Regular.ttf");
  // await makeSvg(font, "Ro🙈👋🤚🖐✋🖖👌🤏✌️🤞🤟🤘🤙👈👉👆🖕");

  // res.write(`
  //   <html>
  //     <body>
  //       ${fs.readFileSync("./text.svg", "utf-8")}
  //     </body>
  //   </html>
  // `);
  // res.end();

  res.write(`
    <html>
      <body>
        OK
      </body>
    </html>
  `);
  res.end();
}

http.createServer(handler).listen(9090);
