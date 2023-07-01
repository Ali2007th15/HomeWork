#include <iostream>
#include <string>
using namespace std;
#ifndef UNTITLED4_HEADER_H
#define UNTITLED4_HEADER_H
class SystemUnit {
        private:
        string make;
        string model;
        string serialNumber;

        public:
        SystemUnit(string make, string model, string serialNumber) {
            this->make = make;
            this->model = model;
            this->serialNumber = serialNumber;
        }

        void print() const {
            cout << "System unit: " << make << " " << model << ", Serial Number: " << serialNumber << endl;
        }
};

class CPU {
private:
    int cores;
    int threads;
    int cache;
    int clockSpeed;

public:
    CPU(int cores, int threads, int cache, int clockSpeed) {
        this->cores = cores;
        this->threads = threads;
        this->cache = cache;
        this->clockSpeed = clockSpeed;
    }

    void print() const {
        cout << "CPU: Cores: " << cores << ", Threads: " << threads << ", Cache: " << cache
             << ", Clock Speed: " << clockSpeed << endl;
    }
};

class VideoCard {
private:
    int memory;
public:
    VideoCard(int memory) {
        this->memory = memory;
    }

    void print() const {
        cout << "Video Card: Memory: " << memory << "GB" << endl;
    }
};

class RAM {
private:
    int size;
    string type;

public:
    RAM(int size, string type) {
        this->size = size;
        this->type = type;
    }

    void print() const {
        cout << "RAM: Size: " << size << "GB, Type: " << type << endl;
    }
};

class Memory {
private:
    int size;
    string type;

public:
    Memory(int size, string type) {
        this->size = size;
        this->type = type;
    }

    void print() const {
        cout << "Memory: Size: " << size << "TB, Type: " << type << endl;
    }
};

class Computer {
private:
    SystemUnit systemUnit;
    CPU cpu;
    VideoCard videoCard;
    RAM ram;
    Memory memory;

public:
    Computer(string make, string model, string serialNumber, int cores, int threads, int cache, int clockSpeed,
             int vmemory, int rsize, string rtype, int msize, string mtype)
            : systemUnit(make, model, serialNumber),
              cpu(cores, threads, cache, clockSpeed),
              videoCard(vmemory),
              ram(rsize, rtype),
              memory(msize, mtype) {}

    void print() const {
        systemUnit.print();
        cpu.print();
        videoCard.print();
        ram.print();
        memory.print();
    }
};
#endif //UNTITLED4_HEADER_H
