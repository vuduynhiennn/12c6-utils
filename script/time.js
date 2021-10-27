function showDateTime() {
    var myDiv = document.getElementById("time");
  
    var date = new Date();
    var dayList = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    var monthNames = [
      "Tháng Một",
      "Tháng Hai",
      "Tháng Ba",
      "Tháng Tư",
      "Tháng Năm",
      "Tháng Sáu",
      "Tháng Bảy",
      "Tháng Tám",
      "Tháng Chín",
      "Tháng Mười",
      "Tháng Mười Một",
      "Tháng Mười Hai"
    ];
    var dayName = dayList[date.getDay()];
    var monthName = monthNames[date.getMonth()];
    var today = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
  
    var time = hour + ":" + min + ":" + sec;
    myDiv.innerText = `${today}. Time is:  ${time}`;
  }
  setInterval(showDateTime, 1000);
  