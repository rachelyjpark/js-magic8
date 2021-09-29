//MAGIC 8 BALL RESPONSE SCRIPT

//Create an ARRAY of possible responses. Separate each 'string' with a comma.
var responses = [
    'It is Certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don’t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
]

//Create a variable that randomly selects a positive whole between 0 and the number of total responses.
var randomResponse = responses[Math.floor(Math.random() * responses.length)];

//Select the HTML element with the id '#display' and replace its contents with the result of the randomResponse equation
document.querySelector('#display').innerHTML = randomResponse;



let cover = document.querySelector('#cardCover');
let mainCard = document.querySelector('.card-1');



mainCard.addEventListener('click', function(event) {
    var responses = [
        'It is Certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
        'Signs point to yes.',
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        'Don’t count on it.',
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Very doubtful.'
    ]
    var randomResponse = responses[Math.floor(Math.random() * responses.length)];

    //Select the HTML element with the id '#display' and replace its contents with the result of the randomResponse equation
    document.querySelector('#display').innerHTML = randomResponse;
});


var input = document.querySelector('#enter');
var textarea = document.querySelector('#questionbox');
var responses = document.querySelector('#display');

input.addEventListener('click', function () {
    textarea.value = '';
}, false);


input.addEventListener('click', function() {
   
    var responses = [
        'It is Certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
        'Signs point to yes.',
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        'Don’t count on it.',
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Very doubtful.'
    ]
  
    //Create a variable that randomly selects a positive whole between 0 and the number of total responses.
    var randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    //Select the HTML element with the id '#display' and replace its contents with the result of the randomResponse equation
    document.querySelector('#display').innerHTML = randomResponse;
    
})

textarea.addEventListener("keyup", function(event) {

    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("enter").click();
        responses.style.display = 'block';
        
 
    }

}

);




// document.addEventListener("keydown", function(){
//     var x=event.keyCode || event.which;
//     if(x==13)
//     {
//     var y = document.getElementById("display");
//     if (y.style.display === "block")
//     {
//     document.getElementById("div").style.display = "none";
//     }
//     else
//     {
//     document.getElementById("div").style.display = "block";
//     }
//     }
//     }) 
window.onload = function(){
    var bsDiv = document.getElementById("cursor");
  
  
    var x, y;
  
  // On mousemove use event.clientX and event.clientY to set the location of the div to the location of the cursor:
    window.addEventListener('mousemove', function(event){
        x = event.clientX;
        y = event.clientY;                    
        if ( typeof x !== 'undefined' ){
            bsDiv.style.left = x + "px";
            bsDiv.style.top = y + "px";
        }  else if (e.targetTouches) {
          posX = e.targetTouches[0].clientX;
          posY = e.targetTouches[0].clientY;
          e.preventDefault();
          }
    }, false);
  }
  
  
