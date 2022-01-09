
// 可以呼叫"demofile1.html"的內容
var http = require('http');
var fs = require('fs');

// 對檔案操作 mode = 'a'
function append_file(){
    var txt = "<html><body><h1>My Header</h1><p>My paragraph.</p></body></html>"
    // 將資料寫入檔案
    fs.appendFile('demofile1.html', txt, function (err) {
        if (err) throw err;
        console.log('新增成功');
      });
}

// 對檔案操作mode = 'w'
function write_file(){
    var txt = "<html><body><h1>My Header</h1><p>My paragraph.</p></body></html>"
    fs.writeFile('demofile1.html', txt, function (err) {
    if (err) throw err;
    console.log('寫入成功');
    });
}

// 對檔案操作mode = 'r'
function read_file(){
    return fs.readFileSync('files/demofile1.html', 'utf-8')
}

// 刪除檔案
function delete_file(){
    fs.unlink('demofile1.html', function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });
}

function rename_filename(){
    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
      });
}



// 從"demofile1.html"讀取檔案內容之後放在伺服器上面
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    data = read_file()
    res.write(data);
    res.end();  
}).listen(8080);