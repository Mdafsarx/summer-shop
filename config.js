const cards=getClass('card');
const Cards=Array.from(cards);

let total=0;


Cards.forEach(card => {
    
card.addEventListener('click',(e)=>{

// title
const title=e.target.children[1].innerText;
const p=document.createElement('p')
p.innerText=title
getId('container').appendChild(p)
// price
    const price=e.target.children[2].innerText;
    const Price=parseInt(price.split(' ')[0]);
    total=total+Price;
setText('totalPrice',total);



})



});

function Apply(){ 

 const value =getId('couponInput').value;
 const Value=value.split(' ').join('').toUpperCase();
if(Value!=='SELL200'){
    return alert('Invalid Input')
}
if(total<200){
    return alert('earn more')
}
// discount 
const Discount=total * 0.2;
    setText('Discount',Discount.toFixed(2))
const discountTotal=total-Discount;
setText('DiscountTotal',parseInt(discountTotal))
 

}
