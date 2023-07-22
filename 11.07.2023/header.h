

#ifndef UNTITLED9_HEADER_H
#define UNTITLED9_HEADER_H
#include <iostream>
using namespace std;

class Car {
public:
    virtual void drive(){
    }
    virtual void park(){
    }
    virtual void work(){
    }
};

class Sedan : public Car {
public:
    void drive() override {
        cout << "Sedan is driving on the highway.\n";
    }

    void park() override {
        cout << "Sedan is parked in the parking.\n";
    }

    void work() override {
        cout << "Sedan is transporting passengers.\n";
    }
};

class Bus : public Car {
public:
    void drive() override {
        cout << "Bus is transporting passengers.\n";
    }

    void park() override {
        cout << "Bus is parked in the bus station.\n";
    }

    void work() override {
        cout << "Bus is public transportation.\n";
    }
};

class Truck : public Car {
public:
    void drive() override {
        cout << "Truck is transporting furniture.\n";
    }

    void park() override {
        cout << "Truck is parked at the truck parking.\n";
    }

    void work() override {
        cout << "Truck is transporting heavy items.\n";
    }
};

class Sportcar : public Car {
public:
    void drive() override {
        cout << "Sports car is driving at maximum speed.\n";
    }

    void park() override {
        cout << "Sports car is parked in the garage.\n";
    }

    void work() override {
        cout << "Sportcar is used for sport.\n";
    }
};

#endif
