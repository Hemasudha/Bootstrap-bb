$(document).ready(function(){   
$.ajax({
type : 'GET',
dataType : 'json',
url: 'json/data.json',
success : function(data) {

$(data.categories).each(function(i,obj){
console.log(obj.vegetables);
// for(j=0;j<obj.vegetables.length;j++){
//     console.log(obj.vegetables)

    $( "#vegetableTemplate" ).tmpl( data.categories )
    .appendTo( "#vegetableList" )
    $( "#riceTemplate" ).tmpl( data.categories )
    .appendTo( "#riceList" )
    $( "#milletsTemplate" ).tmpl( data.categories )
    .appendTo( "#milletsList" )
    $( "#pulsesTemplate" ).tmpl( data.categories )
    .appendTo( "#pulsesList" )
//$.template('categoryVeg', '<div class="col-sm-3"><img src="${obj.vegetables[j].image}"><div><p>${obj.vegetables[j].title}</p><p>${obj.vegetables[j].weight}</p></div></div>');
// $('<img />').attr('src', "" + obj.vegetables[j].image + "").appendTo('#vegetables')              
// $('.price').attr(obj.vegetables[j].title).appendTo('#vegetables')        
//$.tmpl('categoryVeg', vegetables ).appendTo('#vegetables');

// var markup="<li>"+"<img src='" + obj.vegetables[j].image + "' / >"+"<p>"+obj.vegetables[j].title+"</p>"+obj.vegetables[j].price+"</li>"; 
// $.template( "movieTemplate", markup );
// $.tmpl( "movieTemplate", vegetables )
// .appendTo( "#vegetableList" );

// $( ".rice" ).
// append("<li>"+"<img src='" + obj.rice[j].image + "' / >"+obj.rice[j].title+obj.vegetables[j].price+"</li>"); 

// $( ".millets" ).
// append("<li>"+"<img src='" + obj.millets[j].image + "' / >"+obj.millets[j].title+obj.millets[j].price+"</li>"); 
// $( ".pulses" ).
// append("<li>"+"<img src='" + obj.pulses[j].image + "' / >"+obj.pulses[j].title+obj.pulses[j].price+"</li>");            


        
    })
}
})
})