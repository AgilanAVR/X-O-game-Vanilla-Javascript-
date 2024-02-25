console.log('Welcome to Tic Tac Toe')
// let a=Array.from(document.getElementsByClassName('box')) 
// console.log(a)
let  song=new Audio('music.mp3')
let clickMusic=new Audio('ting.mp3')
let gameoverMusic= new Audio('gameover.mp3')
let turn='X'   //At initially.
let gameover=false  // At initially



let countOfWin=0

//Change Turn Function
const changeTurn=(()=>{
    return turn==='X'?'O':'X'
})



//Funcction for checking the for  win.
const checkWin=(()=>{
let wins=[  //these are the possible outcomes to be win the game.   //2D Array.

[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]

]
// let boxContentArray =Array.from(document.querySelector('.box-content'));
let a=Array.from(document.getElementsByClassName('box')) 
// boxContent= document.querySelector('.box-content')  
// console.log(boxContentArray)
wins.forEach((item)=>{
    // console.log(boxContentArray[zero].innerText + boxContentArray[one].innerText + boxContentArray[two].innerText )
    // console.log(boxContentArray[one].innerText)
    // console.log(boxContentArray[two].innerText)
if(((a[item[0]].innerText === a[item[1]].innerText) && (a[item[2]].innerText === a[item[1]].innerText ) ) &&( a[item[0]].innerText !=="")){
document.getElementById('playerTurn').innerText= a[item[0]].innerText + ' Won';
gameover=true;
countOfWin+=1;
document.getElementsByClassName('box')[item[0]].classList.add('bg-color')
document.getElementsByClassName('box')[item[1]].classList.add('bg-color')
document.getElementsByClassName('box')[item[2]].classList.add('bg-color')
 
document.querySelector('.winGif').getElementsByTagName('img')[0].style.width ="200px"
song.pause()

}
})
 

})

let clickables=0
//game logic

Array.from(document.getElementsByClassName('box')).forEach((elem)=>{    //All the boxes are putted into the array and then it is traversed in the for each loop,thus the every box is manipulated.
//    let boxContent= elem.querySelector('.box-content')   //here the span is targeted,bcoz we cant directly target the sapn text wich is inside the box class.
    elem.addEventListener('click',()=>{     //Adding event for every box for clicking.
        clickables+=1;
        if(countOfWin===1 || clickables===9){
        console.log("Game Over")
        }
        song.play()
          if(elem.innerText==''){  //this is the if condition to check whether the text is empty or not,if empty the text will be occured for the respective click. 
            elem.innerText=turn
            turn=changeTurn()   //This function is to change the turn frm X to O.
            clickMusic.play()

            checkWin()
            if(!gameover){
                document.getElementById('playerTurn').innerText='Turn for '+ turn;  //thus after the clicking processs,the turn value would be changed,so it must be updated on the screen.
            }
            else{
                gameoverMusic.play()
            }
           

          }
    })


})


//Adding event for the reset button.
let reset=document.querySelector('.btn')
reset.addEventListener('click',()=>{
    Array.from(document.getElementsByClassName('box')).forEach((e)=>{
        turn='X'
           e.innerText=""
           document.getElementById('playerTurn').innerText='Turn for X'; 
           document.querySelector('.winGif').getElementsByTagName('img')[0].style.width ="0px"
           clickables=0;
           countOfWin=0;
           e.classList.remove('bg-color');

    })
})