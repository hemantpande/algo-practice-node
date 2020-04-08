
export class HashTable{
    
    elements: any[];

    constructor(){
        this.elements = []
    }

    insert(value: string, range: number): number {
        let index = this.hash(value, range);
        this.elements[index] = value;

        return index;
    }

    hash(value: string, range: number) : number {
        let index = 0;
        let WIERD_PRIME_NUMBER = 31;

        for(let i = 0; i < Math.min(value.length, 100); i++){
            let char = value[i];
            let asciiValue = char.charCodeAt(0) - 96;
            index = (index * WIERD_PRIME_NUMBER + asciiValue) % range;
        }

        return index;
    }
}