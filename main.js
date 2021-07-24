canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var c;
background_Image = "racetrack.jpg";
 car1_width= 120;
 car1_height= 70;
 car1_image= "car1.png";
 car1_y = 10;
 car1_x = 10;

 car2_width= 120;
 car2_height= 70;
 car2_image= "car2.png";
 car2_y = 10;
 car2_x = 10;

background_Image = "racetrack.jpg";

function add() {
    bg_img=new Image();
    bg_img.onload=uploadbackground;
    bg_img.src=background_image;
    
    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car_image;
    }
    
    function uploadbackground() {
        ctx.drawImage(bg_img,0,0, canvas.width, canvas.height);
    }
    
    function uploadcar1() {
        ctx.drawImage(car1_imgTag, car1x, car1y, car1_width, car1_height);
    }
    
    function speed() {
        c= document.getElementById("speed").value ;
    }

    window.addEventListener("keydown", mykeydown); 
function mykeydown(e) {


    function my_keydown(e) {
        keyPressed = e.keyCode; console.log(keyPressed);
        if(keyPressed == '38') {
        car1_up(); console.log("up arrow key");
        }
        if(keyPressed == '40') {
        car1_down(); console.log("down arrow key");    
        }
        if(keyPressed == '37') {
        car1_left(); console.log("left arrow key");
        }
        if(keyPressed == '39') {
        car1_right(); console.log("right arrow key");  
        }
        if(keyPressed == '87') {
        car2_up(); console.log("key w"); 
    }
        if(keyPressed == '65') {
        car2_left(); console.log("key a"); 
}
        if(keyPressed == '68') {
        car2_right(); console.log("key d"); 
  }
        if(keyPressed == '83') {
        car2_down(); console.log("key s"); 
  } 
 }
}