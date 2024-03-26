// Smart Basket Container
const basketContainer = document.querySelector(".basket-cntr-main");
(() => {
    populateBasketContainer();
})();

function populateBasketContainer() {
    let basketSubDiv = "";
    basketContainer.innerHTML = " ";
    for (let i = 0; i < 8; i++) {
        basketSubDiv += loadBasketItem(i);
    }
    basketContainer.innerHTML += basketSubDiv;
}

function loadBasketItem(i) {
    let name = [
        "Capsicum Green (Loose)",
        "Carrot Orange (Loose)",
        "Cauliflower",
        "Corainder leaves",
        "Cucumber",
        "Ladies Finger (Loose)",
        "Tomato (Loose)",
        "Beans - Haricot (Loose)",
    ];
    let quantity = [
        "1Kg",
        "1Kg",
        "1pc - (approx. 400 to 600g)",
        "1Kg",
        "10Kg",
        "5Kg",
        "1Kg",
        "1Kg",
    ];
    let discount = [51, 39, 42, 55, 41, 47, 27, 40];
    let price = [50, 66, 25.5, 45.5, 49, 89.25, 25, 58];
    const basketItemHtml = `<div class="basket-item-container"><div class="basket-item">
    <div class="basket-item-image-container">
        <img
            src="./images/sb${i + 1}.jpg"
            alt="basket Item Image"
            class="basket-item-image"
        />
        <p class="basket-item-discount">${discount[i]}% OFF</p>
        <div class="basket-item-image-type-cntr">
            <div class="basket-item-image-type"></div>
        </div>
    </div>
    <div class="basket-item-detail-container">
        <p class="basket-item-detail-brand">Fresho</p>
        <p class="basket-item-detail-name">${name[i]}</p>
        <select
            name="basket-item-quantity"
            id="basket-item-detail-quantity-select"
            class="basket-item-detail-quantity"
        >
            <option class="basket-item-quantity-select-option">${quantity[i]}
                <!-- <div class="basket-item-quantity-value-cntr">
            <p class="basket-item-quantity-value">250g</p>
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <div class="basket-item-quantity-detail">
                        <div class="basket-item-quantity-discount">${
                            discount[i]
                        }% OFF</div>
                        <p class="basket-item-quantity-price">${price[i]}</p>
                        <p class="basket-item-quantity-discount-price">${parseFloat(
                            (price[i] * 100) / (100 - discount[i])
                        ).toFixed(2)}</p>
                        <button class="basket-item-quantity-button">Add</button>
                        </div> -->
            </option>
        </select>
        <div class="basket-item-detail-price-cntr d-flex flex-row" style="align-items:center;">
        <p class="basket-item-quantity-price" style="padding:0.2rem;margin:0">&#8377;${
            price[i]
        }</p>
        <p class="basket-item-quantity-discount-price" style="margin:0">&#8377;${parseFloat(
            (price[i] * 100) / (100 - discount[i])
        ).toFixed(2)}</p>
        </div>
    </div>
    <div class="basket-item-offer-button">
        <i></i>
        <p>Get it for &#8377;${price[i] - 100 / 20}</p>
    </div>
    <br />
    <div class="basket-item-scroll-detail">
        <p>Fresho</p>
        <p>${name[i]}</p>
        <div class="basket-item-scroll-price-container d-flex align-items-center" >
        <p class="basket-item-quantity-price" style="padding:0.2rem;margin:0">&#8377;${
            price[i]
        }</p>
        <p class="basket-item-quantity-discount-price" style="margin:0">&#8377;${parseFloat(
            (price[i] * 100) / (100 - discount[i])
        ).toFixed(2)}</p>
        </div>
        <div class="basket-item-scroll-container">
            <div class="basket-item-scroll-function">
                <img
                    class="basket-item-scroll-container-img"
                    src="./images/getIt.png"
                    alt=""
                    style="width: 30px; height: 30px"
                />
                <button class="basket-item-scroll-container-back">X</button>
            </div>
            <div class="supersaverAnimation"><p>supersaver!</p></div>
            <div class="getItem">
                <p><b>Get it for &#8377;${price[i] - 100 / 20}</b></p>
                <p>
                    Buy items worth <b>&#8377;1500</b> to get this product at a
                    supersaver price for <b>&#8377;${price[i] - 100 / 20}</b>
                </p>
            </div>
        </div>
    </div>
    </div>
    <div class="item-count-button">
        <button class="wishlist">
            <i
                class="fa-regular fa-bookmark"
                style="color: #010409"
            ></i>
        </button>
        <div class="add-items-button-container">
            <button class="add-items">Add</button>
            <div class="count-container additional-button-container">
                <button class="remove-product">-</button>
                <p class="count-of-item">1</p>
                <button class="add-product">+</button>
            </div>
        </div>
    </div>
</div>
`;
    return basketItemHtml;
}

function moveElementsUp() {
  var contentContainer = document.getElementById('content3');
  const newPosition = contentContainer.style.transform.match(/\d/)[0]
  const height = contentContainer.offsetHeight/2
  console.log(newPosition)
  if(contentContainer.offsetTop == 0){
      contentContainer.style.transform = `translate(${height}px)`;
    }
    else {
      contentContainer.style.transform = "translate(0)";
  }

}