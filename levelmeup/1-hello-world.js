function helloWorld (x,y) {
    var string = 'ALL YOUR ' + x + ' ARE BELONG TO ' + y;
    console.log(string);
}
helloWorld(process.argv[2], process.argv[3])
