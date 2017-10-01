package com.arief.model;

public class User {
    private String nama;
    private String gender;

    public User(){}

    public User(String nama ,String gender){
        this.nama=nama;
        this.gender=gender;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
