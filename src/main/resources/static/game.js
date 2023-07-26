let code = "ABCD";
const board = document.getElementById('board');
let letters = ['a','b','c','d','e','f','g','h'];

function addAllFields(){
    let black = false;
    for (let i = 8; i>0;i--){
        for (let j = 0;j<8;j++){
            let field = document.createElement('div');
            if (black){
                field.classList.add('black');
            }else {
                field.classList.add('white');
            }
            field.classList.add('field');
            black = !black;
            field.id = `${i},${letters[j]}`;
            board.append(field);
        }
        black = !black;
    }
    setAllFigures();
}

function setAllFigures(){
    //Pawns
    for (let i = 0;i < 8;i++){
        document.getElementById(`${2},${letters[i]}`).innerHTML = `<img class="figure" src="/figures/white-pawn.png">`;
        document.getElementById(`${7},${letters[i]}`).innerHTML = `<img class="figure" src="/figures/black-pawn.png">`;
    }
    let a = [1,8];
    let black = false;
    for (let i = 0;i<2;i++){
        let colorText;
        if (black){
            colorText = "black";
        }else {
            colorText = "white";
        }
        document.getElementById(`${a[i]},a`).innerHTML = `<img class="figure" src="/figures/${colorText}-rook.png">`;
        document.getElementById(`${a[i]},h`).innerHTML = `<img class="figure" src="/figures/${colorText}-rook.png">`;
        document.getElementById(`${a[i]},b`).innerHTML = `<img class="figure" src="/figures/${colorText}-knight.png">`;
        document.getElementById(`${a[i]},g`).innerHTML = `<img class="figure" src="/figures/${colorText}-knight.png">`;
        document.getElementById(`${a[i]},c`).innerHTML = `<img class="figure" src="/figures/${colorText}-bishop.png">`;
        document.getElementById(`${a[i]},f`).innerHTML = `<img class="figure" src="/figures/${colorText}-bishop.png">`;
        document.getElementById(`${a[i]},d`).innerHTML = `<img class="figure" src="/figures/${colorText}-queen.png">`;
        document.getElementById(`${a[i]},e`).innerHTML = `<img class="figure" src="/figures/${colorText}-king.png">`;
        black = !black;
    }


}

function connect(){
    let socket = new SockJS("/ws");
    stompClient = Stomp.over(socket);
    stompClient.connect({},onConnected,onError);
}
function onError(){
    console.log("Error trying to connect to a WebSocket")
}
function onConnected(){
    stompClient.subscribe("/game/"+code, onMessageReceived);
    stompClient.send("/app/game.join/"+code,
        {},
        JSON.stringify({gameCode:code,sender:'Ryoshi',messageType:'JOIN'})
    );
}

connect();
addAllFields();

//Listening on WebSocket
function onMessageReceived(payload){
    let message = (JSON.parse(payload.body));
    console.log("Message Received");
}
