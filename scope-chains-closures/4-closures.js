function foo(){
    quux = true;
    var bar;
    function zip(){
        var quux = false;
        bar = true;
    };
    return zip;
}
