// http://127.0.0.1:8080/files/winter.html

var http = require('http');
var dt = require('./module/module練習');
var url = require('url');
var fs = require('fs');



http.createServer(function (req, res) {
    // 須加這一行才可以顯示中文
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});

    // 呼叫"module練習.js"的函式
    // res.write("The date and time is currently: " + dt.myDateTime() + "<br>");

    //印出目前這個網站在電腦目錄的相對位置
    // res.write(req.url);

    // 解析url裡面的參數(get method)
    // http://localhost:8080/winter.html/?year=2017&month=July
    
     
    // 解析url的資訊
    var q = url.parse(req.url, true);
    // console.log('host=>'+ q.host); //returns 'localhost:8080'
    // console.log('pathname=>' + q.pathname); //returns '/default.htm'
    // console.log('search=>' + q.search); //returns '?year=2017&month=february'

    // 解析url使用get method的資料
    var qdata = q.query;
    var txt = "接收get方法傳入的參數 => " + "year = " + qdata.year + " month = " + qdata.month;
    // res.write(txt);

    var filename = "." + q.pathname;
    console.log(filename)
    fs.readFile(filename, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data.toString());
        console.log(data.toString())
        return res.end();
      });
    
}).listen(8080);



