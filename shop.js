/* =========================================
   AITHREADS - SHOP.JS
   PART 2C + PART 6C
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       ELEMENTS
    ====================================== */

    const searchInput =
        document.getElementById(
            "product-search"
        );

    const categoryButtons =
        document.querySelectorAll(
            ".category-button"
        );

    const productGrid =
        document.getElementById(
            "shop-products"
        );

    const productCount =
        document.getElementById(
            "product-count-number"
        );

    const noProducts =
        document.getElementById(
            "no-products"
        );


    /* =====================================
       CHECK DATABASE
    ====================================== */

    if (
        !productGrid ||
        typeof AIThreadsProducts ===
        "undefined"
    ) {

        console.log(
            "AIThreads product database not found."
        );

        return;

    }


    /* =====================================
       CURRENT CATEGORY
    ====================================== */

    let currentCategory = "all";


    /* =====================================
       CREATE SHOP PRODUCT CARDS
    ====================================== */

    function loadShopProducts() {


        productGrid.innerHTML = "";


        AIThreadsProducts.forEach(
            function (product) {


                /* AVAILABLE PRODUCTS ONLY */

                if (
                    product.status !==
                    "available"
                ) {

                    return;

                }


                /* CARD */

                const card =
                    document.createElement(
                        "article"
                    );

                card.className =
                    "shop-product-card";


                card.dataset.name =
                    product.name.toLowerCase();


                card.dataset.category =
                    product.category.toLowerCase();


                /* IMAGE BOX */

                const imageBox =
                    document.createElement(
                        "div"
                    );

                imageBox.className =
                    "shop-product-image";


                /* IMAGE */

                const image =
                    document.createElement(
                        "img"
                    );

                image.src =
                    product.image;

                image.alt =
                    product.name +
                    " T-shirt";


                /* TAG */

                if (product.tag) {

                    const tag =
                        document.createElement(
                            "span"
                        );

                    tag.className =
                        "shop-product-tag";

                    tag.textContent =
                        product.tag;

                    imageBox.appendChild(
                        tag
                    );

                }


                imageBox.appendChild(
                    image
                );


                /* INFO */

                const info =
                    document.createElement(
                        "div"
                    );

                info.className =
                    "shop-product-info";


                /* CATEGORY */

                const category =
                    document.createElement(
                        "p"
                    );

                category.className =
                    "shop-product-category";

                category.textContent =
                    product.category;


                /* NAME */

                const name =
                    document.createElement(
                        "h2"
                    );

                name.textContent =
                    product.name;


                /* DESCRIPTION */

                const description =
                    document.createElement(
                        "p"
                    );

                description.textContent =
                    product.description;


                /* BOTTOM */

                const bottom =
                    document.createElement(
                        "div"
                    );

                bottom.className =
                    "shop-product-bottom";


                /* PRICE */

                const price =
                    document.createElement(
                        "strong"
                    );

                price.textContent =
                    "₹" +
                    product.price.toLocaleString(
                        "en-IN"
                    );


                /* VIEW BUTTON */

                const viewButton =
                    document.createElement(
                        "a"
                    );

                viewButton.href =
                    "product.html?product=" +
                    encodeURIComponent(
                        product.name
                    );

                viewButton.className =
                    "view-product-button";

                viewButton.textContent =
                    "View";


                /* ADD ELEMENTS */

                bottom.appendChild(
                    price
                );

                bottom.appendChild(
                    viewButton
                );


                info.appendChild(
                    category
                );

                info.appendChild(
                    name
                );

                info.appendChild(
                    description
                );

                info.appendChild(
                    bottom
                );


                card.appendChild(
                    imageBox
                );

                card.appendChild(
                    info
                );


                productGrid.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================
       FILTER PRODUCTS
    ====================================== */

    function filterProducts() {


        const searchText =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";


        const productCards =
            document.querySelectorAll(
                ".shop-product-card"
            );


        let visibleProducts = 0;


        productCards.forEach(
            function (card) {


                const productName =
                    card.dataset.name ||
                    "";


                const productCategories =
                    card.dataset.category ||
                    "";


                const matchesSearch =
                    productName.includes(
                        searchText
                    );


                const matchesCategory =
                    currentCategory ===
                    "all" ||
                    productCategories.includes(
                        currentCategory
                    );


                if (
                    matchesSearch &&
                    matchesCategory
                ) {

                    card.style.display =
                        "";

                    visibleProducts++;

                } else {

                    card.style.display =
                        "none";

                }

            }
        );


        /* PRODUCT COUNT */

        if (productCount) {

            productCount.textContent =
                visibleProducts;

        }


        /* NO PRODUCTS */

        if (noProducts) {

            if (
                visibleProducts === 0
            ) {

                noProducts.style.display =
                    "block";

            } else {

                noProducts.style.display =
                    "none";

            }

        }

    }


    /* =====================================
       SEARCH
    ====================================== */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                filterProducts();

            }
        );

    }


    /* =====================================
       CATEGORY FILTER
    ====================================== */

    categoryButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {


                    categoryButtons.forEach(
                        function (btn) {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    currentCategory =
                        button.dataset.category;


                    filterProducts();

                }
            );

        }
    );


    /* =====================================
       LOAD PRODUCTS
    ====================================== */

    loadShopProducts();


    /* =====================================
       INITIAL FILTER
    ====================================== */

    filterProducts();


    /* =====================================
       CONSOLE
    ====================================== */

    console.log(
        "AIThreads Shop 6C loaded successfully."
    );

});
/* =========================================
   AITHREADS - PART 6E
   SHOP PAGE PRODUCT STATUS SYSTEM
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof AIThreadsProducts === "undefined") {
        return;
    }


    /* =====================================
       SHOP PRODUCT CARDS
    ====================================== */

    const shopCards =
        document.querySelectorAll(
            ".shop-product-card"
        );


    shopCards.forEach(function (card) {

        /* GET PRODUCT NAME */

        const productName =
            card.dataset.name;


        if (!productName) {
            return;
        }


        /* FIND PRODUCT */

        const product =
            AIThreadsProducts.find(
                function (item) {

                    return item.name
                        .toLowerCase()
                        === productName
                        .toLowerCase();

                }
            );


        if (!product) {
            return;
        }


        /* =================================
           PRICE
        ================================== */

        const priceElement =
            card.querySelector(
                ".shop-product-bottom strong"
            );


        if (priceElement) {

            if (
                product.status ===
                "available"
            ) {

                priceElement.textContent =
                    "₹" +
                    product.price
                        .toLocaleString(
                            "en-IN"
                        );

            }

        }


        /* =================================
           VIEW / ORDER BUTTON
        ================================== */

        const viewButton =
            card.querySelector(
                ".view-product-button"
            );


        if (!viewButton) {
            return;
        }


        /* =================================
           AVAILABLE
        ================================== */

        if (
            product.status ===
            "available"
        ) {

            viewButton.textContent =
                "View";

            viewButton.href =
                "product.html?product=" +
                encodeURIComponent(
                    product.name
                );

            viewButton.style.pointerEvents =
                "auto";

            viewButton.style.opacity =
                "1";

        }


        /* =================================
           COMING SOON
        ================================== */

        else if (
            product.status ===
            "coming-soon"
        ) {

            viewButton.textContent =
                "Coming Soon";

            viewButton.removeAttribute(
                "href"
            );

            viewButton.style.pointerEvents =
                "none";

            viewButton.style.opacity =
                "0.6";

        }


        /* =================================
           OUT OF STOCK
        ================================== */

        else if (
            product.status ===
            "out-of-stock"
        ) {

            viewButton.textContent =
                "Out of Stock";

            viewButton.removeAttribute(
                "href"
            );

            viewButton.style.pointerEvents =
                "none";

            viewButton.style.opacity =
                "0.6";


            if (priceElement) {

                priceElement.textContent =
                    "Out of Stock";

            }

        }

    });


    console.log(
        "AIThreads Part 6E Shop status system loaded."
    );

});