const data =[
    
    ' Frontend Developement ',
    'Web Designing',
    'Digital Marketing',
]




let counter = -1



const animation = document.querySelector("#animation")

setInterval(() => {
counter++; 
counter >=data.length?counter=0:''
animation.textContent=(data[counter])
}, 2000);

