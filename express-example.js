//expressを使用するのでその設定
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//処理を記述した外部ファイルを参照
var export_func = require("./express-exports");

// urlencodedとjsonは別々に初期化
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
//listenします。カッコ内の数字を変更することで解放するポート番号を変更できます。
app.listen(3000);
//確認のためコンソールに出力します。
console.log('Server is online.');
//app.getでGETすることができます。最初の引数を変更することでURLが変更できます。二つ目が実行内容です。
app.get('/get-example', function(req, res) {
  export_func.get_example();
})
//app.getでPOSTすることができます。最初の引数を変更することでURLが変更できます。二つ目が実行内容です。
app.post('/post-example', function(req, res) {
  export_func.post_example(req.id, req.name);
})
