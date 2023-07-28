#include "header.h"
#include "Exception.h"
#include "Regex.h"
int main() {
    try {
        string num3;
        cout << "Enter type of transport(Car, Plane, Boat): ";
        getline(cin, num3);

        string type = Type(num3);
        if (type == "Unknown") {
            throw Exception("Error: unknown type of transport");
        }
        Transport* transport;
        if (type == "Car") {
            transport = new Car();
        } else if (type == "Plane") {
            transport = new Plane();
        } else if (type == "Boat") {
            transport = new Boat();
        }

        cout << "Transport: " << *transport << endl;

        delete transport;
    } catch (const Exception& ex) {
        ofstream File("error.txt", ios::app);
        File << "Error: " << ex.what() << endl;
        File.close();

        cout << ex.what() << endl;
    }


    return 0;
    }
