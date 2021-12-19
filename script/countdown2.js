(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "02/01/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days2").innerText = Math.floor(distance / (day)),
            document.getElementById("hours2").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes2").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds2").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline2").innerText = "Đến ngày thi rồi";
            document.getElementById("countdown2").style.display = "none";
            document.getElementById("content2").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());