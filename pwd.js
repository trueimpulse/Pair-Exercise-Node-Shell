module.exports = function () {
  process.stdout.write("prompt > ");
  process.stdin.on("data", (data) => {
    process.stdout.write(process.cwd());
    process.stdout.write("\nprompt > ");
  });
};
