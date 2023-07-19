#include "header.h"

int main() {
    Car car(60, 300);
    Bicycle bicycle(15, 100);
    Carriage carriage(10, 150);

    const double distance = 100;

    double carTime = car.Time(distance);
    double carCost = car.Cost(distance);
    cout << "Car: Time - " << carTime << " hours, Cost - " << carCost << " azn" << endl;

    double bicycleTime = bicycle.Time(distance);
    double bicycleCost = bicycle.Cost(distance);
    cout << "Bicycle: Time - " << bicycleTime << " hours, Cost - " << bicycleCost << " azn" << endl;

    double carriageTime = carriage.Time(distance);
    double carriageCost = carriage.Cost(distance);
    cout << "Carriage: Time - " << carriageTime << " hours, Cost - " << carriageCost << " azn" << endl;

    return 0;
}
