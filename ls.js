const fs = require("fs");
//require OR import should always be on top

module.exports = function () {
  //we're exporting the ls function which is calling and using fs
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join("\n"));
      process.stdout.write("\nprompt > ");
    }
  });
};

//fs is not a file it is a whole module
