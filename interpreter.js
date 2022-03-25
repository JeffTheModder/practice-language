let variables = {};

let functions = {
    log: (args) => {
        console.log(args);
    }
};

function parseNode(node) {
    switch (node.type) {
        case "identifier":
            let value = variables.hasOwnProperty(node.name) ? variables[node.name] : node.value;
            return value;
            break;
        case "variableDeclaration":
            variables[node.name] = node.value;
            break;
        case "functionCall":
            let args = [];
            for (const _node of node.arguments) {
                args.push(parseNode(_node));
            }
            if (functions.hasOwnProperty(node.callee)) {
                functions[node.callee].apply(null, args);
            } else throw new Error(`Function \"${node.name}\" is not defined.`);
            break;
        default:
            throw new Error("Invalid node type");
    }
}

function parseAST(ast) {
    for (const node of ast.program.body) {
        parseNode(node);
    }
}

module.exports = {parseAST, parseNode};