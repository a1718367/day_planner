
$(document).ready(function(){
    
    var cday = moment().format('Do MMM YYYY');
    $('#currentDay').text(cday);
    addblock();    

})

var schedule=[
    {time: "9 AM", event:""},
    {time: "10 AM", event:""},
    {time: "11 AM", event:""},
    {time: "12 PM", event:""},
    {time: "1 PM", event:""},
    {time: "2 PM", event:""},
    {time: "3 PM", event:""},
    {time: "4 PM", event:""},
    {time: "5 PM", event:""}
];

function addblock(){
    for(i=0;i<schedule.length;i++){
        var slothour = schedule[i].time;
        var entryrow = $('<div class="row"></div>');
        var slotname = $('<div class="col-1 hour"></div>').text(slothour);
        var texta = $('<textarea class="col-10 form-control description" rows="1"></textarea>"');
        var savebtn = $('<button class="col-1 saveBtn"><i class="far fa-save"></i></button>')
        
        $('#start').append(entryrow);
        entryrow.append(slotname);
        entryrow.append(texta);
        entryrow.append(savebtn);
    }
}


