exports.getDate = function(){
    const todaydate = new Date();
    let options = {
        weekday : "long",
        day : "numeric",
        month: "long",
        year: "numeric"
    };
    let day = todaydate.toLocaleDateString("en-US", options);
    return day;
}

exports.getDay =function(){
    const todaydate = new Date();
    let options = {
        weekday : "long"
    };
    let day = todaydate.toLocaleDateString("en-US", options);
    return day;
}