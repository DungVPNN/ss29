let arr = ["Thieu", "Vy", "Asusara", "Quynh"];
function lenght(arr){
    let a = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(a.length < arr[i].length) {
            a = arr[i];
        }
    }
    return ls;
}
console.log(lenght(arr));