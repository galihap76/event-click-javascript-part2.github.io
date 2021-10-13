//buat variabel
let btn_warna = document.getElementById('warna');

//ketika tombol di klik
btn_warna.addEventListener('click', function(){
    
    //buat transisi ketika warna berubah
document.body.style.transition='1s';
    
    //buat variabel
const r=Math.round(Math.random()* 255 + 1);
const g=Math.round(Math.random()* 255 + 1);
const b=Math.round(Math.random()* 255 + 1);
    
    //ketika sudah di klik ganti warna background website
document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
});

  