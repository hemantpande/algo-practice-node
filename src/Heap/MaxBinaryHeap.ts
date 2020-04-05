
export class MaxBinaryHeap {

    elements: number[];

    constructor() {
        this.elements = []
    }

    insert(value: number) {
        this.elements.push(value);

        this.bubbleUp();
    }

    private bubbleUp() {
        let childIndex = this.elements.length - 1;

        while (childIndex > -1) {
            let parentIndex = Math.floor((childIndex - 1) / 2);
            if (parentIndex > -1 && this.elements[childIndex] > this.elements[parentIndex]) {
                this.swapValues(parentIndex, childIndex);
            }
            childIndex = parentIndex;
        }
    }

    // [55, 39, 41, 18, 27, 12, 33]

    extractMax(): number {

        let rootIndex = 0;
        let lastIndex = this.elements.length - 1;

        this.swapValues(rootIndex, lastIndex);
        let max = this.elements.pop();

        if (this.elements.length > 0) {
            this.bubbleDown();
        }

        return max;
    }

    bubbleDown() {
        let currentIndex = 0;

        while (currentIndex != -1) {
            let swapIndex = -1;

            let firstParentIndex = 2 * currentIndex + 1;
            let secondParentIndex = 2 * currentIndex + 2;

            swapIndex = this.getIndexOfGreaterParent(firstParentIndex, secondParentIndex, currentIndex);
            if (swapIndex != -1) {
                this.swapValues(swapIndex, currentIndex);
            }
            currentIndex = swapIndex;
        }
    }

    getIndexOfGreaterParent(firstParentIndex: number, secondParentIndex: number, currentIndex: number): number {
        let currentArrayLength = this.elements.length - 1;

        if (firstParentIndex > currentArrayLength && secondParentIndex > currentArrayLength)
            return -1;

        if (firstParentIndex <= currentArrayLength && secondParentIndex > currentArrayLength) {
            if (this.elements[firstParentIndex] > this.elements[currentIndex])
                return firstParentIndex;
            else
                return -1;

        }

        if (this.elements[firstParentIndex] > this.elements[secondParentIndex])
            return firstParentIndex;
        else
            return secondParentIndex;
    }

    private swapValues(first: number, second: number) {
        let firstValue = this.elements[first];
        this.elements[first] = this.elements[second];
        this.elements[second] = firstValue;
    }
}