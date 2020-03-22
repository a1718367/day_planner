//declare schedule obj
var schedule=[
    {time: "9 AM", event:"", hour:"9"},
    {time: "10 AM", event:"", hour:"10"},
    {time: "11 AM", event:"", hour:"11"},
    {time: "12 PM", event:"", hour:"12"},
    {time: "1 PM", event:"", hour:"13"},
    {time: "2 PM", event:"", hour:"14"},
    {time: "3 PM", event:"", hour:"15"},
    {time: "4 PM", event:"", hour:"16"},
    {time: "5 PM", event:"", hour:"17"}
];
//check if previous file already existed in local storage
var usersch = JSON.parse(localStorage.getItem("userdayplan"))
if(usersch==null){usersch=schedule}


$(document).ready(function(){

    var cday = moment().format('dddd, Do MMM YYYY, h:mm:ss a');
    $('#currentDay').text(cday);
    addblock();
    
//onclick saveBtn => get id from button clicked, get content from previous html element
//validate if content is empty => alert user
//set localstorage array using btn id
    $('.saveBtn').on('click',function () {
        var btnid = $(this).attr('id');
        var p = $(this).prev().val()
        if(p==""){alert("No item has been enter in this time slot")}
        else{
            usersch[btnid].event = p
            console.log(usersch)
            localStorage.setItem('userdayplan',JSON.stringify(usersch));
        }

    })

//onclick refreshBtn => remove userdayplan from local storage
//reload the page

    $('.refreshBtn').on('click',function() {
        localStorage.clear('userdayplan');
        location.reload();

    })

})
//loop over the length of schedule array and add element
//call colorMe fn to apply color as needed
//append element onto page

function addblock(){
    for(i=0;i<schedule.length;i++){
        var slothour = schedule[i].time;
        var hourblock = schedule[i].hour;
        var blockcolor = colorMe(hourblock);
        var entryrow = $('<div class="row"'+ "id="+i+">");
        var slotname = $('<div class="col-2 col-lg-1 hour"></div>').text(slothour);
        var texta = $('<textarea class="col-8 col-lg-10 form-control description '+ blockcolor +'" rows="1"'+"id="+i+'>').text(usersch[i].event);//
        var savebtn = $('<button class="col-2 col-lg-1 saveBtn"' + 'id='+i+'><i class="far fa-save"></i></button>')
        
        $('#start').append(entryrow);
        entryrow.append(slotname);
        entryrow.append(texta);
        entryrow.append(savebtn);
        
    }
}

//get current time with new Date() & gethour()
//compare to parse in value from schedule array
//retunr present, past or future depends on result

function colorMe(time){
    var x = new Date();
    var y = x.getHours()
    var z = parseInt(time)
    if(y === z){return "present"}
    else if (y > z){return "past"}
    else if (y < z){return "future"}
    }


// Redundant

// function colorcode(time){
//     var hnow = moment()
//     var hslot = moment(time, 'H A')
//     if(hnow.isBefore(hslot)){return "future"}
//     else if(hnow.isSame(hslot)){return "present"}
//     else if(hnow.isAfter(hslot)){return "past"}

// }

// var hnow = moment()
// console.log(hnow)
// var hslot = moment(schedule[0].time, 'H A')
// console.log(hslot)
// console.log(hnow.isBefore(hslot))
// console.log(hnow.isSame(hslot))
// console.log(hnow.isAfter(hslot))

// var x = new Date()
// var y = x.getHours()
// var z = schedule[5].hour
// var w = parseInt(z)


