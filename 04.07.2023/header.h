#ifndef UNTITLED12_HEADER_H
#define UNTITLED12_HEADER_H
#include <iostream>
#include <fstream>
#include <string>

using namespace std;

struct Bus {
    int busNumber;
    string driver;
    int route;
    int seats;
    Bus* left{};
    Bus* right{};

    Bus() = default;

    Bus(int busNumber, const string& driver, int route, int seats){
        this->busNumber = busNumber;
        this->driver= driver;
        this->route = route;
        this->seats= seats;
    }

};

class Park {
private:
    Bus* root{};

    void insert(Bus*& node, int number, const string& name, int route, int seats) {
        if (node == nullptr) {
            node = new Bus(number, name, route, seats);
        } else {
            if (number < node->busNumber) {
                insert(node->left, number, name, route, seats);
            } else {
                insert(node->right, number, name, route, seats);
            }
        }
    }

    Bus* find(Bus* node, int number) const {
        if (node == nullptr || node->busNumber == number) {
            return node;
        }

        if (number < node->busNumber) {
            return find(node->left, number);
        } else {
            return find(node->right, number);
        }
    }

public:

    void add(int number, const string& name, int route, int seats) {
        insert(root, number, name, route, seats);
    }

    Bus* find(int number) const {
        return find(root, number);
    }
#include "header.h"
    void save(ofstream& outFile, Bus* node) const {
        if (node != nullptr) {
            save(outFile, node->left);
            outFile << node->busNumber << ", " << node->driver << ", " << node->route << ", " << node->seats << endl;
            save(outFile, node->right);
        }
    }

    void Fsave(const string& Fname) const {
        ofstream outFile(Fname);
        if (outFile.is_open()) {
            outFile << "Bus park information:" << endl;
            outFile << "Bus Number,Driver Name,Route Number,Seats Count" << endl;
            save(outFile, root);
            outFile.close();
            cout << "Bus park information has been saved to " <<    Fname << endl;
        } else {
            cout << "Unable to open file: " << Fname << endl;
        }
    }
};
#endif
