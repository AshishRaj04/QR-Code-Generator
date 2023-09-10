import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
      message: "Type the url :",
      name: "URL",
    },
  ])
  .then((answers) => {
    let theUrl = answers.URL;
    let qrimg = qr.image(theUrl, { size: 10, margin: 10 });
    qrimg.pipe(fs.createWriteStream("qrimg.png"));

    fs.createWriteStream("url.txt", "utf8").write(theUrl);
  });
