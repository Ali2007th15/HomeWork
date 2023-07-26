#ifndef UNTITLED10_HEADER_H
#define UNTITLED10_HEADER_H
#include <iostream>
#include <string>
using namespace std;

struct Checking {
    static int calculate(const string& num1) {
        int result{};
        int character = 1;
        int i{};


        if (num1[i] == '-') {
            character = -1;
            ++i;
        }


        while (num1[i] != '\0') {
            char num = num1[i];
            if (num >= '0' && num <= '9') {
                result = result * 10 + (num - '0');
            } else {
                cout << "Invalid character:" << num << endl;
                return 0;
            }
            ++i;
        }

        return result * character;
    }
};

#endif