    var currentPlayer = 'X';
    var player1 = document.querySelector('.player1');
    var player2 = document.querySelector('.player2');
    var user_clicked = 0;        
    var user_symbolX = [];
    var user_symbolO = [];
    var indexO = 0;
    var indexX = 0;
    var winflag = false;
function game_clicked(current_cell){
/* two array to store each player's cliked cells*/       
                      
        if ((current_cell.innerHTML == 'X') || (current_cell.innerHTML == 'O')) {
            return;
        }
                
        current_cell.innerHTML  = currentPlayer;   

        if (currentPlayer == 'X'){
            currentPlayer = 'O';            
            var clickX = current_cell.getAttribute('blockNum'); 
            console.log("player X " + clickX);
            user_symbolX[indexX] = clickX;
            indexX++;
                        
            player1.style.backgroundColor = "white";
            player2.style.backgroundColor = "red";
        }else {
          
            currentPlayer = 'X';             
            
            var clickO = current_cell.getAttribute('blockNum');  

            user_symbolO[indexO] =clickO;
            indexO++;
            console.log("player O " + clickO);
            player1.style.backgroundColor = "red";
            player2.style.backgroundColor = "white";
        }
        
        
        user_clicked++;
         if (user_clicked >= 5){            
        winning_condition();
         }
}

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

    function winning_condition(){    

        var winning_combos = [
        '012','345','678','036','147','258','048','246'];
            /*['0','1','2'],
            ['3','4','5'],
            ['6','7','8'],
            ['0','3','6'],
            ['1','4','7'],
            ['2','5','8'],
            ['0','4','8'],
            ['2','4','6']
            */

     console.log("x symbol is" + user_symbolX.sort(function(a, b){return a-b}));
     console.log("o symbole is" + user_symbolO.sort(function(a, b){return a-b}));
        
            var joinX = user_symbolX.join("");
            var joinO = user_symbolO.join("");


        console.log("x is " + joinX);
        console.log("o is " + joinO);
//        console.log("joinx" + typeof joinX);
        console.log("user clicked " + user_clicked);
        
            for(var i = 0; i < 8; i++){
                var Wining_String = winning_combos[i].toString();
                
                var win_pos0 = Wining_String.charAt(0);
                var win_pos1 = Wining_String.charAt(1);
                var win_pos2 = Wining_String.charAt(2);
                
            if ((joinX.contains(win_pos0))&& (joinX.contains(win_pos1))&&(joinX.contains(win_pos2))){
                alert("X won, game ended");
                winflag = true;
                    break;
                }

            else if((joinO.contains(win_pos0))&& (joinO.contains(win_pos1))&&(joinO.contains(win_pos2))){
                alert("O won game ended");
                winflag = true;
                break;
            }
            
            }     
 
        if (user_clicked == 9 || winflag==true){
            reset_Game();
            return;
        }
    }
    
    
function reset_Game(){
    window.location.reload(true);
}    
    