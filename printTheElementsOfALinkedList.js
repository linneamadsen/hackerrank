'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
    let current = head;
    
    while(current) {
        console.log(current.data);
        current = current.next;
    }
    
}

/*
 * My notes:
 *
 * When we say "current," we are talking about the node of the Linked List. The challenge in the LL is that it doesn't have 
 * an index, so you can't just loop through it the way you can with an array. So you have to assign the current node to a value 
 * and then print that value but the thing that actually causes the while loop to move forward (instead of be an infinite loop)
 * is that you are also including current = current.next. This means that you are moving to the node that comes next after current.   
 * As long as there is a value for current, it will log that value and then go to the next node.    
 * 
 * This one was a hard one for me because I haven't thought about linked lists in years. I am making an effort to revisit these datatypes 
 * and refresh my memory, though!
 * 
 */

function main() {
