#ifndef UNTITLED8_HEADER_H
#define UNTITLED8_HEADER_H
#include <iostream>
using namespace std;

class Transport {
public:
    Transport() = default;

    virtual double Time(double distance) const {
        return 0;
    }

    virtual double Cost(double distance) const {
        return 0;
    }
};

class Car : public Transport {
public:
    Car() = default;

    Car(const double speed, const double kilometer) : Transport()
    {
        this->kilometer = kilometer;
        this->speed = speed;
    }

    double Time(double distance) const override {
        return distance / speed;
    }

    double Cost(double distance) const override {
        return distance * kilometer;
    }

private:
    double speed;
    double kilometer;
};

class Bicycle : public Transport {
public:
    Bicycle() = default;

    Bicycle(const double speed, const double kilometer) : Transport()
    {
        this->kilometer = kilometer;
        this->speed = speed;
    }

    double Time(double distance) const override {
        return distance / speed;
    }

    double Cost(double distance) const override {
        return distance * kilometer;
    }

private:
    double speed;
    double kilometer;
};

class Carriage : public Transport {
public:
    Carriage() = default;

    Carriage(const double speed, const double kilometer) : Transport()
    {
        this->kilometer = kilometer;
        this->speed = speed;
    }
    double Time(double distance) const override {
        return distance / speed;
    }

    double Cost(double distance) const override {
        return distance * kilometer;
    }

private:
    double speed;
    double kilometer;
};


#endif
