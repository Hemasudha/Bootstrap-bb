var user={
	"users": [{
			"email": "user1@gmail.com",
			"password": "user1"
		},
		{
			"email": "user2@gmail.com",
			"password": "user2"
		}
	]
}

var article={
    "articles":
    [
    {
        "image": "images/fresho-carrot-local.jpg",
        "title":"carrot",
        "weight":"1/2kg",
        "price":"Rs 100/-"
  
    },
    {
      "image": "images/fresho-potato.jpg",
      "title":"potato",
      "weight":"1/2kg",
      "price": "Rs 100/-"
  
  },
  {
      "image": "images/fresho-onion.jpg",
      "title":"onion",
      "weight":"1/2kg",
      "price": "Rs 100/-"
  
  
  },
  {
    "image": "images/capsicum-green.jpg",
    "title":"capsicum",
    "weight":"1/2kg",
    "price": "Rs 100/-"
  
  
  },
  {
    "image": "images/fresho-carrot-local.jpg",
    "title":"carrot",
    "weight":"1/2kg",
    "price": "Rs 100/-"
  
  
  },
  
  {
  "image": "images/fresho-potato.jpg",
  "title":"potato",
  "weight":"1/2kg",
  "price": "Rs 100/-"
  
  }
  
  ]

} 

function login(){
    var email = document.getElementById('email').value
var password = document.getElementById('pwd').value
var checkval = false;
var obj=user.users

for(
    i=0;i<obj.length;i++){
 if(obj[i].email == email && obj[i].password == password){
        alert(obj[i].email)
            checkval = true;          
            
            if(checkval == true){
                alert("login correct");
                setTimeout(function(){document.location.href = "cart.html"},500);
            }
            return false;
        }
    }
    
  if(checkval==false && (email== '' || password == '')){
      alert("please fill all details")
      document.getElementById('email').value=''
        document.getElementById('pwd').value =''  
  }
    else{
        alert("Please enter correct details");
        document.getElementById('email').value=''
        document.getElementById('pwd').value =''  
     }
}

//cart page script
    
    const container = document.getElementById("veggies");
for(var j=0;j<article.articles.length;j++){
  const content = `
    <div class="shadow col-xs-1 p-3 mb-5 mx-1 bg-white rounded ">
        <img src="${article.articles[j].image}" alt="vegetables">
        <p>${article.articles[j].title}</p>
        <p>${article.articles[j].weight}</p>
        <p>${article.articles[j].price}</p>

        <p class="blockquote-footer">standard delivery: Tomorrow evening</p>
        <div class="form-group">
              <label>Quantity</label>
              <select class="form-control ">
                <option>
                1             
                </option>
                
              </select>
              <p class="mt-n6 mr-4 float-right">&times;</p>

            </div>
            <a href="#" class="btn btn-default  text-primary float-right border-primary"><i class="fa fa-shopping-cart"></i>Add to cart</a>

        </div>
    `;

  container.innerHTML += content;
}