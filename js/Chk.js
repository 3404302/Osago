function Chk() {
    
    var tb = +document.getElementById('tb').value;
    
    if (+document.getElementById('ytype').checked) {
         document.getElementById('ko').checked = true;
    } 
    
    if (+document.getElementById('ko').checked) {
        document.getElementById('birth').disabled = 1;
        document.getElementById('drive').disabled = 1;
    } else {
        document.getElementById('birth').disabled = 0;
        document.getElementById('drive').disabled = 0;
    }
    
    if (tb == 0.5 || tb == 3 || tb == 4 || tb == 5 || tb == 6 || tb == 7 || tb == 8 || tb == 9 || tb == 10) { 
        document.getElementById('km').disabled = 1;
    } else {
        document.getElementById('km').disabled = 0;
    }
}