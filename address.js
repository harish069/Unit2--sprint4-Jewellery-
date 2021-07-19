var data_div = document.getElementById('address')

function addAddress()
{
    let form = document.getElementById('myForm')
    let name = form.name.value;
    let address = form.address.value;
    let city = form.city.value;
    let state = form.state.value;

    let address =
    {
        name,
        address,
        city,
        state
    }

    let arr;

    arr = localStorage.getItem('address')

    if (arr == null)
    {
        arr = [];
    }
    else
    {
        arr = JSON.parse(localStorage.getItem('address'))
    }
    arr.push(address);

    localStorage.setItem('address', JSON.stringify(arr))
}

function payment()
{
    window.location.href = "payment.html";
}