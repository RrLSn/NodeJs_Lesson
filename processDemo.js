//argv
console.log(process.argv);
console.log(process.argv[2]);

//process.env
console.log(process.env);
console.log(process.env.USERDOMAIN);

// pid
console.log(process.pid);

//cwd
console.log(process.cwd());

//title
console.log(process.title);

//memoryUsage()
console.log(process.memoryUsage());

//uptime()
console.log(process.uptime());

process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

//exit 0 means success and 1 means failed
process.exit(0);

console.log("Hello after exit");
