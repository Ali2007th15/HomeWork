#ifndef UNTITLED9_HEADER_H
#define UNTITLED9_HEADER_H

#include <iostream>
using namespace std;

class Car {
public:
    virtual void drive() {
    }

    virtual void park() {
    }

    virtual void work() {
    }
};

class Sedan : public Car {
public:
    void drive() override {
        cout << "Sedan is driving on the highway." << endl;
    }

    void park() override {
        cout << "Sedan is parked in the parking." << endl;
    }

    void work() override {
        cout << "Sedan is transporting passengers." << endl;
    }
};

class Bus : public Car {
public:
    void drive() override {
        cout << "Bus is transporting passengers." << endl;
    }

    void park() override {
        cout << "Bus is parked in the bus station." << endl;
    }

    void work() override {
        cout << "Bus is public transportation." << endl;
    }
};

class Truck : public Car {
public:
    void drive() override {
        cout << "Truck is transporting furniture." << endl;
    }

    void park() override {
        cout << "Truck is parked at the truck parking." << endl;
    }

    void work() override {
        cout << "Truck is transporting heavy items." << endl;
    }
};

class Sportcar : public Car {
public:
    void drive() override {
        cout << "Sports car is driving at maximum speed." << endl;
    }

    void park() override {
        cout << "Sports car is parked in the garage." << endl;
    }

    void work() override {
        cout << "Sportcar is used for sport." << endl;
    }
};

#endif
