let anonymousFun = function(p) {
    console.log("Anonymous Function : "+p);
};

const overloadedAnonymousFun = function(p1,p2) {
    console.log("Overloaded Anonymous Function : "+p1+" , "+p2);
};
const anonymousFunwithDefault = function(p=0){
    console.log("Anonymous Function With Default Value : "+p);
};

anonymousFun(10);
overloadedAnonymousFun(10,20);
anonymousFunwithDefault();
anonymousFunwithDefault(50);