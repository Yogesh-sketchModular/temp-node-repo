//Secret is a considered to be local variable because we are not exporting it.
//It is local within these module
const secret="I am secret";
//Since john and peter is exported outside component, we can say they are global
const john= 'Johnny';
const peter='peter';




module.exports={john,peter};



