$(document).ready(function(){
    $("#login").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
        $.ajax({
            type : 'GET',
            dataType : 'json',
            url: 'json/data.json',
            success : function(data) {
                _.each(data.users,function(obj,i){
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