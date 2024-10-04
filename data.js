const data =[
    
    ' Frontend Developement ',
    'Sinplified websites',
    'Elegant and Unique websites',
]




let counter = -1



const animation = document.querySelector("#animation")

setInterval(() => {
counter++; 
counter >=data.length?counter=0:''
animation.textContent=(data[counter])
}, 2000);

