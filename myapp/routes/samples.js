var express = require('express');
var router = express.Router();
const twitter = require('twitter');
var fs = require('fs');

/* サンプルAPI① 
* http://localhost:3000/samples にGETメソッドのリクエストを投げると、
* JSON形式で文字列を返す。
*/
router.get('/', function(req, res, next) {
    var param = {"値":"これはサンプルAPIです"};
    const consumer_key = "1aFit72tBRlFiLn7cvAJixOK6";
    const consumer_secret = "l8BljS6OjpHFLnMsBZAGh4SlqlkxoXGnB92mQ8cMzuu3seZq64";
    const access_token_key = "1319888646-gfXOx3YrDq0O6us2U7nwvEfOrT5qyt5KFq5mizw";
    const access_token_secret = "rUe4IUGeht1Sbq1qF5JfURY86jM1fiWOsgGZGH15XfM0S";
    
    // var json_data = fs.readFileSync("twitter_setting.json", "utf-8");
    // var obj = JSON.parse(json_data);
    
    const client = new twitter({
        consumer_key,
        consumer_secret,
        access_token_key,
        access_token_secret
    })
    
    client.get('search/tweets', {q: 'りゅうおうのおしごと filter:images exclude:retweets -filter:replies'}, function(error, tweets, response) {
        var result = [];
        var len = tweets.statuses.length;
        
        for(var i=0; i<len; i++){
            if(tweets.statuses[i].entities.media){
                console.log(tweets.statuses[i].entities.media[0].media_url);
                result.push(tweets.statuses[i].entities.media[0].media_url);
            }
        }
        
        console.log("------------------------------");
        console.log(result);
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.send(JSON.stringify(result));
    });
});

/* サンプルAPI② 
* http://localhost:3000/samples/hello にGETメソッドのリクエストを投げると、
* JSON形式で文字列を返す。
*/
router.get('/hello', function(req, res, next) {
    var param = {"result":"Hello World !"};
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
});

module.exports = router;