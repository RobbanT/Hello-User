package com.hello_user.hello_user;

//Klass som använd för att skapa objekt som spara uppgifter om alla våra användare.
public class Member {
    // Vi sparar användarens användarnamn och lösenord.
    private String username, password;

    public Member(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public Member() {
        this.username = "";
        this.password = "";
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}