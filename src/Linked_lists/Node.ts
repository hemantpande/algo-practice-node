
// Name node somehow conflicts with Node js libraries
export class DataNode{

    value: any;
    next: DataNode;

    constructor(value){
        this.value = value;
        this.next = null;
    }
}