#include "header.h"

int main() {
    string num2;

    cout << "Enter a number: ";
    cin >> num2;

    cout << "Entered number: " << Checking::calculate(num2) << endl;

    return 0;
}
