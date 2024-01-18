let str = prompt("Nhập 1 chuỗi ");
let t = prompt("Nhập 1 kí tự");
function find(str, a){
    let count = 0;
    for (let i=0; i<str.length; i++){
        if (str[i] == a) count++;
    }
    return count;
}
if (find(str, a) >0 ) {
    console.log(`Kí tự "${a}" xuất hiện ${find(str, a)}`);
} else {
    console.log(`Kí tự "${a}" không có trong chuỗi`);
}