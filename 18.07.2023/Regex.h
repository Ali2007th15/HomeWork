#ifndef UNTITLED11_REGEX_H
#define UNTITLED11_REGEX_H
#include "header.h"
const regex carRegex(R"(\bCar\b)");
const regex planeRegex(R"(\bPlane\b)");
const regex boatRegex(R"(\bBoat\b)");

string Type(const string& num3) {
    if (regex_search(num3, carRegex)) {
        return "Car";
    } else if (regex_search(num3, planeRegex)) {
        return "Plane";
    } else if (regex_search(num3, boatRegex)) {
        return "Boat";
    } else {
        return "Unknown";
    }
}
#endif
