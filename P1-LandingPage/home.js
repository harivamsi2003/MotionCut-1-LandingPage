const slide=document.querySelectorAll(".slider");

var count=0;
slide.forEach(
    (slider,index)=>{
        slider.style.left=`${index*100}%`
    }
)

const goPrev=()=>{
    count--;
    if(count<0)
    {
        count=3;
    }
    slideImage();
}

const goNext=()=>{
    count++;
    count=count%4;
    slideImage();
}

const slideImage=()=>{
    slide.forEach(
        (slider)=>{
            slider.style.transform=`translateX(-${count*100}%)`
        }
    )
}

document.addEventListener("DOMContentLoaded",function()
{
    const currencySelect=document.querySelector(".selection");
    const prices=document.querySelectorAll(".price");

    const exchangeRates={
        USD : 1,
        INR : 83,
        EUR : 0.85,
        JPY : 110
    };

    function updatePrices(){
        const selectedCurrency=currencySelect.value;
        const rate=exchangeRates[selectedCurrency];

        prices.forEach(price=>{
            const basePrice=price.getAttribute("data-usd");
            const convertedPrice=(basePrice*rate).toFixed(2);
            let currencySymbol="";
            switch(selectedCurrency){
                case "USD":
                    currencySymbol="$";
                    break;
                case "INR":
                    currencySymbol="₹";
                    break;
                case "EUR":
                    currencySymbol="€";
                    break;
                case "JPY":
                    currencySymbol="¥";
                    break;
            }
            price.textContent=`Price: ${currencySymbol}${convertedPrice}`;
        });
    }
    currencySelect.addEventListener("change",updatePrices);
    updatePrices();
});

function toggleMenu() {
    const tempnav = document.querySelector('.tempnav');
    tempnav.classList.toggle('show');
}
