let white = [];
let whiteh = [];
let green = [];
let greenh = [];
let gr = 10;
let wr = 10;
let grh = 10;
let wrh = 10;
let countw = 0;
let countg = 0;
let countwh = 0;
let countgh = 0;

  

function setup() {
  createCanvas(600, 870);
  background(245,121,35);
  rectMode(CENTER);
  frameRate(30);
     
   
  // Crear objetes
}


function draw() {
    
 text1();
 text2();
 text3();
 text4();
 text5();
 text6();
 text7();    

 countw +=5;
 countg +=5;
 countwh +=5;
 countgh +=5;
 strokeWeight(15);
 noFill(0,0,0);
 translate(width/2, height/3+25);
 translate(40,00);
 rotate(0.77);
 createWhiteRect();
 createWhiteRecth();

for (let i = 0; i < whiteh.length; i++) {
    if (countwh > 10){
        whiteh[i].update(wrh);
        whiteh[i].display(wrh);
        wrh += 70;
        countwh = 0;
  }
}

for (let i = 0; i < white.length; i++) {
     if (countw > 10){
        white[i].display(wr);
        wr += 70;
        countw=0;
  }
 }
    
  

    

 translate(-60,60);
 createGreenRect();
 createGreenRecth();
    
        for (let i = 0; i < greenh.length; i++) {
     if (countgh > 10){
        greenh[i].update();
        greenh[i].display(grh);
        grh += 70;
        countgh = 0;
  }
  }
 
 for (let i = 0; i < green.length; i++) {
     if (countg > 10){
        green[i].display(gr);
        gr += 70;
        countg = 0;
  }
 }
    
  }
    



function mousePressed() {
    
    grh = 10;
    wrh = 10;
    countwh +=5;
    countgh +=5;
    createWhiteRecth();
    createGreenRecth();
    
  for (let i = 0; i < whiteh.length; i++) {
     if (countwh > 10){
        whiteh[i].update(wrh);
        whiteh[i].display(wrh);
        wrh += 70;
        countwh = 0;
  }
  }
    
    for (let i = 0; i < greenh.length; i++) {
     if (countgh > 10){
        greenh[i].display(grh);
        grh += 70;
        countgh = 0;
  }
  }
    
    
 
}




function createWhiteRect(){
    for (let i = 0; i < 7; i++) {
        white.push(new whiteRect());
  }       
}

function createWhiteRecth(){
    for (let i = 0; i < 7; i++) {
        whiteh.push(new whiteRecth());
  }       
}




function createGreenRect(){
    for (let i = 0; i < 7; i++) {
    green.push(new greenRect());
  }
}


function createGreenRecth(){
    for (let i = 0; i < 7; i++) {
        greenh.push(new greenRecth());
  }       
}


function whiteRect(){
    this.x = 5;
    this.y = 5;
    this.col = color(216,222,210);
  
    
    this.display = function(wr) {
         stroke(this.col);
         if (wr < 500){
            rect(0, 0, this.x + wr, this.y + wr);
         }
    }
}




function whiteRecth(){
    this.x = 5;
    this.y = 5;
    this.col = color(216,222,210);
      

    this.update= function() {
        this.col = color(random(255),random(255),random(255));
    }
    
    this.display= function(wrh) {
        stroke(this.col);
         if (wrh < 500){
            rect(0, 0, this.x + wrh, this.y + wrh);
         }
    }
}



function greenRect(){
    this.x = 5;
    this.y = 5;
    this.col = color(15,97,62);
      

    this.display= function(gr) {
        stroke(this.col);
         if (gr < 500){
            rect(0, 0, this.x + gr, this.y + gr);
         }
    }
}



function greenRecth(){
    this.x = 5;
    this.y = 5;
    this.col = color(15,97,62);

    
    this.update= function() {
        this.col = color(random(255),random(255),random(255));
    }
    
    this.display= function(grh) {
        stroke(this.col);
         if (grh < 500){
            rect(0, 0, this.x + grh, this.y + grh);
         }
    }
}


function text1(){
    textStyle(BOLD);
    stroke(0);
    strokeWeight(0);
    textSize(85);
    text("the clash",20,730); 

}
function text2(){
    textStyle(BOLD);
    stroke(0);
    strokeWeight(0);
    textSize(10);
    text("with the brattles",20,820);
}
function text3(){
    textStyle(BOLD);
    stroke(0);
    strokeWeight(0);
    textSize(10);
    text("and dead kennedys",20,840);
}

function text4(){
    textStyle(BOLD);
    stroke(0);
    strokeWeight(0);
    textSize(10);
    text("matinee and eve",180,820);
}
function text5(){
    textStyle(BOLD);
    stroke(0);
    strokeWeight(0);
    textSize(10);
    text("saturday / june 13 1981",180,840);
}
function text6(){
    textStyle(BOLD);
    stroke(0);
    strokeWeight(0);
    textSize(10);
    text("bonds international casino",400,820);
}
function text7(){
    textStyle(BOLD);
    stroke(0);
    strokeWeight(0);
    textSize(10);
    text("in times square, new york city",400,840);
}




