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

  
const card_group = document.querySelector('.row');
addCard(products);


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

fetch('https://codingapple1.github.io/price.json')
  .then(res => res.json())
  .then(data=>{
    // console.log(data)
  })
  .catch(function(error){
    console.log('실패함')
  });

  fetch('https://codingapple1.github.io/hello.txt')
  .then(res=>res.text())
  .then(function(data){
    // console.log(data);
  })
  .catch(function(error){
    console.log('실패함')
  });

function addCard(product){
    product.forEach((product)=>{
    const product_card = `<div class="col-sm-4">
    <img src="https://placehold.co/600" class="w-100">
    <div class="card-body">
      <h5>${product.title}</h5>
      <p>${product.price}</p>
      <button class="btn btn-danger buy">주문하기</button>
    </div>
  </div>`;
    card_group.insertAdjacentHTML("beforeend",product_card);    
})
}
var click_num=0;
document.querySelector('.moreview').addEventListener('click', e=>{ 
if(click_num==0){
fetch('https://codingapple1.github.io/js/more1.json')
  .then(res => res.json())
  .then(product=>{
    addCard(product);
    click_num+=1;
  })
  .catch(function(error){
    console.log('실패함')
  });
}else if(click_num==1){
fetch('https://codingapple1.github.io/js/more2.json')
  .then(res => res.json())
  .then(product=>{
    addCard(product);
    click_num+=1; 
})
  .catch(function(error){
    console.log('실패함')
  });
}else{
    e.preventDefault;
    alert("더 이상 상품이 존재하지 않습니다.")
}
  
})


document.querySelector('.sort').addEventListener('click',e=>{
    products.sort((a, b)=>{
        return a.price-b.price
    });
    document.querySelector('.row').innerHTML='';    
    addCard(products);

})

document.querySelector('.sort-abc').addEventListener('click',e=>{
    products.sort((a, b)=>{
      if(a.title<b.title){
        return 1;
      }else{
        return -1;
      }
        
    });
    console.log(products);
    document.querySelector('.row').innerHTML='';    
    addCard(products);

})

document.querySelector('.filter').addEventListener('click',e=>{
  var price = document.querySelector('.filter-price').value;
    var new_filter = products.filter((a)=>{
      return a.price<=price; 
        
    });
    document.querySelector('.row').innerHTML='';    
    addCard(new_filter);

})
var buyButton = document.querySelectorAll('.buy');
buyButton.forEach((btn)=>{
  btn.addEventListener('click',()=>{
  const title = btn.previousElementSibling.previousElementSibling.textContent
  let cart = JSON.parse(localStorage.getItem('cart'));
  if(cart==null){
    cart = [title];
    cartJson = JSON.stringify(cart);
    localStorage.setItem('cart',cartJson);
  }else{
      if(cart.includes(title)){        
        alert("이미 담겨 있습니다.")
      }else{
        cart.push(title);     
      }    


      cartJson = JSON.stringify(cart);

    localStorage.setItem('cart',cartJson);
  }  
})

})
document.querySelector('.remove-item').addEventListener('click',()=>{
  localStorage.removeItem('cart');
})





