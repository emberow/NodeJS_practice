

exports.create_table = function(con){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
        var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), address VARCHAR(255))";
        try{
            con.query(sql, function (err, result) {
                console.log("Table created");
              });
        }
        catch{
            console.log("Table exists");
        }
        
      });
}


exports.create_database = function (con){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        try{
            con.query("CREATE DATABASE mydb", function (err, result) {
                console.log("Database created");
              });
        }
        catch{
            console.log("Database exist");
        }
        
    });
}


exports.insert_database = function(con,data) {
    var name = data[0];
    var address = data[1];
    console.log(name,address);
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('" + name + "', '" + address + "')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
}

//省略inner join筆記
exports.select_database = function(con) {
    //顯示從 最後第三筆開始(offset 2) 最後五筆資料(limit 5)
    con.query("SELECT * FROM customers ORDER BY id DESC LIMIT 5 OFFSET 2", function (err, result, fields) {
        if (err) throw err;
        // result為object 以下為找尋第九個name,address
        // console.log(result[8].name);
        // console.log(result[8].address);
        console.log(result);

        //fields為該table的schema
    });
}

exports.drop_database = function(con) {
    con.query("DROP TABLE IF EXISTS customers", function (err, result, fields) {
        if (err) throw err;
        console.log("Table deleted");
    });
}

exports.update_database = function(con) {

    con.query("UPDATE customers SET address = 'US' WHERE id = 5", function (err, result) {
        if (err) throw err;
        // 顯示影響了幾列資料
        console.log(result.affectedRows + " record(s) updated");
      });
}