let code = "ABCD";

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
        JSON.stringify({gameCode:code,sender:username,messageType:'JOIN'})
    );
}

connect();

//Listening on WebSocket
function onMessageReceived(payload){
    let message = (JSON.parse(payload.body));
    console.log("Message Received");
}
