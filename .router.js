function setRouter(app){ 
 var router = app; 


app.get('/getNews',function(req,res){
    var news=[
        '侠客岛：让各大富豪隐形资产“见光死”的政策来了',
    '这位世界最能打外长 悄悄以少林弟子身份回母校',
    '75集团军某旅：126名善谋打仗官兵转隶即受重用',
    '一连两天 解放军两架“运-8”电子战机再度绕台',
    '50万印度人在孟买竖起战神旗帜 目标不是中国',
    '美国内大乱 中国公知和美分不敢告诉你的事件详情'

    ]

    var data=[]
    for(var i=0;i<3;i++){//每次3个
        var index=parseInt(Math.random()*news.length)//下标
        data.push(news[index])  //下标对应的新闻
        news.splice(index,1) //删除已经选中过的新闻
    }

    var cb= req.query.callback;//专门存放数据的函数
    if(cb){
        res.send(cb+'('+JSON.stringify(data)+')')
    }else{
        res.send(data)
    }


    })







}
 module.exports.setRouter = setRouter