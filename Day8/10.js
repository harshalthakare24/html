let arrowfun = (p) => {
    console.log("Arrow Function :- "+p);
};

let overLoadedArrowFunction =(p1,p2) => {
    console.log("Overloaded Arrow Function :- "+p1+ " , " +p2);
};

let arrowfunwithDefault = (p=0) => {
    console.log("Arrow Function with Default Value :- "+p)
};

arrowfun(100);
overLoadedArrowFunction(100,200);
arrowfunwithDefault();
arrowfunwithDefault(500);
