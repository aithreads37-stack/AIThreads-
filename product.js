/*========================================
   AITHREADS - PRODUCT.JS
   PART 3A + 3C + 3D + 3E
   + 4A + 4B + 4C + 5F
=========================================*/

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       GET PRODUCT FROM URL
    ====================================== */

    const urlParams =
        new URLSearchParams(
            window.location.search
        );

    const productName =
        urlParams.get("product");


    /* =====================================
       GET PRODUCT FROM CENTRAL DATABASE
       PART 5F
    ====================================== */

    let product = null;


    if (
        typeof AIThreadsProducts !==
        "undefined"
    ) {

        product =
            AIThreadsProducts.find(
                function (item) {

                    return item.name ===
                        productName;

                }
            );

    }


    /* =====================================
       PRODUCT ELEMENTS
    ====================================== */

    const productNameElement =
        document.getElementById(
            "product-name"
        );

    const productCategoryElement =
        document.getElementById(
            "product-category"
        );

    const productDescriptionElement =
        document.getElementById(
            "product-description"
        );

    const productPriceElement =
        document.getElementById(
            "product-price"
        );

    const productImageElement =
        document.getElementById(
            "product-image"
        );


    /* =====================================
       LOAD PRODUCT
    ====================================== */

    if (product) {


        if (productNameElement) {

            productNameElement.textContent =
                product.name;

        }


        if (productCategoryElement) {

            productCategoryElement.textContent =
                product.category;

        }


        if (productDescriptionElement) {

            productDescriptionElement.textContent =
                product.description;

        }


        if (productPriceElement) {

            productPriceElement.textContent =
                "₹" +
                product.price.toLocaleString(
                    "en-IN"
                );

        }


        if (productImageElement) {

            productImageElement.src =
                product.image;

            productImageElement.alt =
                product.name +
                " T-shirt";

        }

    }


    /* =====================================
       SIZE SELECTION - PART 3C
    ====================================== */

    const sizeButtons =
        document.querySelectorAll(
            ".size-button"
        );

    let selectedSize = "";


    sizeButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {


                    sizeButtons.forEach(
                        function (btn) {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    selectedSize =
                        button.dataset.size;

                }
            );

        }
    );


    /* =====================================
       QUANTITY - PART 3C
    ====================================== */

    const quantityElement =
        document.getElementById(
            "quantity"
        );

    const minusButton =
        document.getElementById(
            "quantity-minus"
        );

    const plusButton =
        document.getElementById(
            "quantity-plus"
        );


    let quantity = 1;


    if (quantityElement) {

        quantityElement.textContent =
            quantity;

    }


    /* =====================================
       ORDER SUMMARY ELEMENTS
    ====================================== */

    const orderButton =
        document.getElementById(
            "order-button"
        );

    const orderSummary =
        document.getElementById(
            "order-summary"
        );

    const summaryProduct =
        document.getElementById(
            "summary-product"
        );

    const summarySize =
        document.getElementById(
            "summary-size"
        );

    const summaryQuantity =
        document.getElementById(
            "summary-quantity"
        );

    const summaryPrice =
        document.getElementById(
            "summary-price"
        );

    const summaryTotal =
        document.getElementById(
            "summary-total"
        );

    const confirmOrder =
        document.getElementById(
            "confirm-order"
        );


    /* =====================================
       PRICE CALCULATION - PART 4C
    ====================================== */

    function updateTotal() {


        if (!product) {
            return;
        }


        const total =
            product.price *
            quantity;


        if (summaryPrice) {

            summaryPrice.textContent =
                "₹" +
                product.price.toLocaleString(
                    "en-IN"
                );

        }


        if (summaryTotal) {

            summaryTotal.textContent =
                "₹" +
                total.toLocaleString(
                    "en-IN"
                );

        }

    }


    /* =====================================
       MINUS QUANTITY
    ====================================== */

    if (minusButton) {

        minusButton.addEventListener(
            "click",
            function () {


                if (quantity > 1) {

                    quantity--;


                    if (quantityElement) {

                        quantityElement.textContent =
                            quantity;

                    }


                    updateTotal();

                }

            }
        );

    }


    /* =====================================
       PLUS QUANTITY
    ====================================== */

    if (plusButton) {

        plusButton.addEventListener(
            "click",
            function () {


                if (quantity < 10) {

                    quantity++;


                    if (quantityElement) {

                        quantityElement.textContent =
                            quantity;

                    }


                    updateTotal();

                }

            }
        );

    }


    /* =====================================
       ORDER NOW - PART 3D
    ====================================== */

    if (orderButton) {

        orderButton.addEventListener(
            "click",
            function () {


                if (!product) {

                    alert(
                        "Product not found."
                    );

                    return;

                }


                if (!selectedSize) {

                    alert(
                        "Please select a T-shirt size first."
                    );

                    return;

                }


                if (summaryProduct) {

                    summaryProduct.textContent =
                        product.name;

                }


                if (summarySize) {

                    summarySize.textContent =
                        selectedSize;

                }


                if (summaryQuantity) {

                    summaryQuantity.textContent =
                        quantity;

                }


                updateTotal();


                if (orderSummary) {

                    orderSummary.style.display =
                        "block";


                    orderSummary.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }
        );

    }


    /* =====================================
       CUSTOMER FORM - PART 4A
    ====================================== */

    const customerForm =
        document.getElementById(
            "customer-form"
        );

    const customerName =
        document.getElementById(
            "customer-name"
        );

    const customerPhone =
        document.getElementById(
            "customer-phone"
        );

    const customerAddress =
        document.getElementById(
            "customer-address"
        );

    const customerCity =
        document.getElementById(
            "customer-city"
        );

    const customerPincode =
        document.getElementById(
            "customer-pincode"
        );

    const saveCustomerDetails =
        document.getElementById(
            "save-customer-details"
        );


    /* =====================================
       ORDER SUMMARY → CUSTOMER FORM
    ====================================== */

    if (confirmOrder) {

        confirmOrder.addEventListener(
            "click",
            function () {


                if (!product) {

                    alert(
                        "Product not found."
                    );

                    return;

                }


                if (!selectedSize) {

                    alert(
                        "Please select a T-shirt size first."
                    );

                    return;

                }


                /* UPDATE PRICE AGAIN */

                updateTotal();


                if (customerForm) {

                    customerForm.style.display =
                        "block";


                    customerForm.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }
        );

    }


    /* =====================================
       PAYMENT SECTION - PART 3E
    ====================================== */

    const paymentSection =
        document.getElementById(
            "payment-section"
        );

    const copyUpiButton =
        document.getElementById(
            "copy-upi"
        );

    const upiIdElement =
        document.getElementById(
            "upi-id"
        );

    const paymentDoneButton =
        document.getElementById(
            "payment-done"
        );


    /* =====================================
       CUSTOMER → PAYMENT - PART 4A
    ====================================== */

    if (saveCustomerDetails) {

        saveCustomerDetails.addEventListener(
            "click",
            function () {


                const name =
                    customerName.value.trim();

                const phone =
                    customerPhone.value.trim();

                const address =
                    customerAddress.value.trim();

                const city =
                    customerCity.value.trim();

                const pincode =
                    customerPincode.value.trim();


                /* VALIDATION */

                if (!name) {

                    alert(
                        "Please enter your full name."
                    );

                    customerName.focus();

                    return;

                }


                if (!phone) {

                    alert(
                        "Please enter your WhatsApp number."
                    );

                    customerPhone.focus();

                    return;

                }


                if (!/^\d{10}$/.test(phone)) {

                    alert(
                        "Please enter a valid 10-digit WhatsApp number."
                    );

                    customerPhone.focus();

                    return;

                }


                if (!address) {

                    alert(
                        "Please enter your delivery address."
                    );

                    customerAddress.focus();

                    return;

                }


                if (!city) {

                    alert(
                        "Please enter your city."
                    );

                    customerCity.focus();

                    return;

                }


                if (!/^\d{6}$/.test(pincode)) {

                    alert(
                        "Please enter a valid 6-digit pincode."
                    );

                    customerPincode.focus();

                    return;

                }


                /* SAVE CUSTOMER DATA */

                const customerDetails = {

                    name: name,
                    phone: phone,
                    address: address,
                    city: city,
                    pincode: pincode

                };


                localStorage.setItem(
                    "aiThreadsCustomer",
                    JSON.stringify(
                        customerDetails
                    )
                );


                /* SHOW PAYMENT */

                if (paymentSection) {

                    paymentSection.style.display =
                        "block";


                    paymentSection.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }
        );

    }


    /* =====================================
       COPY UPI - PART 3E
    ====================================== */

    if (copyUpiButton) {

        copyUpiButton.addEventListener(
            "click",
            async function () {


                if (!upiIdElement) {
                    return;
                }


                const upiID =
                    upiIdElement.textContent.trim();


                try {

                    await navigator.clipboard.writeText(
                        upiID
                    );


                    copyUpiButton.textContent =
                        "Copied ✓";


                    setTimeout(
                        function () {

                            copyUpiButton.textContent =
                                "Copy UPI ID";

                        },
                        2000
                    );


                } catch (error) {

                    alert(
                        "Please copy the UPI ID manually: " +
                        upiID
                    );

                }

            }
        );

    }


    /* =====================================
       PAYMENT → WHATSAPP
       PART 4B
    ====================================== */

    if (paymentDoneButton) {

        paymentDoneButton.addEventListener(
            "click",
            function () {


                const savedCustomer =
                    localStorage.getItem(
                        "aiThreadsCustomer"
                    );


                if (!savedCustomer) {

                    alert(
                        "Please enter your delivery details first."
                    );

                    return;

                }


                if (!product) {

                    alert(
                        "Product information not found."
                    );

                    return;

                }


                const customer =
                    JSON.parse(
                        savedCustomer
                    );


                /* TOTAL PRICE */

                const total =
                    product.price *
                    quantity;


                /* YOUR WHATSAPP NUMBER */

                const whatsappNumber =
                    "917972644495";


                /* =================================
                   WHATSAPP MESSAGE
                ================================== */

                const message =

                    "Hello AIThreads! 👋\n\n" +

                    "I want to confirm my order.\n\n" +

                    "----- ORDER DETAILS -----\n\n" +

                    "Product: " +
                    product.name +
                    "\n" +

                    "Size: " +
                    selectedSize +
                    "\n" +

                    "Quantity: " +
                    quantity +
                    "\n" +

                    "Price: ₹" +
                    product.price.toLocaleString(
                        "en-IN"
                    ) +
                    "\n" +

                    "Total: ₹" +
                    total.toLocaleString(
                        "en-IN"
                    ) +
                    "\n\n" +

                    "----- CUSTOMER DETAILS -----\n\n" +

                    "Name: " +
                    customer.name +
                    "\n" +

                    "WhatsApp: " +
                    customer.phone +
                    "\n" +

                    "Address: " +
                    customer.address +
                    "\n" +

                    "City: " +
                    customer.city +
                    "\n" +

                    "Pincode: " +
                    customer.pincode +
                    "\n\n" +

                    "Payment completed.\n\n" +

                    "Please confirm my order.\n\n" +

                    "Thank you!";


                /* =================================
                   WHATSAPP URL
                ================================== */

                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(
                        message
                    );


                window.location.href =
                    whatsappURL;

            }
        );

    }


    /* =====================================
       INITIAL PRICE
    ====================================== */

    updateTotal();


    /* =====================================
       CONSOLE MESSAGE
    ====================================== */

    console.log(
        "AIThreads Product System 3A-5F loaded successfully."
    );

});                                    