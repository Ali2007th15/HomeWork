#ifndef UNTITLED6_HEADER_H
#include <iostream>
using namespace std;

template<typename T>
class BinaryTree {
    struct Node {
        T data{};
        Node* left{};
        Node* right{};

        Node(T data){
            this->data = data;
        }
    };

    Node* root{};

public:
    BinaryTree() = default;

    BinaryTree(T data) {
        this->root = new Node(data);
    }

    bool add(T data) {
        if (this->root == nullptr) {
            this->root = new Node(data);
            return true;
        } else {
            Node* current = this->root;
            while (true) {
                if (data < current->data) {
                    if (current->left == nullptr) {
                        current->left = new Node(data);
                        return true;
                    } else {
                        current = current->left;
                    }
                } else if (data > current->data) {
                    if (current->right == nullptr) {
                        current->right = new Node(data);
                        return true;
                    } else {
                        current = current->right;
                    }
                } else {
                    return false;
                }
            }
        }
    }

    bool remove(T data) {
        if (root == nullptr) {
            return false;
        }

        Node* parent = nullptr;
        Node* current = root;

        while (current != nullptr && current->data != data) {
            parent = current;

            if (data < current->data) {
                current = current->left;
            } else {
                current = current->right;
            }
        }

        if (current == nullptr) {
            return false;
        }


        if (current->left == nullptr && current->right == nullptr) {
            if (parent == nullptr) {
                root = nullptr;
            } else if (parent->left == current) {
                parent->left = nullptr;
            } else {
                parent->right = nullptr;
            }
            delete current;
        }

        else if (current->left == nullptr || current->right == nullptr) {
            Node* child = (current->left != nullptr) ? current->left : current->right;
            if (parent == nullptr) {
                root = child;
            } else if (parent->left == current) {
                parent->left = child;
            } else {
                parent->right = child;
            }
            delete current;
        }
        else {
            Node* Parent = current;
            Node* num = current->right;

            while (num->left != nullptr) {
                Parent = num;
                num = num->left;
            }

            if (Parent != current) {
                Parent->left = num->right;
            } else {
                Parent->right = num->right;
            }

            current->data = num->data;
            delete num;
        }

        return true;
    }

    void print() const {
        Print(root);
    }

private:
    void Print(Node* node) const {
        if (node == nullptr) {
            return;
        }

        Print(node->left);
        cout << node->data << " ";
        Print(node->right);
    }
};

#define UNTITLED6_HEADER_H

#endif
