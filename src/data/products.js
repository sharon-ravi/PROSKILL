// src/data/products.js

// --- Image Paths (Assumed to be in public/images/) ---
// You need to create these folders and add your images.
// public/images/banners/category_slug_banner.jpg
// public/images/products/product_id_main.jpg
// public/images/products/product_id_color_variant.jpg

export const categoryDetails = {
  // --- JACKETS ---
  'jackets': {
    title: 'Jackets',
    bannerImage: '/images/banners/jackets_banner.jpg',
    descriptionTop: `Explore our extensive range of high-performance work jackets. Designed for durability, comfort, and protection against the elements, our collection features everything from lightweight softshells to heavy-duty, waterproof and breathable options suitable for the most demanding professions.`,
    descriptionBottom: [
      `Mascot workwear jackets are engineered with the worker in mind. Features often include reinforced stress points, ergonomic designs for freedom of movement, multiple functional pockets, and innovative materials like MASCOTEX® for superior weather protection and CLIMASCOT® for lightweight insulation.`,
      `Whether you're looking for hi-vis jackets for safety, flame-retardant options for hazardous environments, or stylish yet practical jackets for everyday site work, you'll find a solution tailored to your needs. Many jackets also incorporate stretch fabric for enhanced comfort throughout your workday.`
    ]
  },
  // --- VESTS ---
  'vests': {
    title: 'Vests',
    bannerImage: '/images/banners/vests_banner.jpg',
    descriptionTop: `Our work vests and gilets offer an excellent combination of warmth, mobility, and practicality. Ideal for layering or for when a full jacket is too restrictive, these vests provide core body warmth while keeping your arms free.`,
    descriptionBottom: [
      `Choose from insulated winter gilets, lightweight tool vests with multiple pockets, or hi-vis safety vests. Many feature durable outer fabrics, comfortable linings, and smart storage solutions. They are perfect for tradespeople, site managers, and anyone needing an extra layer of functional workwear.`,
      `Look for features like wind resistance, water-repellency, and options with stretch panels for added comfort and flexibility on the job.`
    ]
  },
  // --- JUMPERS ---
  'jumpers': {
    title: 'Jumpers',
    bannerImage: '/images/banners/jumpers_banner.jpg',
    descriptionTop: `Stay warm and comfortable with our selection of work jumpers, sweaters, and fleeces. Perfect as a mid-layer under a jacket or as a standalone top in milder conditions.`,
    descriptionBottom: [
      `Our range includes classic crew necks, zip-up fleeces, and modern knitted sweaters, all made from quality materials designed for work environments. They offer excellent insulation while allowing for breathability and ease of movement.`,
      `Many jumpers feature durable constructions and practical details, ensuring they can withstand the rigors of daily work while keeping you comfortable.`
    ]
  },
  // --- T-SHIRTS ---
  't-shirts': {
    title: 'T-shirts',
    bannerImage: '/images/banners/t-shirts_banner.jpg',
    descriptionTop: `Proskill offers a variety of work t-shirts designed for comfort and durability. From basic cotton tees to performance fabrics with moisture-wicking properties, find the perfect base layer for your workday.`,
    descriptionBottom: [
      `Our t-shirts are available in multiple colors and fits, including options with UV protection and anti-odor treatments. They are built to last, maintaining their shape and comfort wash after wash. Ideal for all trades and suitable for branding with your company logo.`
    ]
  },
  // --- POLO SHIRTS ---
  'polo-shirts': {
    title: 'Polo Shirts',
    bannerImage: '/images/banners/polo-shirts_banner.jpg',
    descriptionTop: `Combine a professional look with everyday comfort with our range of work polo shirts. Suitable for a wide range of industries, they offer a smart alternative to t-shirts while maintaining practicality.`,
    descriptionBottom: [
      `Featuring durable fabrics, comfortable fits, and often with features like moisture-wicking or UV protection. Available in various colors, perfect for company uniforms or individual tradespeople seeking a presentable and functional top.`
    ]
  },
  // --- PANTS ---
  'pants': {
    title: 'Pants',
    bannerImage: '/images/banners/pants_banner.jpg',
    descriptionTop: `Find durable and functional work pants designed for every trade. Our collection includes trousers with multiple pockets, kneepad pockets, stretch fabric for ultimate comfort, and options for various weather conditions.`,
    descriptionBottom: [
      `Mascot work pants are renowned for their ergonomic fit and robust construction. Whether you need lightweight pants for summer, insulated trousers for winter, or hi-vis options for safety, Proskill has you covered.`
    ]
  },
  // --- SHORTS ---
  'shorts': {
    title: 'Shorts',
    bannerImage: '/images/banners/shorts_banner.jpg',
    descriptionTop: `Stay cool and comfortable in warmer weather with our range of work shorts. Designed with the same durability and functionality as our long pants, these shorts offer freedom of movement without compromising on utility.`,
    descriptionBottom: [
      `Featuring multiple tool pockets, reinforced areas, and comfortable waistbands. Ideal for tradespeople working indoors or outdoors during warmer months.`
    ]
  },
  // --- BIB & BRACES ---
  'bib-and-braces': {
    title: 'Bib & Braces',
    bannerImage: '/images/banners/bib-and-braces_banner.jpg',
    descriptionTop: `For comprehensive coverage and practicality, explore our selection of bib & brace overalls. Offering excellent protection and ample storage, they are a favorite among many trades.`,
    descriptionBottom: [
      `Features often include adjustable straps, multiple chest and leg pockets, kneepad pockets, and durable fabric. Designed for comfort and functionality throughout long workdays.`
    ]
  },
  // --- OVERALLS ---
  'overalls': {
    title: 'Overalls',
    bannerImage: '/images/banners/overalls_banner.jpg',
    descriptionTop: `Full-body protection and ultimate functionality define our range of work overalls and boilersuits. Ideal for mechanics, painters, and various industrial applications.`,
    descriptionBottom: [
      `Available in different weights and materials, including options for specific hazards. Designed for ease of movement and durability, with plenty of pockets for tools and essentials.`
    ]
  },
  // --- ACCESSORIES ---
  'accessories': {
    title: 'Accessories',
    bannerImage: '/images/banners/accessories_banner.jpg',
    descriptionTop: `Complete your workwear kit with our range of essential accessories. From durable belts and kneepads to warm hats and socks, find the items you need to enhance your comfort and safety.`,
    descriptionBottom: [
      `Our accessories are designed to complement Mascot workwear, ensuring the same high standards of quality and functionality.`
    ]
  },
  // --- SAFETY CLOTHING ---
  'safety-clothing': {
    title: 'Safety Clothing',
    bannerImage: '/images/banners/safety-clothing_banner.jpg',
    descriptionTop: `Prioritize your safety with our comprehensive range of certified safety clothing. This includes hi-visibility apparel, flame-retardant garments, and clothing with protection against various workplace hazards.`,
    descriptionBottom: [
      `All our safety clothing meets stringent industry standards, providing reliable protection without compromising on comfort or durability. Essential for workers in high-risk environments.`
    ]
  },
  // --- THERMAL CLOTHING ---
  'thermal-clothing': {
    title: 'Thermal Clothing',
    bannerImage: '/images/banners/thermal-clothing_banner.jpg',
    descriptionTop: `Stay warm in cold conditions with our specialized thermal clothing. Designed as effective base layers, our thermal wear helps regulate body temperature and wick moisture away.`,
    descriptionBottom: [
      `Made from advanced fabrics that provide excellent insulation without bulk. Essential for outdoor workers or those in unheated environments during colder months.`
    ]
  },
  // --- UNDERWEAR ---
  'underwear': {
    title: 'Underwear',
    bannerImage: '/images/banners/underwear_banner.jpg',
    descriptionTop: `Comfort starts with the right base layers. Our work underwear is designed for active use, providing support, breathability, and moisture management throughout the day.`,
    descriptionBottom: [
      `Includes functional briefs, boxers, and base layer tops made from materials that keep you comfortable and dry, whatever your job entails.`
    ]
  },
  // --- WINTER CLOTHING --- (You had this one already, I'm keeping it for completeness)
  'winter-clothing': {
    title: 'Winter Clothing',
    bannerImage: '/images/banners/winter_clothing_banner.jpg',
    descriptionTop: `When there is more rain to come and it gets colder, you need good winter clothes to protect you. MASCOT can help you with that. We have a large selection of weather protective winter clothes in the form of winter jackets, winter gilets, winter boilersuits, winter bib & braces and winter trousers. All products are very durable and made functional with many different pockets, including pockets for tools. The comfort is also highly prioritised as several products have stretch material inserted to ensure the freedom of movement.`,
    descriptionBottom: [
      `In order for you to keep warm, MASCOT’s winter clothes are lined with the best insulating materials. For example, you can find winter clothes with lining of CLIMASCOT® that is a highly insulating and breathable lightweight material. The lining makes the products feel light to wear, and it ensures that you can get rid of excess heat so you don’t get wet and then cold. Many of the winter jackets and winter gilets also have an extended back so you can keep your lower back warm — even when you bend down or stretch.`,
      `A large part of our winter clothes is breathable, windproof and waterproof so you can keep the rain completely out and at the same time get rid of excess heat. MASCOT’s own fabric, MASCOTEX®, is certified waterproof, breathable and is used on many winter products. If your winter clothes should just be able to withstand a light shower, we also have products that are water-repellent, but with the same, important breathability. Additional features have been added to some products to ensure extra protection against wind and rain. For example, many of the trouser legs on the winter products feature long zippers with storm flaps that fit tightly over boots and therefore keep the cold out.`
    ]
  }
};

export const allProducts = [
  // --- JACKETS CATEGORY PRODUCTS (Add 5-10 example products) ---
  {
    id: 'jk001',
    name: 'MASCOT® Advanced Softshell Jacket (17001-280)',
    categorySlug: 'jackets',
    price: 189.90,
    imageUrl: '/images/products/softshell_jacket_17001_280_main.jpg',
    colors: [
      { code: '09', name: 'Black', cssColor: '#000000', image: '/images/products/softshell_jacket_17001_280_black.jpg', stock: 15 },
      { code: '010', name: 'Dark Navy', cssColor: '#000080', image: '/images/products/softshell_jacket_17001_280_navy.jpg', stock: 20 },
    ],
    description: 'Water-repellent and windproof softshell jacket with fleece inner lining.',
    productType: 'Jackets', gender: 'Unisex', industry: 'Craftsmen', features: ['Water-repellent', 'Windproof', 'Stretch'], productRange: 'MASCOT® ADVANCED', job: 'Carpenter'
  },
  {
    id: 'jk002',
    name: 'MASCOT® Hi-Vis Winter Jacket (12035-211)',
    categorySlug: 'jackets', // Can also belong to 'winter-clothing' and 'safety-clothing'
    price: 349.90,
    imageUrl: '/images/products/winter_jacket_12035_211_main.jpg', // From your screenshot
    colors: [
        { code: '88809', name: 'Dark Anthracite/Black', cssColor: '#2F4F4F', image: '/images/products/winter_jacket_12035_211_anthracite.jpg', stock: 7 },
        { code: '1809', name: 'Dark Navy/Black', cssColor: '#000080', image: '/images/products/winter_jacket_12035_211_navy.jpg', stock: 9 },
        { code: '0309', name: 'Blue Ink/Black', cssColor: '#0000CD', image: '/images/products/winter_jacket_12035_211_blueink.jpg', stock: 0 }, // Example out of stock
        { code: '0209', name: 'Red/Black', cssColor: '#FF0000', image: '/images/products/winter_jacket_12035_211_red.jpg', stock: 5 },
    ],
    description: 'Fluorescent and with reflective tapes. Breathable, wind and waterproof.',
    productType: 'Jackets', gender: 'Unisex', industry: 'Construction', features: ['Waterproof', 'Windproof', 'Breathable', 'Hi-Vis'], productRange: 'MASCOT® SAFE SUPREME', job: 'Outdoor Worker'
  },
  // ... ADD MORE JACKET PRODUCTS ...

  // --- VESTS CATEGORY PRODUCTS (Add 5-10 example products) ---
  {
    id: 'vs001',
    name: 'MASCOT® Tool Vest (00979-442)',
    categorySlug: 'vests',
    price: 99.50,
    imageUrl: '/images/products/tool_vest_00979_442_main.jpg',
    colors: [{ code: '09', name: 'Black', cssColor: '#000000', image: '/images/products/tool_vest_00979_442_black.jpg', stock: 25 }],
    description: 'Durable tool vest with many spacious pockets. Hanging tool pockets of CORDURA®.',
    productType: 'Vests', gender: 'Unisex', industry: 'Craftsmen', features: ['Multiple Pockets', 'Durable'], productRange: 'MASCOT® HARDWEAR', job: 'Electrician'
  },
  {
    id: 'vs002',
    name: 'MASCOT® Quilted Gilet (15575-318)',
    categorySlug: 'vests', // Can also belong to 'winter-clothing'
    price: 75.00,
    imageUrl: '/images/products/quilted_gilet_15575_318_main.jpg',
    colors: [
        { code: '010', name: 'Dark Navy', cssColor: '#000080', image: '/images/products/quilted_gilet_15575_318_navy.jpg', stock: 18 },
        { code: '18', name: 'Dark Anthracite', cssColor: '#2F4F4F', image: '/images/products/quilted_gilet_15575_318_anthracite.jpg', stock: 12 },
    ],
    description: 'Lightweight and insulating quilted gilet. Ideal as an extra layer.',
    productType: 'Gilets', gender: 'Unisex', industry: 'Service', features: ['Insulating', 'Lightweight'], productRange: 'MASCOT® FRONTLINE', job: 'Driver'
  },
  // ... ADD MORE VEST PRODUCTS ...

  // --- JUMPERS CATEGORY PRODUCTS ---
  // ... ADD JUMPER PRODUCTS ...

  // --- T-SHIRTS CATEGORY PRODUCTS ---
  // ... ADD T-SHIRT PRODUCTS ...

  // --- POLO SHIRTS CATEGORY PRODUCTS ---
  // ... ADD POLO SHIRT PRODUCTS ...

  // --- PANTS CATEGORY PRODUCTS ---
  // ... ADD PANTS PRODUCTS ...

  // --- SHORTS CATEGORY PRODUCTS ---
  // ... ADD SHORTS PRODUCTS ...

  // --- BIB & BRACES CATEGORY PRODUCTS ---
  // ... ADD BIB & BRACES PRODUCTS ...

  // --- OVERALLS CATEGORY PRODUCTS ---
  // ... ADD OVERALLS PRODUCTS ...

  // --- ACCESSORIES CATEGORY PRODUCTS ---
  // ... ADD ACCESSORIES PRODUCTS ...

  // --- SAFETY CLOTHING CATEGORY PRODUCTS ---
  // ... ADD SAFETY CLOTHING PRODUCTS (these might overlap with other categories like jackets, pants) ...

  // --- THERMAL CLOTHING CATEGORY PRODUCTS ---
  // ... ADD THERMAL CLOTHING PRODUCTS ...

  // --- UNDERWEAR CATEGORY PRODUCTS ---
  // ... ADD UNDERWEAR PRODUCTS ...

  // --- WINTER CLOTHING PRODUCTS (from your previous example, can be expanded) ---
   {
    id: 'wc001', // Already defined in original example
    name: 'Winter Jacket (09335-880)', // From your screenshot
    categorySlug: 'winter-clothing', // Could also be 'jackets', 'safety-clothing'
    price: 469.90,
    imageUrl: '/images/products/winter_jacket_09335_880_main.jpg', // Screenshot image
    colors: [
      { code: '14988', name: 'Hi-Vis Orange/Black', cssColor: 'orange', image: '/images/products/winter_jacket_09335_880_orange.jpg', stock: 10 },
      { code: '141', name: 'Hi-Vis Yellow/Black', cssColor: 'yellow', image: '/images/products/winter_jacket_09335_880_yellow.jpg', stock: 5 },
      { code: '171', name: 'Hi-Vis Blue/Black', cssColor: 'blue', image: '/images/products/winter_jacket_09335_880_blue.jpg', stock: 0 },
    ],
    description: 'High-performance insulated winter jacket with hi-vis features.',
    productType: 'Jackets', gender: 'Unisex', industry: 'Construction', features: ['Waterproof', 'Windproof', 'Hi-Vis'], productRange: 'MASCOT® SAFE SUPREME', job: 'Outdoor Worker'
  },
  {
    id: 'wc002', // Already defined in original example
    name: 'Pilot Jacket (00516-620)', // From your screenshot
    categorySlug: 'winter-clothing', // Could also be 'jackets'
    price: 199.90,
    imageUrl: '/images/products/pilot_jacket_00516_620_main.jpg',
    colors: [
      { code: '09', name: 'Black', cssColor: '#000000', image: '/images/products/pilot_jacket_00516_620_black.jpg', stock: 12 },
      { code: '03', name: 'Dark Navy', cssColor: '#000080', image: '/images/products/pilot_jacket_00516_620_navy.jpg', stock: 8 },
      { code: '01', name: 'Khaki Green', cssColor: 'darkkhaki', image: '/images/products/pilot_jacket_00516_620_green.jpg', stock: 3 },
      { code: '02', name: 'Red', cssColor: 'red', image: '/images/products/pilot_jacket_00516_620_red.jpg', stock: 0 },
      { code: '06', name: 'White', cssColor: '#FFFFFF', image: '/images/products/pilot_jacket_00516_620_white.jpg', stock: 1 },
    ],
    description: 'Classic pilot jacket with warm lining for cold weather.',
    productType: 'Jackets', gender: 'Men', industry: 'Service', features: ['Water-repellent', 'Insulating'], productRange: 'MASCOT® ORIGINALS', job: 'Driver'
  },
  {
    id: 'wc003',
    name: 'Winter Gilet (50449-893)', // From your screenshot
    categorySlug: 'winter-clothing', // Could also be 'vests'
    price: 199.90, // Price from screenshot
    imageUrl: '/images/products/winter_gilet_50449_893_main.jpg', // Screenshot image
    colors: [
        { code: '09', name: 'Black', cssColor: '#000000', image: '/images/products/winter_gilet_50449_893_black.jpg', stock: 20 }
    ],
    description: 'Insulated winter gilet for core warmth and freedom of movement.',
    productType: 'Gilets', gender: 'Unisex', industry: 'Logistics', features: ['Insulating', 'Windproof'], productRange: 'MASCOT® ADVANCED', job: 'Warehouse'
  },
  // ... ADD MORE PRODUCTS FOR ALL CATEGORIES
];

// Filter options - expand as needed based on your actual product attributes
export const filterOptions = {
  productType: ['Jackets', 'Gilets', 'Trousers', 'Boilersuits', 'Bib & Brace', 'Shirts', 'Shorts', 'Vests', /* ... */],
  gender: ['Men', 'Women', 'Unisex'],
  industry: ['Construction', 'Service', 'Logistics', 'Craftsmen', 'Offshore', 'Warehouse', /* ... */],
  features: ['Waterproof', 'Windproof', 'Breathable', 'Hi-Vis', 'Stretch', 'Flame Retardant', 'Taped Seams', 'Water-repellent', 'Insulating', 'Multiple Pockets', 'Durable', 'Lightweight', /* ... */],
  productRange: ['MASCOT® ULTIMATE', 'MASCOT® ORIGINALS', 'MASCOT® ADVANCED', 'MASCOT® ACCELERATE', 'MASCOT® UNIQUE', 'MASCOT® SAFE SUPREME', 'MASCOT® HARDWEAR', 'MASCOT® FRONTLINE', /* ... */],
  job: ['Outdoor Worker', 'Driver', 'Carpenter', 'Electrician', 'Warehouse', /* ... */]
};