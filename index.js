const http = require("http");
const data = require("./JsonData");
const jsondata = JSON.stringify(data, null, " ");
const app = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.write("<h1>What is Node.js?</h1>");
        res.write("<h3>Node.js is an open Source, cross platform and javascript runtime environment built on chrome's V8 javascript engine that executes javascript code. </h3>");
        res.write("<h4>Open Source:</h4><h3>The Entire code is publicly accessible. i.e., It can be used anyone in the world free of cost</h3>");
        res.write("<h4>Cross Platform:</h4><h3>The node.js can run on various platforms like windows, mac, unix, linux etc., and more over the code written in one machine can be executed in another machine where javascript is installed!</h3>");
        res.write("<h4>Javascript Runtime Environment:</h4><h3>It's just the encironment where the application is running.</h3>");
        res.write("<h3>Note: Node.js is asynchronous  and single threaded in nature!!</h3>");
        // res.write("This is Main Page!");
        res.end();
    }
    else if (req.url === "/jsondata" && req.method === "GET") {
        res.write(jsondata);
        res.end();
    }
    else {
        res.write("404 Page Not Found");
        res.end();
    }
});

app.listen(5000, () => {
    try {
        console.log("This is running on Port 5000");
    }
    catch (err) {
        console.log("Error Occurred", err);
    }
})