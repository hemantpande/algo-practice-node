
export class HashTable {

    keyMap: any[];

    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    trivialSet(value: string, range: number): number {
        let index = this.hash(value, range);
        this.keyMap[index] = value;

        return index;
    }

    set(key: string, value: any) {
        let index = this.hash(key, this.keyMap.length);
        console.log(key, index);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);
    }

    get(key: string): any {
        let index = this.hash(key, this.keyMap.length);
        console.log('index', index);
        console.log('this.keyMap[index]', this.keyMap[index]);
        if (!this.keyMap[index])
            return undefined;

        let values = this.keyMap[index];
        console.log('values',values);
        for (let i = 0; i < values.length; i++) {
            if(values[i][0] === key){
                return values[i];
            }
        }

        return undefined;
    }

    hash(value: string, range: number): number {
        let index = 0;
        let WIERD_PRIME_NUMBER = 31;

        for (let i = 0; i < Math.min(value.length, 100); i++) {
            let char = value[i];
            let asciiValue = char.charCodeAt(0) - 96;
            index = (index * WIERD_PRIME_NUMBER + asciiValue) % range;
        }

        return index;
    }
}