class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function insertAtTail(head, value) {
    const newNode = new ListNode(value);
    if (!head) {
        head = newNode;
        return head; 
    } else {
        let current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        return head; 
    }
}

function isCyclic(head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast === slow) return true;
    }
    return false;
}

// Create an empty linked list with a head node
let head = new ListNode(0);

// Insert nodes
head = insertAtTail(head, 1);
head = insertAtTail(head, 2);
head = insertAtTail(head, 3);
head = insertAtTail(head, 4);

// Create a cycle
head.next.next.next.next = head;

if (isCyclic(head)) {
    console.log("The linked list has a cycle.");
} else {
    console.log("The linked list does not have a cycle.");
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