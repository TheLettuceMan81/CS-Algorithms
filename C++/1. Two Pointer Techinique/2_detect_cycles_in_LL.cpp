// reference: https://leetcode.com/problems/linked-list-cycle/

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(NULL) {}
};

void insertAtTail(ListNode* &head, int value) {
    ListNode* newNode = new ListNode(value);
    if (!head) {
        head = newNode;
    } else {
        ListNode* current = head;
        while (current->next) {
            current = current->next;
        }
        current->next = newNode;
    }
}

bool isCyclic(ListNode* &head) {

    ListNode* fast = head;     
    ListNode* slow = head;     

    while (fast != NULL and fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;

        if (fast == slow) return true;
    }
    return false;
}

int main() {
    ListNode* head = NULL;
    insertAtTail(head, 1);
    insertAtTail(head, 2);
    insertAtTail(head, 3);
    insertAtTail(head, 4);

    // This piece of code creates a cycle
    head->next->next->next->next = head;

    if (isCyclic(head)) {
        cout << "The linked list has a cycle." << endl;
    } else {
        cout << "The linked list does not have a cycle." << endl;
    }

    return 0;
}

// Try out the following test cases
// head = [3, 2, 0, -4], pos = 1
// head = [1, 2], pos = 0
// head = [1], pos = -1
// head = [], pos = -1
// head = [1, 2, 3, 4, 5], pos = 2
// head = [1, 2, 3, 4, 5], pos = 4
// head = [1, 2, 3, 4, 5], pos = -1
// head = [1, 1, 1, 1, 1], pos = 0
// head = [1, 2, 3, 4, 5], pos = 0
// head = [1, 2, 3, 4, 5, 6, 7], pos = 6