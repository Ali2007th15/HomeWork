

#ifndef UNTITLED11_HEADER_H
#define UNTITLED11_HEADER_H
#include <iostream>
#include <string>
#include <regex>
#include <fstream>
using namespace std;

class Transport {
public:
    virtual ~Transport() {}

    friend ostream& operator<<(ostream& os, const Transport& transport) {
        return os << "Transport";
    }

    friend bool operator==(const Transport& num1, const Transport& num2) {
        return true;
    }
};

class Car : public Transport {
public:
    ~Car() override {}

    friend ostream& operator<<(ostream& os, const Car& car) {
        return os << "Car";
    }

    friend bool operator==(const Car& num1, const Car& num2) {
        return true;
    }
};

class Plane : public Transport {
public:
    ~Plane() override {}

    friend ostream& operator<<(ostream& os, const Plane& plane) {
        return os << "Plane";
    }

    friend bool operator==(const Plane& num1, const Plane& num2) {
        return true;
    }
};

class Boat : public Transport {
public:
    ~Boat() override {}

    friend ostream& operator<<(ostream& os, const Boat& boat) {
        return os << "Boat";
    }

    friend bool operator==(const Boat& num1, const Boat& num2) {
        return true;
    }
};
#endif
