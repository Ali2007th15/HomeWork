//
// Created by Ali on 18.07.2023.
//

#ifndef UNTITLED7_HEADER_H
#define UNTITLED7_HEADER_H
#include <iostream>
using namespace std;

class Node {
public:
    int num1{};
    Node* previous{};
    Node* next{};

    Node() = default;

    Node(int num1, Node* previous, Node* next) {
        this->num1 = num1;
        this->previous = previous;
        this->next = next;
    }
};

class List {
private:
    Node* head{};
    Node* tail{};

public:
    List() = default;

    List(Node* head,Node* tail) {
        this->head = head;
        this->tail = tail;
    }

    bool Empty() {
        return head == nullptr;
    }

    void add_end(int value) {
        Node* Node2 = new Node(value, tail, nullptr);
        if (Empty()) {
            head = Node2;
            tail = Node2;
        } else {
            tail->next = Node2;
            tail = Node2;
        }
    }

    void add_start(int value) {
        Node* Node2 = new Node(value, nullptr, head);
        if (Empty()) {
            head = Node2;
            tail = Node2;
        } else {
            head->previous = Node2;
            head = Node2;
        }
    }

    void add_index(int index, int value) {
        if (index < 0 || index > size()) {
            cout << "Index out of range." << endl;
            return;
        }
        if (index == 0) {
            add_start(value);
        } else if (index == size()) {
            add_end(value);
        } else {
            Node* current = head;
            for (int i = 0; i < index; i++) {
                current = current->next;
            }
            Node* Node2 = new Node(value, current->previous, current);
            current->previous->next = Node2;
            current->previous = Node2;
        }
    }

    int pop() {
        if (Empty()) {
            cout << "List is empty." << endl;
            return 0;
        }
        int num2 = tail->num1;
        if (head == tail) {
            delete tail;
            head = nullptr;
            tail = nullptr;
        } else {
            tail = tail->previous;
            delete tail->next;
            tail->next = nullptr;
        }
        return num2;
    }

    int remove_index(int index) {
        if (Empty()) {
            cout << "List is empty." << endl;
            return 0;
        }
        if (index < 0 || index >= size()) {
            cout << "Index out of range." << endl;
            return 0;
        }
        if (index == 0) {
            return pop();
        }
        Node* current = head;
        for (int i = 0; i < index; i++) {
            current = current->next;
        }
        int num3 = current->num1;
        current->previous->next = current->next;
        if (current->next != nullptr) {
            current->next->previous = current->previous;
        }
        delete current;
        return num3;
    }

    int remove_value(int value) {
        if (Empty()) {
            cout << "List is empty." << endl;
            return 0;
        }
        Node* current = head;
        while (current != nullptr) {
            if (current->num1 == value) {
                if (current == head) {
                    return pop();
                } else if (current == tail) {
                    tail = current->previous;
                    current->previous->next = nullptr;
                } else {
                    current->previous->next = current->next;
                    current->next->previous = current->previous;
                }
                int num4 = current->num1;
                delete current;
                return num4;
            }
            current = current->next;
        }
        cout << "Number not found in the list." << endl;
        return 0;
    }

    int size() {
        int num5 = 0;
        Node* current = head;
        while (current != nullptr) {
            num5++;
            current = current->next;
        }
        return num5;
    }

    void print() {
        if (Empty()) {
            cout << "List is empty." << endl;
            return;
        }
        Node* current = head;
        while (current != nullptr) {
            cout << current->num1 << " ";
            current = current->next;
        }
        cout << endl;
    }
};


#endif //UNTITLED7_HEADER_H
