let tree;
let button;
let input;

function setup() {
	noCanvas();
	input = createInput("1,2,3,4");
	button = createButton("go");
	button.mousePressed(createTree);
}

function createTree() {
	let array = JSON.parse("[" + input.value() + "]");
	// New tree
	tree = new BST(array);
	console.log(tree);
}