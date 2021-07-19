function display(d)
{
    let added = d;

    var cart = document.getElementById('cartDisplay');

    cart.innerHTML = null;

    added.forEach(function (el) {
        let div = document.createElement('div');

        let p_name = document.createElement('p');
        p_name.innerHTML = el.name;

        let p_price = document.createElement('p');
        p_price.innerHTML = el.price;

        let img = document.createElement('img');
        img.src = el.picture;

        div.append(img, p_name, p_price)

        cart.append(div);
    })
}
display(JSON.parse(localStorage.getItem('added')))

function totalPrice()
{
    array = JSON.parse(localStorage.getItem('added'))

    var sum = 0;

    for (var i = 0; i < array.length; i++)
    {
        sum = sum + Number(array[i].price)
    }
    document.getElementById('totalPrice').textContent = sum;
}
totalPrice();

function applyPromo()
{
    let sum = Number(document.getElementById('totalPrice').textContent);

    let promo = document.getElementById('promocode').value;

    if (promo == 'masai30')
    {
        document.getElementById('totalPrice').textContent = sum - ((sum * 30) / 100);
        }
}

function checkOut()
{
    window.location.href = "address.html";
}
