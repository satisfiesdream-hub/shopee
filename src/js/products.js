// ─────────────────────────────────────────────
//  PRODUCT CATALOGUE  –  edit this file only
//  Columns: id | name | brand | category | price (USD) | original (USD, null = no discount)
//           img (Unsplash URL) | rating | reviews | badge ('new' | 'sale' | null)
// ─────────────────────────────────────────────
const products = [

  // ── SKINCARE ──────────────────────────────────────────────────────────────
  { id:1,  name:'Rose Gold Serum',             brand:'Lumière',  category:'skincare',  price:89, original:120, img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80', rating:4.8, reviews:214, badge:'sale' },
  { id:5,  name:'Vitamin C Brightening Cream', brand:'Glow Lab', category:'skincare',  price:58, original:75,  img:'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80', rating:4.5, reviews:441, badge:'sale' },
  { id:9,  name:'Hyaluronic Acid Toner',       brand:'Glow Lab', category:'skincare',  price:42, original:55,  img:'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&q=80', rating:4.7, reviews:519, badge:'sale' },
  { id:13, name:'Aloe Vera Gel',               brand:'Glow Lab', category:'skincare',  price:5,  original:null,img:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80', rating:4.4, reviews:632, badge:'new'  },
  { id:14, name:'Face Wash Foam',              brand:'Lumière',  category:'skincare',  price:8,  original:12,  img:'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80', rating:4.3, reviews:310, badge:'sale' },
  { id:15, name:'Sunscreen SPF 50',            brand:'Glow Lab', category:'skincare',  price:12, original:18,  img:'https://images.unsplash.com/photo-1526758097130-bab247274f58?w=400&q=80', rating:4.6, reviews:287, badge:'sale' },
  { id:16, name:'Under Eye Cream',             brand:'Lumière',  category:'skincare',  price:19, original:null,img:'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80', rating:4.2, reviews:178, badge:'new'  },
  { id:17, name:'Charcoal Face Mask',          brand:'Noir',     category:'skincare',  price:7,  original:10,  img:'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80', rating:4.5, reviews:402, badge:'sale' },

  // ── SKINCARE – SUMMER PICKS ───────────────────────────────────────────────
  { id:34, name:'After Sun Cooling Gel',       brand:'Glow Lab', category:'skincare',  price:4,  original:7,   img:'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80', rating:4.6, reviews:389, badge:'sale' },
  { id:35, name:'SPF 30 Tinted Moisturiser',   brand:'Glow Lab', category:'skincare',  price:6,  original:10,  img:'https://images.unsplash.com/photo-1631390163526-e7b2e3b0b5e1?w=400&q=80', rating:4.4, reviews:271, badge:'sale' },
  { id:36, name:'Watermelon Face Mist',        brand:'Lumière',  category:'skincare',  price:5,  original:null,img:'https://images.unsplash.com/photo-1643185539104-3622eb1f0ff8?w=400&q=80', rating:4.5, reviews:318, badge:'new'  },
  { id:37, name:'Oil-Control Clay Mask',       brand:'Noir',     category:'skincare',  price:4,  original:6,   img:'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80', rating:4.3, reviews:204, badge:'sale' },
  { id:38, name:'Cucumber Eye Patches',        brand:'Glow Lab', category:'skincare',  price:3,  original:null,img:'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80', rating:4.4, reviews:456, badge:'new'  },
  { id:39, name:'Tan Removal Scrub',           brand:'Lumière',  category:'skincare',  price:5,  original:8,   img:'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80', rating:4.5, reviews:337, badge:'sale' },
  { id:40, name:'Prickly Heat Powder',         brand:'Glow Lab', category:'skincare',  price:2,  original:null,img:'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=400&q=80', rating:4.2, reviews:512, badge:'new'  },
  { id:41, name:'Lip Balm SPF 20',             brand:'Lumière',  category:'skincare',  price:2,  original:4,   img:'https://images.unsplash.com/photo-1586495777744-4e6232bf2f9b?w=400&q=80', rating:4.6, reviews:623, badge:'sale' },

  // ── COSMETICS ─────────────────────────────────────────────────────────────
  { id:2,  name:'Velvet Matte Lipstick',       brand:'Rouge',    category:'cosmetic',  price:34, original:null,img:'https://images.unsplash.com/photo-1631214524020-3c69b3b0e5e7?w=400&q=80', rating:4.6, reviews:189, badge:'new'  },
  { id:6,  name:'Smoky Eye Palette',           brand:'Noir',     category:'cosmetic',  price:47, original:null,img:'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80', rating:4.4, reviews:156, badge:null   },
  { id:10, name:'Nude Gloss Set',              brand:'Rouge',    category:'cosmetic',  price:29, original:null,img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80', rating:4.3, reviews:88,  badge:null   },
  { id:18, name:'Kajal Eyeliner',              brand:'Noir',     category:'cosmetic',  price:3,  original:null,img:'https://images.unsplash.com/photo-1583241475880-083f84372725?w=400&q=80', rating:4.5, reviews:724, badge:'new'  },
  { id:19, name:'Compact Powder',              brand:'Rouge',    category:'cosmetic',  price:6,  original:9,   img:'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80', rating:4.2, reviews:315, badge:'sale' },
  { id:20, name:'Blush Palette',               brand:'Rouge',    category:'cosmetic',  price:14, original:20,  img:'https://images.unsplash.com/photo-1599733594230-6b823276d4b5?w=400&q=80', rating:4.4, reviews:198, badge:'sale' },
  { id:21, name:'Mascara Volume',              brand:'Noir',     category:'cosmetic',  price:9,  original:null,img:'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80', rating:4.3, reviews:267, badge:'new'  },
  { id:22, name:'Foundation Stick',            brand:'Rouge',    category:'cosmetic',  price:18, original:25,  img:'https://images.unsplash.com/photo-1590156562745-5d53b8c0f9a4?w=400&q=80', rating:4.5, reviews:341, badge:'sale' },

  // ── COSMETICS – SUMMER PICKS ──────────────────────────────────────────────
  { id:42, name:'Waterproof Kajal',            brand:'Noir',     category:'cosmetic',  price:3,  original:null,img:'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&q=80', rating:4.6, reviews:841, badge:'new'  },
  { id:43, name:'Coral Lip Tint',              brand:'Rouge',    category:'cosmetic',  price:4,  original:6,   img:'https://images.unsplash.com/photo-1586495777744-4e6232bf2f9b?w=400&q=80', rating:4.4, reviews:392, badge:'sale' },
  { id:44, name:'Bronzer Stick',               brand:'Rouge',    category:'cosmetic',  price:5,  original:8,   img:'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&q=80', rating:4.3, reviews:218, badge:'sale' },
  { id:45, name:'Peach Blush Duo',             brand:'Rouge',    category:'cosmetic',  price:6,  original:null,img:'https://images.unsplash.com/photo-1631390163526-e7b2e3b0b5e1?w=400&q=80', rating:4.5, reviews:174, badge:'new'  },
  { id:46, name:'Waterproof Mascara',          brand:'Noir',     category:'cosmetic',  price:7,  original:10,  img:'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80', rating:4.4, reviews:307, badge:'sale' },
  { id:47, name:'Matte Nude Lipstick',         brand:'Rouge',    category:'cosmetic',  price:4,  original:null,img:'https://images.unsplash.com/photo-1599733594230-6b823276d4b5?w=400&q=80', rating:4.3, reviews:265, badge:'new'  },

  // ── JEWELLERY ─────────────────────────────────────────────────────────────
  { id:3,  name:'Diamond Drop Earrings',       brand:'Éclat',    category:'jewellery', price:149,original:199, img:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', rating:4.9, reviews:97,  badge:'sale' },
  { id:7,  name:'Gold Chain Necklace',         brand:'Éclat',    category:'jewellery', price:89, original:110, img:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', rating:4.8, reviews:73,  badge:'sale' },
  { id:11, name:'Pearl Stud Earrings',         brand:'Éclat',    category:'jewellery', price:65, original:80,  img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80', rating:4.9, reviews:134, badge:'sale' },
  { id:23, name:'Silver Toe Ring',             brand:'Éclat',    category:'jewellery', price:4,  original:null,img:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80', rating:4.3, reviews:189, badge:'new'  },
  { id:24, name:'Beaded Bracelet',             brand:'Éclat',    category:'jewellery', price:6,  original:9,   img:'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=400&q=80', rating:4.4, reviews:256, badge:'sale' },
  { id:25, name:'Oxidised Bangles Set',        brand:'Éclat',    category:'jewellery', price:8,  original:null,img:'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80', rating:4.2, reviews:143, badge:'new'  },
  { id:26, name:'Kundan Maang Tikka',          brand:'Éclat',    category:'jewellery', price:15, original:22,  img:'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80', rating:4.7, reviews:98,  badge:'sale' },
  { id:27, name:'Rose Gold Ring',              brand:'Éclat',    category:'jewellery', price:35, original:50,  img:'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=400&q=80', rating:4.8, reviews:211, badge:'sale' },

  // ── JEWELLERY – SUMMER PICKS ──────────────────────────────────────────────
  { id:48, name:'Seashell Anklet',             brand:'Éclat',    category:'jewellery', price:3,  original:null,img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80', rating:4.4, reviews:298, badge:'new'  },
  { id:49, name:'Colourful Bead Necklace',     brand:'Éclat',    category:'jewellery', price:4,  original:6,   img:'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80', rating:4.3, reviews:187, badge:'sale' },
  { id:50, name:'Floral Stud Earrings',        brand:'Éclat',    category:'jewellery', price:3,  original:null,img:'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&q=80', rating:4.5, reviews:341, badge:'new'  },
  { id:51, name:'Boho Layered Bracelet',       brand:'Éclat',    category:'jewellery', price:5,  original:8,   img:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80', rating:4.4, reviews:223, badge:'sale' },
  { id:52, name:'Sun Charm Pendant',           brand:'Éclat',    category:'jewellery', price:6,  original:null,img:'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80', rating:4.6, reviews:156, badge:'new'  },

  // ── FRAGRANCE ─────────────────────────────────────────────────────────────
  { id:4,  name:'Midnight Bloom Perfume',      brand:'Sillage',  category:'fragrance', price:112,original:null,img:'https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&q=80', rating:4.7, reviews:302, badge:'new'  },
  { id:8,  name:'Cherry Blossom Mist',         brand:'Sillage',  category:'fragrance', price:68, original:null,img:'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80', rating:4.6, reviews:228, badge:'new'  },
  { id:12, name:'Oud Wood Cologne',            brand:'Sillage',  category:'fragrance', price:135,original:null,img:'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&q=80', rating:4.8, reviews:61,  badge:'new'  },
  { id:28, name:'Rose Body Mist',              brand:'Sillage',  category:'fragrance', price:5,  original:8,   img:'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&q=80', rating:4.3, reviews:412, badge:'sale' },
  { id:29, name:'Lavender Deodorant',          brand:'Sillage',  category:'fragrance', price:4,  original:null,img:'https://images.unsplash.com/photo-1600612253971-57b7f6e5b0e3?w=400&q=80', rating:4.2, reviews:298, badge:'new'  },
  { id:30, name:'Jasmine Attar',               brand:'Sillage',  category:'fragrance', price:7,  original:10,  img:'https://images.unsplash.com/photo-1547887538-047f814d0d9a?w=400&q=80', rating:4.5, reviews:187, badge:'sale' },
  { id:31, name:'Sandalwood Perfume Oil',      brand:'Sillage',  category:'fragrance', price:11, original:null,img:'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80', rating:4.6, reviews:143, badge:'new'  },
  { id:32, name:'Citrus Splash EDT',           brand:'Sillage',  category:'fragrance', price:22, original:30,  img:'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&q=80', rating:4.4, reviews:176, badge:'sale' },

  // ── FRAGRANCE – SUMMER PICKS ──────────────────────────────────────────────
  { id:53, name:'Cucumber Mint Body Mist',     brand:'Sillage',  category:'fragrance', price:4,  original:6,   img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', rating:4.5, reviews:487, badge:'sale' },
  { id:54, name:'Citrus Burst Deodorant',      brand:'Sillage',  category:'fragrance', price:3,  original:null,img:'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80', rating:4.3, reviews:362, badge:'new'  },
  { id:55, name:'Mango Splash EDT',            brand:'Sillage',  category:'fragrance', price:6,  original:9,   img:'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&q=80', rating:4.4, reviews:291, badge:'sale' },
  { id:56, name:'Coconut Sunscreen Mist',      brand:'Sillage',  category:'fragrance', price:5,  original:null,img:'https://images.unsplash.com/photo-1526758097130-bab247274f58?w=400&q=80', rating:4.5, reviews:214, badge:'new'  },
  { id:57, name:'Watermelon Lip Gloss Mist',   brand:'Sillage',  category:'fragrance', price:4,  original:7,   img:'https://images.unsplash.com/photo-1631214524020-3c69b3b0e5e7?w=400&q=80', rating:4.2, reviews:178, badge:'sale' },
  { id:58, name:'Aloe & Green Tea Mist',       brand:'Sillage',  category:'fragrance', price:5,  original:null,img:'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80', rating:4.6, reviews:243, badge:'new'  },
];
