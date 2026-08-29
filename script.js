/* =========================================
   AITHREADS - PART 1C + 5C + 5F
   HOME PAGE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       NAVBAR SCROLL EFFECT
    ====================================== */

    const navbar =
        document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 50) {

                    navbar.style.boxShadow =
                        "0 5px 25px rgba(0,0,0,0.4)";

                } else {

                    navbar.style.boxShadow =
                        "none";

                }

            }
        );

    }


    /* =====================================
       HOME PRODUCT DATABASE CONNECTION
       PART 5F
    ====================================== */

    const productCards =
        document.querySelectorAll(
            ".product-card"
        );


    if (
        productCards.length &&
        typeof AIThreadsProducts !== "undefined"
    ) {

        productCards.forEach(
            function (card, index) {

                const product =
                    AIThreadsProducts[index];


                if (!product) {
                    return;
                }


                /* =========================
                   PRODUCT IMAGE
                ========================== */

                const image =
                    card.querySelector(
                        ".product-image img"
                    );

                if (image && product.image) {

                    image.src =
                        product.image;

                    image.alt =
                        product.name +
                        " AI T-shirt";

                }


                /* =========================
                   CATEGORY
                ========================== */

                const category =
                    card.querySelector(
                        ".product-category"
                    );

                if (category) {

                    category.textContent =
                        product.category;

                }


                /* =========================
                   PRODUCT NAME
                ========================== */

                const name =
                    card.querySelector("h3");

                if (name) {

                    name.textContent =
                        product.name;

                }


                /* =========================
                   DESCRIPTION
                ========================== */

                const description =
                    card.querySelector(
                        ".product-description"
                    );

                if (description) {

                    description.textContent =
                        product.description;

                }


                /* =========================
                   PRICE
                ========================== */

                const price =
                    card.querySelector(
                        ".product-bottom strong"
                    );

                if (price) {

                    price.textContent =
                        "₹" +
                        product.price.toLocaleString(
                            "en-IN"
                        );

                }


                /* =========================
                   ORDER BUTTON
                ========================== */

                const orderButton =
                    card.querySelector(
                        ".order-btn, .order-button"
                    );

                if (orderButton) {

                    orderButton.href =
                        "product.html?product=" +
                        encodeURIComponent(
                            product.name
                        );

                    orderButton.textContent =
                        "Order";

                }

            }
        );

    }


    /* =====================================
       PRODUCT CARD ANIMATION
    ====================================== */

    const cards =
        document.querySelectorAll(
            ".product-card, .feature-card, .review-card"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        cards.forEach(
            function (card) {

                card.style.opacity =
                    "0";

                card.style.transform =
                    "translateY(30px)";

                card.style.transition =
                    "opacity 0.7s ease, transform 0.7s ease";

                observer.observe(card);

            }
        );

    }


    /* =====================================
       SHOP BUTTON
    ====================================== */

    const shopButtons =
        document.querySelectorAll(
            'a[href="#products"]'
        );


    shopButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const productsSection =
                        document.querySelector(
                            "#products"
                        );


                    if (productsSection) {

                        productsSection.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        }
    );


    /* =====================================
       ORDER BUTTON MESSAGE
    ====================================== */

    const orderButtons =
        document.querySelectorAll(
            ".order-button, .order-btn"
        );


    orderButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    console.log(
                        "AIThreads product order button clicked."
                    );

                }
            );

        }
    );


    /* =====================================
       BUTTON CLICK EFFECT
    ====================================== */

    const buttons =
        document.querySelectorAll(
            ".button"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    button.style.transform =
                        "scale(0.97)";


                    setTimeout(
                        function () {

                            button.style.transform =
                                "";

                        },
                        150
                    );

                }
            );

        }
    );


    /* =====================================
       HERO TEXT ANIMATION
    ====================================== */

    const heroTitle =
        document.querySelector(
            ".hero h1"
        );


    if (heroTitle) {

        heroTitle.style.opacity =
            "0";

        heroTitle.style.transform =
            "translateY(30px)";

        heroTitle.style.transition =
            "opacity 1s ease, transform 1s ease";


        setTimeout(
            function () {

                heroTitle.style.opacity =
                    "1";

                heroTitle.style.transform =
                    "translateY(0)";

            },
            300
        );

    }


    /* =====================================
       HERO DESCRIPTION ANIMATION
    ====================================== */

    const heroDescription =
        document.querySelector(
            ".hero-description"
        );


    if (heroDescription) {

        heroDescription.style.opacity =
            "0";

        heroDescription.style.transform =
            "translateY(20px)";

        heroDescription.style.transition =
            "opacity 1s ease, transform 1s ease";


        setTimeout(
            function () {

                heroDescription.style.opacity =
                    "1";

                heroDescription.style.transform =
                    "translateY(0)";

            },
            600
        );

    }


    /* =====================================
       PRODUCT HOVER EFFECT
    ====================================== */

    const homeProductCards =
        document.querySelectorAll(
            ".product-card"
        );


    homeProductCards.forEach(
        function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    card.style.transform =
                        "translateY(-8px)";

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.style.transform =
                        "translateY(0)";

                }
            );

        }
    );


    /* =====================================
       CURRENT YEAR
    ====================================== */

    const copyright =
        document.querySelector(
            ".copyright p"
        );


    if (copyright) {

        const currentYear =
            new Date().getFullYear();


        copyright.textContent =
            "© " +
            currentYear +
            " AIThreads. All Rights Reserved.";

    }


    /* =====================================
       WEBSITE LOADED
    ====================================== */

    console.log(
        "AIThreads Part 5F loaded successfully."
    );

});

/* =========================================
   PART 6B - HOME PAGE AUTO PRODUCT LOADING
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const productGrid =
        document.getElementById(
            "home-product-grid"
        );

    if (
        !productGrid ||
        typeof AIThreadsProducts === "undefined"
    ) {
        return;
    }


    /* CLEAR OLD PRODUCTS */

    productGrid.innerHTML = "";


    /* CREATE PRODUCT CARDS */

    AIThreadsProducts.forEach(function (product) {


        const card =
            document.createElement("article");

        card.className =
            "product-card";


        /* =================================
           PRODUCT IMAGE
        ================================== */

        const imageBox =
            document.createElement("div");

        imageBox.className =
            "product-image";


        const image =
            document.createElement("img");

        image.src =
            product.image;

        image.alt =
            product.name +
            " AI T-shirt";


        /* PRODUCT TAG */

        if (product.tag) {

            const tag =
                document.createElement("span");

            tag.className =
                "product-tag";

            tag.textContent =
                product.tag;

            imageBox.appendChild(tag);

        }


        imageBox.appendChild(image);


        /* =================================
           PRODUCT INFO
        ================================== */

        const info =
            document.createElement("div");

        info.className =
            "product-info";


        /* CATEGORY */

        const category =
            document.createElement("p");

        category.className =
            "product-category";

        category.textContent =
            product.category;


        /* NAME */

        const name =
            document.createElement("h3");

        name.textContent =
            product.name;


        /* DESCRIPTION */

        const description =
            document.createElement("p");

        description.className =
            "product-description";

        description.textContent =
            product.description;


        /* =================================
           BOTTOM
        ================================== */

        const bottom =
            document.createElement("div");

        bottom.className =
            "product-bottom";


        /* PRICE */

        const price =
            document.createElement("strong");

        if (
            product.status ===
            "out-of-stock"
        ) {

            price.textContent =
                "Out of Stock";

        } else if (
            product.status ===
            "coming-soon"
        ) {

            price.textContent =
                "Coming Soon";

        } else {

            price.textContent =
                "₹" +
                product.price.toLocaleString(
                    "en-IN"
                );

        }


        /* =================================
           ORDER BUTTON
        ================================== */

        const orderButton =
            document.createElement("a");

        orderButton.className =
            "order-btn";


        /* AVAILABLE */

        if (
            product.status ===
            "available"
        ) {

            orderButton.textContent =
                "Order";

            orderButton.href =
                "product.html?product=" +
                encodeURIComponent(
                    product.name
                );

        }


        /* COMING SOON */

        else if (
            product.status ===
            "coming-soon"
        ) {

            orderButton.textContent =
                "Coming Soon";

            orderButton.removeAttribute(
                "href"
            );

            orderButton.style.pointerEvents =
                "none";

            orderButton.style.opacity =
                "0.6";

        }


        /* OUT OF STOCK */

        else if (
            product.status ===
            "out-of-stock"
        ) {

            orderButton.textContent =
                "Out of Stock";

            orderButton.removeAttribute(
                "href"
            );

            orderButton.style.pointerEvents =
                "none";

            orderButton.style.opacity =
                "0.6";

        }


        /* =================================
           ADD ELEMENTS
        ================================== */

        bottom.appendChild(price);

        bottom.appendChild(orderButton);


        info.appendChild(category);

        info.appendChild(name);

        info.appendChild(description);

        info.appendChild(bottom);


        card.appendChild(imageBox);

        card.appendChild(info);


        productGrid.appendChild(card);

    });


    console.log(
        "AIThreads Home products loaded successfully."
    );

});

/* =========================================
   AITHREADS - PART 6D
   CORRECT PRODUCT STATUS SYSTEM
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof AIThreadsProducts === "undefined") {
        return;
    }


    /* =====================================
       HOME PAGE STATUS
    ====================================== */

    const homeCards =
        document.querySelectorAll(
            ".product-card"
        );


    homeCards.forEach(function (card) {

        const productNameElement =
            card.querySelector("h3");


        if (!productNameElement) {
            return;
        }


        const productName =
            productNameElement.textContent
                .trim();


        const product =
            AIThreadsProducts.find(
                function (item) {

                    return item.name ===
                        productName;

                }
            );


        if (!product) {
            return;
        }


        const orderButton =
            card.querySelector(
                ".order-btn, .order-button"
            );


        if (!orderButton) {
            return;
        }


        /* AVAILABLE */

        if (
            product.status ===
            "available"
        ) {

            orderButton.textContent =
                "Order";

            orderButton.href =
                "product.html?product=" +
                encodeURIComponent(
                    product.name
                );

            orderButton.style.pointerEvents =
                "auto";

            orderButton.style.opacity =
                "1";

        }


        /* COMING SOON */

        else if (
            product.status ===
            "coming-soon"
        ) {

            orderButton.textContent =
                "Coming Soon";

            orderButton.removeAttribute(
                "href"
            );

            orderButton.style.pointerEvents =
                "none";

            orderButton.style.opacity =
                "0.6";

        }


        /* OUT OF STOCK */

        else if (
            product.status ===
            "out-of-stock"
        ) {

            orderButton.textContent =
                "Out of Stock";

            orderButton.removeAttribute(
                "href"
            );

            orderButton.style.pointerEvents =
                "none";

            orderButton.style.opacity =
                "0.6";

        }

    });


    console.log(
        "AIThreads Part 6D status system loaded."
    );

});