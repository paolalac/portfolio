let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.image');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');
        
        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
    })
}



<ul>
<li class="list active" data-filter="all">All</li>
<li class="list" data-filter="mobile">North America</li>
<li class="list" data-filter="car">Latin America</li>
<li class="list" data-filter="bike">Europe</li>

</ul>
