function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction(){
    return function namedFunction() {
        console.log("Here is a named function");
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log("Here is an anonymous function");
}
