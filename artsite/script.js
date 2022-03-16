function myFace() {    
    var c = document.getElementById("mycanvas");    
     
    //to draw a surface on canvas element pass 2d as an argument in the getContext function    
    var draw = c.getContext("2d");    
     
    //to start a new path invoke BeginPath function.    
    //Call this function when you want to create a new path    
    draw.beginPath();    
     
    //to specify a color or style for your canvas use fillStyle property    
    draw.fillStyle = "yellow";    
     
    //to create a full circle invoke the arc method and in that method    
    //pass the value for x and y, radius, start point,    
    draw.arc(75, 75, 50, 0, Math.PI * 2, true);    
     
    //to close the path invoke the closePath function    
    draw.closePath();    
     
    //invoke fill function to fill the canvas with a circle and in that circle a color of yellow    
 draw.fill();    
 }   
 