exports.getDate=function (){
    let today = new Date();
    let currentDay = today.getDay();
    let options={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("hi-IN",options);
};