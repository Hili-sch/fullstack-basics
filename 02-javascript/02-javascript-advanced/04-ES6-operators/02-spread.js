const basicColors = ["red", "green", "blue"]
const colors =["pink", "orange", "bleck"]

const combindArrays = basicColors.concat(colors)

console.log(combindArrays);

const combindArraysES6 = [...basicColors, ...colors]

console.log(combindArraysES6);

const combindArraysWithAddition = [...basicColors,"purple", ...colors]

console.log(combindArraysWithAddition);


const chat = {
    llm: 'gpt4omini',
    temprature: 0.1,
    top_p: 0.9
}

const genAI = {
    server:"MCP",
    AGENT:"Anthropic"
}

const combindObjecst = {
    ...chat, ide: "corser", ...genAI ,laguege: "python"
}

console.log(combindObjecst);
