#include "header.h"
int main() {
    string nickname, password;
    cout << "Registration:" << endl;
    cout << "Enter the nickname:";
    cin >> nickname;
    cout << "Enter the password:";
    cin >> password;

    try {
        Person person(nickname, password);
        cout << "You have created an account" << endl;

        string nickname3, password3;
        cout << "Login:" << endl;
        cout << "Enter your nickname:";
        cin >> nickname3;
        cout << "Enter your password:";
        cin >> password3;

        if (person.login(nickname3,password3)) {
            cout << "You are login in your account" << endl;
        } else {
            cout << "Login failed. Incorrect nickname or password." << endl;
        }
    } catch (exception& e) {
        cout << e.what() << endl;
    }

    return 0;
}
