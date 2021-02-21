const schedule = require('node-schedule');

let scheduleObj = null;


const set = (s) => {
    var rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = s.dayOfWeek; //월요일, 화요일
    rule.hour = s.hour;
    rule.minute = s.minute;

    var job = schedule.scheduleJob(rule, function(){
        console.log('Scheduler has excuted!');
    });

    scheduleObj = job;
};

const cancel = () => {
    if(scheduleObj != null) {
        scheduleObj.cancel();
    } else {
        console.log('there is nothing to cancel')
    }
};

const setScheduler = (s) => {
    cancel();
    set(s);
}

const scheduleData = {
    dayOfWeek : [1,2],
    hour : 14,
    minute : 19
}

setScheduler(scheduleData);