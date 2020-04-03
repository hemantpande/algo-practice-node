
export class TreeNode{
    left: TreeNode;
    right: TreeNode;
    value: any;

    constructor(value:any){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}