#ifndef UNTITLED8_HEADER_H
#define UNTITLED8_HEADER_H
#include <iostream>
#include <regex>
using namespace std;

class Person {
public:
    Person(string& nickname, string& password) {
        this->nickname = nickname;
        this->password = password;

        regex nicknameRegex("^[a-zA-Z0-9_]{1,9}$");
        regex passwordRegex("^(?=.*[A-Za-z])(?=.*\\d).{8,15}$");

        if (!regex_match(nickname, nicknameRegex)) {
            throw invalid_argument("Invalid nickname");
        }
        if (!regex_match(password, passwordRegex)) {
            throw invalid_argument("Invalid password");
        }
    }

    string getNickname() {
        return nickname;
    }

    string getPassword() {
        return password;
    }

    bool login(string& nickname2, string& password2) {
        return nickname2 == nickname && password2 == password;
    }

private:
    string nickname;
    string password;
};


#endif
