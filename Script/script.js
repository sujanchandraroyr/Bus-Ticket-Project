const allBtn = document.querySelectorAll('#buton');

let count = 0;

for(const btns of allBtn){
    btns.addEventListener('click', function(event) {

        console.log(event.target.parentNode.childNodes)

        const setName = event.target.parentNode.childNodes[3].innerText;
        console.log(setName);
       count = count + 1;
       const setForti = document.getElementById('setforti').innerText;
       const setFortiConvertnmbr = parseInt(setForti);
       console.log(typeof setFortiConvertnmbr);

      
       if(count > 4){
        alert('you cannnot buy any more seats');
        return;
       }
       
       btns.classList.add('bg-green-400');
       document.getElementById('setforti').innerText = setFortiConvertnmbr - 1;
        document.getElementById('set').innerText = count;

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

        // ------------

        // liElement()

        const totalPrice = document.getElementById('total-rice').innerText;
        const totalPriceConvert = parseInt(totalPrice);
        document.getElementById('total-rice').innerText = totalPriceConvert + 550;

        const grandPrice = document.getElementById('grand-total').innerText;
        const grandPriceConvert = parseInt(totalPrice);
        document.getElementById('grand-total').innerText = grandPriceConvert + 550;
    })

    
};

function liElement() {

    const ul = document.getElementById('li-container');
    

    const li1 = document.createElement('li');
    li1.appendChild(p1);
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');

    const p1 = document.createElement('p');
    p1.innerText = 'c2';
    const p2 = document.createElement('p');
    p2.innerText = 'Emergency';
    const p3 = document.createElement('p');
    p3.innerText = '550';

    ul.appendChild(li1);
}


// function seatsCount(id, value){
//     const sets = document.getElementById(id).innerText;
//     const convertSets = parseInt(sets);

// }