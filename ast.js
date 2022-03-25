module.exports = {
    program: {
        body: [
            {
                type: "variableDeclaration",
                name: 'a',
                value: "hello, world"
            },
            {
                type: "functionCall",
                callee: "log",
                arguments: [
                    {
                        type: "identifier",
                        name: 'a'
                    }
                ]
            }
        ]
    }
}