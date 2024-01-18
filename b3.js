let str = "Vy buu";
console.log(lenght(str));
function lenght(string) {
    let length = 0;
    for (let i in string){
        length++;
    }
    return length;
}