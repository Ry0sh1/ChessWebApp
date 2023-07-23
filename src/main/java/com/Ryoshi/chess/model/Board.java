package com.Ryoshi.chess.model;

public class Board {

    private int[][] field;
    private String code;

    public Board(int[][] field, String code) {
        this.field = field;
        this.code = code;
    }

    public Board() {
    }

    public int[][] getField() {
        return field;
    }

    public void setField(int[][] field) {
        this.field = field;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
