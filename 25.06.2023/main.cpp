#include <iostream>
#include "header.h"
using namespace std;

int main() {
    BinaryTree<int> tree;
    tree.add(5);
    tree.add(3);
    tree.add(7);
    cout << "Tree before remove: ";
    tree.print();
    cout << endl << "Tree after remove: ";

    tree.remove(3);
    tree.print();

    return 0;
}
