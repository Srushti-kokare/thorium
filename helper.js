
function printDate(){
    let date= new Date();
console.log ("date: " + date.getDate())
}

function printMonth(){
    let month= new Date();
    console.log ("Month: " + (month.getMonth()+1))
}

function getBatchInfo(){
   let todayTopics = "thorium, W3D1, the topic for today is nodejs"
   console.log(todayTopics)
}


module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;