document.addEventListener('DOMContentLoaded', function(){
        var h1 = document.getElementsByTagName('h1');
        document.getElementsByClassName('someClassName');
        document.getElementsByName('day');
        var button = document.getElementById('button');
    
        h1[0].style.background = "pink";
        h1[0].style.color = "blue";
    
        var newParagraph = document.createElement('p');
        newParagraph.innerText = "Hi im new";
        document.body.appendChild(newParagraph);
    
        document.getElementById('h1').innerHTML = "Hello World!";
    
        button.addEventListener('click', function(event){
            console.log(event);
            console.log(event.target);
            event.target.style.background = "pink";
        });
    });