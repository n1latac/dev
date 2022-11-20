function sum(...args){
    let a=0;
    for(let i=0;i<=args.length;i++){
        a+=args[i];
    }
    console.log(a);
}
exports.sum=sum;