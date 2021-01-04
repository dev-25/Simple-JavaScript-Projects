
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B","C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.getElementById('color');

btn.addEventListener('click', changing = () =>{
    let hexcolor = '#';
    for(let i = 0; i<6;  i++){
        hexcolor += hex[getrandomno()];
    }

    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
});

function getrandomno(){
    return Math.floor(Math.random() * hex.length);
}
