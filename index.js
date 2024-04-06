const winner = document.querySelector(".winner")
let x = 0;
let started = true;
let hero = document.querySelector("h1");
let arr = [" "," "," ",
           " "," "," ",
           " "," "," "]

let arr2 = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [1,4,7]
]

function winnerC(){
    for(i=0;i<arr2.length;i++){
        let t1 = arr2[i][0];
        let t2 = arr2[i][1];
        let t3 = arr2[i][2];
        if(arr[t1]==arr[t2] && arr[t1]==arr[t3] && arr[t2]==arr[t3] && arr[t1] != " " && arr[t2] != " " && arr[t3] != " "){
            return true;
        }
    }
    return false
} 

$(".cell").click(function(){
    if(started===true){
        if(x%2==0){
            const cellidx = this.getAttribute("cellIndex");
            let tempo = Number(cellidx);
            
            if(arr[tempo]==" "){    
                arr[tempo]="X";
                this.textContent = `X`;
                console.log(tempo);
                x += 1;
                t = winnerC();
                if(t==true){
                    started = false;
                    winner.textContent = "P1 Wins!"
                }
                if(started==true){
                    $("#right").addClass("big");
                    $("#left").removeClass("big")
                }
                

            }
            
        }
        else{
            const cellidx = this.getAttribute("cellIndex");
            let tempo = Number(cellidx);
            if(arr[tempo]==" "){    
                arr[tempo]="O";
                this.textContent = `O`;
                console.log(tempo);
                x += 1;
                t = winnerC();
                if(t==true){
                    started = false;
                    winner.textContent = "P2 Wins!"
                }
                if(started==true){
                    $("#left").addClass("big");
                    $("#right").removeClass("big")
                }
                
            }
            
        }
        
    }
    if(x==9){
        started = false;
        winner.textContent = "Draw!"
    }
})

$(".reset").click(function(){
    started = true;
    arr = [" "," "," ",
           " "," "," ",
           " "," "," "];
    x = 0;
    let allitem = document.querySelectorAll(".cell")
    for(i=0;i<allitem.length;i++){
        obj = allitem[i];
        obj.textContent = " "
    }
    winner.textContent = "";
})