//UI Control

var UIController = (function(){
    var DOMElements = {
        board : '.board',
        newGame: '.btn-new',
        computer: '.btn-computer',
      };
    var html = {
        x:'<div class="x"><img src ="./img/x.png" width="100" height="100"></div>',
        o:'<div class="o"><img src ="./img/o.png" width="100" height="100"></div>'
    }
    var display = function(id,type){
        if (!document.querySelector('#'+id).hasChildNodes()) {
                document.querySelector('#'+id).insertAdjacentHTML('beforeend',html[type]);
           }
        
    };
    return {
       DOM: function(){
           return DOMElements;
       },
       displayXO: function(id, type){
           display(id,type);
           
       },
       nextPlayer: function(){
           document.querySelector('.player-0-panel').classList.toggle('active');    
           document.querySelector('.player-1-panel').classList.toggle('active');
       },
        winner: function(activePlayer){
            document.querySelector('#name-'+activePlayer).textContent = "Winner"; 
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        },
        computer: function(){
            
            document.querySelector('#name-1').textContent = "Computer Playing"; 
            
        },
        computerSetDisplay: function(i,j){
            var id = "box-00";
            var type = 0;
            display(id, type);
        },
        init: function(){
             document.querySelector('#name-0').textContent = "Player 1";  
            document.querySelector('#name-1').textContent = "Player 2"; 

            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');


            document.querySelector('.player-0-panel').classList.add('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            
            
            
            for(var i=0; i<3; i++){
                for(var j= 0; j<3 ;j++){
                    var parentNode = document.getElementById("box-"+i+j);
                    while(parentNode.firstChild) {
                        parentNode.removeChild(parentNode.firstChild);
                    }   
                }
            }
        }
        
    };
    
}());

//Game Logic
var gameLogic = (function(){
    
    var wonBy;
    
    var Player = function(){
        this.i = [];
         this.j = [];
         
        
     };
    
    Player.prototype.addScore = function(score){
        
            score = score.split("-")[1];
             var element1 = parseFloat(score.charAt(0));
             var element2 = parseFloat(score.charAt(1));
            this.i.push(element1);
            this.j.push(element2);
    };
    Array.prototype.threeValuesSame = function() {
        if(this.length <3){
            return false;
        }
        for(var i = 0; i < this.length; i++)
        {
            var checkValue = 0;
            for(var j = 0;j<this.length;j++){
                if(this[i]===this[j]){
                    checkValue++;
                }
            }
            if(checkValue>=3){
                return true;
            }
        }

        return false;
    }
    var diagnol1check = function(i,j){
        if(i.length <3 || j.length <3){
            return false;
        }
        var checkValue = 0;
        for(var x= 0; x<i.length; x++){
            if(i[x]==j[x]){
                checkValue++;
            }
        }
         if(checkValue>=3){
                return true;
        }
        return false;
    };
    var diagnol2check = function(i,j){
        if(i.length <3 || j.length <3){
            return false;
        }
        var checkValue = 0;
        for(var x= 0; x<i.length; x++){
            if(i[x]+j[x] ===2){
                checkValue++;
            }
        }
        if(checkValue===3){
                return true;
        }
        return false;
        
    }
    
    var player0 = new Player();
    var player1 = new Player();
    
    return {
        print: function(){
                        console.log(player0);
                        console.log(player1);
                },
        addScore: function(activePlayer,score){
               activePlayer === 0? player0.addScore(score) : player1.addScore(score);
        },
        winner: {
            gameOver: function(activePlayer){
                if(activePlayer ===0){
                    return player0.i.threeValuesSame() || player0.j.threeValuesSame() || diagnol1check(player0.i,player0.j) || diagnol2check(player0.i,player0.j);
                }
                else if(activePlayer ===1){
                     return player1.i.threeValuesSame() || player1.j.threeValuesSame() || diagnol1check(player1.i,player1.j) || diagnol2check(player1.i,player1.j);
                }
            }
        },
        player:{
            player1:  function(){   
                return player0;
            },
            player2: function(){
                return player1;
            }
        },
        init: function(){
            //to clear the previous values in the array
            player0.i= [];
            player1.i= [];
            player0.j= [];
            player1.j= [];
        }
    };
    
}());

//Computer as second player so computer thinking
var ComputerController = (function(){
        var p0,p1,noI,noJ;  
    
    var checkIfBlank = function(){
        
    };
    
    var randomValue = function(){
        var emptyI, emptyJ,filledI,filledJ,choose;
        emptyI =[];
        emptyJ= [];
        
         for(var i = 0; i<p0.i.length ;i++){
            for(var j = 0; j< 3; j++){
                for(var k = 0; k< 3; k++){
                        
                        if(p0.i[i] ===j && p0.j[i]===k){
                           
                        }else{
                             emptyI.push(j);
                             emptyJ.push(k);
                        }
                
                    
                }
            }
         }
        for(var i = 0; i<p1.i.length ;i++){
            for(var j = 0; j< 3; j++){
                for(var k = 0; k< 3; k++){
                        
                        if(p1.i[i] ===j && p1.j[i]===k){
                           
                        }else{
                             emptyI.push(j);
                             emptyJ.push(k);
                        }
                
                    
                }
            }
         }
       choose = Math.floor(Math.random() * emptyI.length);
        
        return [emptyI[choose],emptyJ[choose]];
    };
    
    Array.prototype.checkTwoValuesSame = function(nextArray, p, invert) {
        var returnValueA,returnValueB,returns;
        for(var i = 0; i < this.length; i++)
        {
            var checkValue = 0;
            for(var j = 0;j<this.length;j++){
                if(this[i]===this[j]){
                    console.log(this[i]);
                    checkValue++;
                    if(i!==j){                        
                    console.log("not same");
                        returns = true;
                        returnValueA = this[i];
                        console.log(returnValueA);
                        console.log(nextArray[i] + " " + nextArray[j]);
                        if((nextArray[i] ==0 && nextArray[j] ==1)|| (nextArray[i] ==1 && nextArray[j] ==0)){
                            returnValueB=2;
                            //console.log(returnValueB);
                        }else if((nextArray[i] ==1 && nextArray[j] ==2)|| (nextArray[i] ==2 && nextArray[j] ==1)){
                            returnValueB=0;
                            //console.log(returnValueB);
                        }else if((nextArray[i] ==0 && nextArray[j] ==2)|| (nextArray[i] ==2 && nextArray[j] ==0)){
                            returnValueB=1;
                            //console.log(returnValueB);
                        }
                    }
                    
                }
            }
            //if all of the box by the same player is not occupied
            if(checkValue ===2){
                console.log("length 2");
                
                //if all of the box by next player is not occupied
                for(var i= 0;i<p.i.length;i++){
                    if(!invert){
                        if(p.i[i]===returnValueA && p.j[i]===returnValueB){
                            returns = false;
                        }
                    }else{
                        if(p.i[j]===returnValueA && p.j[j]===returnValueB){
                            returns = false;
                        }
                    }
                }
                if(returns){
                    return [returnValueA, returnValueB];
                }
                
            }
           
        }

        return null;
    }
    
   /* var calculateValue = function(){
     
        for(int i= 0; i<p1.length; i++){
            if(p1.i==0){
                noI++;
            }else if(p1.j ==0){
                noJ++;
            }
        }
        
        for(int x=0;x<3;x++){
            var preX = p1.i[x];
            for(int y=0; y<p1.i.length;y++){
                
                if(p1.i[x]==p1.i[y]){
                   
                }
            }
        }
        
    }*/

                          
    return {
        nextValue: function(){
                 var generatedArray1,generatedArray2,generatedArray3,generatedArray4,randVal;

            // console.log(p1);       
            //console.log(p0);
                    
                    generatedArray1 = p1.i.checkTwoValuesSame(p1.j,p0,false);// check values of current player
                    generatedArray2 = p1.j.checkTwoValuesSame(p1.i,p0,true);
            
            
                    generatedArray3 = p0.i.checkTwoValuesSame(p0.j,p1,false);// check values of opponent player
                    generatedArray4 = p0.j.checkTwoValuesSame(p0.i,p1,true);
            
                    //generatedArray5 = checkFirstDiagnol();
                    //generatedArray5 = checkSecondDiagnol();
                     
                    if(generatedArray1){
                        console.log('true');
                        return "box-"+ generatedArray1[0] + generatedArray1[1];
                    }else if(generatedArray2){                     
                        
                        console.log('true');
                        return "box-"+ generatedArray2[1] + generatedArray2[0];
                    }else if(generatedArray3){
                        
                        console.log('true');
                        return "box-"+ generatedArray3[0] + generatedArray3[1];
                    }else if(generatedArray4){    
                        
                        console.log('true');
                        return "box-"+ generatedArray4[1] + generatedArray4[0];
                    }else{
                        
                        console.log('false');
                        //Create random box that is empty
                        randVal = randomValue();
                        return "box-"+ randVal[0] + randVal[1];
                        //return "box-00";   
                    }
   
            
            //return "box-00";
        },
        setCurrentPlayer: function(player1, player2){
            p0 = player1;
            p1 = player2;
        }
    };
                  
                          
}());

//App Control

var AppController = (function(UICtrl,gLogic,cLogic){
    var activePlayer,playerIcon, gamePlaying,computerPlaying,playerTurn;
    
    var initiateComponents = function(){
        activePlayer = 0;
        playerIcon =['x','o'];
        gamePlaying = true;
        computerPlaying = false;
        playerTurn = true;
        
    }
    
    var DOMStrings = UICtrl.DOM();
    //Define Event Handlers 
    var setUpEvents = function(){ 
        document.querySelector(DOMStrings.newGame).addEventListener('click',function(){
            UICtrl.init();            
            gameLogic.init();
           initiateComponents(); 
        });
        
      document.querySelector(DOMStrings.board).addEventListener('click',function(event){
          if(gamePlaying){
              
                   var itemId,splitId,type, ID;
              playerTurn = 0;
                    
               
              itemId = event.target.id;
                    if(itemId){
                       
                        //gLogic.print();
                        displayXO(itemId);
                        
                        if(gLogic.winner.gameOver(activePlayer)){
                            UICtrl.winner(activePlayer);
                           gamePlaying = false;
                        }else{
                            nextPlayer();
                           if(computerPlaying){
                               
                                console.log("computer turn");
                               cLogic.setCurrentPlayer(gLogic.player.player1(),gLogic.player.player2());
                               itemId = cLogic.nextValue();
                                //itemId = "box-00";
                                //console.log(gLogic.player.player1());
                                displayXO(itemId);
                               if(gLogic.winner.gameOver(activePlayer)){
                                    UICtrl.winner(activePlayer);
                                   gamePlaying = false;
                                }else{
                                    nextPlayer();
                                }
                            }
                        }
                    }
              
            
                 
              
          }
            
      });
    // on computer button click set second player as computer
    document.querySelector(DOMStrings.computer).addEventListener('click',function(){
            UICtrl.computer();            
            computerPlaying = true;
    });
        
    };
    var displayXO = function(itemId){
         UICtrl.displayXO(itemId,playerIcon[activePlayer]);
         gLogic.addScore(activePlayer,itemId);
    };
    var computerAsNextPlayer = function(){
        UICtrl.computerSetDisplay();
        nextPlayer();
    };
    
    var nextPlayer = function(){
        activePlayer === 0? activePlayer=1 : activePlayer=0;
        //toggle player turn if computer is playing
        UICtrl.nextPlayer();
    
    };
    
    return {
      init : function(){
                initiateComponents(),
                setUpEvents();
            }
    };
    
}(UIController, gameLogic, ComputerController));


AppController.init();