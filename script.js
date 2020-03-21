
$(document).ready(function(){
    
    var cday = moment().format('dddd, Do MMM YYYY, h:mm:ss a');
    $('#currentDay').text(cday);
    addblock();
    

})

var schedule=[
    {time: "9 AM", event:"", hour:"09:00"},
    {time: "10 AM", event:"", hour:"10:00"},
    {time: "11 AM", event:"", hour:"11:00"},
    {time: "12 PM", event:"", hour:"12:00"},
    {time: "1 PM", event:"", hour:"13:00"},
    {time: "2 PM", event:"", hour:"14:00"},
    {time: "3 PM", event:"", hour:"15:00"},
    {time: "4 PM", event:"", hour:"16:00"},
    {time: "5 PM", event:"", hour:"17:00"}
];

function addblock(){
    for(i=0;i<schedule.length;i++){
        var slothour = schedule[i].time;
        var blockcolor = colorcode(i);
        var entryrow = $('<div class="row"></div>');
        var slotname = $('<div class="col-1 hour"></div>').text(slothour);
        var texta = $('<textarea class="col-10 form-control '+ blockcolor +' description rows="1">');
        var savebtn = $('<button class="col-1 saveBtn"><i class="far fa-save"></i></button>')
        
        $('#start').append(entryrow);
        entryrow.append(slotname);
        entryrow.append(texta);
        entryrow.append(savebtn);
        
    }
}


function colorcode(i){
    var q = moment().format('H A');
    var w = schedule[i].hour;
    
    if(moment(w,'H A').isBefore(q)===true){
        return "future"
    }else if(moment(w,'H A').isSame(q)===true){
        return "present"
    }else{return "past"}

}

