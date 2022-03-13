// entry point of my command line
let helpFun=require("./command/help");

let inputArr=process.argv.slic(2);
let command=inputArr[0];
let path=inputArr[0];

switch(command)
{
    case "tree":
        // call tree function
        console.log("tree function called succesfully");
        break;
    case "organize":
        // call organize function
        console.log("organize function called succesfully");
        break;
    case "help":
        //call help function
        helpFun.help();
        break;
    default:
        console.log("command not recognized:");
        break;    

}
