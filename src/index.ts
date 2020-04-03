import { frequencyCounterPattern } from "./arrayMatcher";
import { multipleCounterPattern_pair_with_sum_zero } from "./multiplePointers_PairWithSumZero";
import { multipleCounterPattern_unique_elements } from "./multiplePointers_uniqueElements";
import { slidingWindowPattern } from "./slidingWindow";
import { helperMethodRecursion } from "./helperMethod_recursion";
import { SinglyLinkedList } from "./Linked_lists/SinglyLinkedList";
import { Stack } from "./Stack/Stack";
import { Queue } from "./Queue/Queue";
import { BinarySearchTree } from "./Trees/BinarySearchTree";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = `Which program you want to run? 
                    1. Find if 1 array is square of the other
                    2. Find the first pair whose sum is 0
                    3. Find the number of unique elements in an array
                    4. Find the maximum sum of N consecutive elements in an array
                    5. Helper method recursion. Get odd numbers.
                    Singly_Linked_List - 
                        6.  Push value.
                        7.  Pop value
                        8.  Shift head and get it.
                        9.  Un-Shift head.
                        10. Get by index.
                        11. Set by index.
                        12. Insert at given index.
                        13. Remove at given index.
                        14. In-place reversal.
                    Stack - 
                        15. Push
                        16. Pop
                    Queue - 
                        17. Enqueue
                        18. Dequeue
                    Binary Search Trees - 
                        19. Insert a new node iteratively
                        20. Insert a new node recursively
                        \n`;
rl.question(question, (answer) => {

    switch (answer) {
        case '1':
            frequencyCounterPattern([1, 2, 2, 3], [1, 9, 4, 4]);
            break;
        case '2':
            multipleCounterPattern_pair_with_sum_zero([-4, -3, -1, 0, 1, 2, 2, 3]);
            break;
        case '3':
            multipleCounterPattern_unique_elements([1, 1, 1, 3, 3, 4, 4, 4, 5, 6, 7, 11, 20, 20]);
            break;
        case '4':
            slidingWindowPattern([1, 2, 4, 4, 5, 6, 6, 3, 3, 3, 5, 6, 7, 8, 5, 9, 6, 7, 8, 8, 9, 7, 6, 9, 7], 3);
            break;
        case '5':
            helperMethodRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11]);
            break;
        case '6':
            let linkedList_push = new SinglyLinkedList();
            console.log(linkedList_push.push('Hello'));
            console.log(linkedList_push.push(1));
            console.log(linkedList_push.push(true));
            console.log('Linked list', linkedList_push.traverse());
            break;
        case '7':
            let linkedList_pop = new SinglyLinkedList();
            console.log(linkedList_pop.push('Hello'));
            console.log(linkedList_pop.push(1));
            console.log(linkedList_pop.push(true));
            console.log('Linked list', linkedList_pop.traverse());
            console.log('Popped element', linkedList_pop.pop());
            console.log('Popped element', linkedList_pop.pop());
            console.log('Linked list', linkedList_pop.traverse());
            console.log('Popped element', linkedList_pop.pop());
            console.log('Linked list', linkedList_pop.traverse());
            break;
        case '8':
            let linkedList_shift_head = new SinglyLinkedList();
            console.log(linkedList_shift_head.push('Hello'));
            console.log(linkedList_shift_head.push(1));
            console.log(linkedList_shift_head.push(true));
            console.log('Linked list', linkedList_shift_head.traverse());
            console.log('Old head', linkedList_shift_head.shiftHead());
            console.log('Linked list', linkedList_shift_head.traverse());
            break;
        case '9':
            let linkedList_unshift_head = new SinglyLinkedList();
            console.log(linkedList_unshift_head.push('Hello'));
            console.log(linkedList_unshift_head.push(1));
            console.log(linkedList_unshift_head.push(true));
            linkedList_unshift_head.unShiftHead('Goodbye');
            console.log('Linked list', linkedList_unshift_head.traverse());
            break;
        case '10':
            let linkedList_get = new SinglyLinkedList();
            console.log(linkedList_get.push('Hello'));
            console.log(linkedList_get.push(1));
            console.log(linkedList_get.push(true));
            console.log('Element at position 2', linkedList_get.getByIndex(2));
            console.log('Element at position 10', linkedList_get.getByIndex(10));
            break;
        case '11':
            let linkedList_set = new SinglyLinkedList();
            console.log(linkedList_set.push('Hello'));
            console.log(linkedList_set.push(1));
            console.log(linkedList_set.push(true));
            console.log('Linked list', linkedList_set.traverse());
            console.log('Setting element at position 2', linkedList_set.setByIndex(2, 'newValue'));
            console.log('Linked list', linkedList_set.traverse());
            break;
        case '12':
            let linkedList_insert = new SinglyLinkedList();
            console.log(linkedList_insert.push('Hello'));
            console.log(linkedList_insert.push(1));
            console.log(linkedList_insert.push(true));
            console.log('Linked list', linkedList_insert.traverse());
            console.log('Inserting element at position 2', linkedList_insert.insert(2, 'newValue'));
            console.log('Linked list', linkedList_insert.traverse());
            console.log('Inserting element at position 0', linkedList_insert.insert(0, 'newValue'));
            console.log('Linked list', linkedList_insert.traverse());
            console.log('Inserting element at position 5', linkedList_insert.insert(5, 'newValue'));
            console.log('Linked list', linkedList_insert.traverse());
            break;
        case '13':
            let linkedList_remove = new SinglyLinkedList();
            console.log(linkedList_remove.push('Hello'));
            console.log(linkedList_remove.push(1));
            console.log(linkedList_remove.push(true));
            console.log(linkedList_remove.push('newvalue4'));
            console.log(linkedList_remove.push('newvalue5'));
            console.log('Linked list', linkedList_remove.traverse());
            console.log('Removing element at position 2', linkedList_remove.remove(2));
            console.log('Linked list', linkedList_remove.traverse());
            console.log('Removing element at position 0', linkedList_remove.remove(0));
            console.log('Linked list', linkedList_remove.traverse());
            console.log('Removing last element', linkedList_remove.remove(linkedList_remove.length));
            console.log('Linked list', linkedList_remove.traverse());
            break;
        case '14':
            let linkedList_reverse = new SinglyLinkedList();
            console.log(linkedList_reverse.push('Hello'));
            console.log(linkedList_reverse.push(1));
            console.log(linkedList_reverse.push(true));
            console.log(linkedList_reverse.push('newvalue4'));
            console.log(linkedList_reverse.push('newvalue5'));
            console.log('Linked list', linkedList_reverse.traverse());
            linkedList_reverse.reverse();
            console.log('Linked list', linkedList_reverse.traverse());
            break;
        case '15':
            let stack_push = new Stack();
            stack_push.push(1);
            stack_push.push(2);
            stack_push.push(3);
            stack_push.push(4);
            console.log('Stack - ', stack_push.traverse());
            break;
        case '16':
            let stack_pop = new Stack();
            stack_pop.push(1);
            stack_pop.push(2);
            stack_pop.push(3);
            stack_pop.push(4);
            console.log('Stack - ', stack_pop.traverse());
            console.log('Popped element', stack_pop.pop());
            console.log('Popped element', stack_pop.pop());
            console.log('Stack - ', stack_pop.traverse());
            break;
        case '17':
            let q_enqueue = new Queue();
            q_enqueue.enqueue(1);
            console.log('Queue - ', q_enqueue.traverse());
            q_enqueue.enqueue(2);
            console.log('Queue - ', q_enqueue.traverse());
            q_enqueue.enqueue(3);
            console.log('Queue - ', q_enqueue.traverse());
            q_enqueue.enqueue(4);
            console.log('Queue - ', q_enqueue.traverse());
            break;
        case '18':
            let q_dequeue = new Queue();
            q_dequeue.enqueue(1);
            q_dequeue.enqueue(2);
            q_dequeue.enqueue(3);
            q_dequeue.enqueue(4);
            console.log('Queue - ', q_dequeue.traverse());
            console.log('Dequeued element', q_dequeue.dequeue());
            console.log('Dequeued element', q_dequeue.dequeue());
            console.log('Queue - ', q_dequeue.traverse());
            break;
        case '19':
            let bst_insert_iteratively = new BinarySearchTree();
            bst_insert_iteratively.insertIteratively(10);
            bst_insert_iteratively.insertIteratively(5);
            bst_insert_iteratively.insertIteratively(15);
            bst_insert_iteratively.insertIteratively(11);
            bst_insert_iteratively.insertIteratively(16);
            bst_insert_iteratively.insertIteratively(3);
            bst_insert_iteratively.insertIteratively(7);
            console.log('Tree structure', bst_insert_iteratively);
            break;
        case '20':
            let bst_insert_recursively = new BinarySearchTree();
            bst_insert_recursively.insertRecursively(10);
            bst_insert_recursively.insertRecursively(5);
            bst_insert_recursively.insertRecursively(15);
            bst_insert_recursively.insertRecursively(11);
            bst_insert_recursively.insertRecursively(16);
            bst_insert_recursively.insertRecursively(3);
            bst_insert_recursively.insertRecursively(7);
            console.log('Tree structure', bst_insert_recursively);
            break;
        default:
            console.log('Invalid selection')
            break;
    }

    rl.close();
});
