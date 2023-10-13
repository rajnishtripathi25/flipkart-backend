
const products = [
    {
        id: 'product1',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        },
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        quantity: 1,
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off',
        tagline: 'Deal of the day'
    },
    {
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        quantity: 1,
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off',
        tagline: 'Pestige, Nova & more'
    },
    {
        id: 'product3',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70',
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        },
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        quantity: 1,
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off',
        tagline: 'Deal of the Day'
    },
    {
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        },
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        quantity: 1,
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now',
        tagline: 'Best Seller'
    },
    {
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        },
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        quantity: 1,
        description: '',
        discount: 'From ₹499',
        tagline: 'Kubra, Nova & more'
    },
    {
        id: 'product6',
        url: 'https://rukminim1.flixcart.com/image/150/150/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70',
        title: {
            shortTitle: 'Table Fans',
            longTitle: 'Portable 300 mm Ultra High Speed 3 Blade Table Fan  (Black, Pack of 1)'
        },
        price: {
            mrp: 2250,
            cost: 1199,
            discount: '46%'
        },
        quantity: 1,
        description: 'Table Fan. Perfect size fan for use on a table, desk or in an RV. Whisper quiet, powerful airflow and reliable operation in a compact 6" size. Two adjustable speeds to customize airflow: high or low settings. Tough break-resistant ABS plastic blades. ',
        discount: 'Minimum 40% Off',
        tagline: 'Top Selling'
    },
    {
        id: 'product7',
        url: 'https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70',
        title: {
            shortTitle: 'Headphones',
            longTitle: 'boAt Rockerz 235v2 with ASAP charging Version 5.0 Bluetooth Headset '
        },
        price: {
            mrp: 2990,
            cost: 1199,
            discount: '59%'
        },
        quantity: 1,
        description: 'Let music brighten up your mood anytime, anywhere with the boAt 235v2 Fast Charging Bluetooth Headset. This Bluetooth headset features a Call Vibration Alert, a Fast Charging Technology, and Easy Access Controls to listen to and manage your favorite music with ease.',
        discount: 'Minimum 50% Off',
        tagline: 'Grab Now!'
    },

    {
        "id": "product8",
        "category": "Electronics",
        "url": 'https://m.media-amazon.com/images/I/71fM5D9qvlL.jpg',
        "detailUrl": 'https://m.media-amazon.com/images/I/71fM5D9qvlL.jpg',
        "title": {
            "shortTitle": "Dell Laptop",
            "longTitle": "Dell XPS 13 Ultra-Thin Laptop"
        },
        "price": {
            "mrp": 119999,
            "cost": 91299,
            "discount": "13%"
        },
        "quantity": 1,
        "description": "Experience unmatched performance with the Dell XPS 13 laptop. It features an ultra-thin design, a vibrant 13-inch InfinityEdge display, an Intel Core i7 processor, and long-lasting battery life.",
        "discount": "Limited Time Offer",
        "tagline": "Power Meets Portability!"
    },
    {
        "id": "product9",
        "category": "Electronics",
        "url": 'https://m.media-amazon.com/images/I/71p1EMtYnvL._AC_UF1000,1000_QL80_.jpg',
        "detailUrl": 'https://m.media-amazon.com/images/I/71p1EMtYnvL._AC_UF1000,1000_QL80_.jpg',
        "title": {
            "shortTitle": "Smartwatch",
            "longTitle": "Apple Watch Series 7 GPS + Cellular"
        },
        "price": {
            "mrp": 60900,
            "cost": 50980,
            "discount": "20%"
        },
        "quantity": 1,
        "description": "Stay connected and active with the Apple Watch Series 7. This GPS + Cellular smartwatch features a larger Always-On Retina display, health monitoring capabilities, and seamless integration with your Apple devices.",
        "discount": "Hurry, Limited Stock!",
        "tagline": "Your Health, Your Way!"
    },
    {
        "id": "product10",
        "category": "Electronics",
        "url": 'https://m.media-amazon.com/images/I/71gB-5SVNUL._AC_UF1000,1000_QL80_.jpg',
        "detailUrl": 'https://m.media-amazon.com/images/I/71gB-5SVNUL._AC_UF1000,1000_QL80_.jpg',
        "title": {
            "shortTitle": "Digital Camera",
            "longTitle": "Sony Alpha a6400 Mirrorless Camera"
        },
        "price": {
            "mrp": 111299,
            "cost": 70999,
            "discount": "18%"
        },
        "quantity": 1,
        "description": "Capture stunning photos and 4K video with the Sony Alpha a6400 mirrorless camera. It features a 24.2MP sensor, Real-time Eye Autofocus, and fast continuous shooting capabilities for photography enthusiasts.",
        "discount": "Save Big Today!",
        "tagline": "Unleash Your Creativity!"
    },
    {
        "id": "product11",
        "category": "Electronics",
        "url": "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/2/v/v/-original-imagfdeqter4sj2j.jpeg?q=70",
        "detailUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/2/v/v/-original-imagfdeqter4sj2j.jpeg?q=70",
        "title": {
            "shortTitle": "MacBook Air",
            "longTitle": "APPLE 2022 MacBook AIR M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLXW3HN/A"
        },
        "price": {
            "mrp": 114900,
            "cost": 90990,
            "discount": "20%"
        },
        "quantity": 1,
        "description": "Experience the power and elegance of the APPLE 2022 MacBook Air. Featuring the blazing-fast M2 processor, 8 GB of unified memory, and a 256 GB SSD, it runs on the sleek Mac OS Monterey. With a 13.6-inch display and a wide range of built-in apps, this MacBook Air offers unmatched performance and versatility.",
        "discount": "Save on the Latest Apple Tech!",
        "tagline": "Unleash Your Creativity!"
    },
    {
        "id": "product12",
        "category": "Footwear",
        "url": "https://rukminim2.flixcart.com/image/832/832/xif0q/sandal/n/9/8/9-rover-men-red-tape-navy-blue-original-imagzjusmhu6pkvv.jpeg?q=70",
        "detailUrl": "https://rukminim2.flixcart.com/image/832/832/xif0q/sandal/n/9/8/9-rover-men-red-tape-navy-blue-original-imagzjusmhu6pkvv.jpeg?q=70",
        "title": {
            "shortTitle": "Olive Clogs Sandal",
            "longTitle": "Men Olive Clogs Sandal"
        },
        "price": {
            "mrp": 2699,
            "cost": 814,
            "discount": "69%"
        },
        "quantity": 1,
        "description": "Step out in style and comfort with these Men's Olive Clogs Sandals. These sandals are designed to provide both fashion and comfort, making them perfect for casual outings. With a 69% discount, you can enjoy both style and savings.",
        "discount": "Huge Savings on Stylish Footwear!",
        "tagline": "Walk in Style!",
        "ratings": "4.29 (47 ratings)",
        "reviews": 75
    },
    {
        "id": "product13",
        "category": "Mobile Accessories",
        "url": "https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/5/5/t/-original-imagrh2zbevym5hr.jpeg?q=70",
        "detailUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/5/5/t/-original-imagrh2zbevym5hr.jpeg?q=70",
        "title": {
            "shortTitle": "Micvir Back Cover",
            "longTitle": "Micvir Back Cover for Poco M2, Mi Redmi 9 Prime (Transparent, Black, Camera Bump Protector, Pack of: 1)"
        },
        "price": {
            "mrp": 999,
            "cost": 196,
            "discount": "80%"
        },
        "quantity": 1,
        "description": "Protect your Poco M2 or Mi Redmi 9 Prime with this Micvir Back Cover. This cover is transparent with black accents and includes a camera bump protector. With an 80% discount, it's an affordable and stylish way to keep your phone safe from scratches and impacts.",
        "discount": "Massive Discount on Phone Protection!",
        "tagline": "Keep Your Phone Safe in Style!",
        "ratings": "4.3 (806 ratings)",
        "reviews": 141
    },
    {
        "id": "product14",
        "category": "Appliances",
        "url": "https://rukminim2.flixcart.com/image/612/612/xif0q/refrigerator-new/4/q/7/-original-imagmxh2kv35bskc.jpeg?q=70",
        "detailUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/refrigerator-new/4/q/7/-original-imagmxh2kv35bskc.jpeg?q=70",
        "title": {
            "shortTitle": "Samsung Refrigerator",
            "longTitle": "SAMSUNG 183 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer with Digital Inverter (Camellia Blue, RR20C1824CU/HL)"
        },
        "price": {
            "mrp": 22999,
            "cost": 16190,
            "discount": "29%"
        },
        "quantity": 1,
        "description": "Upgrade your kitchen with the SAMSUNG 183 L Direct Cool Single Door Refrigerator in Camellia Blue. It features a 4-star energy rating and a base drawer for extra storage. The Digital Inverter ensures energy efficiency, and with an extra ₹500 off, it's a fantastic deal.",
        "discount": "Get ₹500 Extra Discount!",
        "tagline": "Upgrade Your Kitchen in Style!",
        "ratings": "4.4 (116 ratings)",
        "reviews": 2476
    },
    {
        "id": "product15",
        "category": "Appliances",
        "url": "https://rukminim2.flixcart.com/image/612/612/xif0q/refrigerator-new/9/l/z/-original-imagnjywtpgp8ezd.jpeg?q=70",
        "detailUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/refrigerator-new/9/l/z/-original-imagnjywtpgp8ezd.jpeg?q=70",
        "title": {
            "shortTitle": "Samsung Refrigerator",
            "longTitle": "SAMSUNG 236 L Frost Free Double Door 2 Star Convertible Refrigerator with Digital Inverter with Display (Camellia Purple, RT28C3922CR/HL)"
        },
        "price": {
            "mrp": 35990,
            "cost": 23990,
            "discount": "33%"
        },
        "quantity": 1,
        "description": "Upgrade your kitchen with the SAMSUNG 236 L Frost Free Double Door Refrigerator in Camellia Purple. This convertible refrigerator offers energy efficiency with a 2-star rating. The Digital Inverter and Display add convenience to your daily life, and you can save ₹5410 on this fantastic deal.",
        "discount": "Get ₹5410 Extra Discount!",
        "tagline": "Upgrade Your Kitchen in Style!",
        "ratings": "4.4 (762 ratings)",
        "reviews": 2151
    },
    {
        "id": "product16",
        "category": "Appliances",
        "url": "https://rukminim2.flixcart.com/image/612/612/xif0q/refrigerator-new/m/a/h/-original-imagpgzcnh2heh3z.jpeg?q=70",
        "detailUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/refrigerator-new/m/a/h/-original-imagpgzcnh2heh3z.jpeg?q=70",
        "title": {
            "shortTitle": "Haier Refrigerator",
            "longTitle": "Haier 240 L Frost Free Double Door 2 Star Refrigerator (Moon Silver, HEF-252EGS-P)"
        },
        "price": {
            "mrp": 29990,
            "cost": 20490,
            "discount": "31%"
        },
        "quantity": 1,
        "description": "Upgrade your kitchen with the Haier 240 L Frost Free Double Door Refrigerator in Moon Silver. This refrigerator offers energy efficiency with a 2-star rating. Save ₹500 on this amazing deal and keep your food fresh and cool in style.",
        "discount": "Get ₹500 Extra Discount!",
        "tagline": "Upgrade Your Kitchen in Style!",
        "ratings": "4.4 (6,726 ratings)",
        "reviews": 634
    },
    {
        "id": "product17",
        "category": "Fashion",
        "url": "https://rukminim2.flixcart.com/image/612/612/l4vnbm80/t-shirt/i/j/q/m-askporgfj72665-new-allen-solly-original-imagfzk8vjxgurcj.jpeg?q=70",
        "detailUrl": "https://rukminim2.flixcart.com/image/832/832/l4vnbm80/t-shirt/i/j/q/m-askporgfj72665-new-allen-solly-original-imagfzk8vjxgurcj.jpeg?q=70",
        "title": {
            "shortTitle": "Men's T-Shirt",
            "longTitle": "Men Solid Polo Neck Pure Cotton Black T-Shirt"
        },
        "price": {
            "mrp": 999,
            "cost": 519,
            "discount": "48%"
        },
        "quantity": 1,
        "description": "Stay comfortable and stylish with this solid black polo neck T-shirt made of pure cotton. It's available at a special price with a 48% discount. With high ratings and reviews, it's a must-have for your wardrobe.",
        "discount": "Get 48% Discount on Style!",
        "tagline": "Stay Stylish and Comfortable!",
        "ratings": "4.2 (1,18,786 ratings)",
        "reviews": 9359
    },
    {
        "id": "product18",
        "category": "Magazines",
        "url": "https://rukminim2.flixcart.com/image/612/612/k2z1t3k0/magazine/h/m/8/1-reviewadda-original-imafm7mzhfpngt8u.jpeg?q=70",
        "detailUrl": "https://rukminim2.flixcart.com/image/416/416/k2z1t3k0/magazine/h/m/8/1-reviewadda-original-imafm7mzhfpngt8u.jpeg?q=70",
        "title": {
            "shortTitle": "ReviewAdda Magazines",
            "longTitle": "ReviewAdda Magazines (English)"
        },
        "price": {
            "mrp": 499,
            "cost": 449,
            "discount": "10%"
        },
        "quantity": 1,
        "description": "Stay updated with the latest in English magazines from ReviewAdda. Get insightful articles and reviews on various topics. With a 10% discount, this is an excellent offer to enhance your reading experience.",
        "discount": "Get 10% Discount on Magazines!",
        "tagline": "Expand Your Knowledge with ReviewAdda!",
        "ratings": "4.5 (51 ratings)",
        "reviews": 1
    }
    , {
        "id": "product19",
        "category": "Home & Kitchen",
        "url": "https://rukminim2.flixcart.com/image/612/612/xif0q/mug/o/j/6/aao-behen-chugli-kare-a-gift-for-best-friend-sister-wife-original-imagszersq8yjh5n.jpeg?q=70",
        "detailUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/mug/o/j/6/aao-behen-chugli-kare-a-gift-for-best-friend-sister-wife-original-imagszersq8yjh5n.jpeg?q=70",
        "title": {
            "shortTitle": "Coffee Mug",
            "longTitle": "Begaari Aao Behen Chugli Kare - A gift for best friend, Sister, Wife, Girlfriend Ceramic Coffee Mug (350 ml)"
        },
        "price": {
            "mrp": 499,
            "cost": 170,
            "discount": "65%"
        },
        "quantity": 1,
        "description": "Enjoy your coffee or tea in style with this ceramic coffee mug. It features a unique design and a special message for your best friend, sister, wife, or girlfriend. At a 65% discount, it's a perfect gift to show your love and affection.",
        "discount": "Get 65% Discount on This Special Gift!",
        "tagline": "Express Your Love with a Special Mug!",
        "ratings": "4.6 (25 ratings)",
        "reviews": 0
    }, {
        "id": "product20",
        "category": "Home & Kitchen",
        "url": "https://rukminim2.flixcart.com/image/612/612/xif0q/mug/x/c/9/double-wall-vacuum-insulated-stainless-steel-tea-coffee-mug-original-imaggb4ffkv6dafq.jpeg?q=70",
        "detailUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/mug/x/c/9/double-wall-vacuum-insulated-stainless-steel-tea-coffee-mug-original-imaggb4ffkv6dafq.jpeg?q=70",
        "title": {
            "shortTitle": "Thermos Flask Mug",
            "longTitle": "Nirvaana Double Wall Vacuum Insulated Stainless Steel Tea Coffee Thermos Flask Travel Stainless Steel Bath Mug (400 ml)"
        },
        "price": {
            "mrp": 1299,
            "cost": 299,
            "discount": "76%"
        },
        "quantity": 1,
        "description": "Keep your beverages hot or cold with the Nirvaana Double Wall Vacuum Insulated Stainless Steel Thermos Flask Mug. It's perfect for both travel and daily use. With a 76% discount, it's an excellent deal to ensure your drinks stay at the right temperature.",
        "discount": "Get 76% Discount on This Thermos Flask!",
        "tagline": "Keep Your Beverages Perfectly Tempered!",
        "ratings": "3.9 (293 ratings)",
        "reviews": 297
    }









];


module.exports = products