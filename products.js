const jewellery = [
    {
        name: 'Ear Rings',
        price: '5000',
        picture: 'https://staticimg.titan.co.in/Tanishq/Catalog/502997SUPABA32_1.jpg?impolicy=pqmed&imwidth=640'
    },

    {
        name: 'Necklace',
        price: '15000',
        picture: 'https://images-na.ssl-images-amazon.com/images/I/61jqXtgPxnL._UX500_.jpg'
    },
     
    {
        name: 'Long Chain',
        price: '50000',
        picture: 'https://www.chidambaramgoldcovering.com/image/cache/catalog/ChidambaramGoldCovering/Harams/hr1054-new-arrivals-traditional-kerala-haram-for-marriage-receptions-jewelry-collections-1100-1-1a-850x1000.jpg'
    },
      
    {
        name: 'Ring',
        price: '3000',
        picture: 'https://kinclimg8.bluestone.com/f_jpg,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIDG0360R29_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-37094.png'
    },
       
    {
        name: 'Bangles',
        price: '20000',
        picture: 'https://staticimg.titan.co.in/Tanishq/Catalog/512218VLY2A00_1.jpg?impolicy=pqmed&imwidth=640'
    },
        
    {
        name: 'Anklets',
        price: '2000',
       picture: 'https://www.kollamsupremeonline.com/14565-thickbox_default/micro-gold-plated-link-chain-anklets-payal-for-girls-and-women.jpg'
    }

];

if (localStorage.getItem('jewellery') == null)
{
    localStorage.setItem('jewellery', JSON.stringify(jewellery));
}
    
function showStore(d)
{
    let store = d;

    let store_div = document.getElementById("products");
    
  store_div.innerHTML = null;

    store.forEach(function (el) {
        let div = document.createElement('div');

        let p_name = document.createElement('p');
        p_name.innerText = el.name;

        let p_price = document.createElement('p');
        p_price.innerText = el.price;

        let img = document.createElement('img');
        img.src = el.picture;

        let btn = document.createElement('button');
        btn.textContent = "Add to Cart";

        btn.addEventListener("click", function () {
            addtocart(el);
        })

        btn.style.display = "block";

        div.append(img, p_name, p_price, btn);

        store_div.append(div);

    })

}

showStore(JSON.parse(localStorage.getItem('jewellery')));

function sortLH()
{
    let jewellery = JSON.parse(localStorage.getItem('jewellery'))

    jewellery = jewellery.sort(function (a, b) {
        return (a.price - b.price);
    })
     console.log('Harish');
    showStore(jewellery);
}

function sortHL()
{
    let jewellery = JSON.parse(localStorage.getItem('jewellery'))

    jewellery = jewellery.sort(function (a, b) {
        return (b.price - a.price);
    })
    console.log('Harish');
    showStore(jewellery);
}

function addtocart(obj)
{
    let added = JSON.parse(localStorage.getItem('added'))

    let arr;

    arr = localStorage.getItem('added');

    if(arr == null)
    {
        arr = []
    }
    else
    {
        arr = JSON.parse(localStorage.getItem('added'));
    }
    arr.push(obj);

    localStorage.setItem('added', JSON.stringify(arr));
}

function showCart()
{
    window.location.href = "cart.html";
}

