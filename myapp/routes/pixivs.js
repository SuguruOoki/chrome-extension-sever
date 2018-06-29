const PixivAppApi = require('pixiv-app-api');
const pixivImg = require('pixiv-img');
const pixiv = new PixivAppApi();
pixiv.login('user_hwdx5872','Arch04090527@');

 
pixiv
  .searchIllust('艦これ10000users入り')
  .then(json => {
    console.dir(json.illusts[0].imageUrls.squareMedium);
    asfasfasdfas
    // return pixivImg(json.illusts[0].image_urls);
  })
  .then(() => {
    console.log('finish');
})