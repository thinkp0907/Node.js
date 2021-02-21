// email 발송 프로그램

// npm i nodemailer -> node.js에서 많이 사용되는 mailing 패키지
const nodemailer = require('nodemailer');

// mailtrap.io 에서 test를 위해 가져온 정보
const email = { 
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "376c365cd04394",
    pass: "f59db94816b74f"
  }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    })
}

let email_data = {
    from : 'thinkp0907@gamil.com',
    to : 'thinkp0907@gmail.com',
    subject : '테스트 메일 입니다',
    text : 'node js 한시간에 끝내보자'
}

send(email_data);

