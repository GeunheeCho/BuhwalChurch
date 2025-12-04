const len = document.querySelector('.list').childElementCount;
const tab_button = document.querySelectorAll('.tab-button');
const tab_content = document.querySelectorAll('.tab-content');
// for (let j = 0; j < len; j++) {
//     tab_button[j].addEventListener('click',()=>{
//     open_tab(j);
// })
// }
document.querySelector('.tab-button').dataset.id
document.querySelector('.list').addEventListener('click',(e)=>{
   //지금 누른게 버튼 0 이면 open_tab(0)
    console.log(e.target.dataset.id);
    open_tab(e.target.dataset.id);
})


function open_tab(j){
    for (let i = 0; i < len; i++) {
    tab_button[i].classList.remove('orange');
    tab_content[i].classList.remove('show'); 
}
    tab_button[j].classList.add('orange');
    tab_content[j].classList.add('show');

}

var car = {name:'소나타', price:[50000, 3000, 4000]}
document.querySelector('.name').innerHTML = car.name;
document.querySelector('.price').innerHTML = car.price[0];


var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

for (let i = 0; i < products.length; i++) {
    document.querySelectorAll('.card-body h5')[i].innerHTML=products[i].title; 
    document.querySelectorAll('.card-body p')[i].innerHTML=`가격 : ${products[i].price}`
    
}
var pants_size =[28,30,32,34,36,38,40];
const form_select = document.querySelectorAll('.form-select');
let shirts_html = '<option>95</option><option>100</option>';
form_select[0].addEventListener('change',(e)=>{
    if(e.currentTarget.value=='셔츠'){
        form_select[1].classList.remove('hide');
        form_select[1].innerHTML = shirts_html;

    }else if(e.currentTarget.value=='바지'){
        form_select[1].classList.remove('hide');
        pants_size.forEach((size)=>{        
            const html_size =`<option>${size}</option>`; 
            form_select[1].insertAdjacentHTML('beforeend',html_size);

        })
    }else{
       form_select[1].classList.add('hide');
    }
    
})

function average(a,b){
    let avg=0;
    for(let i=0; i<=a.length-1; i++){        
        avg=avg+a[i];
    }
    avg=avg/a.length;
    if(avg<=b){
        console.log(`평균보다 ${b-avg}점이 올랐네요`)
    }else{
        console.log(`평균보다 ${avg-b}점이 떨어졌네요 재수추천`)
    }

}
fetch('https://codingapple1.github.io/price.json')
  .then(res => res.json())
  .then(function(data){
    console.log(data.price)
  })
  .catch(function(error){
    console.log('실패함')
  });



