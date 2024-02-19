const allBtn = document.querySelectorAll('#buton');

let count = 0;

for(const btns of allBtn){
    btns.addEventListener('click', function(event) {

        const setName = event.target.parentNode.childNodes[3].innerText;
        
       count = count + 1;
       const setForti = document.getElementById('setforti').innerText;
       const setFortiConvertnmbr = parseInt(setForti);
       console.log(typeof setFortiConvertnmbr);

      if(count === 4 ){

        document.getElementById('coupon-field').classList.remove('hidden');
      }
       if(count > 4){
        document.getElementById('apply-btn').classList.remove('hidden')
        alert('you cannnot buy any more seats');
        return;
       }
       
       btns.classList.add('bg-green-400');
       document.getElementById('setforti').innerText = setFortiConvertnmbr - 1;
        document.getElementById('set').innerText = count;
        event.target.setAttribute("disabled", "true");
        event.target.style.backgroundColor = 'green';
        // ------------

        const ul = document.getElementById('li-container');
        const li1 = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = setName;
        const p2 = document.createElement('p');
        p2.innerText = 'Emergency';
        const p3 = document.createElement('p');
        p3.innerText = '550';

        li1.appendChild(p1);
        li1.appendChild(p2);
        li1.appendChild(p3);
        ul.appendChild(li1);

        const totalPrice = document.getElementById('total-rice').innerText;
        const totalPriceConvert = parseInt(totalPrice);
        document.getElementById('total-rice').innerText = totalPriceConvert + 550;

        const grandPrice = document.getElementById('grand-total').innerText;
        const grandPriceConvert = parseInt(grandPrice);
        document.getElementById('grand-total').innerText = grandPriceConvert + 550;
    })

    
};

function apply(event) {
    document.getElementById('coupon-field').classList.add('hidden')
    const inputValue = document.getElementById('inpt-field').value;
    const grndtotal = document.getElementById('grand-total').innerText;
    const convertGrandTotal = parseInt(grndtotal);
    
    if(inputValue === 'NEW15'){
        const value = convertGrandTotal * 15 / 100;
        const comisionp = convertGrandTotal - value;
        document.getElementById('grand-total').innerText = comisionp;

        const discountUl = document.getElementById('discount-ul');
        const li = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = 'Total Discount';
        const p2 = document.createElement('p');
        p2.innerText = value;

        li.appendChild(p1);
        li.appendChild(p2);
        discountUl.appendChild(li);

    }
    else if(inputValue === 'Couple 20'){
        const value = convertGrandTotal * 20 / 100;
        const comisionp = convertGrandTotal - value;
        document.getElementById('grand-total').innerText = comisionp;

        const discountUl = document.getElementById('discount-ul');
        const li = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = 'Total Discount';
        const p2 = document.createElement('p');
        p2.innerText = value;

        li.appendChild(p1);
        li.appendChild(p2);
        discountUl.appendChild(li);

    }
    else{
        document.getElementById('grand-total').innerText;
    }
}