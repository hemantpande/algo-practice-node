import { SinglyLinkedList } from "./SinglyLinkedList";

var expect = require('chai').expect;

describe('Linked list', function () {
    it('should push an element', function () {
        let linkedList = new SinglyLinkedList();
        linkedList.push('Hello');
        linkedList.push(1);
        linkedList.push(true);
        expect(linkedList.traverse()).deep.equal(['Hello', 1, true]);
    });

    it('should pop an element', function () {
        let linkedList = new SinglyLinkedList();
        linkedList.push('Hello');
        linkedList.push(1);
        linkedList.push(true);
        expect(linkedList.traverse()).deep.equal(['Hello', 1, true]);
        expect(linkedList.pop()).deep.equal({ value: true, next: null });
        expect(linkedList.pop()).deep.equal({ value: 1, next: null });
        expect(linkedList.traverse()).deep.equal(['Hello']);
        expect(linkedList.pop()).deep.equal({ value: 'Hello', next: null });
        expect(linkedList.traverse()).deep.equal([]);
    });

    it('should shift head', function () {
        let linkedList = new SinglyLinkedList();
        linkedList.push('Hello');
        linkedList.push(1);
        linkedList.push(true);
        expect(linkedList.traverse()).deep.equal(['Hello', 1, true]);
        let oldHead = linkedList.shiftHead();
        expect(oldHead.value).deep.equal('Hello');
        expect(linkedList.traverse()).deep.equal([1, true]);
    })
});