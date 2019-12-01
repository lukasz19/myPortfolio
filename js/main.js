function zegarek() {
    let date = new Date();
    var hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDate();
    let dayNo = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;

    let days = new Array("Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota");
    let months = new Array("stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia");

    let showTime = days[day + 1] + ", godzina " + hour + ":" + minute + ":" + second + " UTC +01:00";

    let showDate = dayNo+1 + " " + months[month] + " " + year + " , Warszawa ";


    setTimeout(zegarek, 1000);
    document.getElementById("time").innerHTML = showTime;
    document.getElementById("date").innerHTML = showDate;
    console.log(showTime);
}
console.log(zegarek());