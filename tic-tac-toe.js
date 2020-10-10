"use strict";
var starter=function(){
    let board = document.getElementById("board").children;
    console.log(board);
    this.boxes(board);

    //event handing
    document.getElementsByClassName("btn")[0].onclick=function(){
        for (let i=0; i<board.length;i++){
            board[i].innerHTML= "";
            //once the new game button is clicked, the boxes show up empty.
        }
    }
}

window.onload=starter;
//execute the javascript once the web page has completely loaded all content.
function boxes(b){ 
    var current=true;
    for (let i=0;i<b.length;i++){
        b[i].classList.add('square');
        //adding the CSS class list to each box

        //event handling
        b[i].onmouseover=function(){
            b[i].classList.toggle("hover",true);
            
        }
        b[i].onmouseout=function(){
            b[i].classList.toggle("hover",false);
            
        }
        b[i].addEventListener("click",function(){
            if (current === true){
                b[i].classList.add("square.X");
                b[i].innerHTML ='X'
                current= false;
                winner (b);
                
            }
            else{
                b[i].classList.add("square.O");
                b[i].innerHTML ='O';
                current= true;
                winner(b);
                
            }
        }
    )};
}

    
    function winner (b){
        if (b[0].innerHTML===b[1].innerHTML&& b[1].innerHTML===[2].innerHTML&& b[1]!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0].innerHTML +  " is the winner"
        }
        else if (b[0].innerHTML===b[3].innerHTML&&b[3].innerHTML===b[6].innerHTML && b[3].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0].innerHTML +  " is the winner"
        }
        else if (b[0].innerHTML===b[0].innerHTML&&b[0].innerHTML===b[4].innerHTML && b[8].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0].innerHTML +  " is the winner"
        }
        else if (b[2].innerHTML===b[5].innerHTML&&b[5].innerHTML===b[8].innerHTML && b[2].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[2].innerHTML +  " is the winner"
        }
        else if (b[2].innerHTML===b[4].innerHTML&&b[4].innerHTML===b[6].innerHTML && b[2].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[2].innerHTML +  " is the winner"
        }
        else if (b[3].innerHTML===b[4].innerHTML&&b[4].innerHTML===b[5].innerHTML && b[3].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[3].innerHTML +  " is the winner"
        }
        else if (b[6].innerHTML===b[7].innerHTML&&b[7].innerHTML===b[8].innerHTML && b[6].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0] +  " is the winner"
        }
        else if (b[1].innerHTML===b[3].innerHTML&&b[3].innerHTML===b[6].innerHTML && b[3].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0] +  " is the winner"
        }

    }


