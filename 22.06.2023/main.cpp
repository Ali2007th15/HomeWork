

#include "header.h"

int main() {
    Queue<int> Q1;

    Q1.enqueue(10);
    Q1.enqueue(20);
    Q1.enqueue(30);

    cout << "First element: " << Q1.Begin() << endl;

    Q1.dequeue();

    cout << "First element after dequeue: " << Q1.Begin() << endl;

    return 0;
}
