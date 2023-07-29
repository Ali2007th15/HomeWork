#include "header.h"
int main() {
    Park Park1;

    Park1.add(2005, "Ali", 201, 50);
    Park1.add(2003, "Rufat", 205, 40);
    Park1.add(2006, "Agasef", 203, 30);


    int search = 2005;
    Bus* foundBus = Park1.find(search);
    if (foundBus) {
        cout << "Bus Number: " << foundBus->busNumber << ", Driver: " << foundBus->driver
            << ", Route: " << foundBus->route << ", Seats: " << foundBus->seats << endl;
    } else {
        cout << "Bus with number " << search << " not found" << endl;
    }


    Park1.Fsave("bus_park.txt");


    return 0;
}
