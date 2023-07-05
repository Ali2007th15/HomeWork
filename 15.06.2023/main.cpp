#include "header.h"

int main() {
    Computer comp1("Asus", "ROG Strix GA15", "223355", 5, 10, 10, 5, 16, 16, "DDR5", 1, "SSD");
    cout << "Computer 1:"<< endl;
    comp1.print();


    Computer comp2(comp1);
    cout << "Computer 2:"<< endl;
    comp2.print();

    return 0;
}
