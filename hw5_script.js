$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"))
   
    $(".saveBtn").on("click", function(){
        var input=$(this).siblings(".description").val() //grabs description input
        var time=$(this).parent().attr("id") //grabs the time of the parent id ie hour 
        localStorage.setItem(time,input) //sets in local storage
    })
// grabs above input and time from local storage

    $("#hour-9 .description").val(localStorage.getItem("hour-9 "))
    $("#hour-10 .description").val(localStorage.getItem("hour-10")) 
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-1 .description").val(localStorage.getItem("hour-1"))
    $("#hour-2 .description").val(localStorage.getItem("hour-2"))
    $("#hour-3 .description").val(localStorage.getItem("hour-3"))
    $("#hour-4 .description").val(localStorage.getItem("hour-4"))
    $("#hour-5 .description").val(localStorage.getItem("hour-5"))
    $("#hour-6 .description").val(localStorage.getItem("hour-6"))
    // need 1 for each hour block 

    function timeCheck(){
        var now=moment().hours();
        $(".time-block").each(function(){
            var blockTime=parseInt($(this).attr("id").split("-")[1]); // grabs html id hour turns it to a number 
        if (blockTime<now){
            $(this).addClass("past")
        } else if (blockTime===now){
            $(this).removeClass("past")
            $(this).addClass("present")
        } else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")

        }
        })

    
    } 
    timeCheck()
   
})