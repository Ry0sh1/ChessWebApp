let code = "ABCD";
const board = document.getElementById('board');

function addAllFields(){
    let letters = ['a','b','c','d','e','f','g','h'];
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
            field.innerText = field.id;
            board.append(field);
        }
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
