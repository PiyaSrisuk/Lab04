let color = true;

function swap() {
    if (color) {
        document.getElementById('1').classList.remove('white');
        document.getElementById('1').classList.add('black');
        document.getElementById('2').classList.remove('black');
        document.getElementById('2').classList.add('white');
        document.getElementById('3').classList.remove('black');
        document.getElementById('3').classList.add('white');
        document.getElementById('4').classList.remove('white');
        document.getElementById('4').classList.add('black');
        color = false;
    }else {
        document.getElementById('1').classList.remove('black');
        document.getElementById('1').classList.add('white');
        document.getElementById('2').classList.remove('white');
        document.getElementById('2').classList.add('black');
        document.getElementById('3').classList.remove('whitek');
        document.getElementById('3').classList.add('black');
        document.getElementById('4').classList.remove('black');
        document.getElementById('4').classList.add('white');
        color = true;
    }
}