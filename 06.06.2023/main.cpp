#include "header.h"

int main() {
    List list1;

    list1.add_end(10);
    list1.add_end(20);
    list1.add_start(5);
    list1.add_index(1, 15);
    list1.pop();
    cout << "List1: ";
    list1.print();

    return 0;
}
