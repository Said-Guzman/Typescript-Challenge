fetch("http://localhost:4000/customers")
.then(function(response){ //callback function
    return response.json()}) 
    .then(function(customers){
        let placeholder = document.querySelector("");// calls the div class
        let out = ""; //this will make sense later but essentially html in the quotations
        for (let list of customers ){  //for loop
            out +=  ''}
            placeholder.innerHTML = out; //calls the div class and inserts text in it
        }) // html under here