$(document).ready(function(){   
$.ajax({
type : 'GET',
dataType : 'json',
url: 'json/data.json',
success : function(data) {
    _.each(data.categories,function(obj,i){    
        var vegetableTemplate = _.template($('#vegetable-template').html())
        var veggieHtml = vegetableTemplate({vegetables: obj.vegetables});
        $('#vegetableList').html(veggieHtml)    
        var riceTemplate= _.template($('#rice-template').html())
        var riceHtml = riceTemplate({rice: obj.rice});
        $('#riceList').html(riceHtml)
        var milletTemplate = _.template($('#millets-template').html())
        var milletHtml= milletTemplate({millets: obj.millets});
        $('#milletsList').html(milletHtml)
        var pulseTemplate = _.template($('#pulses-template').html())
        var pulseHtml = pulseTemplate({pulses: obj.pulses});
        $('#pulsesList').html(pulseHtml)

})
}
})
})