const { Console } = require('console');
const{readFileSync, writeFileSync, write}=require('fs');

console.log('Starting the task');
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('content/subfolder/text.txt','utf8');
console.log(first);
console.log(second);

console.log("Done with reading task");
//writeFileSync('./content/result-sync.txt',`Hello World Baby, new file is created`);//

console.log("Strted with writing");
writeFileSync('./content/result-sync.txt',`Hello copying date from  old file to new file ${first} ${'\n'} is ${second}`);

//Overriding the data
writeFileSync('./content/result-sync.txt','Hello-World');

//to append the data
writeFileSync('./content/result-sync.txt',
`${'\n'} Hello copying date from  old file to new file ${first}  is ${second} `,
{flag:'a'}
);

console.log("Done with writing");