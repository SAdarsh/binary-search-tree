class Node {
        constructor(data, left = null, right = null) {
            this.data = data;
            this.left = left;
            this.right = right;
        }
}

class BST {
    constructor(initData) {
        this.root = null;
        if (Array.isArray(initData)) {
            initData.forEach(this.add.bind(this));
        }
    }
    searchTree(node, data) {
        if (data < node.data) {
            if (node.left == null) {
                node.left = new Node(data);
                return;
            } else if (node.left != null) {
                return this.searchTree(node.left, data);
            }
        } else if (data > node.data) {
            if (node.right == null) {
                node.right = new Node(data);
                return;
            } else if (node.right != null) {
                return this.searchTree(node.right, data);
            }
        } else {
            return null;
        }
    }
    add(data) {
        const node = this.root;
        if (node == null) {
            this.root = new Node(data);
            return;
        } else {
            return this.searchTree(node, data);
        }
    }
    findMin() {
        let current = this.root;
        while (current.left != null) {
            current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while (current.right != null) {
            current = current.right;
        }
        return current.data;
    }
}