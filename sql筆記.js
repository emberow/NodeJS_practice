
var od = require('./database/operate_database');

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: ""
  });
//嘗試創造table(有可能已經存在)
od.create_database(con);

con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "mydb"
});

// 建立table
od.create_table(con)
//insert into
od.insert_database(con, ['Andy','Taiwan']);
//update
od.update_database(con);
//select
od.select_database(con);

