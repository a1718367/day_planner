
$(document).ready(function(){
    
    var cday = moment().format('dddd, Do MMM YYYY, h:mm:ss a');
    $('#currentDay').text(cday);
    addblock();
    

})

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

function addblock(){
    for(i=0;i<schedule.length;i++){
        var slothour = schedule[i].time;
        var hourblock = schedule[i].hour;
        var blockcolor = colorMe(hourblock);
        var entryrow = $('<div class="row"'+ "id="+i+">");
        var slotname = $('<div class="col-2 col-lg-1 hour"></div>').text(slothour);
        var texta = $('<textarea class="col-8 col-lg-10 form-control '+ blockcolor +' description rows="1">');
        var savebtn = $('<button class="col-2 col-lg-1 saveBtn"><i class="far fa-save"></i></button>')
        
        $('#start').append(entryrow);
        entryrow.append(slotname);
        entryrow.append(texta);
        entryrow.append(savebtn);
        
    }
}


function colorMe(time){
var x = new Date();
var y = x.getHours()
var z = parseInt(time)
if(y === z){return "present"}
else if (y > z){return "past"}
else if (y < z){return "future"}
}


function colorcode(time){
    var hnow = moment()
    var hslot = moment(time, 'H A')
    if(hnow.isBefore(hslot)){return "future"}
    else if(hnow.isSame(hslot)){return "present"}
    else if(hnow.isAfter(hslot)){return "past"}

}