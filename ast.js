module.exports = {
    program: {
        body: [
            {
                type: "functionCall",
                callee: "log",
                arguments: [
                    {
                        type: "operation",
                        name: '+',
                        left: {
                            type: "number",
                            value: 5
                        },
                        right: {
                            type: "number",
                            value: 6
                        }
                    }
                ]
            }
        ]
    }
}