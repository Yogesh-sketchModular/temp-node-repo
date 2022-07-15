const {readFile, writeFile}=require('fs');
//We need to provide callBck
console.log("Started with reading-1");
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    const first=result
    console.log("Completed reading first file-2");
    readFile('./content/subfolder/text.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err); return;}
            const second=result
            console.log("Completed reading second file-3");
            writeFile('./content/asynch.txt',`${first}  and ${second}`,(err,result)=>{
                if(err)
                {
                    console.log(err); return;
                }
                console.log("Completed writing -4")
                
            })
    })
});
console.log("Done Buddy");


