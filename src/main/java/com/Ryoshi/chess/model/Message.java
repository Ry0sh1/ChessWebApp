package com.Ryoshi.chess.model;

public class Message {

    private MessageType messageType;
    private String gameCode;
    private String sender;

    public Message(MessageType messageType, String gameCode, String sender) {
        this.messageType = messageType;
        this.gameCode = gameCode;
        this.sender = sender;
    }

    public Message() {
    }

    public MessageType getMessageType() {
        return messageType;
    }

    public void setMessageType(MessageType messageType) {
        this.messageType = messageType;
    }

    public String getGameCode() {
        return gameCode;
    }

    public void setGameCode(String gameCode) {
        this.gameCode = gameCode;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }
}
