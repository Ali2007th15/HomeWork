#ifndef UNTITLED11_EXCEPTION_H
#define UNTITLED11_EXCEPTION_H
#include "header.h"
class Exception : public exception {
private:
    string word;

public:
    explicit Exception(const string& error) : word(error) {}

    const char* what() const noexcept override {
        return word.data();
    }
};
#endif
