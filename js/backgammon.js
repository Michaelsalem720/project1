let setUp = [2,0,0,0,0,-5, 0,-3,0,0,0,5,  -5,0,0,0,3,0, 5,0,0,0,0,-2];
let nextMove = structuredClone(setUp);
let roll1;
let roll2;
let dice1;
let dice2;
let dice3;
let dice4;
let dice;
let count = 1;
let index;
let newIndex
let team1Turn = true
let body = document.querySelector("body")
let roll = document.querySelector("#roll")
let ok = document.querySelector("#ok")
body.addEventListener("load",setUpPieces(setUp))
// ok.addEventListener("load",done())
ok.addEventListener("click",done())
function done (){
    addRollClick()
    removePiecesClick()

}
function addRollClick(){
    roll.addEventListener("click",rollDice)  
}
function removeRollClick(){
    roll.removeEventListener("click",rollDice)  
}
function addPiecesClick(){//
    // let clickBtn = document.querySelectorAll(".spot")
    for(let i=0;i<setUp.length;i++){
        let clickBtn = document.getElementById(i)
        clickBtn.addEventListener("click",getPiece)
    }
}
function removePiecesClick(){
    for(let i=0;i<setUp.length;i++){
        let clickBtn = document.getElementById(i)
        clickBtn.removeEventListener("click",getPiece)
    }
}
function setUpPieces(setUp){
    for(let i=0;i < setUp.length;i++){
        let spot = document.getElementById(i)
        spot.textContent=""
        for(let j=0;j<Math.abs(setUp[i]);j++){
            let piece = document.createElement("div");
            piece.classList.add("piece")
            spot.appendChild(piece)
            if(setUp[i] > 0){
                piece.classList.add("team1")   
            }else if(setUp[i] < 0){
                piece.classList.add("team2")
            }
        }
    }
}
function rollDice(){
    roll.removeEventListener("click",rollDice)
    roll1 = Math.floor(Math.random()*6)+1
    roll2 = Math.floor(Math.random()*6)+1
    if(roll1===roll2){
        dice1 = roll1
        dice2 = roll1
        dice3 = roll1
        dice4 = roll1
        dice = [dice1,dice2,dice3,dice4]
        count = 4
        console.log(dice)
        addPiecesClick()
        return dice
    }
    else {
        dice1 = Math.max(roll1,roll2)
        dice2 = Math.min(roll1,roll2)
        dice3 = 0
        dice4 = 0
        dice = [dice1,dice2]
        count = 2
        addPiecesClick()
        console.log([dice1,dice2])
        return dice
    }
// console.log(dice)
}
function getPiece(event){
    // for(let i=0;i<count;i++){
        let element = event.target;
        let elementClass = element.className;
        let pattern = /\**piece\**/;
        // pattern.test(elementClass);
        if(pattern.test(elementClass)){
            index = element.parentElement.id;
        }
        else{
            index = element.id;
        }
        // console.log(dice3);
        // return 
        movePiece(index);
    // }
}
function movePiece(index){
    if(team1Turn){
        if(nextMove[index]<=0){
            return // wrong piece/not a piece
        }
        else{
            // if(nextMove[index]===0){
            //     alert("click on a piece")
            // }
            // else 
            if(nextMove[index]<0){
                newIndex = index-dice1
                if(nextMove[index]*nextMove[newIndex]===Math.abs(nextMove[index])*(-1)){
                    //piece is hit
                }
                else if(nextMove[index]*nextMove[newIndex]<0){
                    //can't move
                    return
                }
                else if(nextMove[index]*nextMove[newIndex]>0){
                    //regular move

                }
                else{
                    sum = 0
                    for(let i=0;i<18;i++){
                        if(nextMove[i]>0){
                            sum+=nextMove[i]
                        }
                    }
                    if(sum>0){
                        //illegal move
                        return
                    }
                    else{
                        //eat peices
                    }
                }
            console.log(nextMove[index])
            console.log(++nextMove[index])
            console.log(index)
            console.log(index-dice1)
            console.log(nextMove[newIndex])
                nextMove = nextMove
                [index]
                --nextMove[index-dice1]
            }
            else{

            console.log(nextMove[index])
            console.log(++nextMove[index])
            console.log(index)
            console.log(index-(-dice1))
                --nextMove[index]
                ++nextMove[index+dice+count]
            }
        }
    }
    // console.log(nextMove)


}
