#ifndef UNTITLED5_HEADER_H
#define UNTITLED5_HEADER_H
#include <iostream>
using namespace std;
template<typename T>
class Queue {
private:
    struct Node {
        T data;
        Node* next;
    };

    Node* begin{};
    Node* end{};

public:
    Queue() = default;
    Queue(Node* begin,Node* end){
        this->begin = begin;
        this->end = end;

    }

    bool Empty() const {
        return begin == nullptr;
    }

    ~Queue() {
        while (!Empty())
            dequeue();
    }

    void enqueue(const T& num) {
        Node* Node2 = new Node;
        Node2->data = num;
        Node2->next = nullptr;

        if (Empty()) {
            begin= Node2;
            end = Node2;
        } else {
            end->next = Node2;
            end = Node2;
        }
    }

    void dequeue() {
        if (Empty()) {
            cout << "Queue is empty. Cannot dequeue.\n";
            return;
        }

        Node* num1 = begin;
        begin = begin->next;
        delete num1;
    }

    T& Begin() {
        if (Empty()) {
            cout << "Queue is empty. No first element.\n";
            static T num2;
            return num2;
        }

        return begin->data;
    }
};
#endif
