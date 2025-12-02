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

products.forEach((product)=>{
    console.log(product.price);
})
for (let i = 0; i < products.length; i++) {
    document.querySelectorAll('.card-body h5')[i].innerHTML=products[i].title; 
    document.querySelectorAll('.card-body p')[i].innerHTML=`가격 : ${products[i].price}`
    
}
