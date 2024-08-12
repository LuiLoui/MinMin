function setup() {
    createCanvas(600, 600);
    background("rgb(255,196,196)");    
  }
  
  function draw() { 
  
   stroke("#FFC4C4")
    fill("rgb(223,161,233)")
    
   //console.log (mouseIsPressed);
   
    if (mouseIsPressed) {
       rect(mouseX, mouseY, 20, 30)
      
    } 
  }