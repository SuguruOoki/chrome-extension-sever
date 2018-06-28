
//出力用のjsonを作成します。
var json_example = [
      {
           "id": "1",
           "name": "example_json_1",
       },{
           "id": "2",
           "name": "example_json_2"
       }
   ]
//GETの例です。jsonの中身を出力します。
exports.get_example=function(){
   res.json(json_example);
}
//POSTの例です。jsonにデータを追加することができます。
exports.post_example = function(id, name) {
   json_example = [
     {
          "id": id,
          "name": name
      }
   ]
}
