"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const ListNode_1 = require("./ListNode");
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    add(value) {
        const node = new ListNode_1.ListNode(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let currentSelectedNode = this.head;
        while (currentSelectedNode.next) {
            currentSelectedNode = currentSelectedNode.next;
        }
        currentSelectedNode.next = node;
    }
    getAll() {
        const array = [];
        if (!this.head)
            return array;
        let currentSelectedNode = this.head;
        while (currentSelectedNode.next) {
            array.push(currentSelectedNode.value);
            currentSelectedNode = currentSelectedNode.next;
        }
        return array;
    }
    toString() {
        const array = this.getAll();
        return array.join(', ');
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=LikedList.js.map