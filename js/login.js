$(document).ready(function(){
    $("#login").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
        $.ajax({
            type : 'GET',
            dataType : 'json',
            url: 'json/data.json',
            success : function(data) {
                $(data.users).each(function(i,obj){
                if( (email != null || password != null)
                && (obj.email == email && obj.password == password)){
                    location.href="cart.html"
                }
                else{
                
                    $("form").trigger("reset").find('input').addClass('is-invalid')
                    
                }  
            })
            
            
    }
})
})
})