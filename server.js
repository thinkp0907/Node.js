// 웹서버 구동
// 웹 어플리케이션 프레임워크 'express'

const express = require('express');
const app = express();


const server = app.listen(3000, () => {
    console.log('Start Server : Localhost:3000')
});

/*
 *const server = app.listen(3000, function() {
 *   console.log('Start Server : Localhost:3000')
 *});
*/

app.set('views',__dirname + '/view');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/about', (req, res) => {
    res.render('about.html');
})

// db 연결

// 아래 db 정보 작성
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db'
});


app.get('/db', function(req, res) {
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('select * from Test', function (error, results, fields) {
            res.send(JSON.stringify(results));
            console.log('result : ', results)
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
})


