$(document).ready(function(){   
$.ajax({
type : 'GET',
dataType : 'json',
url: 'json/data.json',
success : function(data) {
$(data.categories).each(function(i,obj){
    $( "#vegetableTemplate" ).tmpl( data.categories )
    .appendTo( "#vegetableList" )
    $( "#riceTemplate" ).tmpl( data.categories )
    .appendTo( "#riceList" )
    $( "#milletsTemplate" ).tmpl( data.categories )
    .appendTo( "#milletsList" )
    $( "#pulsesTemplate" ).tmpl( data.categories )
    .appendTo( "#pulsesList" )        
    })
}
})
})