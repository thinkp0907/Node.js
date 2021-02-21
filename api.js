// API 서버 구축
// API 로 제공하는 이유는, 코드 노출 및 직접적인 데이터 베이스 컨넥션 없이 제공하기위해

// Web HTTP를 이용해서 API 서버에 URL 방식으로 데이터 호출하는 REST API

const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey')


const server = app.listen(3001, ()=> {
    console.log('Start Server : localhost:3001');
});

// console.log(uuidAPIKey.create());

const key = {
    apiKey: 'PNKWHB7-VSN4QWA-GYZZJQ8-YQQDWQQ',
    uuid: 'b567c8ac-de6a-4bf1-87bf-f95df5eede5e'
};

app.get('/api/users/:apikey/:type', async (req, res) => {
    let {
        apikey,
        type
    } = req.params;

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)){
        res.send('Api key is not valid.')
    } else {
        if(type == 'seoul') {
            let data = [
                {name:'홍길동',city:'seoul'},
                {name:'김철수',city:'seoul'}
            ];
            res.send(data);
        }else if(type == 'jeju') {
            let data = [
                {name:'박지성',city:'jeju'},
                {name:'손흥민',city:'jeju'}
            ];
            res.send(data);
        }else {
            res.send('type is not correct.')
        }
    }
})

app.get('/api/sales/:apikey/:year', async (req, res) => {
    let {
        apikey,
        year
    } = req.params;

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)){
        res.send('Api key is not valid.')
    } else {
        if(year == '2019') {
            let data = [
                {product:'반도체',amout:30928940},
                {product:'냉장고',amout:923482}
            ];
            res.send(data);
        }else if(year == '2020') {
            let data = [
                {product:'반도체',amout:9320483},
                {product:'냉장고',amout:2790384}
            ];
            res.send(data);
        }else {
            res.send('type is not correct.')
        }
    }
})