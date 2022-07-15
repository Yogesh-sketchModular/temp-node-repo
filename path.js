
let path=require('path');
console.log(path.sep);// returns the segment separartor for the OS
///To get the path joined
const filepath=path.join('content','subfolder','text.txt');
console.log(filepath);//Output:content\subfolder\text.txt
const base=path.basename(filepath);
console.log(base);//text.txt

const absoulte=path.resolve(__dirname,filepath);//takes the specified path and returns absoulte path
console.log(absoulte);
//Absoulte Path means: Path from the root of the directory