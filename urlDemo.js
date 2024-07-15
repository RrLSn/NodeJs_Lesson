import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

//URL Onbject

const urlObj = new URL(urlString);

console.log(urlObj);

//format()
console.log(url.format(urlObj));

//import.meta.url
console.log(import.meta.url);

//fileURLToPath
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);

console.log(params.get("q"));
params.append("ago", "nice");
params.append("limit", "5");

console.log(params.get("ago"));
params.delete("ago");
console.log(params);
