fetch('http://127.0.0.1:5000/products')
    .then(response=>response.json())
    .then(response=>{
        response.forEach( item=> { 
           var text = document.createElement('li');
           var input = document.createTextNode(item.name);
           text.appendChild(input);
           document.getElementById('products').appendChild(text);         
    })
})

fetch('http://127.0.0.1:5000/products/fruits')
    .then(response=>response.json())
    .then(response=>{
        response.forEach( item=> { 
           var text = document.createElement('li');
           var input = document.createTextNode(item.name);
           text.appendChild(input);
           document.getElementById('fruList').appendChild(text);         
    })
})

fetch('http://127.0.0.1:5000/products/vegetables')
    .then(response=>response.json())
    .then(response=>{
        response.forEach( item=> { 
           var text = document.createElement('li');
           var input = document.createTextNode(item.name);
           text.appendChild(input);
           document.getElementById('vegList').appendChild(text);         
    })
}) 