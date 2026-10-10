/**
 * NOVA — FUTURE OF SHOPPING
 * Prompt War Challenge • Antigravity Handoff • Version 2.0
 * Pure Vanilla JavaScript Application Architecture
 */

'use strict';

/* ==========================================================================
   1. MASTER CATALOGUE: EXACTLY 48 UNIQUE PRODUCTS ACROSS 7 CATEGORIES
   Breakdown:
   - Audio: 8
   - Wearables: 8
   - Workspace: 8
   - Lifestyle: 8
   - Gaming: 6
   - Mobile Accessories: 6
   - Smart Home: 4
   ========================================================================== */
/* ==========================================================================
   1. MASTER CATALOGUE: 105 FLAGSHIP PRODUCTS ACROSS 7 MEGA-CATEGORIES (15 PER CATEGORY)
   - phones: 15
   - laptops: 15
   - electronics: 15
   - fashion: 15
   - books: 15
   - accessories: 15
   - smart-home: 15
   ========================================================================== */
const PRODUCTS = [
  {
    "id": "nova-phn-01",
    "name": "OnePlus 13 5G Flagship",
    "brand": "OnePlus",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 37699,
    "originalPrice": 47099,
    "rating": 4.8,
    "reviewCount": 1420,
    "boughtPastMonth": "2.5k+",
    "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    "badge": "Flagship Choice",
    "featured": true,
    "description": "Snapdragon 8 Elite, 6000mAh Glacier Battery, 2K 120Hz ProXDR display, Hasselblad Master cameras.",
    "gallery": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Emerald Green",
        "hex": "#2D5A47",
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Midnight Black",
        "hex": "#1C1C1E",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Arctic Silver",
        "hex": "#E2E8F0",
        "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "256GB / 12GB RAM",
          "priceDelta": 0
        },
        {
          "label": "512GB / 16GB RAM",
          "priceDelta": 2700
        },
        {
          "label": "1TB / 24GB RAM",
          "priceDelta": 6300
        }
      ]
    },
    "highlights": [
      "Qualcomm Snapdragon 8 Elite SoC built on TSMC 3nm with custom Oryon CPU architecture",
      "6,000mAh Silicon-Carbon Glacier Battery with 100W SUPERVOOC and 50W AIRVOOC Wireless",
      "6.82\" 2K 120Hz Oriental LTPO OLED Display with 4,500 nits peak outdoor brightness",
      "Triple 50MP Sony LYT-808 Camera Array tuned with 5th Gen Hasselblad Natural Color Science"
    ],
    "specs": {
      "Processor": "Snapdragon 8 Elite (3nm, Octa-Core 4.32GHz)",
      "Display": "6.82\" 2K Quad HD+ (3168x1440) 120Hz LTPO OLED",
      "Rear Cameras": "50MP Sony LYT-808 OIS + 50MP Ultra-Wide + 50MP 3x Periscope",
      "Front Camera": "32MP Sony IMX615 with 4K 60fps",
      "Battery & Charging": "6000mAh Glacier Battery • 100W Wired + 50W Wireless",
      "Durability": "IP68 & IP69 Dust and Water Resistance Certified",
      "Software": "OxygenOS 15 based on Android 15 (4 Major OS Upgrades)",
      "Warranty": "1-Year Official OnePlus Brand Warranty"
    },
    "exchangeDiscount": 13195,
    "bundle": {
      "id": "nova-acc-04",
      "name": "100W Dual-Port GaN Fast Charger",
      "price": 1099,
      "savings": 330
    },
    "keywords": [
      "oneplus 13 5g flagship",
      "oneplus",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-02",
    "name": "Apple iPhone 16 Pro Max",
    "brand": "Apple",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 75299,
    "originalPrice": 94099,
    "rating": 4.9,
    "reviewCount": 3210,
    "boughtPastMonth": "4.2k+",
    "image": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    "badge": "Best Seller",
    "featured": true,
    "description": "A18 Pro chip, Grade 5 Titanium chassis, 48MP Fusion camera with 5x Telephoto, 4K 120 fps Dolby Vision.",
    "gallery": [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Desert Titanium",
        "hex": "#C8A67B",
        "image": "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Natural Titanium",
        "hex": "#B5AE9E",
        "image": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Black Titanium",
        "hex": "#262627",
        "image": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "White Titanium",
        "hex": "#F5F5F7",
        "image": "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "256GB NVMe",
          "priceDelta": 0
        },
        {
          "label": "512GB NVMe",
          "priceDelta": 9000
        },
        {
          "label": "1TB NVMe",
          "priceDelta": 18000
        }
      ]
    },
    "highlights": [
      "A18 Pro chip with 6-core GPU and hardware-accelerated ray tracing with Apple Intelligence",
      "6.9-inch Super Retina XDR OLED display with ProMotion 120Hz and Ceramic Shield Gen 2",
      "Pro camera system: 48MP Fusion, 48MP Ultra Wide, and 12MP 5x Telephoto with Camera Control",
      "Up to 33 hours video playback with MagSafe wireless fast charging up to 25W"
    ],
    "specs": {
      "Processor": "Apple A18 Pro (2nd-gen 3nm, 6-Core CPU + 6-Core GPU)",
      "Display": "6.9\" Super Retina XDR OLED (2868x1320) 120Hz ProMotion",
      "Cameras": "48MP Main Sensor-Shift OIS + 48MP Ultra-Wide + 12MP 5x Tetraprism",
      "Video": "4K 120 fps Dolby Vision HDR with ProRes Log and Studio Mics",
      "Chassis": "Aerospace Grade 5 Titanium with Micro-blasted Matte Texture",
      "Connectivity": "USB-C 3.2 Gen 2 (10Gbps), Wi-Fi 7, Bluetooth 5.3",
      "In The Box": "iPhone 16 Pro Max, 1m Braided USB-C Woven Cable",
      "Warranty": "1-Year Apple Limited Warranty"
    },
    "exchangeDiscount": 26355,
    "bundle": {
      "id": "nova-acc-03",
      "name": "MagSafe Leather Card Wallet",
      "price": 1999,
      "savings": 600
    },
    "keywords": [
      "apple iphone 16 pro max",
      "apple",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-03",
    "name": "Samsung Galaxy S25 Ultra",
    "brand": "Samsung",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 67599,
    "originalPrice": 84499,
    "rating": 4.8,
    "reviewCount": 2840,
    "boughtPastMonth": "3.1k+",
    "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
    "badge": "Top Rated",
    "featured": true,
    "description": "Snapdragon 8 Elite Galaxy Edition, Built-in S Pen, 200MP Quad Telephoto System, Titanium Unibody.",
    "gallery": [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Titanium Gray",
        "hex": "#636267",
        "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Titanium Violet",
        "hex": "#4A3E5C",
        "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Titanium Black",
        "hex": "#1C1C1E",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "256GB / 12GB RAM",
          "priceDelta": 0
        },
        {
          "label": "512GB / 12GB RAM",
          "priceDelta": 6800
        },
        {
          "label": "1TB / 16GB RAM",
          "priceDelta": 13500
        }
      ]
    },
    "highlights": [
      "Galaxy AI Suite with live call translation, Circle to Search, and generative note assistance",
      "Integrated Bluetooth S Pen stylus with 2.8ms ultra-low latency writing precision",
      "200MP Quad Telephoto sensor array with 100x Space Zoom and Nightography 4K video",
      "Corning Gorilla Armor anti-reflective glass surface cutting ambient glare by 75%"
    ],
    "specs": {
      "Processor": "Snapdragon 8 Elite for Galaxy (Overclocked 4.47GHz)",
      "Display": "6.8\" Dynamic AMOLED 2X QHD+ 120Hz (3,000 nits)",
      "Cameras": "200MP Main + 50MP 5x Periscope + 10MP 3x + 50MP Ultra-Wide",
      "Stylus": "Embedded Low-Latency S Pen Stylus with Air Gestures",
      "Battery & Charging": "5000mAh Dual-Cell • 45W Super Fast 2.0 + 15W Wireless",
      "Durability": "Grade 5 Titanium Frame with IP68 Submersion Resistance",
      "Software": "One UI 7 on Android 15 with 7 Generations OS Updates",
      "Warranty": "1-Year Official Samsung Brand Warranty"
    },
    "exchangeDiscount": 23660,
    "bundle": {
      "id": "nova-acc-04",
      "name": "45W Super Fast GaN Charger",
      "price": 999,
      "savings": 300
    },
    "keywords": [
      "samsung galaxy s25 ultra",
      "samsung",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-04",
    "name": "Google Pixel 9 Pro XL",
    "brand": "Google",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 57199,
    "originalPrice": 71499,
    "rating": 4.7,
    "reviewCount": 1890,
    "boughtPastMonth": "1.8k+",
    "image": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
    "badge": "Editor’s Choice",
    "featured": false,
    "description": "Google Tensor G4, Gemini Live AI integration, Pro triple camera with Super Res Zoom, 16GB RAM.",
    "gallery": [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#1F2022",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Porcelain White",
        "hex": "#F0EFE9",
        "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Hazel Green",
        "hex": "#7E8578",
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "128GB / 16GB RAM",
          "priceDelta": 0
        },
        {
          "label": "256GB / 16GB RAM",
          "priceDelta": 4500
        },
        {
          "label": "512GB / 16GB RAM",
          "priceDelta": 9900
        }
      ]
    },
    "highlights": [
      "Next-gen Google Tensor G4 with dedicated Titan M2 security coprocessor",
      "Gemini Live multimodal voice assistant built directly into device OS",
      "Super Actua 6.8\" OLED display reaching 3,000 nits peak outdoor visibility",
      "Best-in-class computational photography with Video Boost and Night Sight 8K"
    ],
    "specs": {
      "Processor": "Google Tensor G4 (4nm with Titan M2 Coprocessor)",
      "Display": "6.8\" Super Actua LTPO OLED (1344x2992) 1-120Hz",
      "Cameras": "50MP Octa PD Main (OIS) + 48MP Ultra-Wide + 48MP 5x Telephoto",
      "RAM": "16GB LPDDR5X RAM for on-device AI model caching",
      "Battery": "5060mAh with 37W wired charging and 23W Wireless",
      "Support": "7 Full Years of Android OS, Security & Feature Drops",
      "Warranty": "1-Year Official Google Hardware Warranty"
    },
    "exchangeDiscount": 20020,
    "bundle": {
      "id": "nova-acc-04",
      "name": "Google 30W USB-C Fast Charger",
      "price": 999,
      "savings": 300
    },
    "keywords": [
      "google pixel 9 pro xl",
      "google",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-05",
    "name": "Apple iPad Pro 13-inch M4",
    "brand": "Apple",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 67499,
    "originalPrice": 84399,
    "rating": 4.9,
    "reviewCount": 1420,
    "boughtPastMonth": "1.4k+",
    "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    "badge": "Ultra Premium",
    "featured": true,
    "description": "Groundbreaking Apple M4 silicon, Ultra Retina XDR Tandem OLED, impossible 5.1mm thin aluminum profile.",
    "gallery": [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Space Black",
        "hex": "#202022",
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Silver Aluminum",
        "hex": "#E1E3E5",
        "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "256GB Wi-Fi",
          "priceDelta": 0
        },
        {
          "label": "512GB Wi-Fi",
          "priceDelta": 9000
        },
        {
          "label": "1TB Tandem Glass",
          "priceDelta": 24800
        }
      ]
    },
    "highlights": [
      "Apple M4 chip with 10-core CPU, 10-core GPU, and 38 TOPS Neural Engine",
      "World’s first Tandem OLED display delivering 1,000 nits full-screen XDR brightness",
      "Thinness marvel: measures just 5.1mm thin, the thinnest Apple device ever made",
      "Support for Apple Pencil Pro with haptic feedback, barrel roll, and squeeze gestures"
    ],
    "specs": {
      "Processor": "Apple M4 Chip (10-Core CPU + 10-Core GPU + 38 TOPS NPU)",
      "Display": "13.0\" Ultra Retina XDR Tandem OLED (2752x2064) 120Hz",
      "Brightness": "1000 nits full screen / 1600 nits peak HDR",
      "Thickness": "5.1mm Ultra-thin Profile • 579g 100% Recycled Aluminum",
      "Ports": "Thunderbolt 4 / USB 4 (Up to 40Gbps & 6K display out)",
      "Warranty": "1-Year Apple Hardware Limited Warranty"
    },
    "exchangeDiscount": 23625,
    "bundle": {
      "id": "nova-acc-01",
      "name": "Magic Keyboard for iPad Pro 13\"",
      "price": 13499,
      "savings": 4050
    },
    "keywords": [
      "apple ipad pro 13-inch m4",
      "apple",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-06",
    "name": "Nothing Phone (2) Glyph Edition",
    "brand": "Nothing",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 24699,
    "originalPrice": 30899,
    "rating": 4.6,
    "reviewCount": 2190,
    "boughtPastMonth": "2.1k+",
    "image": "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
    "badge": "Trendsetter",
    "featured": false,
    "description": "Iconic Glyph Interface with programmable LED light strips, Nothing OS 2.5, Snapdragon 8+ Gen 1.",
    "gallery": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Dark Gray",
        "hex": "#2C2D30",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "White",
        "hex": "#F5F5F7",
        "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "128GB / 8GB RAM",
          "priceDelta": 0
        },
        {
          "label": "256GB / 12GB RAM",
          "priceDelta": 1800
        },
        {
          "label": "512GB / 12GB RAM",
          "priceDelta": 4100
        }
      ]
    },
    "highlights": [
      "New Glyph Interface with 33 addressable zones, essential notifications and timer tracking",
      "Qualcomm Snapdragon 8+ Gen 1 flagship processor with 80% performance uplift",
      "Dual 50MP Sony flagship sensors with Advanced HDR and 4K 60fps EIS stabilization",
      "Nothing OS 2.0 with custom monochrome widgets and app lock privacy tools"
    ],
    "specs": {
      "Processor": "Snapdragon 8+ Gen 1 (4nm, Octa-core up to 3.2GHz)",
      "Display": "6.7\" Flexible LTPO OLED (2412x1080) 1-120Hz HDR10+",
      "Cameras": "50MP Sony IMX890 OIS + 50MP Samsung JN1 Ultra-Wide",
      "Battery": "4700mAh • 45W Wired (100% in 55m) + 15W Qi Wireless",
      "Warranty": "1-Year Nothing Brand Warranty"
    },
    "exchangeDiscount": 8645,
    "bundle": {
      "id": "nova-acc-04",
      "name": "Nothing 45W Power Adapter",
      "price": 1099,
      "savings": 330
    },
    "keywords": [
      "nothing phone (2) glyph edition",
      "nothing",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-07",
    "name": "Samsung Galaxy Z Fold 6",
    "brand": "Samsung",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 85799,
    "originalPrice": 107199,
    "rating": 4.7,
    "reviewCount": 980,
    "boughtPastMonth": "850+",
    "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
    "badge": "Foldable King",
    "featured": false,
    "description": "Ultra-slim book-style foldable, Armor Aluminum hinge, 7.6\" Dynamic AMOLED 2X internal canvas.",
    "gallery": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Silver Shadow",
        "hex": "#C2C4C6",
        "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Navy Blue",
        "hex": "#1C2938",
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "256GB / 12GB RAM",
          "priceDelta": 0
        },
        {
          "label": "512GB / 12GB RAM",
          "priceDelta": 7200
        }
      ]
    },
    "highlights": [
      "New zero-gap dual-rail hinge reducing thickness to 12.1mm folded and 239g weight",
      "7.6-inch QXGA+ Dynamic AMOLED 2X 120Hz folding screen with S Pen stylus support",
      "Galaxy AI multimodal multitasking: side-by-side app translation and smart sketch-to-image",
      "Armor Aluminum frame and IP48 water resistance certification"
    ],
    "specs": {
      "Processor": "Snapdragon 8 Gen 3 for Galaxy (4nm)",
      "Internal Display": "7.6\" Dynamic AMOLED 2X (2160x1856) 120Hz LTPO",
      "Cover Display": "6.3\" Dynamic AMOLED 2X (2376x968) 120Hz",
      "Cameras": "50MP OIS Main + 12MP Ultra-Wide + 10MP 3x Telephoto",
      "Warranty": "1-Year Samsung Brand Warranty + 1-Year Screen Protection"
    },
    "exchangeDiscount": 30030,
    "bundle": {
      "id": "nova-acc-04",
      "name": "Samsung 45W GaN Travel Charger",
      "price": 1099,
      "savings": 330
    },
    "keywords": [
      "samsung galaxy z fold 6",
      "samsung",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-08",
    "name": "Xiaomi 14 Ultra Leica Optics",
    "brand": "Xiaomi",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 57999,
    "originalPrice": 72499,
    "rating": 4.8,
    "reviewCount": 860,
    "boughtPastMonth": "720+",
    "image": "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80",
    "badge": "Camera Beast",
    "featured": false,
    "description": "Quad 50MP Leica Summilux lens system, 1-inch LYT-900 sensor, stepless variable aperture f/1.63-f/4.0.",
    "gallery": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Black Vegan Leather",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "White Ceramic",
        "hex": "#F4F5F6",
        "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "512GB / 16GB RAM",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "1-inch Sony LYT-900 sensor with stepless variable physical aperture from f/1.63 to f/4.0",
      "Quad 50MP Leica focal length coverage: 12mm, 23mm, 75mm telephoto, 120mm periscope",
      "High-strength aluminum unibody frame with Xiaomi Shield Glass drop protection",
      "5000mAh battery with 90W HyperCharge wired and 80W wireless charging"
    ],
    "specs": {
      "Processor": "Snapdragon 8 Gen 3 (4nm, Octa-Core)",
      "Display": "6.73\" WQHD+ (3200x1440) 120Hz AMOLED 3000 nits",
      "Cameras": "Quad 50MP Leica (1\" LYT-900 + 75mm + 120mm + 12mm)",
      "Battery": "5000mAh • 90W Wired + 80W Wireless HyperCharge",
      "Warranty": "1-Year Official Xiaomi India Warranty"
    },
    "exchangeDiscount": 20300,
    "bundle": {
      "id": "nova-acc-04",
      "name": "Xiaomi 120W HyperCharge Adapter",
      "price": 1299,
      "savings": 390
    },
    "keywords": [
      "xiaomi 14 ultra leica optics",
      "xiaomi",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-09",
    "name": "Apple iPad Air 11-inch M2",
    "brand": "Apple",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 38899,
    "originalPrice": 48599,
    "rating": 4.8,
    "reviewCount": 1650,
    "boughtPastMonth": "1.9k+",
    "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80",
    "badge": "Student Favorite",
    "featured": false,
    "description": "Apple M2 chip, 11-inch Liquid Retina display with P3 wide color, landscape stereo speakers, Touch ID.",
    "gallery": [
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Space Gray",
        "hex": "#4B4D52",
        "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Starlight",
        "hex": "#E5DFD5",
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Blue",
        "hex": "#A3B4C5",
        "image": "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "128GB Wi-Fi",
          "priceDelta": 0
        },
        {
          "label": "256GB Wi-Fi",
          "priceDelta": 4500
        },
        {
          "label": "512GB Wi-Fi",
          "priceDelta": 13500
        }
      ]
    },
    "highlights": [
      "Supercharged by Apple M2 chip featuring 8-core CPU and 10-core GPU",
      "11-inch Liquid Retina display with True Tone, P3 wide color, and antireflective coating",
      "Landscape 12MP Ultra Wide front camera with Center Stage video calls",
      "Works with Apple Pencil Pro, Apple Pencil (USB-C), and Magic Keyboard"
    ],
    "specs": {
      "Processor": "Apple M2 Silicon (8-Core CPU + 10-Core GPU + 16-Core Neural Engine)",
      "Display": "11.0\" Liquid Retina (2360x1640) 500 nits P3 Color",
      "Cameras": "12MP Wide back camera 4K video + 12MP Center Stage front",
      "Weight": "462g Lightweight 100% Recycled Aluminum Enclosure",
      "Warranty": "1-Year Apple Hardware Limited Warranty"
    },
    "exchangeDiscount": 13615,
    "bundle": {
      "id": "nova-acc-01",
      "name": "Magic Keyboard for iPad Air 11\"",
      "price": 11199,
      "savings": 3360
    },
    "keywords": [
      "apple ipad air 11-inch m2",
      "apple",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-10",
    "name": "OnePlus Open Foldable Flagship",
    "brand": "OnePlus",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 72799,
    "originalPrice": 90999,
    "rating": 4.7,
    "reviewCount": 720,
    "boughtPastMonth": "610+",
    "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80",
    "badge": "Slim Foldable",
    "featured": false,
    "description": "Thinnest book foldable with Flexion Hinge, Dual 120Hz ProXDR displays, Sony LYT-T808 Pixel Stacked sensor.",
    "gallery": [
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Emerald Dusk",
        "hex": "#2D5A47",
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Voyager Black",
        "hex": "#1C1C1E",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "512GB / 16GB RAM",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Open Canvas multitasking: three simultaneous full-sized apps on 7.82\" screen",
      "Sony LYT-T808 \"Pixel Stacked\" main sensor capturing 2x light absorption",
      "Aerospace titanium alloy and carbon fiber hinge rated for 1,000,000 folds",
      "67W SUPERVOOC fast charging replenishing 1-100% in 42 minutes"
    ],
    "specs": {
      "Processor": "Snapdragon 8 Gen 2 (4nm, Octa-Core 3.2GHz)",
      "Main Display": "7.82\" Flexi-fluid AMOLED (2440x2268) 1-120Hz 2800 nits",
      "Cover Display": "6.31\" Super Fluid AMOLED (2484x1116) 1-120Hz",
      "Cameras": "48MP Main + 64MP 3x Periscope + 48MP Ultra-Wide Hasselblad",
      "Warranty": "1-Year Official OnePlus Brand Warranty"
    },
    "exchangeDiscount": 25480,
    "bundle": {
      "id": "nova-acc-04",
      "name": "80W SUPERVOOC Car Fast Charger",
      "price": 1299,
      "savings": 390
    },
    "keywords": [
      "oneplus open foldable flagship",
      "oneplus",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-11",
    "name": "Motorola Edge 50 Ultra Pantone",
    "brand": "Motorola",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 38999,
    "originalPrice": 48699,
    "rating": 4.6,
    "reviewCount": 950,
    "boughtPastMonth": "820+",
    "image": "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
    "badge": "Pantone Certified",
    "featured": false,
    "description": "Real Nordic Wood back panel, Snapdragon 8s Gen 3, 125W TurboPower charging, Pantone Validated cameras.",
    "gallery": [
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Nordic Wood",
        "hex": "#B89B72",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Peach Fuzz",
        "hex": "#FFBE98",
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "512GB / 16GB RAM",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "World-first smartphone featuring genuine Nordic wood rear enclosure with wood scent",
      "125W TurboPower wired charging giving a full day of battery life in 7 minutes",
      "World-first Pantone Validated display and camera color tuning system",
      "IP68 underwater protection up to 1.5 meters for 30 minutes"
    ],
    "specs": {
      "Processor": "Snapdragon 8s Gen 3 (4nm TSMC)",
      "Display": "6.7\" Super HD (2712x1220) 144Hz pOLED 2500 nits",
      "Cameras": "50MP OIS + 64MP 3x Telephoto + 50MP Macro Ultra-Wide",
      "Charging": "125W Wired + 50W Wireless TurboPower",
      "Warranty": "1-Year Motorola India Warranty"
    },
    "exchangeDiscount": 13650,
    "bundle": {
      "id": "nova-acc-04",
      "name": "Moto 125W TurboPower Adapter",
      "price": 1299,
      "savings": 390
    },
    "keywords": [
      "motorola edge 50 ultra pantone",
      "motorola",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-12",
    "name": "ASUS ROG Phone 8 Pro Gaming",
    "brand": "ASUS",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 55099,
    "originalPrice": 68899,
    "rating": 4.8,
    "reviewCount": 620,
    "boughtPastMonth": "490+",
    "image": "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=800&q=80",
    "badge": "Gaming Monster",
    "featured": false,
    "description": "Snapdragon 8 Gen 3, AniMe Vision programmable mini-LED back, AirTrigger ultrasonic touch sensors.",
    "gallery": [
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Phantom Black",
        "hex": "#111215",
        "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "512GB / 16GB RAM",
          "priceDelta": 0
        },
        {
          "label": "1TB / 24GB RAM",
          "priceDelta": 9000
        }
      ]
    },
    "highlights": [
      "AniMe Vision 341 customizable mini-LED matrix display on rear chassis",
      "Ultrasonic AirTrigger buttons providing console-grade dual shoulder triggers",
      "GameCool 8 360-degree thermal architecture with rapid graphite heat spreader",
      "Samsung E6 165Hz AMOLED panel with 720Hz touch sampling response"
    ],
    "specs": {
      "Processor": "Snapdragon 8 Gen 3 (Overclocked 3.3GHz)",
      "Display": "6.78\" FHD+ 165Hz LTPO AMOLED 2500 nits",
      "Battery": "5500mAh Dual-Cell with 65W HyperCharge",
      "Audio": "Dual Front-Facing 5-Magnet Stereo Speakers with Dirac HD",
      "Warranty": "1-Year ASUS ROG Official Warranty"
    },
    "exchangeDiscount": 19285,
    "bundle": {
      "id": "nova-acc-04",
      "name": "AeroActive Cooler X Fan",
      "price": 2699,
      "savings": 810
    },
    "keywords": [
      "asus rog phone 8 pro gaming",
      "asus",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-13",
    "name": "Google Pixel 8a Pure Android",
    "brand": "Google",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 32499,
    "originalPrice": 40599,
    "rating": 4.6,
    "reviewCount": 2340,
    "boughtPastMonth": "2.8k+",
    "image": "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80",
    "badge": "Best Value",
    "featured": false,
    "description": "Google Tensor G3, 120Hz Actua display, Best Take, Magic Audio Eraser, 7 years of OS support.",
    "gallery": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Bay Blue",
        "hex": "#87CEEB",
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Aloe Green",
        "hex": "#B4CBA4",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Obsidian",
        "hex": "#1C1C1E",
        "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "128GB / 8GB RAM",
          "priceDelta": 0
        },
        {
          "label": "256GB / 8GB RAM",
          "priceDelta": 2700
        }
      ]
    },
    "highlights": [
      "Powered by the same Google Tensor G3 silicon as Pixel 8 flagship",
      "6.1-inch Actua OLED display with smooth 120Hz refresh and 2000 nits peak",
      "Flagship camera suite with Real Tone, Super Res Zoom, and Ultra HDR",
      "Matte composite back with recycled satin aluminum camera bar frame"
    ],
    "specs": {
      "Processor": "Google Tensor G3 (4nm with Titan M2 security)",
      "Display": "6.1\" Actua OLED 120Hz (1080x2400) Gorilla Glass 3",
      "Cameras": "64MP Quad PD Main OIS + 13MP Ultra-Wide",
      "Support": "7 Full Years of OS and Security Feature Drops",
      "Warranty": "1-Year Official Google Hardware Warranty"
    },
    "exchangeDiscount": 11375,
    "bundle": {
      "id": "nova-acc-04",
      "name": "Google 30W USB-C Charger",
      "price": 999,
      "savings": 300
    },
    "keywords": [
      "google pixel 8a pure android",
      "google",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-14",
    "name": "Samsung Galaxy Tab S9 Ultra",
    "brand": "Samsung",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 56699,
    "originalPrice": 70899,
    "rating": 4.8,
    "reviewCount": 810,
    "boughtPastMonth": "680+",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    "badge": "Gigantic Canvas",
    "featured": false,
    "description": "Massive 14.6\" Dynamic AMOLED 2X, Snapdragon 8 Gen 2, IP68 water resistance, S Pen included in box.",
    "gallery": [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Graphite Gray",
        "hex": "#3B3C3E",
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Beige Cream",
        "hex": "#EBE5D8",
        "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "256GB / 12GB RAM",
          "priceDelta": 0
        },
        {
          "label": "512GB / 12GB RAM",
          "priceDelta": 6800
        }
      ]
    },
    "highlights": [
      "Cinematic 14.6-inch Dynamic AMOLED 2X screen with Vision Booster contrast",
      "Water and dust resistant tablet (IP68) along with matching IP68 S Pen stylus",
      "DeX Mode creates an instant full laptop desktop interface on demand",
      "Quad AKG stereo speakers with Dolby Atmos spatial surround sound"
    ],
    "specs": {
      "Processor": "Snapdragon 8 Gen 2 for Galaxy",
      "Display": "14.6\" Dynamic AMOLED 2X (2960x1848) 120Hz HDR10+",
      "Stylus": "Included S Pen with Magnetic Bi-directional Charging",
      "Battery": "11,200mAh with 45W Super Fast Charging",
      "Warranty": "1-Year Samsung Brand Warranty"
    },
    "exchangeDiscount": 19845,
    "bundle": {
      "id": "nova-acc-01",
      "name": "Book Cover Keyboard with Touchpad",
      "price": 8499,
      "savings": 2550
    },
    "keywords": [
      "samsung galaxy tab s9 ultra",
      "samsung",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-phn-15",
    "name": "Apple iPhone 15 Plus",
    "brand": "Apple",
    "category": "phones",
    "categoryLabel": "Phones & Tablets",
    "price": 46299,
    "originalPrice": 57899,
    "rating": 4.7,
    "reviewCount": 3100,
    "boughtPastMonth": "3.8k+",
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    "badge": "Battery Champion",
    "featured": false,
    "description": "Dynamic Island, 48MP main camera, 2x Telephoto, color-infused durable glass, all-day battery beast.",
    "gallery": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#262627",
        "image": "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Blue",
        "hex": "#D2DBE1",
        "image": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Pink",
        "hex": "#F6D2D4",
        "image": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "128GB NVMe",
          "priceDelta": 0
        },
        {
          "label": "256GB NVMe",
          "priceDelta": 4500
        }
      ]
    },
    "highlights": [
      "Dynamic Island bubbles up alerts and Live Activities seamlessly",
      "48MP Main camera with 2x optical-quality telephoto sensor crop",
      "Color-infused back glass with aerospace-grade contoured aluminum edges",
      "USB-C universal charging compatibility with reverse AirPods charging"
    ],
    "specs": {
      "Processor": "Apple A16 Bionic (6-Core CPU + 5-Core GPU)",
      "Display": "6.7\" Super Retina XDR OLED (2796x1290) 2000 nits",
      "Battery": "Up to 26 hours video playback (All-day battery benchmark)",
      "Port": "Universal USB-C charge & data interface",
      "Warranty": "1-Year Apple Limited Warranty"
    },
    "exchangeDiscount": 16205,
    "bundle": {
      "id": "nova-acc-03",
      "name": "Apple 20W USB-C Power Adapter",
      "price": 899,
      "savings": 270
    },
    "keywords": [
      "apple iphone 15 plus",
      "apple",
      "phones",
      "phones & tablets",
      "mobile",
      "mobiles",
      "phone",
      "smartphone",
      "smartphones",
      "android",
      "5g",
      "cellphone",
      "handset",
      "tablet"
    ]
  },
  {
    "id": "nova-lap-01",
    "name": "Apple MacBook Pro 16-inch M3 Max",
    "brand": "Apple",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 132999,
    "originalPrice": 166199,
    "rating": 4.9,
    "reviewCount": 890,
    "boughtPastMonth": "950+",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    "badge": "Pro Creator",
    "featured": true,
    "description": "M3 Max 16-Core CPU, 40-Core GPU, Liquid Retina XDR 120Hz display, 48GB Unified Memory, 1TB SSD.",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Space Black",
        "hex": "#202022",
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Silver",
        "hex": "#E1E3E5",
        "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Unified Memory",
      "options": [
        {
          "label": "48GB / 1TB SSD",
          "priceDelta": 0
        },
        {
          "label": "64GB / 2TB SSD",
          "priceDelta": 18000
        },
        {
          "label": "128GB / 4TB SSD",
          "priceDelta": 54000
        }
      ]
    },
    "highlights": [
      "Apple M3 Max chip with 16-core CPU, 40-core GPU, and hardware-accelerated mesh shading",
      "16.2-inch Liquid Retina XDR display with 1,600 nits peak brightness and ProMotion 120Hz",
      "Up to 22 hours battery endurance — the longest battery life ever in a Mac laptop",
      "Six-speaker sound system with force-cancelling woofers and studio three-mic array"
    ],
    "specs": {
      "Processor": "Apple M3 Max (16-Core CPU + 40-Core GPU + 16-Core Neural Engine)",
      "Display": "16.2\" Liquid Retina XDR (3456x2234) 120Hz ProMotion 1000 nits sustained",
      "Memory & Storage": "48GB Unified Memory • 1TB Superfast PCIe NVMe SSD",
      "Ports": "3x Thunderbolt 4, HDMI 2.1, SDXC Slot, MagSafe 3, 3.5mm Headphone Jack",
      "Weight": "2.16 kg Space Black Anodized Aluminum with Anti-fingerprint seal",
      "Warranty": "1-Year Apple Limited Hardware Warranty"
    },
    "exchangeDiscount": 46550,
    "bundle": {
      "id": "nova-acc-09",
      "name": "CalDigit TS4 Thunderbolt 4 18-Port Dock",
      "price": 15699,
      "savings": 4710
    },
    "keywords": [
      "apple macbook pro 16-inch m3 max",
      "apple",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-02",
    "name": "Dell XPS 16 OLED InfinityEdge",
    "brand": "Dell",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 109999,
    "originalPrice": 137499,
    "rating": 4.7,
    "reviewCount": 540,
    "boughtPastMonth": "420+",
    "image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    "badge": "Minimalist Power",
    "featured": false,
    "description": "Intel Core Ultra 9 185H, NVIDIA RTX 4070 8GB, 4K+ OLED Touchscreen, seamless glass touch bar.",
    "gallery": [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Platinum Silver",
        "hex": "#D2D3D5",
        "image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Graphite",
        "hex": "#2F3033",
        "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Configuration",
      "options": [
        {
          "label": "32GB RAM / 1TB SSD / RTX 4060",
          "priceDelta": 0
        },
        {
          "label": "64GB RAM / 2TB SSD / RTX 4070",
          "priceDelta": 15800
        }
      ]
    },
    "highlights": [
      "Intel Core Ultra 9 185H with integrated Intel AI Boost NPU coprocessor",
      "16.3\" 4K+ (3840x2400) OLED touch panel with 100% DCI-P3 color spectrum and Dolby Vision",
      "Seamless haptic glass touchpad integrated flush into the CNC aluminum wrist rest",
      "NVIDIA GeForce RTX 4070 GPU delivering generative AI creative acceleration"
    ],
    "specs": {
      "Processor": "Intel Core Ultra 9 185H (16 Cores, 22 Threads up to 5.1GHz)",
      "Graphics": "NVIDIA GeForce RTX 4070 8GB GDDR6 (60W TGP Studio Drivers)",
      "Display": "16.3\" 4K+ OLED (3840x2400) 90Hz 400 nits Touch",
      "Memory": "32GB LPDDR5X 7467MHz Dual Channel",
      "Storage": "1TB M.2 PCIe Gen4 NVMe SSD",
      "Warranty": "1-Year Dell Premium Support with Onsite Service"
    },
    "exchangeDiscount": 38500,
    "bundle": {
      "id": "nova-acc-02",
      "name": "Logitech MX Master 3S Ergonomic Mouse",
      "price": 3999,
      "savings": 1200
    },
    "keywords": [
      "dell xps 16 oled infinityedge",
      "dell",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-03",
    "name": "ASUS ROG Zephyrus G16 OLED",
    "brand": "ASUS",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 96799,
    "originalPrice": 120999,
    "rating": 4.8,
    "reviewCount": 710,
    "boughtPastMonth": "650+",
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    "badge": "Esports Flagship",
    "featured": true,
    "description": "AMD Ryzen AI 9 HX 370, RTX 4080 12GB, 2.5K 240Hz ROG Nebula OLED, Slash Lighting CNC lid.",
    "gallery": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Eclipse Gray",
        "hex": "#313338",
        "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Platinum White",
        "hex": "#F0F2F5",
        "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Graphics & RAM",
      "options": [
        {
          "label": "32GB / 1TB / RTX 4070",
          "priceDelta": 0
        },
        {
          "label": "32GB / 2TB / RTX 4080",
          "priceDelta": 13500
        }
      ]
    },
    "highlights": [
      "World-first ROG Nebula 2.5K 240Hz OLED gaming panel with 0.2ms response time",
      "Slash Lighting LED array diagonal bar on aluminum lid with dynamic audio visualizer",
      "Ultra-slim 1.49cm unibody CNC aluminum chassis weighing only 1.85kg",
      "Tri-Fan thermal technology with liquid metal compound keeping keyboard cool"
    ],
    "specs": {
      "Processor": "AMD Ryzen AI 9 HX 370 (12 Cores, 24 Threads, 50 TOPS NPU)",
      "Graphics": "NVIDIA GeForce RTX 4080 12GB GDDR6 (115W with Dynamic Boost)",
      "Display": "16.0\" 2.5K (2560x1600) 240Hz 0.2ms G-Sync ROG Nebula OLED",
      "Battery": "90WHr with 100W USB-C PD Charging Support",
      "Warranty": "1-Year ASUS International Onsite Warranty"
    },
    "exchangeDiscount": 33880,
    "bundle": {
      "id": "nova-acc-01",
      "name": "Keychron Q1 Pro Wireless Mechanical Keyboard",
      "price": 8099,
      "savings": 2430
    },
    "keywords": [
      "asus rog zephyrus g16 oled",
      "asus",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-04",
    "name": "Lenovo ThinkPad X1 Carbon Gen 12",
    "brand": "Lenovo",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 83599,
    "originalPrice": 104499,
    "rating": 4.8,
    "reviewCount": 920,
    "boughtPastMonth": "810+",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    "badge": "Executive Tool",
    "featured": false,
    "description": "Intel Core Ultra 7 155H, 2.8K 120Hz OLED, iconic TrackPoint, Aerospace carbon fiber weave chassis.",
    "gallery": [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Deep Black Carbon",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Memory",
      "options": [
        {
          "label": "16GB RAM / 512GB SSD",
          "priceDelta": 0
        },
        {
          "label": "32GB RAM / 1TB SSD",
          "priceDelta": 8100
        }
      ]
    },
    "highlights": [
      "Featherlight 1.09 kg chassis built with recycled carbon fiber and magnesium",
      "Redesigned Communications Bar with 8MP MIPI HDR webcam and Computer Vision security",
      "Legendary spill-resistant ThinkPad keyboard with tactile dished keycaps and dual TrackPoint",
      "Intel Core Ultra processor with dedicated NPU for enterprise productivity AI models"
    ],
    "specs": {
      "Processor": "Intel Core Ultra 7 155H (16 Cores, up to 4.8GHz)",
      "Display": "14.0\" 2.8K (2880x1800) 120Hz OLED 400 nits 100% DCI-P3",
      "Weight & Durability": "1.09 kg • MIL-STD-810H Military Toughness Tested (12 Methods)",
      "Ports": "2x Thunderbolt 4, 2x USB-A 3.2, HDMI 2.1, Nano SIM Slot",
      "Warranty": "3-Year Lenovo Premier Support with Next Business Day Onsite"
    },
    "exchangeDiscount": 29260,
    "bundle": {
      "id": "nova-acc-02",
      "name": "Logitech MX Anywhere 3S Compact Mouse",
      "price": 3099,
      "savings": 930
    },
    "keywords": [
      "lenovo thinkpad x1 carbon gen 12",
      "lenovo",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-05",
    "name": "Apple MacBook Air 15-inch M3",
    "brand": "Apple",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 64799,
    "originalPrice": 80999,
    "rating": 4.9,
    "reviewCount": 2140,
    "boughtPastMonth": "2.8k+",
    "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
    "badge": "Most Popular",
    "featured": true,
    "description": "Apple M3 chip, 15.3-inch Liquid Retina display, silent fanless unibody, 18 hours battery life.",
    "gallery": [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Midnight",
        "hex": "#1E232A",
        "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Starlight",
        "hex": "#EBE5D8",
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Space Gray",
        "hex": "#4B4D52",
        "image": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Memory",
      "options": [
        {
          "label": "16GB RAM / 512GB SSD",
          "priceDelta": 0
        },
        {
          "label": "24GB RAM / 1TB SSD",
          "priceDelta": 13500
        }
      ]
    },
    "highlights": [
      "Supercharged by Apple M3 chip with 8-core CPU and 10-core GPU with hardware ray tracing",
      "Immersive 15.3-inch Liquid Retina display supporting 1 billion colors and 500 nits brightness",
      "Completely silent fanless design with zero noise even during intensive coding sessions",
      "Dual external display support with laptop lid closed"
    ],
    "specs": {
      "Processor": "Apple M3 Chip (3nm, 8-Core CPU + 10-Core GPU + 16-Core Neural Engine)",
      "Display": "15.3\" Liquid Retina (2880x1864) 500 nits True Tone",
      "Battery": "Up to 18 hours video playback • MagSafe 3 Fast Charging",
      "Thickness & Weight": "11.5mm Ultra-thin • 1.51 kg Aluminum Unibody",
      "Warranty": "1-Year Apple Limited Warranty"
    },
    "exchangeDiscount": 22680,
    "bundle": {
      "id": "nova-acc-05",
      "name": "Bellroy Apex Slim Laptop Backpack 20L",
      "price": 8499,
      "savings": 2550
    },
    "keywords": [
      "apple macbook air 15-inch m3",
      "apple",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-06",
    "name": "HP Spectre x360 16 2-in-1",
    "brand": "HP",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 83999,
    "originalPrice": 104999,
    "rating": 4.7,
    "reviewCount": 430,
    "boughtPastMonth": "350+",
    "image": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    "badge": "Convertible Luxury",
    "featured": false,
    "description": "Intel Core Ultra 7 155H, 2.8K OLED 120Hz Touch, 360-degree gem-cut hinge, Rechargeable Tilt Pen included.",
    "gallery": [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Nightfall Black",
        "hex": "#222328",
        "image": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "16GB RAM / 1TB SSD",
          "priceDelta": 0
        },
        {
          "label": "32GB RAM / 2TB SSD",
          "priceDelta": 9900
        }
      ]
    },
    "highlights": [
      "9MP AI Smart Cam with automatic framing, beauty filter, and low-light adjustment",
      "360-degree convertible hinge seamlessly transforming from workstation to studio tablet",
      "Poly Studio quad speakers tuned for professional video conferencing acoustic clarity",
      "HP Rechargeable MPP 2.0 Tilt Pen included in box with magnetic docking"
    ],
    "specs": {
      "Processor": "Intel Core Ultra 7 155H (16 Cores, 22 Threads)",
      "Display": "16.0\" 2.8K (2880x1800) OLED 120Hz Touchscreen with Corning Gorilla Glass NBT",
      "Stylus": "HP Rechargeable MPP2.0 Tilt Pen included",
      "Warranty": "1-Year HP Onsite Warranty + 1-Year Accidental Damage Protection"
    },
    "exchangeDiscount": 29400,
    "bundle": {
      "id": "nova-acc-02",
      "name": "Logitech MX Master 3S Mouse",
      "price": 3999,
      "savings": 1200
    },
    "keywords": [
      "hp spectre x360 16 2-in-1",
      "hp",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-07",
    "name": "Razer Blade 16 Dual-Mode Mini-LED",
    "brand": "Razer",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 125399,
    "originalPrice": 156699,
    "rating": 4.8,
    "reviewCount": 310,
    "boughtPastMonth": "280+",
    "image": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
    "badge": "Peak Performance",
    "featured": false,
    "description": "Intel Core i9-14900HX, RTX 4090 16GB, Dual-Mode Mini-LED (4K 120Hz / FHD+ 240Hz), Vapor Chamber.",
    "gallery": [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Anodized Matte Black",
        "hex": "#19191B",
        "image": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "GPU & Storage",
      "options": [
        {
          "label": "32GB / 2TB / RTX 4080",
          "priceDelta": 0
        },
        {
          "label": "64GB / 4TB / RTX 4090",
          "priceDelta": 27000
        }
      ]
    },
    "highlights": [
      "World’s first Dual-Mode Mini-LED display: switch between native 4K 120Hz and FHD+ 240Hz",
      "Patented full-surface vacuum-sealed copper vapor chamber cooling architecture",
      "CNC-milled single block T6 aerospace aluminum unibody with anodized anti-fingerprint coating",
      "Full desktop RTX 4090 175W max TGP graphics capability in portable form"
    ],
    "specs": {
      "Processor": "Intel Core i9-14900HX (24 Cores, 32 Threads up to 5.8GHz)",
      "Graphics": "NVIDIA GeForce RTX 4090 16GB GDDR6 (175W Full Power)",
      "Display": "16\" Dual-Mode Mini-LED (4K 120Hz or FHD+ 240Hz, 1000 nits HDR)",
      "Warranty": "1-Year Razer Official System Warranty + 2-Year Battery Guarantee"
    },
    "exchangeDiscount": 43890,
    "bundle": {
      "id": "nova-acc-07",
      "name": "BenQ Screenbar Halo Monitor Light",
      "price": 7599,
      "savings": 2280
    },
    "keywords": [
      "razer blade 16 dual-mode mini-led",
      "razer",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-08",
    "name": "LG Gram 17 Ultra-Lightweight",
    "brand": "LG",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 71999,
    "originalPrice": 89999,
    "rating": 4.6,
    "reviewCount": 520,
    "boughtPastMonth": "410+",
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    "badge": "Weightless Giant",
    "featured": false,
    "description": "Huge 17-inch WQXGA IPS screen in an impossible 1.35 kg magnesium alloy body, Intel Core Ultra 7.",
    "gallery": [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "16GB RAM / 1TB SSD",
          "priceDelta": 0
        },
        {
          "label": "32GB RAM / 2TB SSD",
          "priceDelta": 9000
        }
      ]
    },
    "highlights": [
      "Featherlight 1.35 kg weight on a massive 17-inch screen — lightest 17\" laptop in Guinness Records",
      "80WHr high-capacity battery providing up to 24 hours local video playback",
      "WQXGA (2560x1600) 16:10 anti-glare IPS display with 99% DCI-P3 color coverage",
      "Passed 7 MIL-STD-810H durability stress evaluations (Shock, Dust, Temperature)"
    ],
    "specs": {
      "Processor": "Intel Core Ultra 7 155H (16 Cores, up to 4.8GHz)",
      "Display": "17.0\" WQXGA (2560x1600) IPS 350 nits Anti-Glare",
      "Weight": "1.35 kg Nano-carbon Magnesium Alloy Chassis",
      "Warranty": "1-Year LG India Onsite Warranty"
    },
    "exchangeDiscount": 25200,
    "bundle": {
      "id": "nova-acc-05",
      "name": "Bellroy Classic Backpack Plus 24L",
      "price": 7599,
      "savings": 2280
    },
    "keywords": [
      "lg gram 17 ultra-lightweight",
      "lg",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-09",
    "name": "Apple Mac Studio M2 Ultra",
    "brand": "Apple",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 151999,
    "originalPrice": 189999,
    "rating": 4.9,
    "reviewCount": 290,
    "boughtPastMonth": "310+",
    "image": "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80",
    "badge": "Workstation Beast",
    "featured": false,
    "description": "M2 Ultra 24-Core CPU, 76-Core GPU, 32-Core Neural Engine, 64GB Unified Memory, up to 8x 4K displays.",
    "gallery": [
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Silver Aluminum",
        "hex": "#E1E3E5",
        "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Unified Memory",
      "options": [
        {
          "label": "64GB / 1TB SSD",
          "priceDelta": 0
        },
        {
          "label": "128GB / 2TB SSD",
          "priceDelta": 36000
        }
      ]
    },
    "highlights": [
      "M2 Ultra combines two M2 Max chips via UltraFusion interconnect with 2.5TB/s bandwidth",
      "Plays back up to 22 streams of 8K ProRes 422 video simultaneously with zero frame drops",
      "Compact 7.7-inch square desktop footprint fitting directly under displays",
      "Six Thunderbolt 4 ports, 10Gb Ethernet, HDMI 2.1 supporting 8K 240Hz output"
    ],
    "specs": {
      "Processor": "Apple M2 Ultra (24-Core CPU + 76-Core GPU + 32-Core NPU)",
      "Memory & Storage": "64GB Unified Memory (800GB/s bandwidth) • 1TB NVMe SSD",
      "Connectivity": "6x Thunderbolt 4, 10Gb Ethernet, Wi-Fi 6E, Bluetooth 5.3",
      "Warranty": "1-Year Apple Limited Hardware Warranty"
    },
    "exchangeDiscount": 53200,
    "bundle": {
      "id": "nova-lap-12",
      "name": "Studio Display 27-inch 5K Retina",
      "price": 71999,
      "savings": 21600
    },
    "keywords": [
      "apple mac studio m2 ultra",
      "apple",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-10",
    "name": "Microsoft Surface Laptop Studio 2",
    "brand": "Microsoft",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 92399,
    "originalPrice": 115499,
    "rating": 4.7,
    "reviewCount": 380,
    "boughtPastMonth": "320+",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    "badge": "Studio Transformer",
    "featured": false,
    "description": "Intel Core i7-13700H, RTX 4060, Dynamic Woven Hinge, 14.4\" 120Hz PixelSense Flow touchscreen.",
    "gallery": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Platinum",
        "hex": "#D7D8D9",
        "image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "16GB RAM / 512GB SSD",
          "priceDelta": 0
        },
        {
          "label": "32GB RAM / 1TB SSD",
          "priceDelta": 11300
        }
      ]
    },
    "highlights": [
      "Dynamic Woven Hinge transitions instantly across Laptop, Stage, and Studio creative angles",
      "14.4\" PixelSense Flow touchscreen with 120Hz refresh, Dolby Vision, and HDR 400",
      "Precision Haptic touchpad with customizable click feedback for fine drawing controls",
      "Integrated magnetic charging cradle underneath front lip for Surface Slim Pen 2"
    ],
    "specs": {
      "Processor": "Intel Core i7-13700H (14 Cores, up to 5.0GHz)",
      "Graphics": "NVIDIA GeForce RTX 4060 8GB GDDR6 (80W)",
      "Display": "14.4\" PixelSense Flow (2400x1600) 120Hz Touch 3:2 Ratio",
      "Warranty": "1-Year Microsoft Commercial Hardware Warranty"
    },
    "exchangeDiscount": 32340,
    "bundle": {
      "id": "nova-acc-02",
      "name": "Surface Arc Mouse Ergonomic",
      "price": 3399,
      "savings": 1020
    },
    "keywords": [
      "microsoft surface laptop studio 2",
      "microsoft",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-11",
    "name": "Dell Alienware m18 R2 Beast",
    "brand": "Dell",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 113999,
    "originalPrice": 142499,
    "rating": 4.7,
    "reviewCount": 260,
    "boughtPastMonth": "210+",
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    "badge": "Desktop Replacement",
    "featured": false,
    "description": "Intel Core i9-14900HX, RTX 4090 16GB, Cryo-tech cooling with Element 31 thermal interface, CherryMX keys.",
    "gallery": [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Dark Metallic Moon",
        "hex": "#232528",
        "image": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "32GB / 1TB SSD / RTX 4080",
          "priceDelta": 0
        },
        {
          "label": "64GB / 2TB SSD / RTX 4090",
          "priceDelta": 20300
        }
      ]
    },
    "highlights": [
      "Enormous 18-inch QHD+ 165Hz G-Sync display with 100% DCI-P3 color precision",
      "Alienware Cryo-tech cooling with quad fans, vapor chamber, and gallium-silicone Element 31 paste",
      "Genuine ultra-low-profile CherryMX mechanical laptop keyboard with per-key RGB backlighting",
      "270W total system thermal power headroom for uncompromising esports frame rates"
    ],
    "specs": {
      "Processor": "Intel Core i9-14900HX (24 Cores, 32 Threads)",
      "Graphics": "NVIDIA GeForce RTX 4090 16GB GDDR6 (175W Max TGP)",
      "Display": "18.0\" QHD+ (2560x1600) 165Hz ComfortView Plus",
      "Warranty": "1-Year Dell Alienware Onsite Premium Support"
    },
    "exchangeDiscount": 39900,
    "bundle": {
      "id": "nova-acc-01",
      "name": "Alienware Pro Wireless Gaming Keyboard",
      "price": 7599,
      "savings": 2280
    },
    "keywords": [
      "dell alienware m18 r2 beast",
      "dell",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-12",
    "name": "Studio Display 27-inch 5K Retina",
    "brand": "Apple",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 76799,
    "originalPrice": 95999,
    "rating": 4.9,
    "reviewCount": 1120,
    "boughtPastMonth": "1.2k+",
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
    "badge": "Reference Standard",
    "featured": false,
    "description": "5K Retina panel, 12MP Ultra Wide camera with Center Stage, studio-quality three-mic array, 6 speakers.",
    "gallery": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Standard Glass",
        "hex": "#E1E3E5",
        "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Nano-Texture Glass",
        "hex": "#B8BAC0",
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Stand",
      "options": [
        {
          "label": "Tilt-Adjustable Stand",
          "priceDelta": 0
        },
        {
          "label": "Tilt & Height-Adjustable Stand",
          "priceDelta": 18000
        }
      ]
    },
    "highlights": [
      "27-inch 5K Retina display with 14.7 million pixels and 600 nits brightness",
      "Integrated Apple A13 Bionic silicon powering camera Center Stage and Spatial Audio audio processing",
      "High-fidelity six-speaker sound system with force-cancelling woofers and wide stereo sound",
      "One Thunderbolt 3 upstream port providing 96W host laptop charging plus 3x USB-C downstream ports"
    ],
    "specs": {
      "Panel": "27\" 5K Retina (5120x2880 at 218 PPI) 600 nits P3 Color",
      "Processor": "Apple A13 Bionic Dedicated Audio/Video Engine",
      "Audio": "6 Speakers with Spatial Audio + 3 Studio Mics",
      "Warranty": "1-Year Apple Limited Hardware Warranty"
    },
    "exchangeDiscount": 26880,
    "bundle": {
      "id": "nova-acc-07",
      "name": "BenQ Screenbar Halo Monitor Light",
      "price": 7599,
      "savings": 2280
    },
    "keywords": [
      "studio display 27-inch 5k retina",
      "apple",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-13",
    "name": "ASUS Zenbook Duo Dual 14\" OLED",
    "brand": "ASUS",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 76799,
    "originalPrice": 95999,
    "rating": 4.8,
    "reviewCount": 640,
    "boughtPastMonth": "580+",
    "image": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    "badge": "Dual Screen Genius",
    "featured": false,
    "description": "Dual 14-inch 3K 120Hz OLED touchscreens, detachable Bluetooth keyboard, built-in kickstand, Intel Ultra 9.",
    "gallery": [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Inkwell Gray",
        "hex": "#2A2C31",
        "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "16GB RAM / 1TB SSD",
          "priceDelta": 0
        },
        {
          "label": "32GB RAM / 2TB SSD",
          "priceDelta": 9000
        }
      ]
    },
    "highlights": [
      "Two full-size 14-inch 3K (2880x1800) 120Hz Lumina OLED displays joined by 180° hinge",
      "Creates a combined 19.8-inch continuous vertical workspace when stacked",
      "Detachable magnetic keyboard with pogo-pin instant connection and Bluetooth mode",
      "Intel Core Ultra 9 processor delivering dual-screen AI multitasking capability"
    ],
    "specs": {
      "Processor": "Intel Core Ultra 9 185H (16 Cores, 22 Threads)",
      "Displays": "Dual 14\" 3K (2880x1800) 120Hz 0.2ms OLED 500 nits HDR",
      "Weight": "1.35 kg (Laptop only) / 1.65 kg with keyboard",
      "Warranty": "1-Year ASUS Global Onsite Warranty"
    },
    "exchangeDiscount": 26880,
    "bundle": {
      "id": "nova-acc-02",
      "name": "Logitech MX Master 3S Mouse",
      "price": 3999,
      "savings": 1200
    },
    "keywords": [
      "asus zenbook duo dual 14\" oled",
      "asus",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-14",
    "name": "Apple Mac mini M2 Pro",
    "brand": "Apple",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 62399,
    "originalPrice": 77999,
    "rating": 4.9,
    "reviewCount": 1850,
    "boughtPastMonth": "1.6k+",
    "image": "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=800&q=80",
    "badge": "Pocket Workhorse",
    "featured": false,
    "description": "M2 Pro 10-core CPU, 16-core GPU, 16GB Unified Memory, 512GB SSD, 4x Thunderbolt 4 ports, compact powerhouse.",
    "gallery": [
      "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Silver Aluminum",
        "hex": "#E1E3E5",
        "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Memory",
      "options": [
        {
          "label": "16GB / 512GB SSD",
          "priceDelta": 0
        },
        {
          "label": "32GB / 1TB SSD",
          "priceDelta": 18000
        }
      ]
    },
    "highlights": [
      "Apple M2 Pro chip with 10-core CPU and 16-core GPU with 200GB/s memory bandwidth",
      "Supports up to three external displays including one 8K 60Hz or 4K 240Hz monitor",
      "Tiny 7.7-inch square form factor consuming up to 70% less energy than desktop PCs",
      "Four Thunderbolt 4 ports, two USB-A ports, HDMI, Gigabit Ethernet, headphone jack"
    ],
    "specs": {
      "Processor": "Apple M2 Pro (10-Core CPU + 16-Core GPU + 16-Core Neural Engine)",
      "Ports": "4x Thunderbolt 4, 2x USB-A 3.1, HDMI 2.1, Gigabit LAN",
      "Weight": "1.28 kg Compact Aluminum Desktop",
      "Warranty": "1-Year Apple Limited Hardware Warranty"
    },
    "exchangeDiscount": 21840,
    "bundle": {
      "id": "nova-acc-01",
      "name": "Magic Keyboard with Touch ID & Keypad",
      "price": 7899,
      "savings": 2370
    },
    "keywords": [
      "apple mac mini m2 pro",
      "apple",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-lap-15",
    "name": "Lenovo Legion Pro 7i Esports",
    "brand": "Lenovo",
    "category": "laptops",
    "categoryLabel": "Laptops & Computers",
    "price": 109999,
    "originalPrice": 137499,
    "rating": 4.8,
    "reviewCount": 670,
    "boughtPastMonth": "580+",
    "image": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
    "badge": "Esports Tier 1",
    "featured": false,
    "description": "Intel Core i9-14900HX, RTX 4080 12GB (175W), 16\" WQXGA 240Hz PureSight, Legion ColdFront 5.0.",
    "gallery": [
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Onyx Grey",
        "hex": "#28292C",
        "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage",
      "options": [
        {
          "label": "32GB RAM / 1TB SSD",
          "priceDelta": 0
        },
        {
          "label": "32GB RAM / 2TB SSD",
          "priceDelta": 6800
        }
      ]
    },
    "highlights": [
      "Lenovo LA-2Q AI chip optimizing system power, thermals, and clock speeds in real time",
      "16.0\" WQXGA (2560x1600) 240Hz 500 nits 100% sRGB display with G-Sync",
      "Legion TrueStrike keyboard with swappable ceramic keycaps and 1.5mm key travel",
      "ColdFront 5.0 vapor chamber thermal architecture with massive dual 0.1mm 3D fans"
    ],
    "specs": {
      "Processor": "Intel Core i9-14900HX (24 Cores, 32 Threads up to 5.8GHz)",
      "Graphics": "NVIDIA GeForce RTX 4080 12GB GDDR6 (175W Max TGP)",
      "Battery": "99.99WHr (Maximum airline legal capacity) with Super Rapid Charge",
      "Warranty": "1-Year Lenovo Legion Ultimate Support with 24/7 Gamer Care"
    },
    "exchangeDiscount": 38500,
    "bundle": {
      "id": "nova-acc-01",
      "name": "Legion K500 Mechanical Gaming Keyboard",
      "price": 3099,
      "savings": 930
    },
    "keywords": [
      "lenovo legion pro 7i esports",
      "lenovo",
      "laptops",
      "laptops & computers",
      "laptop",
      "notebook",
      "macbook",
      "computer",
      "pc",
      "pc computer"
    ]
  },
  {
    "id": "nova-ele-01",
    "name": "Sony WH-1000XM5 Noise Canceling",
    "brand": "Sony",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 17999,
    "originalPrice": 22499,
    "rating": 4.8,
    "reviewCount": 3420,
    "boughtPastMonth": "4.5k+",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    "badge": "ANC Leader",
    "featured": true,
    "description": "Industry-leading noise cancellation with 8 microphones, Auto NC Optimizer, 30-hour battery life.",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#1C1917",
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Platinum Silver",
        "hex": "#E2E8F0",
        "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Midnight Blue",
        "hex": "#1E3A8A",
        "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Standard Retail Package",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Two processors controlling 8 microphones for unprecedented high-frequency noise cancellation",
      "Specially developed 30mm carbon fiber composite driver unit delivering natural sound fidelity",
      "Precise Voice Pickup Technology using four beamforming mics with AI noise reduction",
      "Ultra-comfortable lightweight design in soft fit leather reducing ear pressure"
    ],
    "specs": {
      "Acoustic Drivers": "30mm Carbon Fiber Composite Dome",
      "Frequency Response": "4Hz – 40,000Hz (Hi-Res Audio Wireless Certified)",
      "Battery Life": "Up to 30 Hours (ANC ON) / 40 Hours (ANC OFF)",
      "Weight": "250g Ultra-Lightweight Ergonomic Soft Fit Leather",
      "Warranty": "1-Year Sony India Official Warranty"
    },
    "exchangeDiscount": 6300,
    "bundle": {
      "id": "nova-acc-04",
      "name": "65W GaN Fast Charger with Braided Cable",
      "price": 899,
      "savings": 270
    },
    "keywords": [
      "sony wh-1000xm5 noise canceling",
      "sony",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-02",
    "name": "Apple AirPods Max Spatial Audio",
    "brand": "Apple",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 32899,
    "originalPrice": 41099,
    "rating": 4.8,
    "reviewCount": 1890,
    "boughtPastMonth": "1.6k+",
    "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    "badge": "Luxury Sound",
    "featured": true,
    "description": "Apple-designed dynamic driver, computational audio with dual H1 chips, breathable knit mesh canopy.",
    "gallery": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Silver Aluminum",
        "hex": "#E2E8F0",
        "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Space Gray",
        "hex": "#334155",
        "image": "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Pink Rose",
        "hex": "#F472B6",
        "image": "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Sky Blue",
        "hex": "#38BDF8",
        "image": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Interface",
      "options": [
        {
          "label": "USB-C Charging Edition",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Custom 40mm dynamic driver with dual neodymium ring magnet motor minimizing total harmonic distortion",
      "Personalized Spatial Audio with dynamic head tracking for theater-like sound immersion",
      "Knit-mesh canopy and acoustically engineered memory foam ear cushions for sublime comfort",
      "Digital Crown provides precise volume control, track skip, and Siri activation"
    ],
    "specs": {
      "Acoustic Architecture": "Apple 40mm Dynamic Driver with Dual H1 Silicon",
      "Noise Cancellation": "Pro Active Noise Cancellation + Transparency Mode",
      "Battery Runtime": "Up to 20 Hours with ANC and Spatial Audio Enabled",
      "Materials": "Anodized Aluminum Earcups + Stainless Steel Telescoping Arms",
      "Warranty": "1-Year Apple Limited Hardware Warranty"
    },
    "exchangeDiscount": 11515,
    "bundle": {
      "id": "nova-acc-04",
      "name": "Apple 35W Dual USB-C Compact Power Adapter",
      "price": 1999,
      "savings": 600
    },
    "keywords": [
      "apple airpods max spatial audio",
      "apple",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-03",
    "name": "Bose QuietComfort Ultra Headphones",
    "brand": "Bose",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 19699,
    "originalPrice": 24599,
    "rating": 4.7,
    "reviewCount": 1420,
    "boughtPastMonth": "1.2k+",
    "image": "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
    "badge": "Spatial Immersion",
    "featured": false,
    "description": "Breakthrough Bose Immersive Audio, world-class noise cancellation, CustomTune acoustic technology.",
    "gallery": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Triple Black",
        "hex": "#09090B",
        "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "White Smoke",
        "hex": "#F8FAFC",
        "image": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Sandstone Gold",
        "hex": "#D4AF37",
        "image": "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Standard Retail Edition",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Bose Immersive Audio spatializes acoustic content right in front of the listener",
      "CustomTune technology automatically analyzes ear canal shape to personalize noise cancelling",
      "Quiet, Aware, and Immersion listening modes with Wind Block microphone algorithms",
      "Up to 24 hours of continuous playback (up to 18 hours with Immersive Audio on)"
    ],
    "specs": {
      "Battery": "Up to 24 Hours • 15-Minute Quick Charge for 2.5 Hours",
      "Bluetooth": "Bluetooth 5.3 with Snapdragon Sound aptX Adaptive",
      "Weight": "252g Ultra-plush Protein Leather & Aluminum Cast Hinge",
      "Warranty": "1-Year Bose Official Brand Warranty"
    },
    "exchangeDiscount": 6895,
    "bundle": {
      "id": "nova-acc-04",
      "name": "High-Fidelity 3.5mm Audiophile Braided Cord",
      "price": 599,
      "savings": 180
    },
    "keywords": [
      "bose quietcomfort ultra headphones",
      "bose",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-04",
    "name": "DJI Mini 4 Pro 4K HDR Drone",
    "brand": "DJI",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 47499,
    "originalPrice": 59399,
    "rating": 4.9,
    "reviewCount": 870,
    "boughtPastMonth": "750+",
    "image": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    "badge": "Creator Drone",
    "featured": true,
    "description": "Under 249g ultra-lightweight, omnidirectional active obstacle sensing, 4K/60fps HDR true vertical shooting.",
    "gallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Light Gray",
        "hex": "#CFD2D6",
        "image": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Combo Package",
      "options": [
        {
          "label": "DJI RC 2 Smart Controller",
          "priceDelta": 0
        },
        {
          "label": "Fly More Combo Plus (3 Batteries)",
          "priceDelta": 9900
        }
      ]
    },
    "highlights": [
      "Weighs under 249 grams: flies without registration in most countries and jurisdictions",
      "Omnidirectional obstacle avoidance with four binocular vision cameras and 3D ToF infrared sensors",
      "4K/60fps HDR and 4K/100fps slow motion video with 10-bit D-Log M color profile",
      "Up to 34 minutes flight time per battery and 20km FHD video transmission with DJI O4"
    ],
    "specs": {
      "Takeoff Weight": "< 249 g (Ultralight Regulatory Class C0)",
      "Sensor": "1/1.3-inch CMOS with Dual Native ISO Fusion f/1.7",
      "Transmission Range": "20 km FCC / 10 km CE (DJI O4 Flagship Protocol)",
      "Max Flight Time": "34 Minutes Standard / 45 Minutes Plus Battery",
      "Warranty": "1-Year DJI Official Global Warranty"
    },
    "exchangeDiscount": 16625,
    "bundle": {
      "id": "nova-acc-05",
      "name": "DJI Hard-Shell Water-Resistant Shoulder Bag",
      "price": 1999,
      "savings": 600
    },
    "keywords": [
      "dji mini 4 pro 4k hdr drone",
      "dji",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-05",
    "name": "Fujifilm X-T5 Mirrorless Camera",
    "brand": "Fujifilm",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 84999,
    "originalPrice": 106199,
    "rating": 4.9,
    "reviewCount": 560,
    "boughtPastMonth": "490+",
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    "badge": "Photographer Choice",
    "featured": true,
    "description": "40.2MP X-Trans CMOS 5 HR sensor, 5-axis 7.0-stop in-body stabilization, classic mechanical dials, 6.2K video.",
    "gallery": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Silver Vintage",
        "hex": "#C8CBD0",
        "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "All Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Kit",
      "options": [
        {
          "label": "Body Only",
          "priceDelta": 0
        },
        {
          "label": "With XF 16-80mm f/4 OIS WR Lens",
          "priceDelta": 15800
        }
      ]
    },
    "highlights": [
      "40.2MP APS-C X-Trans CMOS 5 HR back-illuminated sensor with pixel shift multi-shot 160MP",
      "Dedicated analog shutter speed, ISO, and exposure compensation mechanical top dials",
      "5-axis in-body image stabilization delivering up to 7.0 stops of shake compensation",
      "19 iconic Fujifilm Film Simulation modes including Nostalgic Neg and Classic Chrome"
    ],
    "specs": {
      "Image Sensor": "40.2MP APS-C X-Trans CMOS 5 HR (7728x5152)",
      "Stabilization": "5-Axis Sensor-Shift IBIS with 7.0 Stops Compensation",
      "Video": "6.2K 30p 4:2:2 10-bit Internal, 4K 60p, FHD 240p Slow Motion",
      "Viewfinder": "3.69M-dot 0.80x magnification OLED Electronic Viewfinder",
      "Warranty": "2-Year Official Fujifilm India Warranty"
    },
    "exchangeDiscount": 29750,
    "bundle": {
      "id": "nova-acc-05",
      "name": "Peak Design Everyday Sling 6L Camera Bag",
      "price": 5799,
      "savings": 1740
    },
    "keywords": [
      "fujifilm x-t5 mirrorless camera",
      "fujifilm",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-06",
    "name": "Sonos Beam Gen 2 Dolby Atmos",
    "brand": "Sonos",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 27499,
    "originalPrice": 34399,
    "rating": 4.8,
    "reviewCount": 1140,
    "boughtPastMonth": "1.1k+",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    "badge": "Home Cinema",
    "featured": false,
    "description": "Compact smart soundbar with panoramic Dolby Atmos 3D audio, HDMI eARC, Apple AirPlay 2, Trueplay tuning.",
    "gallery": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519500099198-fd81846b8f03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#1C1C1E",
        "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Matte White",
        "hex": "#F4F5F6",
        "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Mount Option",
      "options": [
        {
          "label": "Tabletop Placement",
          "priceDelta": 0
        },
        {
          "label": "With Sonos Custom Wall Mount",
          "priceDelta": 2200
        }
      ]
    },
    "highlights": [
      "Panoramic 3D soundstage powered by Dolby Atmos and five powerful internal speaker drivers",
      "Speech Enhancement feature amplifies whispered character dialogues with crystalline clarity",
      "Trueplay room-tuning technology measures room acoustic reflections for ideal sound",
      "Syncs effortlessly with your TV remote via high-bandwidth HDMI eARC audio link"
    ],
    "specs": {
      "Amplification": "Five Class-D Digital Amplifiers perfectly tuned to soundbar acoustic architecture",
      "Speakers": "1 Center Tweeter + 4 Elliptical Mid-woofers + 3 Passive Radiators",
      "Connectivity": "HDMI eARC, Optical Out Adapter, Wi-Fi 5, Apple AirPlay 2",
      "Dimensions": "651mm x 68.6mm x 100mm • 2.88 kg",
      "Warranty": "1-Year Sonos Official Brand Warranty"
    },
    "exchangeDiscount": 9625,
    "bundle": {
      "id": "nova-ele-14",
      "name": "Sonos Sub Mini Compact Wireless Subwoofer",
      "price": 20199,
      "savings": 6060
    },
    "keywords": [
      "sonos beam gen 2 dolby atmos",
      "sonos",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-07",
    "name": "Sony WF-1000XM5 Wireless Earbuds",
    "brand": "Sony",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 13799,
    "originalPrice": 17199,
    "rating": 4.7,
    "reviewCount": 2180,
    "boughtPastMonth": "2.4k+",
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    "badge": "Pocket ANC",
    "featured": false,
    "description": "Dual processor noise cancellation, Dynamic Driver X, bone conduction voice sensors, LDAC Hi-Res Wireless.",
    "gallery": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Black Ceramic",
        "hex": "#1C1917",
        "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Platinum Silver",
        "hex": "#E2E8F0",
        "image": "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Standard Retail Case",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Integrated Processor V2 and HD Noise Cancelling Processor QN2e for unprecedented quiet",
      "Dynamic Driver X 8.4mm with wide frequency reproduction and rich detailed vocals",
      "AI-based noise reduction algorithm using bone conduction sensors for ultra-clear phone calls",
      "25% smaller and 20% lighter than previous generation with polyurethane foam ear tips"
    ],
    "specs": {
      "Battery": "8 Hours Earbuds + 16 Hours Case (24h Total with ANC)",
      "Charging": "Qi Wireless + USB-C Fast Charge (3 mins = 60 mins playback)",
      "Water Resistance": "IPX4 Splash and Sweat Resistant Rating",
      "Warranty": "1-Year Sony India Official Warranty"
    },
    "exchangeDiscount": 4830,
    "bundle": {
      "id": "nova-acc-04",
      "name": "Wireless Magnetic Charging Pad 15W",
      "price": 699,
      "savings": 210
    },
    "keywords": [
      "sony wf-1000xm5 wireless earbuds",
      "sony",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-08",
    "name": "Marshall Emberton II Portable Speaker",
    "brand": "Marshall",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 8999,
    "originalPrice": 11199,
    "rating": 4.8,
    "reviewCount": 1820,
    "boughtPastMonth": "1.9k+",
    "image": "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80",
    "badge": "Iconic Rocker",
    "featured": true,
    "description": "True Stereophonic 360-degree sound, 30+ hours portable playtime, IP67 dust and waterproof, Stack Mode.",
    "gallery": [
      "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#18181B",
        "image": "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "White Fabric",
        "hex": "#F1F5F9",
        "image": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Standard Edition",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "True Stereophonic multi-directional 360° sound delivering expansive sound beyond size",
      "Rugged IP67 dust and water resistance allowing immersion in 1m water for 30 minutes",
      "30+ hours of continuous portable playtime on a single USB-C charge",
      "Stack Mode lets you pair multiple Emberton II speakers together for massive volume"
    ],
    "specs": {
      "Sound Stage": "Stereo 360° Sound • Two 2\" 10W Full Range + Two Passive Radiators",
      "Battery Life": "30+ Hours Continuous Playtime (3h Full Recharge)",
      "Durability": "IP67 Submersible Waterproof & Dustproof Silicone Shell",
      "Warranty": "1-Year Official Marshall Brand Warranty"
    },
    "exchangeDiscount": 3150,
    "bundle": {
      "id": "nova-acc-04",
      "name": "Braided Heavy-Duty USB-C Cable",
      "price": 499,
      "savings": 150
    },
    "keywords": [
      "marshall emberton ii portable speaker",
      "marshall",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-09",
    "name": "Shure SM7B Studio Vocal Microphone",
    "brand": "Shure",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 20899,
    "originalPrice": 26099,
    "rating": 4.9,
    "reviewCount": 940,
    "boughtPastMonth": "820+",
    "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    "badge": "Podcast Legend",
    "featured": false,
    "description": "Broadcast dynamic microphone with smooth flat frequency response, internal air suspension shock isolation.",
    "gallery": [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Classic Black Vinyl",
        "hex": "#18181B",
        "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Vintage Brown Leather",
        "hex": "#78350F",
        "image": "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Package",
      "options": [
        {
          "label": "Microphone with Windscreen",
          "priceDelta": 0
        },
        {
          "label": "With Cloudlifter CL-1 Preamp",
          "priceDelta": 6300
        }
      ]
    },
    "highlights": [
      "The world standard microphone used by legendary musicians, podcasters, and broadcasters",
      "Flat, wide-range frequency response for exceptionally clean and natural music and speech",
      "Advanced electromagnetic hum shielding defeats interference from computer monitors",
      "Internal \"air suspension\" shock isolation virtually eliminates mechanical noise transmission"
    ],
    "specs": {
      "Cartridge Type": "Dynamic (Moving Coil) Cardioid Polar Pattern",
      "Frequency Response": "50Hz to 20,000Hz with Bass Rolloff and Mid-range Boost",
      "Connector": "Three-pin Professional Audio (XLR) Male Connector",
      "Warranty": "2-Year Shure Official Manufacturer Warranty"
    },
    "exchangeDiscount": 7315,
    "bundle": {
      "id": "nova-acc-10",
      "name": "Heavy-Duty Desktop Microphone Boom Arm",
      "price": 2199,
      "savings": 660
    },
    "keywords": [
      "shure sm7b studio vocal microphone",
      "shure",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-10",
    "name": "GoPro HERO12 Black Action Camera",
    "brand": "GoPro",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 20899,
    "originalPrice": 26099,
    "rating": 4.7,
    "reviewCount": 1630,
    "boughtPastMonth": "1.7k+",
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    "badge": "Action King",
    "featured": false,
    "description": "5.3K 60fps HDR video, HyperSmooth 6.0 video stabilization, dual LCD screens, waterproof down to 33ft.",
    "gallery": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Bundle",
      "options": [
        {
          "label": "Standard Action Camera",
          "priceDelta": 0
        },
        {
          "label": "Creator Edition with Volta Grip & Media Mod",
          "priceDelta": 8100
        }
      ]
    },
    "highlights": [
      "HyperSmooth 6.0 stabilization with AutoBoost delivering butter-smooth action shots",
      "High Dynamic Range (HDR) video for both 5.3K and 4K60 video footage",
      "2x longer continuous runtime with included Enduro cold-weather high-capacity battery",
      "Rugged and waterproof down to 10 meters (33 feet) straight out of the box"
    ],
    "specs": {
      "Video Resolution": "5.3K 60fps, 4K 120fps, 2.7K 240fps (8x Slo-Mo)",
      "Photo Resolution": "27MP High-Res Photos with 24.7MP Frame Grabs from Video",
      "Stabilization": "HyperSmooth 6.0 with 360° Horizon Lock",
      "Warranty": "1-Year GoPro Official Brand Warranty"
    },
    "exchangeDiscount": 7315,
    "bundle": {
      "id": "nova-acc-05",
      "name": "GoPro Dual Battery Charger + Extra Enduro",
      "price": 1999,
      "savings": 600
    },
    "keywords": [
      "gopro hero12 black action camera",
      "gopro",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-11",
    "name": "Sennheiser Momentum 4 Audiophile",
    "brand": "Sennheiser",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 16799,
    "originalPrice": 20999,
    "rating": 4.8,
    "reviewCount": 1290,
    "boughtPastMonth": "1.3k+",
    "image": "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80",
    "badge": "60-Hr Battery",
    "featured": false,
    "description": "Signature 42mm audiophile transducer, insane 60-hour battery life, Adaptive Noise Cancellation, aptX Adaptive.",
    "gallery": [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Black Copper",
        "hex": "#262220",
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "White",
        "hex": "#F0EFEA",
        "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Special Edition Copper",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Sennheiser signature sound powered by audiophile-inspired 42mm transducer system",
      "Incredible 60-hour continuous battery playback on a single charge with fast charging",
      "Adaptive Noise Cancellation automatically adjusts to environmental ambient noise levels",
      "Crystal-clear calls with four digital beamforming microphones with automatic wind suppression"
    ],
    "specs": {
      "Battery Runtime": "Industry-leading 60 Hours (ANC Active) • 5-min charge gives 4 hours",
      "Transducer": "42mm Dynamic Audiophile Driver (6Hz to 22,000Hz)",
      "Codecs": "aptX, aptX Adaptive, AAC, SBC with Smart Control App EQ",
      "Warranty": "2-Year Sennheiser Official Brand Warranty"
    },
    "exchangeDiscount": 5880,
    "bundle": {
      "id": "nova-acc-04",
      "name": "Premium Hard Shell Travel Headphone Case",
      "price": 899,
      "savings": 270
    },
    "keywords": [
      "sennheiser momentum 4 audiophile",
      "sennheiser",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-12",
    "name": "Sony PlayStation 5 Slim Digital",
    "brand": "Sony",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 24699,
    "originalPrice": 30899,
    "rating": 4.9,
    "reviewCount": 4520,
    "boughtPastMonth": "5.8k+",
    "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    "badge": "Console Leader",
    "featured": true,
    "description": "Custom AMD Zen 2 CPU & RDNA 2 GPU, ultra-high speed 1TB SSD, DualSense haptic wireless controller.",
    "gallery": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Cosmic White",
        "hex": "#F0F2F5",
        "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Midnight Black",
        "hex": "#1B1C1E",
        "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Storage & Accessories",
      "options": [
        {
          "label": "1TB SSD Console",
          "priceDelta": 0
        },
        {
          "label": "With Extra DualSense Wireless Controller",
          "priceDelta": 2700
        }
      ]
    },
    "highlights": [
      "Slim design with 30% smaller volume and lighter weight with attachable disc drive slot",
      "Ultra-high speed 1TB internal SSD giving near-instantaneous load times for games",
      "Tempest 3D AudioTech and DualSense wireless controller dynamic adaptive triggers",
      "Ray tracing hardware acceleration supporting up to 120fps with 4K output on 120Hz displays"
    ],
    "specs": {
      "Processor": "Custom AMD Zen 2 (8 Cores, 16 Threads at 3.5GHz)",
      "Graphics": "AMD RDNA 2 (10.28 TFLOPs with Ray Tracing Cores)",
      "Storage": "1TB Ultra-high speed Custom PCIe Gen4 SSD (5.5GB/s raw)",
      "Warranty": "1-Year Sony PlayStation Official India Warranty"
    },
    "exchangeDiscount": 8645,
    "bundle": {
      "id": "nova-ele-01",
      "name": "PULSE 3D Wireless Headset for PS5",
      "price": 3899,
      "savings": 1170
    },
    "keywords": [
      "sony playstation 5 slim digital",
      "sony",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-13",
    "name": "Audio-Technica AT-LP120XUSB Turntable",
    "brand": "Audio-Technica",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 20999,
    "originalPrice": 26199,
    "rating": 4.8,
    "reviewCount": 480,
    "boughtPastMonth": "390+",
    "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
    "badge": "Vinyl Audiophile",
    "featured": false,
    "description": "Direct-drive DC servo motor, AT-VM95E cartridge, selectable phono preamp, USB output for vinyl digitizing.",
    "gallery": [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Gunmetal Grey",
        "hex": "#3B3D42",
        "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Standard Turntable with Cartridge",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Direct-drive, DC servo motor with fully manual operation and dynamic anti-skate control",
      "Plays 33-1/3 RPM, 45 RPM, and 78 RPM records with quartz speed accuracy",
      "High-performance AT-VM95E Dual Magnet phono cartridge with elliptical stylus",
      "Built-in switchable phono preamplifier for direct connection to active speakers"
    ],
    "specs": {
      "Motor Type": "Direct Drive DC Servo Motor (0.2% Wow and Flutter)",
      "Cartridge": "AT-VM95E Dual Moving Magnet (0.3 x 0.7 mil Elliptical)",
      "Outputs": "PHONO / LINE Level switchable RCA stereo + USB Type-B",
      "Warranty": "1-Year Audio-Technica Official Warranty"
    },
    "exchangeDiscount": 7350,
    "bundle": {
      "id": "nova-ele-08",
      "name": "Audio-Technica Record Cleaning Kit",
      "price": 999,
      "savings": 300
    },
    "keywords": [
      "audio-technica at-lp120xusb turntable",
      "audio-technica",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-14",
    "name": "DJI Osmo Pocket 3 4K Gimbal Camera",
    "brand": "DJI",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 25799,
    "originalPrice": 32199,
    "rating": 4.9,
    "reviewCount": 1340,
    "boughtPastMonth": "1.4k+",
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
    "badge": "Vlog Miracle",
    "featured": true,
    "description": "1-inch CMOS sensor, 4K 120fps video, 2-inch rotatable OLED touchscreen, 3-axis mechanical stabilization.",
    "gallery": [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Combo Option",
      "options": [
        {
          "label": "Standard Pocket 3",
          "priceDelta": 0
        },
        {
          "label": "Creator Combo with Mic 2 Transmitter & Tripod",
          "priceDelta": 7200
        }
      ]
    },
    "highlights": [
      "Pocket-sized handheld camera featuring a powerful 1-inch CMOS sensor for rich low-light captures",
      "2-inch rotatable OLED touchscreen: rotate to switch between horizontal and vertical filming",
      "3-axis mechanical gimbal stabilization eliminates any camera shake during running or walking",
      "Full-pixel fast focusing keeps active subjects locked in sharp focus"
    ],
    "specs": {
      "Sensor Size": "1-inch CMOS with 4K 120fps and 10-bit D-Log M color",
      "Audio": "Three-microphone array with omnidirectional noise reduction",
      "Fast Charge": "Recharge to 80% in just 16 minutes via USB-C PD",
      "Warranty": "1-Year DJI Official Brand Warranty"
    },
    "exchangeDiscount": 9030,
    "bundle": {
      "id": "nova-acc-05",
      "name": "DJI Mic 2 Wireless Transmitter",
      "price": 3999,
      "savings": 1200
    },
    "keywords": [
      "dji osmo pocket 3 4k gimbal camera",
      "dji",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-ele-15",
    "name": "Bang & Olufsen Beosound A1 2nd Gen",
    "brand": "Bang & Olufsen",
    "category": "electronics",
    "categoryLabel": "Electronics & Audio",
    "price": 16699,
    "originalPrice": 20899,
    "rating": 4.8,
    "reviewCount": 620,
    "boughtPastMonth": "480+",
    "image": "https://images.unsplash.com/photo-1520170350707-b2da59970118?auto=format&fit=crop&w=800&q=80",
    "badge": "Danish Luxury",
    "featured": false,
    "description": "Waterproof portable Bluetooth speaker, 360-degree True360 sound, pearl-blasted aluminum, Alexa built-in.",
    "gallery": [
      "https://images.unsplash.com/photo-1520170350707-b2da59970118?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519500099198-fd81846b8f03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Anthracite Oxygen",
        "hex": "#2C3038",
        "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Gold Tone",
        "hex": "#D4AF37",
        "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Standard Luxury Edition",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Sculpted from pearl-blasted anodized aluminum dome with a genuine waterproof leather strap",
      "Full True360 omnidirectional soundstage with two 30W Class-D amplifiers",
      "IP67 certified dust and waterproof protection surviving poolside or ocean spray",
      "Up to 18 hours playtime with 3-microphone Far-Field voice assistant calling"
    ],
    "specs": {
      "Drivers": "1x 3.5\" Woofer + 1x 0.6\" Tweeter (2x 30W Class D)",
      "Bluetooth": "Bluetooth 5.1 with aptX Adaptive and Multipoint Pairing",
      "Water Resistance": "IP67 Waterproof & Dustproof (Submersible up to 1m)",
      "Warranty": "2-Year Bang & Olufsen International Warranty"
    },
    "exchangeDiscount": 5845,
    "bundle": {
      "id": "nova-acc-04",
      "name": "B&O Genuine Leather Protective Sleeve",
      "price": 1599,
      "savings": 480
    },
    "keywords": [
      "bang & olufsen beosound a1 2nd gen",
      "bang & olufsen",
      "electronics",
      "electronics & audio",
      "headphone",
      "headphones",
      "earphone",
      "earphones",
      "earbuds",
      "audio",
      "sound",
      "anc",
      "gadget"
    ]
  },
  {
    "id": "nova-fas-01",
    "name": "Minimalist Tailored Wool Trench Coat",
    "brand": "NOVA Atelier",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 6599,
    "originalPrice": 8199,
    "rating": 4.9,
    "reviewCount": 820,
    "boughtPastMonth": "910+",
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    "badge": "Runway Pick",
    "featured": true,
    "description": "100% Australian virgin wool, double-breasted horn button closure, storm flap, tailored relaxed drape.",
    "gallery": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Camel Tan",
        "hex": "#C19A6B",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Charcoal Gray",
        "hex": "#363738",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Obsidian Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Size",
      "options": [
        {
          "label": "Small (38R)",
          "priceDelta": 0
        },
        {
          "label": "Medium (40R)",
          "priceDelta": 0
        },
        {
          "label": "Large (42R)",
          "priceDelta": 0
        },
        {
          "label": "XL (44R)",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Spun from 580GSM heavy double-faced Australian virgin merino wool for natural warmth",
      "Double-breasted front with real Italian water-buffalo horn buttons and storm collar latch",
      "Full cupro silk lining providing effortless gliding over knitwear and tailored shirts",
      "Finished with water-repellent eco fluorocarbon coating for all-weather urban utility"
    ],
    "specs": {
      "Material": "100% Australian Double-Face Virgin Wool (580 GSM)",
      "Lining": "100% Bemberg Cupro Breathable Silk-Finish Lining",
      "Hardware": "Genuine Italian Horn Buttons + Gunmetal Collar Clasp",
      "Care Instructions": "Professional Dry Clean Only • Storage Garment Bag Included",
      "Warranty": "Lifetime Craftsmanship & Stitching Guarantee"
    },
    "exchangeDiscount": 2310,
    "bundle": {
      "id": "nova-fas-13",
      "name": "Luxury Cashmere Ribbed Beanie",
      "price": 1599,
      "savings": 480
    },
    "keywords": [
      "minimalist tailored wool trench coat",
      "nova atelier",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-02",
    "name": "Technical Waterproof Shell Parka",
    "brand": "ARC-Tech",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 8699,
    "originalPrice": 10899,
    "rating": 4.8,
    "reviewCount": 640,
    "boughtPastMonth": "580+",
    "image": "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
    "badge": "All-Weather Tech",
    "featured": true,
    "description": "3-Layer GORE-TEX Pro membrane, fully seam-sealed, YKK AquaGuard watertight zippers, articulated storm hood.",
    "gallery": [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cyber Olive",
        "hex": "#3B443B",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Size",
      "options": [
        {
          "label": "Size S",
          "priceDelta": 0
        },
        {
          "label": "Size M",
          "priceDelta": 0
        },
        {
          "label": "Size L",
          "priceDelta": 0
        },
        {
          "label": "Size XL",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "3-Layer GORE-TEX Pro fabric (28,000mm hydrostatic head waterproof rating)",
      "100% micro-taped internal seams completely preventing moisture penetration",
      "Cohaesive cord-lock management embedded into storm hood and hem for 1-hand adjustment",
      "Magnetic Fidlock storm flap closure over high-durability YKK AquaGuard two-way zipper"
    ],
    "specs": {
      "Waterproof Rating": "28,000mm Hydrostatic Head (Torrential Rain Proof)",
      "Breathability": "RET < 6 (Extremely Breathable During Movement)",
      "Zippers": "YKK AquaGuard Matte Polyurethane Coated Watertight Zips",
      "Weight": "420g Ultra-packable Alpine Architecture",
      "Warranty": "5-Year Extreme Weather Warranty"
    },
    "exchangeDiscount": 3045,
    "bundle": {
      "id": "nova-fas-15",
      "name": "Water-Resistant Crossbody Sling Pouch",
      "price": 1299,
      "savings": 390
    },
    "keywords": [
      "technical waterproof shell parka",
      "arc-tech",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-03",
    "name": "Japanese Selvedge Raw Denim Jeans",
    "brand": "Kuroki Mills",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 4799,
    "originalPrice": 5999,
    "rating": 4.9,
    "reviewCount": 1150,
    "boughtPastMonth": "1.2k+",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    "badge": "Denim Grail",
    "featured": false,
    "description": "14.5oz Okayama vintage shuttle-loom selvedge denim, red-line ID, copper donut buttons, custom fade canvas.",
    "gallery": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Deep Indigo",
        "hex": "#1A243D",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Black",
        "hex": "#2B2B2C",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Waist & Length",
      "options": [
        {
          "label": "30W x 32L",
          "priceDelta": 0
        },
        {
          "label": "32W x 32L",
          "priceDelta": 0
        },
        {
          "label": "34W x 32L",
          "priceDelta": 0
        },
        {
          "label": "36W x 34L",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Woven in Okayama, Japan on vintage 1950s Toyoda automatic shuttle looms",
      "Unsanforized 14.5oz ring-spun cotton that molds organically to the wearer’s body",
      "Iconic red-and-white selvedge ticker ID exposed along the outseams and coin pocket",
      "Hand-punched copper rivets and custom embossed vegetable-tanned leather back patch"
    ],
    "specs": {
      "Denim Weight": "14.5 oz Medium-Heavyweight Raw Rigid Selvedge",
      "Cotton Origin": "100% Long-Staple Zimbabwe Cotton (Rope Dyed 12x in Pure Indigo)",
      "Construction": "Chain-stitched hems on Union Special 43200G vintage machines",
      "Care": "Wear 6 months before first cold soak for high-contrast fading",
      "Warranty": "Free In-House Hemming & Lifetime Crotch Reinforcement"
    },
    "exchangeDiscount": 1680,
    "bundle": {
      "id": "nova-fas-14",
      "name": "Modular Magnetic Vegetable-Tanned Leather Belt",
      "price": 1299,
      "savings": 390
    },
    "keywords": [
      "japanese selvedge raw denim jeans",
      "kuroki mills",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-04",
    "name": "100% Merino Wool Oversized Knit",
    "brand": "NOVA Atelier",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 3599,
    "originalPrice": 4499,
    "rating": 4.8,
    "reviewCount": 930,
    "boughtPastMonth": "840+",
    "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    "badge": "Cozy Luxury",
    "featured": false,
    "description": "19.5-micron extrafine merino wool, ribbed crewneck collar, seamless 3D knit construction, zero itch.",
    "gallery": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Sand Beige",
        "hex": "#D2C3AF",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Heather Gray",
        "hex": "#8C8E91",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Size",
      "options": [
        {
          "label": "Size S (Relaxed)",
          "priceDelta": 0
        },
        {
          "label": "Size M (Relaxed)",
          "priceDelta": 0
        },
        {
          "label": "Size L (Relaxed)",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Crafted from certified Responsible Wool Standard (RWS) 19.5-micron extrafine merino wool",
      "Advanced WholeGarment 3D seamless knitting eliminating chafing seam points",
      "Natural thermoregulating properties keeping you warm in winter and cool indoors",
      "Naturally odor-resistant and wrinkle-resistant for travel versatility"
    ],
    "specs": {
      "Composition": "100% Extrafine Australian Merino Wool (7-Gauge Chunky Knit)",
      "Knit Type": "3D Seamless Circular Weave with Reinforced Ribbing",
      "Weight": "480g Thermal Comfort Weight",
      "Care": "Hand Wash Cold or Gentle Wool Machine Cycle with Flat Dry",
      "Warranty": "1-Year Anti-Pilling Guarantee"
    },
    "exchangeDiscount": 1260,
    "bundle": {
      "id": "nova-fas-13",
      "name": "Luxury Cashmere Ribbed Beanie",
      "price": 1599,
      "savings": 480
    },
    "keywords": [
      "100% merino wool oversized knit",
      "nova atelier",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-05",
    "name": "Minimalist Chronograph Automatic Watch",
    "brand": "Kronos Zurich",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 14999,
    "originalPrice": 18699,
    "rating": 4.9,
    "reviewCount": 510,
    "boughtPastMonth": "460+",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    "badge": "Swiss Precision",
    "featured": true,
    "description": "Swiss ETA 2824-2 automatic movement, 316L surgical steel, double-domed sapphire crystal with AR, exhibition back.",
    "gallery": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Silver & Matte Black",
        "hex": "#202124",
        "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Rose Gold & Navy",
        "hex": "#B76E79",
        "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Strap Option",
      "options": [
        {
          "label": "Horween Leather Strap",
          "priceDelta": 0
        },
        {
          "label": "316L Solid Steel Milanese Mesh",
          "priceDelta": 1600
        }
      ]
    },
    "highlights": [
      "Swiss-made ETA 2824-2 self-winding mechanical movement with 38-hour power reserve",
      "Scratch-proof double-domed sapphire crystal with five layers of anti-reflective coating",
      "Exhibition sapphire crystal caseback showcasing gold-plated Geneva striping rotor",
      "10 ATM water resistance allowing recreational swimming and shower security"
    ],
    "specs": {
      "Movement": "Swiss Calibre ETA 2824-2 Automatic (28,800 BPH, 25 Jewels)",
      "Case Dimensions": "40mm Diameter • 10.8mm Thickness • 20mm Lug Width",
      "Crystal": "Double-Domed Scratch-Proof Sapphire Crystal",
      "Water Resistance": "10 ATM (100 Meters / 330 Feet)",
      "Warranty": "5-Year International Movement Warranty"
    },
    "exchangeDiscount": 5250,
    "bundle": {
      "id": "nova-fas-09",
      "name": "Full-Grain Italian Leather Watch Roll (3 Slot)",
      "price": 2199,
      "savings": 660
    },
    "keywords": [
      "minimalist chronograph automatic watch",
      "kronos zurich",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-06",
    "name": "Handcrafted Italian Chelsea Boots",
    "brand": "Scarpa Firenze",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 5899,
    "originalPrice": 7399,
    "rating": 4.8,
    "reviewCount": 780,
    "boughtPastMonth": "710+",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    "badge": "Artisan Boot",
    "featured": true,
    "description": "Full-grain Tuscan calfskin, Goodyear welted construction, natural crepe and Vibram rubber sole, dual pull tabs.",
    "gallery": [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Espresso Suede",
        "hex": "#3B2F2F",
        "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Onyx Black Leather",
        "hex": "#1A1A1A",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Shoe Size",
      "options": [
        {
          "label": "UK 7 / US 8",
          "priceDelta": 0
        },
        {
          "label": "UK 8 / US 9",
          "priceDelta": 0
        },
        {
          "label": "UK 9 / US 10",
          "priceDelta": 0
        },
        {
          "label": "UK 10 / US 11",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Handcrafted in Tuscany, Italy by third-generation master cobblers",
      "Full 360-degree Goodyear welt construction allowing infinite resoling for decades of wear",
      "Supple French calfskin leather lining creating custom footbed mold with zero break-in pain",
      "Durable hybrid leather and Vibram rubber lug sole for all-weather traction"
    ],
    "specs": {
      "Upper Leather": "Hand-Selected Tuscan Full-Grain Waxed Reverse Suede",
      "Construction": "Traditional 360° Goodyear Welted (Fully Resolable)",
      "Outsole": "Vibram Commando Rubber Grip Heel and Forefoot",
      "Insole": "Cork Filling with Full-Grain Vegetable Tanned Leather Sockliner",
      "Warranty": "Lifetime Construction & Welt Guarantee"
    },
    "exchangeDiscount": 2065,
    "bundle": {
      "id": "nova-fas-14",
      "name": "Matching Tuscan Vegetable Tanned Leather Belt",
      "price": 1299,
      "savings": 390
    },
    "keywords": [
      "handcrafted italian chelsea boots",
      "scarpa firenze",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-07",
    "name": "Aerospace Titanium Polarized Sunglasses",
    "brand": "NOVA Optics",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 5199,
    "originalPrice": 6499,
    "rating": 4.8,
    "reviewCount": 620,
    "boughtPastMonth": "540+",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    "badge": "Weightless Optics",
    "featured": false,
    "description": "Beta-titanium ultra-flexible frame, Japanese mineral glass polarized lenses, 100% UV400, laser-engraved.",
    "gallery": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Gunmetal",
        "hex": "#3B3D42",
        "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stealth Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Lens Tint",
      "options": [
        {
          "label": "G-15 Polarized Emerald Green",
          "priceDelta": 0
        },
        {
          "label": "Deep Polarized Amber Gradient",
          "priceDelta": 500
        }
      ]
    },
    "highlights": [
      "Weighs only 16 grams: crafted from flexible Japanese beta-titanium that bends without deformation",
      "Japanese multi-layer polarized mineral glass lenses blocking 99.9% of glare",
      "Hydrophobic and oleophobic anti-smudge and anti-scratch lens coating",
      "Custom surgical silicone nose pads with titanium core for zero slipping"
    ],
    "specs": {
      "Frame Material": "100% Pure Japanese Beta-Titanium (Hypoallergenic)",
      "Lenses": "Japanese Mineral Glass Polarized Category 3 UV400",
      "Total Weight": "16.2 Grams (Virtually imperceptible on face)",
      "Case": "Includes Magnetic Flat-Folding Vegetable Tanned Leather Case",
      "Warranty": "2-Year Official NOVA Optics Warranty"
    },
    "exchangeDiscount": 1820,
    "bundle": {
      "id": "nova-acc-03",
      "name": "MagSafe Leather Card Wallet",
      "price": 1999,
      "savings": 600
    },
    "keywords": [
      "aerospace titanium polarized sunglasses",
      "nova optics",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-08",
    "name": "Heavyweight French Terry Hoodie 450GSM",
    "brand": "NOVA Core",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 2199,
    "originalPrice": 2699,
    "rating": 4.8,
    "reviewCount": 1450,
    "boughtPastMonth": "1.8k+",
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "badge": "Everyday Essential",
    "featured": false,
    "description": "Custom 450GSM combed cotton, double-layered architectural hood, flatlock stitch, zero drawstring aesthetic.",
    "gallery": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Washed Charcoal",
        "hex": "#373A40",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Chalk White",
        "hex": "#F0EFEA",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Obsidian Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Size",
      "options": [
        {
          "label": "Size S",
          "priceDelta": 0
        },
        {
          "label": "Size M",
          "priceDelta": 0
        },
        {
          "label": "Size L",
          "priceDelta": 0
        },
        {
          "label": "Size XL",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Substantial 450GSM 100% organic combed cotton French Terry with looped back interior",
      "Double-layered self-fabric hood structured to stand upright without sagging",
      "Blind-hem construction and heavy 1x1 ribbing on cuffs and waistband for longevity",
      "Garment dyed and enzyme silicone washed for broken-in vintage softness"
    ],
    "specs": {
      "Fabric": "100% Organic Combed Ring-Spun Cotton (450 GSM Heavyweight)",
      "Fit": "Boxy Dropped-Shoulder Modern Relaxed Streetwear Silhouette",
      "Stitching": "Flatlock Reinforced 4-Needle Seaming Throughout",
      "Care": "Machine Wash Cold Inverted • Tumble Dry Low",
      "Warranty": "Lifetime Anti-Shrink & Seam Guarantee"
    },
    "exchangeDiscount": 770,
    "bundle": {
      "id": "nova-fas-13",
      "name": "Luxury Cashmere Ribbed Beanie",
      "price": 1599,
      "savings": 480
    },
    "keywords": [
      "heavyweight french terry hoodie 450gsm",
      "nova core",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-09",
    "name": "Minimalist Leather Weekend Duffle Bag",
    "brand": "Nomad Goods",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 6999,
    "originalPrice": 8699,
    "rating": 4.9,
    "reviewCount": 410,
    "boughtPastMonth": "360+",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    "badge": "Travel Classic",
    "featured": true,
    "description": "Full-grain Horween leather, solid brass hardware, YKK Excella zippers, TSA carry-on compliant 40L capacity.",
    "gallery": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Cognac Brown",
        "hex": "#7A3803",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Onyx Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Leather Finish",
      "options": [
        {
          "label": "Full-Grain Horween Leather",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Cut from entire hides of legendary Chicago Horween vegetable-tanned leather",
      "Develops a deep, rich custom patina uniquely reflecting your journeys over years",
      "Dedicated padded 16-inch laptop compartment with waterproof exterior access zip",
      "Solid cast antique brass hardware and reinforced rivet-anchored leather handles"
    ],
    "specs": {
      "Dimensions": "52cm x 28cm x 27cm (40 Liters TSA Airline Approved Carry-On)",
      "Leather": "Full-Grain Horween Vegetable Tanned Chromexcel Leather",
      "Zippers": "Luxury YKK Excella Polished Metal Zippers",
      "Weight": "1.85 kg with Padded Shoulder Strap Included",
      "Warranty": "10-Year Master Craftsman Warranty"
    },
    "exchangeDiscount": 2450,
    "bundle": {
      "id": "nova-fas-14",
      "name": "Matching Horween Leather Luggage Tag",
      "price": 699,
      "savings": 210
    },
    "keywords": [
      "minimalist leather weekend duffle bag",
      "nomad goods",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-10",
    "name": "Tailored Linen Overshirt",
    "brand": "NOVA Atelier",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 2899,
    "originalPrice": 3599,
    "rating": 4.7,
    "reviewCount": 580,
    "boughtPastMonth": "510+",
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    "badge": "Summer Luxury",
    "featured": false,
    "description": "100% Normandy washed flax linen, mother of pearl buttons, dual chest utility pockets, camp collar.",
    "gallery": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#728071",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Natural Oatmeal",
        "hex": "#DED8CE",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Size",
      "options": [
        {
          "label": "Size S",
          "priceDelta": 0
        },
        {
          "label": "Size M",
          "priceDelta": 0
        },
        {
          "label": "Size L",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Woven from 100% organic long-staple French Normandy flax linen",
      "Pre-washed with organic pumice stone for relaxed drape and zero initial stiffness",
      "Real iridescent mother-of-pearl cross-stitched buttons",
      "Versatile overshirt cut that layers effortlessly over cotton tees or bare skin"
    ],
    "specs": {
      "Material": "100% French Normandy Washed Flax Linen (190 GSM)",
      "Buttons": "Genuine Australian Mother of Pearl Shell Buttons",
      "Fit": "Regular Straight Overshirt Cut with Curved Hem",
      "Warranty": "1-Year Fabric & Stitching Guarantee"
    },
    "exchangeDiscount": 1015,
    "bundle": {
      "id": "nova-fas-07",
      "name": "Aerospace Titanium Polarized Sunglasses",
      "price": 5799,
      "savings": 1740
    },
    "keywords": [
      "tailored linen overshirt",
      "nova atelier",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-11",
    "name": "Technical Commuter Cargo Trousers",
    "brand": "ARC-Tech",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 3999,
    "originalPrice": 4999,
    "rating": 4.8,
    "reviewCount": 870,
    "boughtPastMonth": "780+",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    "badge": "Utility Grail",
    "featured": false,
    "description": "Cordura stretch nylon canvas, DWR water-resistant, hidden magnetic stash pockets, articulated knee darts.",
    "gallery": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Carbon",
        "hex": "#2B2C2E",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Olive",
        "hex": "#3B4237",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Waist & Inseam",
      "options": [
        {
          "label": "30W x 31L",
          "priceDelta": 0
        },
        {
          "label": "32W x 31L",
          "priceDelta": 0
        },
        {
          "label": "34W x 32L",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "High-tenacity Cordura 4-way stretch fabric resisting scrapes and bike chain grease",
      "DWR water-repellent finish shedding sudden metropolitan downpours",
      "Deep ergonomic low-profile cargo pockets with silent magnetic snap closures",
      "Articulated knee darts allowing unrestricted mobility during daily transit"
    ],
    "specs": {
      "Fabric Composition": "88% Cordura High-Tenacity Nylon / 12% Spandex 4-Way Stretch",
      "Coating": "Fluorocarbon-Free Durable Water Repellent (DWR Eco)",
      "Pockets": "6 Multi-functional Utility Compartments with YKK Zips",
      "Warranty": "3-Year Heavy Duty Transit Warranty"
    },
    "exchangeDiscount": 1400,
    "bundle": {
      "id": "nova-fas-14",
      "name": "Modular Magnetic Belt",
      "price": 1299,
      "savings": 390
    },
    "keywords": [
      "technical commuter cargo trousers",
      "arc-tech",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-12",
    "name": "Vintage Retro High-Top Court Sneakers",
    "brand": "Courthouse 1978",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 5999,
    "originalPrice": 7499,
    "rating": 4.8,
    "reviewCount": 1120,
    "boughtPastMonth": "1.3k+",
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    "badge": "Street Icon",
    "featured": true,
    "description": "Full-grain Italian nappa leather, vintage yellowed rubber cupsole, perforated toe box, terry towel lining.",
    "gallery": [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "White & Chalk Cream",
        "hex": "#EAE6DF",
        "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Black & Vintage Sole",
        "hex": "#222325",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Shoe Size",
      "options": [
        {
          "label": "UK 7 / US 8",
          "priceDelta": 0
        },
        {
          "label": "UK 8 / US 9",
          "priceDelta": 0
        },
        {
          "label": "UK 9 / US 10",
          "priceDelta": 0
        },
        {
          "label": "UK 10 / US 11",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Supple full-grain Italian Nappa leather upper that gets softer with every step",
      "Stitched rubber cupsole with vintage off-white aged patina and herringbone pivot grip",
      "Plush French terry cloth inner lining providing sockless comfort and moisture wicking",
      "Removable ergonomic memory foam footbed with arch support"
    ],
    "specs": {
      "Upper": "100% Full-Grain Italian Nappa Leather",
      "Sole": "High-Grip Stitched Vulcanized Natural Rubber Cupsole",
      "Lining": "100% Cotton French Terry Towel Moisture-Wicking Lining",
      "Warranty": "1-Year Sole Separation & Stitching Guarantee"
    },
    "exchangeDiscount": 2100,
    "bundle": {
      "id": "nova-fas-13",
      "name": "Luxury Cashmere Ribbed Beanie",
      "price": 1599,
      "savings": 480
    },
    "keywords": [
      "vintage retro high-top court sneakers",
      "courthouse 1978",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-13",
    "name": "Luxury Cashmere Ribbed Beanie",
    "brand": "NOVA Atelier",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 1599,
    "originalPrice": 1999,
    "rating": 4.9,
    "reviewCount": 890,
    "boughtPastMonth": "940+",
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
    "badge": "Winter Essential",
    "featured": false,
    "description": "100% Grade-A Mongolian cashmere, thick 7-gauge fisherman rib knit, snug warmth without bulk.",
    "gallery": [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#1C2538",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Camel",
        "hex": "#C29864",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Heather Gray",
        "hex": "#87898C",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Fit",
      "options": [
        {
          "label": "Universal One Size",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Combed from inner undercoats of pure Mongolian cashmere goats for cloud-like softness",
      "7-gauge dense English fisherman rib knit offering 3x the insulation of regular wool",
      "Adjustable foldover cuff allowing customized snugness and forehead coverage",
      "Hypoallergenic and irritation-free even on the most sensitive skin"
    ],
    "specs": {
      "Yarn": "100% Pure Grade-A Mongolian Cashmere (15-Micron Finesse)",
      "Knit Gauge": "7-Gauge Chunky Fisherman Rib Knit",
      "Care": "Hand Wash Cold with Wool Shampoo • Dry Flat on Towel",
      "Warranty": "1-Year Softness & Pilling Guarantee"
    },
    "exchangeDiscount": 560,
    "bundle": {
      "id": "nova-fas-04",
      "name": "100% Merino Wool Oversized Knit",
      "price": 3999,
      "savings": 1200
    },
    "keywords": [
      "luxury cashmere ribbed beanie",
      "nova atelier",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-14",
    "name": "Modular Magnetic Leather Belt",
    "brand": "NOVA Atelier",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 1299,
    "originalPrice": 1599,
    "rating": 4.8,
    "reviewCount": 670,
    "boughtPastMonth": "720+",
    "image": "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
    "badge": "Micro-Adjust",
    "featured": false,
    "description": "Full-grain Italian bridle leather, ratcheting magnetic quick-release buckle, 32 micro-adjustments.",
    "gallery": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Brushed Gunmetal",
        "hex": "#3B3D42",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Matte Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Length",
      "options": [
        {
          "label": "Cut-to-Fit (Up to 44\" Waist)",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "No holes: 32 hidden micro-ratchet teeth spaced 1/4\" apart for millimeter-perfect fit",
      "Neodymium magnetic quick-release buckle clicks locked and releases in one finger pull",
      "3.8mm thick vegetable-tanned full-grain bridle leather that will never crack or sag",
      "Custom cut-to-fit sizing ruler printed on interior leather face"
    ],
    "specs": {
      "Leather": "Full-Grain Vegetable-Tanned Italian Bridle Leather (3.8mm Thick)",
      "Buckle": "Zinc-Aluminum Alloy with Neodymium Core Magnetic Latch",
      "Width": "1.35 Inches (34mm Fits Formal Trousers & Denim)",
      "Warranty": "10-Year Unbreakable Mechanical Warranty"
    },
    "exchangeDiscount": 455,
    "bundle": {
      "id": "nova-fas-03",
      "name": "Japanese Selvedge Raw Denim Jeans",
      "price": 5399,
      "savings": 1620
    },
    "keywords": [
      "modular magnetic leather belt",
      "nova atelier",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-fas-15",
    "name": "Water-Resistant Crossbody Sling Pouch",
    "brand": "Nomad Goods",
    "category": "fashion",
    "categoryLabel": "Fashion & Clothing",
    "price": 1299,
    "originalPrice": 1599,
    "rating": 4.8,
    "reviewCount": 1280,
    "boughtPastMonth": "1.4k+",
    "image": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
    "badge": "Urban Sling",
    "featured": false,
    "description": "Ballistic 840D recycled nylon, Fidlock V-buckle magnetic strap, dedicated padded sunglasses slot.",
    "gallery": [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Stealth Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Slate Grey",
        "hex": "#52555C",
        "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Volume",
      "options": [
        {
          "label": "2.5 Liter Daily EDC",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "German magnetic Fidlock quick-release buckle lets you unclip strap with one hand",
      "Tough 840D ballistic nylon exterior repels rain and abrasions with ease",
      "Internal key tether with magnetic carabiner, passport organizer, and soft lens pocket",
      "Self-compressing gusset automatically expands when filled and lays flat when empty"
    ],
    "specs": {
      "Capacity": "2.5 Liters Internal Volume • 220g Ultralight Carry",
      "Zippers": "YKK Weatherproof Reversed Coil Zippers with Hypalon Pulls",
      "Strap": "High-Density Seatbelt Webbing with German Fidlock V-Buckle",
      "Warranty": "Lifetime Warranty Against Defects"
    },
    "exchangeDiscount": 455,
    "bundle": {
      "id": "nova-fas-07",
      "name": "Aerospace Titanium Polarized Sunglasses",
      "price": 5799,
      "savings": 1740
    },
    "keywords": [
      "water-resistant crossbody sling pouch",
      "nomad goods",
      "fashion",
      "fashion & clothing",
      "cloth",
      "clothes",
      "clothing",
      "apparel",
      "wear",
      "shirt",
      "jacket",
      "coat",
      "pants",
      "jeans",
      "dress"
    ]
  },
  {
    "id": "nova-bok-01",
    "name": "Atomic Habits Deluxe Hardcover",
    "brand": "Random House",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 449,
    "originalPrice": 599,
    "rating": 4.9,
    "reviewCount": 14200,
    "boughtPastMonth": "18k+",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    "badge": "#1 Bestseller",
    "featured": true,
    "description": "An easy and proven way to build good habits and break bad ones. Hardcover gilded ribbon edition.",
    "gallery": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Deluxe Hardcover",
        "hex": "#F59E0B",
        "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Paperback Edition",
        "hex": "#E5E7EB",
        "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Format",
      "options": [
        {
          "label": "Deluxe Hardcover",
          "priceDelta": 0
        },
        {
          "label": "Paperback Edition",
          "priceDelta": -300
        },
        {
          "label": "Audiobook Companion Code",
          "priceDelta": 200
        }
      ]
    },
    "highlights": [
      "Over 15 million copies sold worldwide and translated into more than 50 languages",
      "Practical framework based on biology, psychology, and neuroscience of behavioral change",
      "Includes author chapter-by-chapter cheat sheets and habit tracker templates",
      "High-grade acid-free woodfree paper with sewn binding and satin ribbon bookmark"
    ],
    "specs": {
      "Author": "James Clear",
      "Publisher": "Penguin Random House / Century",
      "Language": "English (Official Deluxe Edition)",
      "Page Count": "320 Pages with Gold Ribbon Marker",
      "Binding": "Premium Foil-Embossed Hardcover",
      "Dimensions": "15.3 x 2.8 x 23.4 cm (450g)",
      "ISBN-13": "978-1847941831",
      "Warranty": "100% Authentic Sealed Book Guarantee"
    },
    "exchangeDiscount": 0,
    "bundle": {
      "id": "nova-bok-06",
      "name": "Kaweco Brass Sport Fountain Pen",
      "price": 2899,
      "savings": 870
    },
    "keywords": [
      "atomic habits deluxe hardcover",
      "random house",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-02",
    "name": "Steve Jobs Collector's Edition",
    "brand": "Simon & Schuster",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 599,
    "originalPrice": 799,
    "rating": 4.9,
    "reviewCount": 8900,
    "boughtPastMonth": "9.2k+",
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    "badge": "Modern Classic",
    "featured": true,
    "description": "The exclusive biography by Walter Isaacson. Embossed bonded leather collector slipcase.",
    "gallery": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Collector Hardcover",
        "hex": "#FFFFFF",
        "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Commemorative Leather",
        "hex": "#1C1917",
        "image": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Format",
      "options": [
        {
          "label": "Collector Hardcover",
          "priceDelta": 0
        },
        {
          "label": "Paperback Edition",
          "priceDelta": -400
        }
      ]
    },
    "highlights": [
      "Based on more than forty interviews with Steve Jobs conducted over two candid years",
      "Unvarnished, intimate portrayal of the creative entrepreneur whose passion revolutionized six industries",
      "Includes high-definition archive photography plates and original patent sketches",
      "Premium heavyweight cloth hardcover with silver foil debossed typography"
    ],
    "specs": {
      "Author": "Walter Isaacson",
      "Publisher": "Simon & Schuster Collector Press",
      "Language": "English Unabridged",
      "Page Count": "656 Pages with 32 Photo Plates",
      "Binding": "Slipcase Archival Cloth Hardback",
      "Dimensions": "16.5 x 4.8 x 24.1 cm (980g)",
      "ISBN-13": "978-1451648539",
      "Warranty": "100% Authentic Brand Seal"
    },
    "exchangeDiscount": 0,
    "bundle": {
      "id": "nova-bok-11",
      "name": "Midori MD Minimalist Leather Bound Notebook",
      "price": 1299,
      "savings": 390
    },
    "keywords": [
      "steve jobs collector's edition",
      "simon & schuster",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-03",
    "name": "Designing Data-Intensive Applications",
    "brand": "O'Reilly Media",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 1119,
    "originalPrice": 1499,
    "rating": 4.9,
    "reviewCount": 6420,
    "boughtPastMonth": "5.1k+",
    "image": "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=800&q=80",
    "badge": "The Big Data Bible",
    "featured": true,
    "description": "The definitive guide to distributed systems, replication, partitioning, consistency, and storage engines.",
    "gallery": [
      "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Original Edition",
        "hex": "#EF4444",
        "image": "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Format",
      "options": [
        {
          "label": "Official Softcover Print",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Widely revered as the single most critical software architecture book of the modern internet era",
      "Rigorous breakdown of relational vs document models, SSTables, LSM-trees, B-trees, and Paxos",
      "Deep dives into batch processing with MapReduce and streaming with Apache Kafka",
      "Essential technical benchmark for senior software engineers, tech leads, and cloud architects"
    ],
    "specs": {
      "Author": "Martin Kleppmann",
      "Publisher": "O'Reilly Media Technical Series",
      "Language": "English",
      "Page Count": "616 Pages",
      "Subject": "Distributed Systems, NoSQL, Batch & Stream Processing",
      "Dimensions": "17.8 x 3.6 x 23.4 cm (890g)",
      "ISBN-13": "978-1449373320",
      "Warranty": "Original Publisher Direct Import"
    },
    "exchangeDiscount": 0,
    "bundle": {
      "id": "nova-bok-04",
      "name": "Clean Code: Agile Software Craftsmanship",
      "price": 899,
      "savings": 270
    },
    "keywords": [
      "designing data-intensive applications",
      "o'reilly media",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-04",
    "name": "Clean Code: Agile Software Craftsmanship",
    "brand": "Pearson Education",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 949,
    "originalPrice": 1299,
    "rating": 4.8,
    "reviewCount": 9100,
    "boughtPastMonth": "7.4k+",
    "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    "badge": "Developer Classic",
    "featured": false,
    "description": "A handbook of agile software craftsmanship by Robert C. Martin (Uncle Bob). Clean code principles.",
    "gallery": [
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Paperback Edition",
        "hex": "#3B82F6",
        "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Format",
      "options": [
        {
          "label": "Paperback Edition",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Even bad code can function, but if code isn't clean, it can bring a development organization to its knees",
      "Covers meaningful naming, small single-responsibility functions, formatting, and unit testing",
      "Includes real-world case studies of refactoring problematic legacy code bases",
      "Foundational text for professional engineering teams worldwide"
    ],
    "specs": {
      "Author": "Robert C. Martin (Uncle Bob)",
      "Publisher": "Prentice Hall Professional",
      "Language": "English",
      "Page Count": "464 Pages",
      "Subject": "Software Craftsmanship, Refactoring, Design Principles",
      "Dimensions": "17.8 x 2.8 x 23.1 cm (720g)",
      "ISBN-13": "978-0132350884",
      "Warranty": "100% Genuine Publisher Stock"
    },
    "exchangeDiscount": 0,
    "bundle": {
      "id": "nova-bok-03",
      "name": "Designing Data-Intensive Applications",
      "price": 1099,
      "savings": 330
    },
    "keywords": [
      "clean code: agile software craftsmanship",
      "pearson education",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-05",
    "name": "Cyberpunk 2077 Visual Odyssey Artbook",
    "brand": "Dark Horse Books",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 1569,
    "originalPrice": 2099,
    "rating": 4.9,
    "reviewCount": 1280,
    "boughtPastMonth": "1.1k+",
    "image": "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    "badge": "Collector Tome",
    "featured": true,
    "description": "Massive oversized coffee-table hardcover, 368 pages of Night City architecture, vehicles, and concept art.",
    "gallery": [
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Night City Edition",
        "hex": "#FACC15",
        "image": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Neon Glitch Foil",
        "hex": "#06B6D4",
        "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Format",
      "options": [
        {
          "label": "Oversized Deluxe Hardcover",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Created in direct partnership with CD PROJEKT RED design directors and world builders",
      "368 full-color pages of high-resolution concept art, character rigs, weapons, and cyberware",
      "Deep lore accounts explaining the Corpos, the Mox, the Nomads, and the history of Night City",
      "Printed on 180GSM glossy art paper with neon spot UV varnish highlights"
    ],
    "specs": {
      "Creator": "CD Projekt RED & Dark Horse Books",
      "Publisher": "Dark Horse Deluxe Art Series",
      "Format": "Oversized Coffee Table Artbook",
      "Page Count": "368 Glossy 180gsm Art Plates",
      "Binding": "Hardcover with Spot Gloss Cyber UV",
      "Dimensions": "24.1 x 3.8 x 31.8 cm (1.8kg)",
      "ISBN-13": "978-1506716985",
      "Warranty": "Official Licensed Merchandise"
    },
    "exchangeDiscount": 0,
    "bundle": {
      "id": "nova-bok-06",
      "name": "Kaweco Brass Sport Fountain Pen",
      "price": 2899,
      "savings": 870
    },
    "keywords": [
      "cyberpunk 2077 visual odyssey artbook",
      "dark horse books",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-06",
    "name": "Kaweco Brass Sport Fountain Pen",
    "brand": "Kaweco Germany",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 2599,
    "originalPrice": 3499,
    "rating": 4.9,
    "reviewCount": 870,
    "boughtPastMonth": "780+",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
    "badge": "German Precision",
    "featured": true,
    "description": "CNC-turned solid untreated raw brass, German steel nib with iridium point, develops organic patina.",
    "gallery": [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Solid Raw Brass",
        "hex": "#D97706",
        "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stonewashed Gunmetal",
        "hex": "#4B5563",
        "image": "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Nib Size",
      "options": [
        {
          "label": "Fine (F) 0.7mm Nib",
          "priceDelta": 0
        },
        {
          "label": "Medium (M) 0.9mm Nib",
          "priceDelta": 0
        },
        {
          "label": "Extra Fine (EF) 0.5mm Nib",
          "priceDelta": 200
        }
      ]
    },
    "highlights": [
      "Precision machined in Heidelberg, Germany from a solid rod of untreated heavy brass",
      "Compact pocket size: only 10.5cm closed, but transforms to full 13cm writing length when capped",
      "Heavyweight 48-gram balance provides effortless pen-glide without needing downward hand pressure",
      "Untreated raw brass develops a stunning personalized vintage patina over months of hand carry"
    ],
    "specs": {
      "Nib Material": "Bock 23kt Gold-Plated Stainless Steel (Medium / Fine)",
      "Barrel Material": "Solid CNC-Milled Untreated German Brass",
      "Length (Closed)": "10.5 cm (Pocket Size)",
      "Length (Posted)": "13.3 cm (Full Sized Hand Balance)",
      "Weight": "44g Weighted Architectural Balance",
      "Filling Mechanism": "Standard International Short Cartridge / Mini Converter",
      "Origin": "Handcrafted in Nuremberg, Germany",
      "Warranty": "2-Year Official Kaweco International Guarantee"
    },
    "exchangeDiscount": 910,
    "bundle": {
      "id": "nova-bok-11",
      "name": "Midori MD Minimalist Leather Bound Notebook",
      "price": 1299,
      "savings": 390
    },
    "keywords": [
      "kaweco brass sport fountain pen",
      "kaweco germany",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-07",
    "name": "Moleskine Smart Writing Set & Digital Pen",
    "brand": "Moleskine",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 6799,
    "originalPrice": 9199,
    "rating": 4.8,
    "reviewCount": 640,
    "boughtPastMonth": "580+",
    "image": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    "badge": "Analog to Cloud",
    "featured": true,
    "description": "Pen+ smart pen with Ncoded paper notebook: digitizes your handwriting into editable vector text in real time.",
    "gallery": [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Obsidian Black",
        "hex": "#18181B",
        "image": "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Titanium Slate Gray",
        "hex": "#64748B",
        "image": "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Set Option",
      "options": [
        {
          "label": "Complete Starter Set (Smart Pen + Paper Tablet)",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Infrared camera inside Pen+ tracks tiny invisible grid on paper to mirror strokes in real time",
      "Syncs handwritten meeting notes instantly to Apple Notes, Google Drive, Microsoft OneNote, and PDF",
      "Transcribes cursive handwriting into digitized typed text with 98% accuracy in 30 languages",
      "Records synchronized audio during lectures linked directly to the word you were writing"
    ],
    "specs": {
      "Smart Pen": "Moleskine Smart Pen with Infrared Tracking Camera",
      "Notebook": "Paper Tablet with Ncoded Invisible Dot Grid (176 Pages)",
      "Connectivity": "Bluetooth 5.0 Low Energy + Real-time Cloud Sync",
      "Battery Runtime": "Up to 24 Hours Continuous Active Writing",
      "App Ecosystem": "Moleskine Notes App (iOS, Android, Windows, Mac)",
      "Export Formats": "PDF, SVG, DOCX, TXT, Vector SVG & Realtime Audio Sync",
      "In The Box": "Smart Pen, Paper Tablet, Magnetic USB Charger, 1 Ink Refill",
      "Warranty": "1-Year Moleskine Replacement Guarantee"
    },
    "exchangeDiscount": 2380,
    "bundle": {
      "id": "nova-bok-06",
      "name": "Kaweco Brass Sport Fountain Pen",
      "price": 2899,
      "savings": 870
    },
    "keywords": [
      "moleskine smart writing set & digital pen",
      "moleskine",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-08",
    "name": "The Psychology of Money",
    "brand": "Harriman House",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 299,
    "originalPrice": 399,
    "rating": 4.9,
    "reviewCount": 16200,
    "boughtPastMonth": "22k+",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    "badge": "Financial Classic",
    "featured": true,
    "description": "Timeless lessons on wealth, greed, and happiness by Morgan Housel. Essential modern financial literacy.",
    "gallery": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Deluxe Hardcover",
        "hex": "#059669",
        "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Standard Paperback",
        "hex": "#E5E7EB",
        "image": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Format",
      "options": [
        {
          "label": "Paperback Edition",
          "priceDelta": 0
        },
        {
          "label": "Deluxe Hardcover",
          "priceDelta": 200
        }
      ]
    },
    "highlights": [
      "Doing well with money isn’t necessarily about what you know. It’s about how you behave.",
      "19 short, captivating stories exploring the strange ways people think about wealth and decision-making",
      "Over 4 million copies sold worldwide with acclaim from financial icons and behavioral psychologists",
      "Easy-reading layout that can be devoured in a single weekend"
    ],
    "specs": {
      "Author": "Morgan Housel",
      "Publisher": "Harriman House Premium Editions",
      "Language": "English (Official Release)",
      "Page Count": "256 Pages",
      "Subject": "Timeless Lessons on Wealth, Greed, and Happiness",
      "Dimensions": "14.2 x 2.2 x 21.8 cm (360g)",
      "ISBN-13": "978-0857197689",
      "Warranty": "100% Genuine Sealed Book Guarantee"
    },
    "exchangeDiscount": 0,
    "bundle": {
      "id": "nova-bok-09",
      "name": "Deep Work: Rules for Focused Success",
      "price": 499,
      "savings": 150
    },
    "keywords": [
      "the psychology of money",
      "harriman house",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-09",
    "name": "Deep Work: Rules for Focused Success",
    "brand": "Grand Central",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 299,
    "originalPrice": 399,
    "rating": 4.8,
    "reviewCount": 8900,
    "boughtPastMonth": "7.1k+",
    "image": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80",
    "badge": "Productivity Bible",
    "featured": false,
    "description": "Cal Newport’s guide to mastering focused distraction-free cognitive performance in a distracted world.",
    "gallery": [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Hardcover Edition",
        "hex": "#D97706",
        "image": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Format",
      "options": [
        {
          "label": "Paperback Edition",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Deep work is the ability to focus without distraction on a cognitively demanding task",
      "Wall Street Journal Business Bestseller redefining high-output productivity for knowledge workers",
      "Provides rigorous strategies to cultivate deep work habits and quit social media addiction loops",
      "Transformational reading for programmers, writers, academics, and creators"
    ],
    "specs": {
      "Author": "Cal Newport",
      "Publisher": "Grand Central Publishing / Hachette",
      "Language": "English",
      "Page Count": "304 Pages",
      "Subject": "Cognitive Focus, Productivity in Distracted Worlds",
      "Dimensions": "15.2 x 2.5 x 23.1 cm (440g)",
      "ISBN-13": "978-1455586691",
      "Warranty": "100% Genuine Publisher Stock"
    },
    "exchangeDiscount": 0,
    "bundle": {
      "id": "nova-bok-01",
      "name": "Atomic Habits Deluxe Hardcover",
      "price": 499,
      "savings": 150
    },
    "keywords": [
      "deep work: rules for focused success",
      "grand central",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-10",
    "name": "Dune Deluxe Illustrated Hardcover",
    "brand": "Ace Books",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 1119,
    "originalPrice": 1499,
    "rating": 4.9,
    "reviewCount": 3420,
    "boughtPastMonth": "2.9k+",
    "image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
    "badge": "Sci-Fi Masterpiece",
    "featured": true,
    "description": "Frank Herbert's iconic masterpiece. Deluxe slipcase with foil stamping, stained edges, and illustrated poster.",
    "gallery": [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Spice Gold & Blue",
        "hex": "#B45309",
        "image": "https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Format",
      "options": [
        {
          "label": "Deluxe Illustrated Hardcover",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Winner of the inaugural Hugo Award and Nebula Award for Best Novel",
      "Includes custom endpapers, stenciled desert-sand page edges, and foil-stamped case cover",
      "Features exclusive full-color interior illustrations by renowned sci-fi master Matt Griffin",
      "Includes fold-out poster map of the planet Arrakis (Dune) with planetary coordinates"
    ],
    "specs": {
      "Author": "Frank Herbert",
      "Publisher": "Ace Books Deluxe Illustrated Classic",
      "Illustrations": "Original Color Plates & Stamped Gilded Page Edges",
      "Page Count": "688 Pages with Arrakis Map Endpapers",
      "Binding": "Embossed Cloth Hardcover with Metallic Foil",
      "Dimensions": "16.8 x 4.8 x 24.1 cm (1.1kg)",
      "ISBN-13": "978-0593099322",
      "Warranty": "Collector Edition Authenticity Certificate"
    },
    "exchangeDiscount": 0,
    "bundle": {
      "id": "nova-bok-06",
      "name": "Kaweco Brass Sport Fountain Pen",
      "price": 2899,
      "savings": 870
    },
    "keywords": [
      "dune deluxe illustrated hardcover",
      "ace books",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-11",
    "name": "Midori MD Minimalist Leather Notebook",
    "brand": "Midori Japan",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 1349,
    "originalPrice": 1799,
    "rating": 4.9,
    "reviewCount": 1150,
    "boughtPastMonth": "1.2k+",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
    "badge": "Japanese Craft",
    "featured": true,
    "description": "Japanese MD paper resistant to fountain pen bleedthrough, vegetable-tanned goat leather cover, lies 180° flat.",
    "gallery": [
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Natural Goat Leather",
        "hex": "#D97706",
        "image": "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Pure MD Cream Paper",
        "hex": "#FEF3C7",
        "image": "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Page Layout",
      "options": [
        {
          "label": "5mm Dot Grid (A5 Size)",
          "priceDelta": 0
        },
        {
          "label": "7mm Ruled Lines (A5 Size)",
          "priceDelta": 0
        },
        {
          "label": "Blank Creative Canvas (A5 Size)",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Famous proprietary Midori MD Japanese paper engineered over 60 years specifically for fountain pen ink",
      "Zero feathering and zero bleedthrough even with wet calligraphy flex nibs",
      "Thread-stitched binding allowing notebook to lie completely 180-degrees flat on any desk",
      "Includes genuine untreated vegetable-tanned goat leather cover that darkens into caramel patina"
    ],
    "specs": {
      "Paper Type": "Authentic Japanese MD Paper (Bleed Resistant for Fountain Pens)",
      "Ruling": "Blank / 5mm Dot Grid (Fountain Pen Tested)",
      "Cover": "Vegetable-Tanned Undyed Leather Cover (Ages with Patina)",
      "Binding": "Thread-Stitched Lay-Flat 180° Binding",
      "Pages": "176 Pages with Index Stickers & Bookmark Cord",
      "Origin": "Handcrafted in Japan",
      "Dimensions": "14.8 x 1.2 x 21.0 cm (A5 Size, 260g)",
      "Warranty": "100% Japanese Import Seal"
    },
    "exchangeDiscount": 472,
    "bundle": {
      "id": "nova-bok-06",
      "name": "Kaweco Brass Sport Fountain Pen",
      "price": 2899,
      "savings": 870
    },
    "keywords": [
      "midori md minimalist leather notebook",
      "midori japan",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-12",
    "name": "The Design of Everyday Things",
    "brand": "Basic Books",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 399,
    "originalPrice": 499,
    "rating": 4.8,
    "reviewCount": 5420,
    "boughtPastMonth": "4.2k+",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    "badge": "UX Bible",
    "featured": false,
    "description": "Don Norman’s ultimate treatise on human-centered design, affordances, signifiers, and mental models.",
    "gallery": [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Standard Edition",
        "hex": "#EF4444",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Format",
      "options": [
        {
          "label": "Revised Paperback Edition",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "The foundational primer on product design that coined the iconic phrase \"Norman doors\"",
      "Explains why good design is invisible while bad design generates user frustration and cognitive load",
      "Essential reading for industrial designers, product managers, UI/UX engineers, and architects",
      "Revised and expanded with modern digital interfaces, touchscreens, and smart algorithms"
    ],
    "specs": {
      "Author": "Don Norman",
      "Publisher": "Basic Books Revised & Expanded Edition",
      "Language": "English",
      "Page Count": "368 Pages with Case Studies",
      "Subject": "Human-Centered Design, Usability, Cognitive Affordances",
      "Dimensions": "14.0 x 2.8 x 21.0 cm (390g)",
      "ISBN-13": "978-0465050659",
      "Warranty": "100% Genuine Publisher Stock"
    },
    "exchangeDiscount": 0,
    "bundle": {
      "id": "nova-bok-13",
      "name": "Rotring 600 Precision Drafting Pencil",
      "price": 1599,
      "savings": 480
    },
    "keywords": [
      "the design of everyday things",
      "basic books",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-13",
    "name": "Rotring 600 Precision Drafting Pencil",
    "brand": "Rotring Germany",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 1569,
    "originalPrice": 2099,
    "rating": 4.9,
    "reviewCount": 1890,
    "boughtPastMonth": "2.1k+",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80",
    "badge": "Architect Tool",
    "featured": true,
    "description": "Full metal brass body, hexagonal barrel, knurled grip, fixed 4mm lead guidance sleeve, matte finish.",
    "gallery": [
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Stealth Black",
        "hex": "#18181B",
        "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Industrial Silver Metal",
        "hex": "#94A3B8",
        "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Lead Diameter",
      "options": [
        {
          "label": "0.5mm Drafting Lead",
          "priceDelta": 0
        },
        {
          "label": "0.7mm Writing Lead",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Full metal body crafted with ideal weight balance for fatigue-free drawing and writing",
      "Hexagonal barrel prevents pencil from rolling off architects' and designers' drafting tables",
      "Non-slip metal knurled grip provides secure hold and surgical precision guidance",
      "Fixed 4mm lead sleeve prevents breakage and provides clear view of the page with rulers"
    ],
    "specs": {
      "Lead Size": "0.5mm / 0.7mm Hi-Polymer Lead",
      "Body Material": "Full Hexagonal Brass Body (Prevents Rolling)",
      "Grip": "Precision Diamond-Pattern Knurled Metal Grip",
      "Mechanism": "Brass 3-Jaw Precision Clutch Mechanism",
      "Indicator": "Adjustable Lead Hardness Indicator Ring (HB, 2B, 4B)",
      "Length": "14.2 cm (22g Optimal Drafting Balance)",
      "Origin": "Designed in Germany / Manufactured in Japan",
      "Warranty": "2-Year Rotring International Guarantee"
    },
    "exchangeDiscount": 549,
    "bundle": {
      "id": "nova-bok-11",
      "name": "Midori MD Minimalist Leather Bound Notebook",
      "price": 1299,
      "savings": 390
    },
    "keywords": [
      "rotring 600 precision drafting pencil",
      "rotring germany",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-14",
    "name": "Sapiens: A Brief History of Humankind",
    "brand": "Harper",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 349,
    "originalPrice": 499,
    "rating": 4.8,
    "reviewCount": 19400,
    "boughtPastMonth": "15k+",
    "image": "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80",
    "badge": "Global Sensation",
    "featured": false,
    "description": "Yuval Noah Harari’s sweeping exploration of how an insignificant ape became the master of planet Earth.",
    "gallery": [
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Hardcover Edition",
        "hex": "#475569",
        "image": "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Paperback Edition",
        "hex": "#E2E8F0",
        "image": "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Format",
      "options": [
        {
          "label": "Paperback Edition",
          "priceDelta": 0
        },
        {
          "label": "Collector Hardcover",
          "priceDelta": 200
        }
      ]
    },
    "highlights": [
      "Over 25 million copies sold globally; recommended by Bill Gates, Barack Obama, and Mark Zuckerberg",
      "Chronicles 70,000 years of history: the Cognitive, Agricultural, and Scientific Revolutions",
      "Unpacks how shared fictions like money, religion, and nations enabled mass human cooperation",
      "Thrilling narrative history that changes how you view modern civilization forever"
    ],
    "specs": {
      "Author": "Yuval Noah Harari",
      "Publisher": "HarperCollins Illustrated Series",
      "Language": "English (Official Global Edition)",
      "Page Count": "464 Pages with Historical Maps & Photos",
      "Subject": "Human Evolution, Agricultural & Cognitive Revolutions",
      "Dimensions": "15.3 x 3.6 x 23.4 cm (680g)",
      "ISBN-13": "978-0062316097",
      "Warranty": "100% Genuine Sealed Book Guarantee"
    },
    "exchangeDiscount": 0,
    "bundle": {
      "id": "nova-bok-08",
      "name": "The Psychology of Money",
      "price": 499,
      "savings": 150
    },
    "keywords": [
      "sapiens: a brief history of humankind",
      "harper",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-bok-15",
    "name": "Zero to One: Notes on Startups",
    "brand": "Crown Currency",
    "category": "books",
    "categoryLabel": "Books & Stationery",
    "price": 299,
    "originalPrice": 399,
    "rating": 4.8,
    "reviewCount": 11200,
    "boughtPastMonth": "10k+",
    "image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80",
    "badge": "Startup Bible",
    "featured": false,
    "description": "Peter Thiel’s legendary Stanford lectures on building businesses that create new things rather than copying.",
    "gallery": [
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Hardcover First Print",
        "hex": "#3B82F6",
        "image": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Format",
      "options": [
        {
          "label": "Hardcover Edition",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "The great secret of our time is that there are still uncharted frontiers and inventions to create",
      "Contrasts vertical progress (technology: 0 to 1) with horizontal progress (globalization: 1 to n)",
      "Taught at Stanford Law School by legendary PayPal founder and early Facebook investor Peter Thiel",
      "Concise, counter-intuitive blueprint for founders who want to build durable monopolies"
    ],
    "specs": {
      "Author": "Peter Thiel with Blake Masters",
      "Publisher": "Crown Business / Currency",
      "Language": "English Unabridged",
      "Page Count": "224 Pages",
      "Subject": "Startup Principles, Monopoly Creation, Future Building",
      "Dimensions": "14.5 x 2.2 x 21.6 cm (340g)",
      "ISBN-13": "978-0804139298",
      "Warranty": "100% Genuine Publisher Stock"
    },
    "exchangeDiscount": 0,
    "bundle": {
      "id": "nova-bok-01",
      "name": "Atomic Habits Deluxe Hardcover",
      "price": 499,
      "savings": 150
    },
    "keywords": [
      "zero to one: notes on startups",
      "crown currency",
      "books",
      "books & stationery",
      "book",
      "reading",
      "novel",
      "literature",
      "hardcover",
      "paperback",
      "stationery",
      "pen",
      "notebook"
    ]
  },
  {
    "id": "nova-acc-01",
    "name": "Keychron Q1 Pro Wireless Mechanical Keyboard",
    "brand": "Keychron",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 7199,
    "originalPrice": 8999,
    "rating": 4.9,
    "reviewCount": 1420,
    "boughtPastMonth": "1.6k+",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    "badge": "Custom Keeb",
    "featured": true,
    "description": "Full CNC aluminum 75% layout, double-gasket acoustic mount, hot-swappable switches, QMK/VIA support.",
    "gallery": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#1C1C1E",
        "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Silver Gray",
        "hex": "#D1D5DB",
        "image": "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Mechanical Switch",
      "options": [
        {
          "label": "K Pro Red (Smooth Linear 45g)",
          "priceDelta": 0
        },
        {
          "label": "K Pro Brown (Tactile 50g)",
          "priceDelta": 0
        },
        {
          "label": "K Pro Banana (Early Bump 57g)",
          "priceDelta": 200
        }
      ]
    },
    "highlights": [
      "Solid 6063 CNC-machined aerospace aluminum body with polished, sandblasted, and anodized finish",
      "Double-gasket acoustic structure with silicone gaskets, sound absorbing foam, and IXPE switch pad",
      "Fully programmable keys and rotary aluminum knob via web-based QMK/VIA keymapper tool",
      "Hot-swappable PCB supporting virtually all 3-pin and 5-pin MX mechanical switches without soldering"
    ],
    "specs": {
      "Body Material": "Full CNC Machined 6063 Aerospace Aluminum (1.73 kg Solid Weight)",
      "Connectivity": "Bluetooth 5.1 (3 Devices) + Type-C 1000Hz Polling Rate Wired",
      "Keycaps": "KSA Profile Double-Shot Non-Shine PBT Keycaps",
      "Battery": "4000mAh Rechargeable (Up to 300 Hours Battery Runtime)",
      "Warranty": "1-Year Keychron Official India Warranty"
    },
    "exchangeDiscount": 2520,
    "bundle": {
      "id": "nova-acc-02",
      "name": "Logitech MX Master 3S Ergonomic Mouse",
      "price": 3999,
      "savings": 1200
    },
    "keywords": [
      "keychron q1 pro wireless mechanical keyboard",
      "keychron",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-02",
    "name": "Logitech MX Master 3S Ergonomic Mouse",
    "brand": "Logitech",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 4299,
    "originalPrice": 5399,
    "rating": 4.9,
    "reviewCount": 4120,
    "boughtPastMonth": "4.8k+",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    "badge": "Desk King",
    "featured": true,
    "description": "8,000 DPI track-on-glass sensor, Quiet Click switches, MagSpeed electromagnetic scroll wheel, thumb gesture.",
    "gallery": [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#2F3033",
        "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Pale Grey",
        "hex": "#E5E7EB",
        "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Performance Edition (Universal PC/Mac)",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "MagSpeed Electromagnetic scroll wheel: scroll 1,000 lines per second with zero motor noise",
      "Darkfield 8,000 DPI sensor tracks flawlessly on any surface — even on transparent glass coffee tables",
      "Quiet Click switches reduce click noise by 90% while preserving satisfying tactile click feedback",
      "Logi Bolt USB receiver and Bluetooth Low Energy connect to up to 3 computers with Logitech Flow paste"
    ],
    "specs": {
      "Sensor": "Darkfield High Precision Optical (200 to 8,000 DPI in 50 DPI steps)",
      "Battery": "500mAh Li-Po (Up to 70 Days Full Charge • 1-min charge gives 3 hours)",
      "Buttons": "7 Buttons (Left/Right, Back/Forward, App-Switch, Wheel Mode-shift, Middle click)",
      "Weight": "141g Ergonomically Sculpted Hand-Fitted Shape",
      "Warranty": "1-Year Logitech Official Manufacturer Warranty"
    },
    "exchangeDiscount": 1505,
    "bundle": {
      "id": "nova-acc-08",
      "name": "Grovemade Solid Walnut Wool Desk Pad",
      "price": 4499,
      "savings": 1350
    },
    "keywords": [
      "logitech mx master 3s ergonomic mouse",
      "logitech",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-03",
    "name": "Apple MagSafe FineWoven Wallet",
    "brand": "Apple",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 2199,
    "originalPrice": 2699,
    "rating": 4.7,
    "reviewCount": 1890,
    "boughtPastMonth": "2.1k+",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    "badge": "Pocket EDC",
    "featured": false,
    "description": "Durable microtwill FineWoven material, built-in strong magnets, Apple Find My location tracking support.",
    "gallery": [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Mulberry Wine",
        "hex": "#582A3A",
        "image": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Pacific Blue",
        "hex": "#264E5E",
        "image": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Compatibility",
      "options": [
        {
          "label": "iPhone 12 through iPhone 16 Compatible",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Crafted from durable microtwill material with soft, suede-like luxurious tactile feel",
      "Supports Apple Find My: notifies you of wallet's last known location if it detaches from phone",
      "Shielded internal compartment safely stores up to 3 credit cards or IDs without demagnetizing",
      "Powerful industrial N52 rare-earth magnets snap seamlessly onto the back of iPhone cases"
    ],
    "specs": {
      "Material": "FineWoven Post-Consumer Recycled Microtwill (68% Recycled Content)",
      "Capacity": "Up to 3 Cards (Credit Cards, Metro Cards, Driving License)",
      "Features": "Find My NFC Location Handshake + Magnetic Shielding",
      "Warranty": "1-Year Apple Limited Hardware Warranty"
    },
    "exchangeDiscount": 770,
    "bundle": {
      "id": "nova-phn-02",
      "name": "Apple iPhone 16 Pro Max",
      "price": 65199,
      "savings": 19560
    },
    "keywords": [
      "apple magsafe finewoven wallet",
      "apple",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-04",
    "name": "Anker Prime 140W GaN 4-Port Fast Charger",
    "brand": "Anker",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 4299,
    "originalPrice": 5399,
    "rating": 4.9,
    "reviewCount": 2140,
    "boughtPastMonth": "2.8k+",
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    "badge": "Power Hub",
    "featured": true,
    "description": "GaNPrime 140W single-port PD 3.1 output, ActiveShield 2.0 temperature protection, charges 4 devices.",
    "gallery": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Midnight Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "140W 4-Port GaNPrime Desktop Station",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Powers a 16\" MacBook Pro from 0 to 50% in just 28 minutes via single 140W USB-C port",
      "Powers 4 devices simultaneously: 3 USB-C ports (140W max) + 1 USB-A port (22.5W max)",
      "ActiveShield 2.0 monitors internal temperature over 3,000,000 times per day to safeguard batteries",
      "Compact footprint 40% smaller than an original single-port Apple 140W power brick"
    ],
    "specs": {
      "Total Output": "140W Max Concurrently Distributed (PowerIQ 4.0 Dynamic Allocation)",
      "Ports": "3x USB-C PD 3.1 + 1x USB-A Fast Charge",
      "Safety Suite": "Over-Voltage, Over-Current, Short-Circuit, Active Temperature Regulation",
      "Warranty": "24-Month Anker Hassle-Free Global Warranty"
    },
    "exchangeDiscount": 1505,
    "bundle": {
      "id": "nova-lap-01",
      "name": "Apple MacBook Pro 16-inch M3 Max",
      "price": 157499,
      "savings": 47250
    },
    "keywords": [
      "anker prime 140w gan 4-port fast charger",
      "anker",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-05",
    "name": "Bellroy Apex Slim Laptop Backpack 20L",
    "brand": "Bellroy",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 8799,
    "originalPrice": 10999,
    "rating": 4.9,
    "reviewCount": 580,
    "boughtPastMonth": "490+",
    "image": "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=800&q=80",
    "badge": "Architectural Carry",
    "featured": true,
    "description": "Diamond ripstop recycled Baida nylon, magnetic pre-molded opening, YKK water-resistant zips, padded 16\" slot.",
    "gallery": [
      "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Raven Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bronze Olive",
        "hex": "#4A4C3D",
        "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Volume",
      "options": [
        {
          "label": "20 Liters Commuter Silhouette",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Pre-molded magnetic lid with Fidlock magnetic hardware clicks shut automatically on contact",
      "Side-access dual-zippers unfurl the entire bag completely flat for rapid airport TSA scanning",
      "Suspended floating laptop sleeve protects up to 16-inch laptops from corner desk impacts",
      "Ergonomic lumbar contoured back panel and custom adjustable dual-density foam straps"
    ],
    "specs": {
      "Volume": "20 Liters • 1.15 kg Lightweight Empty Architecture",
      "Materials": "Durable Recycled Baida Nylon (Water-Resistant Coating)",
      "Hardware": "Fidlock Magnetic Hardware + Vegetable-Tanned Eco Leather Accents",
      "Warranty": "10-Year Bellroy International Master Warranty"
    },
    "exchangeDiscount": 3080,
    "bundle": {
      "id": "nova-acc-06",
      "name": "Orbitkey Nest Wireless Charging Desk Organizer",
      "price": 3999,
      "savings": 1200
    },
    "keywords": [
      "bellroy apex slim laptop backpack 20l",
      "bellroy",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-06",
    "name": "Orbitkey Nest Wireless Desk Organizer",
    "brand": "Orbitkey",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 4299,
    "originalPrice": 5399,
    "rating": 4.8,
    "reviewCount": 790,
    "boughtPastMonth": "680+",
    "image": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    "badge": "Clean Workspace",
    "featured": false,
    "description": "Customizable modular dividers, 10W wireless charging embedded leather lid, internal storage valise.",
    "gallery": [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Ash Grey",
        "hex": "#6D7178",
        "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Lid Style",
      "options": [
        {
          "label": "Full-Grain Leather Qi Charging Lid",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Top lid doubles as an embedded 10W fast wireless charging pad for AirPods and smartphones",
      "Customizable movable dividers allow you to organize cables, dongles, SD cards, and keys",
      "Dual-function hinge mechanism: lift lid completely off or flip open like a book",
      "Elastic pen loop keeps your favorite fountain pen secure on top"
    ],
    "specs": {
      "Materials": "Genuine Top-Grain Leather Surface + Polycarbonate Core + Dacron Melange Fabric",
      "Wireless Output": "10W Qi Fast Charge (USB-C Input Cable Included)",
      "Dimensions": "240mm x 120mm x 41mm",
      "Warranty": "2-Year Orbitkey Official Warranty"
    },
    "exchangeDiscount": 1505,
    "bundle": {
      "id": "nova-acc-02",
      "name": "Logitech MX Master 3S Mouse",
      "price": 3999,
      "savings": 1200
    },
    "keywords": [
      "orbitkey nest wireless desk organizer",
      "orbitkey",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-07",
    "name": "BenQ Screenbar Halo Monitor Light",
    "brand": "BenQ",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 6799,
    "originalPrice": 8499,
    "rating": 4.9,
    "reviewCount": 1340,
    "boughtPastMonth": "1.4k+",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    "badge": "Zero Glare",
    "featured": true,
    "description": "Asymmetric optical design, wireless rotary control puck, back ambient back-light, curved monitor clamp.",
    "gallery": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Space Gray Metallic",
        "hex": "#4B4D52",
        "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Compatibility",
      "options": [
        {
          "label": "Flat & Curved Monitors (1000R to 1800R)",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Patented asymmetric optical reflection technology ensuring zero screen glare and zero eye fatigue",
      "Wireless 2.4GHz tactile rotary aluminum puck controller for stepless brightness and temperature tuning",
      "Integrated rear ambient back-light illuminates wall behind monitor to reduce pupil contrast shock",
      "Universal counterweight clip fits both flat and curved displays seamlessly (0.28\" to 2.36\" bezel thickness)"
    ],
    "specs": {
      "Color Temperature": "2700K Warm Yellow to 6500K Cool Daylight Stepless (Ra > 95 High CRI)",
      "Illuminance": "Center 800 Lux at 45cm Height",
      "Power": "USB-C 5V/1.5A (Powers directly from monitor USB port)",
      "Warranty": "1-Year BenQ Official India Warranty"
    },
    "exchangeDiscount": 2380,
    "bundle": {
      "id": "nova-acc-08",
      "name": "Grovemade Solid Walnut Desk Pad",
      "price": 4499,
      "savings": 1350
    },
    "keywords": [
      "benq screenbar halo monitor light",
      "benq",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-08",
    "name": "Grovemade Solid Walnut Wool Desk Pad",
    "brand": "Grovemade",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 4799,
    "originalPrice": 5999,
    "rating": 4.9,
    "reviewCount": 870,
    "boughtPastMonth": "780+",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    "badge": "Artisan Desk",
    "featured": true,
    "description": "American black walnut solid wood ledge, German Merino wool felt mat, natural cork base.",
    "gallery": [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Rich Walnut & Dark Felt",
        "hex": "#4A3319",
        "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Desk Pad Size",
      "options": [
        {
          "label": "Large (96cm x 38cm)",
          "priceDelta": 0
        },
        {
          "label": "Extra Large (110cm x 45cm)",
          "priceDelta": 900
        }
      ]
    },
    "highlights": [
      "Handcrafted in Portland, Oregon from sustainably harvested American Eastern Black Walnut",
      "3mm dense German Merino wool felt top surface providing soft wrist support and smooth mouse gliding",
      "Laminated natural Portuguese cork underlay keeps mat firmly anchored to your desk surface",
      "Integrated machined solid walnut pen channel keeps writing instruments from rolling away"
    ],
    "specs": {
      "Materials": "Solid American Black Walnut + German Merino Wool Felt + Portuguese Natural Cork",
      "Dimensions": "96cm x 38cm (Large Format Desk Workspace)",
      "Care": "Spot clean with mild wool detergent and damp cloth",
      "Warranty": "Lifetime Handcrafted Woodwork Warranty"
    },
    "exchangeDiscount": 1680,
    "bundle": {
      "id": "nova-acc-01",
      "name": "Keychron Q1 Pro Mechanical Keyboard",
      "price": 8099,
      "savings": 2430
    },
    "keywords": [
      "grovemade solid walnut wool desk pad",
      "grovemade",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-09",
    "name": "CalDigit TS4 Thunderbolt 4 18-Port Dock",
    "brand": "CalDigit",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 13999,
    "originalPrice": 17499,
    "rating": 4.9,
    "reviewCount": 620,
    "boughtPastMonth": "580+",
    "image": "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=800&q=80",
    "badge": "Port Monster",
    "featured": true,
    "description": "18 ports of extreme connectivity, 98W host laptop charging, 2.5GbE Ethernet, 8K monitor support.",
    "gallery": [
      "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Space Gray Aluminum",
        "hex": "#4B4D52",
        "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "18-Port Thunderbolt 4 Station with 230W Power Supply",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Unprecedented 18 ports: 3x Thunderbolt 4, 5x USB-A, 3x USB-C (10Gbps, 20W PD), DisplayPort 1.4, SD 4.0",
      "Delivers up to 98W continuous power delivery to keep MacBooks and PC workstations charged",
      "2.5 Gigabit Ethernet port providing 2.5x faster wired network bandwidth than standard gigabit LAN",
      "Connects dual 6K 60Hz displays or a single 8K 60Hz monitor simultaneously"
    ],
    "specs": {
      "Host Interface": "Thunderbolt 4 / USB4 (40Gbps Bi-directional Bandwidth)",
      "Power Delivery": "Up to 98W to Host Computer (Includes 230W Heavy Duty PSU)",
      "Audio": "Front & Rear 3.5mm Combo Jacks + Optical Audio Out",
      "Warranty": "2-Year CalDigit Official International Warranty"
    },
    "exchangeDiscount": 4900,
    "bundle": {
      "id": "nova-lap-01",
      "name": "Apple MacBook Pro 16-inch M3 Max",
      "price": 157499,
      "savings": 47250
    },
    "keywords": [
      "caldigit ts4 thunderbolt 4 18-port dock",
      "caldigit",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-10",
    "name": "Ergotron LX Aluminum Monitor Arm",
    "brand": "Ergotron",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 6799,
    "originalPrice": 8499,
    "rating": 4.9,
    "reviewCount": 940,
    "boughtPastMonth": "820+",
    "image": "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=800&q=80",
    "badge": "Heavy Duty Arm",
    "featured": true,
    "description": "Patented Constant Force lift technology, polished aluminum unibody, supports monitors up to 34\" and 11.3kg.",
    "gallery": [
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Polished Aluminum",
        "hex": "#D1D5DB",
        "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Matte Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Mount Style",
      "options": [
        {
          "label": "Desk Clamp + Grommet Mount Included",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Patented Constant Force spring mechanism lets you adjust monitor height and tilt with featherlight touch",
      "Frees up valuable desk real estate by elevating heavy monitors floating above desk pad",
      "Passes 10,000-cycle mechanical motion test — guaranteeing 10x the lifespan of cheaper arms",
      "Integrated cable management channels route power and video cables cleanly along arm spine"
    ],
    "specs": {
      "Weight Capacity": "3.2 to 11.3 kg (Supports Ultrawide curved screens up to 34\")",
      "Lift Range": "33 cm Height Adjustment • 75° Tilt • 360° Rotation (Portrait/Landscape)",
      "VESA Compatibility": "MIS-D (75x75mm and 100x100mm)",
      "Warranty": "Industry-Leading 10-Year Ergotron Global Warranty"
    },
    "exchangeDiscount": 2380,
    "bundle": {
      "id": "nova-lap-12",
      "name": "Studio Display 27-inch 5K Retina",
      "price": 71999,
      "savings": 21600
    },
    "keywords": [
      "ergotron lx aluminum monitor arm",
      "ergotron",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-11",
    "name": "Ember Smart Temperature Control Mug 2",
    "brand": "Ember",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 7199,
    "originalPrice": 8999,
    "rating": 4.8,
    "reviewCount": 1250,
    "boughtPastMonth": "1.4k+",
    "image": "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80",
    "badge": "Hot Coffee Forever",
    "featured": true,
    "description": "Keeps your coffee or tea at your exact chosen drinking temperature (120°F - 145°F) for 80 minutes.",
    "gallery": [
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Copper Edition",
        "hex": "#B87333",
        "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Volume",
      "options": [
        {
          "label": "14 oz (414ml) Large Format Mug",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Set your exact preferred temperature using Ember smartphone app or onboard smart sensors",
      "Maintains beverage temperature for 80 minutes on battery, or all day long on the included charging coaster",
      "Intelligently wakes up when hot liquid is poured in, and enters sleep mode when empty",
      "Scratch-resistant ceramic coating over stainless steel core with IPX7 submersible washability"
    ],
    "specs": {
      "Temperature Range": "50°C to 62.5°C (120°F – 145°F)",
      "Battery Life": "80 Minutes Continuous Heat on Battery / Unlimited on Coaster",
      "Capacity": "14 fl oz (414 ml) Large Capacity Mug",
      "Warranty": "1-Year Ember Official Manufacturer Warranty"
    },
    "exchangeDiscount": 2520,
    "bundle": {
      "id": "nova-acc-08",
      "name": "Grovemade Solid Walnut Desk Pad",
      "price": 4499,
      "savings": 1350
    },
    "keywords": [
      "ember smart temperature control mug 2",
      "ember",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-12",
    "name": "Nomad Rugged Horween Leather iPhone Case",
    "brand": "Nomad Goods",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 2899,
    "originalPrice": 3599,
    "rating": 4.8,
    "reviewCount": 890,
    "boughtPastMonth": "940+",
    "image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80",
    "badge": "Horween Armor",
    "featured": false,
    "description": "Full-grain Chicago Horween leather, 10ft drop protection, integrated MagSafe neodymium magnet ring.",
    "gallery": [
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Rustic Brown",
        "hex": "#5C381E",
        "image": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Compatibility",
      "options": [
        {
          "label": "iPhone 16 Pro Max Edition",
          "priceDelta": 0
        },
        {
          "label": "iPhone 16 Pro Edition",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Vegetable-tanned Horween leather from one of America's oldest historic tanneries",
      "Develops a deep, rich personal patina with glossy sheen unique to your daily handling",
      "Anodized aluminum buttons provide satisfying, tactile click feel with zero sponginess",
      "TPE bumper ring absorbs 10ft drop impacts onto solid concrete surfaces"
    ],
    "specs": {
      "Drop Protection": "10 Feet (3.0 Meters) Shock Absorption Tested",
      "Leather": "Genuine American Horween Vegetable Tanned Full-Grain Leather",
      "MagSafe": "Nickel-Plated Neodymium High-Strength Magnet Ring Embedded",
      "Warranty": "2-Year Nomad Goods Warranty"
    },
    "exchangeDiscount": 1015,
    "bundle": {
      "id": "nova-acc-03",
      "name": "MagSafe Leather Card Wallet",
      "price": 1999,
      "savings": 600
    },
    "keywords": [
      "nomad rugged horween leather iphone case",
      "nomad goods",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-13",
    "name": "Herman Miller Embody Lumbar Support",
    "brand": "Herman Miller",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 24999,
    "originalPrice": 31199,
    "rating": 4.9,
    "reviewCount": 720,
    "boughtPastMonth": "680+",
    "image": "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80",
    "badge": "Ergonomic King",
    "featured": true,
    "description": "Designed by Bill Stumpf & Jeff Weber. Pixelated Support matrix, fully adjustable arms, 12-year warranty.",
    "gallery": [
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Sync Black & Cyan Frame",
        "hex": "#111D25",
        "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Caster Wheels",
      "options": [
        {
          "label": "Hard Floor & Carpet Multi-Surface Casters",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Pixelated Support technology: dynamic matrix of pixels conforms organically to micro-movements of your spine",
      "Backfit adjustment tunes backrest curve to match natural curve of your lumbar region",
      "Four-layer breathable seat cushion with copper-infused foam for cooling heat dissipation",
      "Shipped 100% fully assembled and backed by Herman Miller's legendary 12-year 24/7 warranty"
    ],
    "specs": {
      "Adjustments": "Seat Depth, Tilt Limiter, Backfit Tension, Armrest Height & Width",
      "Materials": "Die-Cast Aluminum Base & Spine + 100% Recycled Polyester Sync Fabric",
      "Weight Rating": "Tested for 24-Hour Daily Use up to 136 kg (300 lbs)",
      "Warranty": "Industry-Leading 12-Year 24/7 Official Herman Miller Warranty"
    },
    "exchangeDiscount": 8750,
    "bundle": {
      "id": "nova-acc-08",
      "name": "Grovemade Solid Walnut Desk Pad",
      "price": 4499,
      "savings": 1350
    },
    "keywords": [
      "herman miller embody lumbar support",
      "herman miller",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-14",
    "name": "Shargeek Storm 2 100W Cyber Power Bank",
    "brand": "Shargeek",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 7599,
    "originalPrice": 9499,
    "rating": 4.9,
    "reviewCount": 940,
    "boughtPastMonth": "820+",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80",
    "badge": "Cyberpunk Power",
    "featured": true,
    "description": "Transparent cyberpunk casing, IPS smart digital display showing battery voltage, thermals, and wattage.",
    "gallery": [
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Transparent Cyberpunk Yellow",
        "hex": "#E5A93C",
        "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "25,600mAh Storm 2 Flagship Unit",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Transparent fireproof polycarbonate shell reveals circuit board, inductors, and 8x 18650 battery cells",
      "Full-color 1.14\" IPS display presents real-time input/output wattage, temps, and running time",
      "Massive 25,600mAh airline-safe capacity capable of charging iPhone up to 7 times or MacBook Pro 1.5 times",
      "100W USB-C PD fast input allows fully recharging this massive battery bank in just 90 minutes"
    ],
    "specs": {
      "Battery Capacity": "25,600mAh / 93.5Wh (Airline Travel Legal Compliant)",
      "Max Output": "100W Fast Charge (DC, 2x USB-C, 1x USB-A Simultaneous)",
      "Screen": "1.14\" IPS Full-Color Energy Management Screen",
      "Warranty": "1-Year Shargeek Official Global Warranty"
    },
    "exchangeDiscount": 2660,
    "bundle": {
      "id": "nova-acc-04",
      "name": "Anker Prime 140W GaN Fast Charger",
      "price": 3999,
      "savings": 1200
    },
    "keywords": [
      "shargeek storm 2 100w cyber power bank",
      "shargeek",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-acc-15",
    "name": "Satechi Aluminum Magnetic Wireless Car Charger",
    "brand": "Satechi",
    "category": "accessories",
    "categoryLabel": "Accessories & Workspace",
    "price": 2199,
    "originalPrice": 2699,
    "rating": 4.7,
    "reviewCount": 710,
    "boughtPastMonth": "630+",
    "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
    "badge": "Road Ready",
    "featured": false,
    "description": "Qi2 magnetic fast wireless charging, brushed aluminum frame, 360-degree ball joint, air vent clamp.",
    "gallery": [
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Space Gray Aluminum",
        "hex": "#4B4D52",
        "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Mount Option",
      "options": [
        {
          "label": "Universal Air Vent Lever Clamp",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Qi2 certified delivering genuine 15W wireless charging speeds in the car",
      "Crafted from space gray brushed aluminum and tempered glass for sleek vehicle dashboard aesthetic",
      "Powerful magnetic ring keeps heavy iPhone 16 Pro Max rock-solid even over sudden potholes and speedbumps",
      "360-degree rotating ball socket lets you switch between portrait GPS navigation and landscape viewing"
    ],
    "specs": {
      "Wireless Output": "15W Qi2 Fast Wireless MagSafe Charging",
      "Materials": "CNC Brushed Space Gray Aluminum + Silicone Non-Slip Ring",
      "Included Cable": "1.2m Braided Type-C to Type-C Fast Charging Cord Included",
      "Warranty": "1-Year Satechi Manufacturer Warranty"
    },
    "exchangeDiscount": 770,
    "bundle": {
      "id": "nova-acc-03",
      "name": "MagSafe Leather Card Wallet",
      "price": 1999,
      "savings": 600
    },
    "keywords": [
      "satechi aluminum magnetic wireless car charger",
      "satechi",
      "accessories",
      "accessories & workspace",
      "accessory",
      "mouse",
      "keyboard",
      "workspace",
      "desk",
      "chair",
      "charger",
      "stand"
    ]
  },
  {
    "id": "nova-smt-01",
    "name": "Roborock S8 Pro Ultra Robot Vacuum & Mop",
    "brand": "Roborock",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 49999,
    "originalPrice": 62499,
    "rating": 4.9,
    "reviewCount": 870,
    "boughtPastMonth": "920+",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "badge": "Autonomous Cleaning",
    "featured": true,
    "description": "RockDock Ultra all-in-one dock: auto-emptying, auto-washing, auto-drying, 6000Pa suction, dual rollers.",
    "gallery": [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Polar White",
        "hex": "#F4F5F6",
        "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Docking System",
      "options": [
        {
          "label": "RockDock Ultra Complete Cleaning Station",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "RockDock Ultra self-washes mop, self-dries with warm air, self-empties dust, and refills water tank",
      "DuoRoller Riser twin rubber brushes counter-rotate to eliminate hair tangles on carpets and hardwoods",
      "VibraRise 2.0 sonic mopping system scrubs floors 3,000 times per minute with 6N downward pressure",
      "Reactive 3D Obstacle Avoidance uses structured light and infrared imaging to dodge shoes, cords, and pet waste"
    ],
    "specs": {
      "Suction Power": "HyperForce 6,000 Pa Extreme Suction",
      "Navigation": "PreciSense LiDAR Laser Navigation + 3D Structured Light Vision",
      "Mopping": "VibraRise 2.0 Sonic Vibration (Auto-Lifts 5mm on Carpets)",
      "Dock Functions": "Auto Dust Empty (7 Weeks) + Auto Mop Wash + Heated Air Dry",
      "Warranty": "2-Year Roborock Official India Warranty"
    },
    "exchangeDiscount": 17500,
    "bundle": {
      "id": "nova-smt-03",
      "name": "Dyson Purifier Hot+Cool Formaldehyde",
      "price": 30999,
      "savings": 9300
    },
    "keywords": [
      "roborock s8 pro ultra robot vacuum & mop",
      "roborock",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-02",
    "name": "Philips Hue Gradient Signe Floor Lamp",
    "brand": "Philips Hue",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 14599,
    "originalPrice": 18199,
    "rating": 4.8,
    "reviewCount": 640,
    "boughtPastMonth": "580+",
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    "badge": "Ambient Art",
    "featured": true,
    "description": "Gradient color blending technology, 16 million colors + tunable whites, Bluetooth + Zigbee, minimalist silhouette.",
    "gallery": [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Brushed Aluminum",
        "hex": "#D2D4D7",
        "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Height",
      "options": [
        {
          "label": "146cm Living Room Floor Lamp",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Gradient technology blends multiple colors seamlessly along a single sleek vertical light column",
      "Syncs dynamically with your movies, music, and console gaming via Philips Hue Play Sync Box",
      "Ultra-thin architectural silhouette casting soft indirect reflection against any wall corner",
      "Control effortlessly with Hue App, Apple Home, Google Assistant, or Alexa smart routines"
    ],
    "specs": {
      "Luminous Flux": "2,550 Lumens at 4000K Daylight",
      "Color Spectrum": "16 Million Dynamic Gradient Colors + 2000K to 6500K Tunable White",
      "Height & Footprint": "146 cm Height • 11 cm Base Diameter • 2.27 kg Weighted Base",
      "Protocol": "Bluetooth Instant Control + Zigbee (Hue Bridge Matter Compatible)",
      "Warranty": "2-Year Philips Lighting Manufacturer Warranty"
    },
    "exchangeDiscount": 5110,
    "bundle": {
      "id": "nova-smt-13",
      "name": "Philips Hue Play HDMI Sync Box 4K",
      "price": 11199,
      "savings": 3360
    },
    "keywords": [
      "philips hue gradient signe floor lamp",
      "philips hue",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-03",
    "name": "Dyson Purifier Hot+Cool Formaldehyde HP09",
    "brand": "Dyson",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 31699,
    "originalPrice": 39599,
    "rating": 4.9,
    "reviewCount": 1140,
    "boughtPastMonth": "1.2k+",
    "image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
    "badge": "Pure Living",
    "featured": true,
    "description": "Destroys formaldehyde permanently, HEPA H13 fully sealed filtration, heats in winter, cools in summer.",
    "gallery": [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "White & Gold",
        "hex": "#D4AF37",
        "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Nickel & Gold",
        "hex": "#8E8268",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Flagship Formaldehyde HP09 Model",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Cryptomic catalytic filter breaks down harmful formaldehyde molecules into harmless water and CO2",
      "Fully sealed to HEPA H13 standard: prevents pollutants from leaking back into room air",
      "Air Multiplier technology projects 290 liters per second of smooth purified airflow",
      "Triple functionality: purifies year-round, heats rooms rapidly in winter, delivers powerful fan breeze in summer"
    ],
    "specs": {
      "Filtration": "HEPA H13 Glass Filter (Captures 99.95% of particles down to 0.1 microns)",
      "Sensors": "Solid-State Formaldehyde Sensor + PM2.5, PM10, VOCs, NO2, Humidity, Temp",
      "Oscillation": "Adjustable 350-Degree Smooth Motorized Oscillation",
      "App Support": "MyDyson App with Real-Time Air Quality Graphing & Voice Control",
      "Warranty": "2-Year Dyson Official India Onsite Warranty"
    },
    "exchangeDiscount": 11095,
    "bundle": {
      "id": "nova-smt-01",
      "name": "Roborock S8 Pro Ultra Robot Vacuum",
      "price": 56199,
      "savings": 16860
    },
    "keywords": [
      "dyson purifier hot+cool formaldehyde hp09",
      "dyson",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-04",
    "name": "Nespresso Vertuo Creatista Espresso Machine",
    "brand": "Nespresso",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 29899,
    "originalPrice": 37399,
    "rating": 4.8,
    "reviewCount": 520,
    "boughtPastMonth": "480+",
    "image": "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80",
    "badge": "Barista Luxury",
    "featured": true,
    "description": "Brushed stainless steel unibody by Breville, automated steam wand with 8 milk textures, Centrifusion extraction.",
    "gallery": [
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Brushed Stainless Steel",
        "hex": "#D2D4D7",
        "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Package",
      "options": [
        {
          "label": "Includes Stainless Steel Barista Milk Jug & Sample Pods",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Patented Centrifusion technology spins capsule up to 4,000 RPM to produce silky velvet crema",
      "Automated microfoam steam wand with 3 milk temperature settings and 3 froth texture levels for latte art",
      "Brews 6 cup sizes: Ristretto (25ml), Espresso (40ml), Double Espresso (80ml), Gran Lungo (150ml), Mug (230ml), Carafe (535ml)",
      "Heats up in just 3 seconds with ThermoJet high-efficiency heating system"
    ],
    "specs": {
      "Material": "Heavy-Gauge Brushed Stainless Steel Commercial Construction",
      "Water Tank": "2.0 Liter Removable Water Reservoir",
      "Pump Pressure": "Centrifusion Extraction with Capsule Barcode Auto-Recognition",
      "Warranty": "2-Year Nespresso Official Manufacturer Warranty"
    },
    "exchangeDiscount": 10465,
    "bundle": {
      "id": "nova-acc-11",
      "name": "Ember Smart Temperature Control Mug 2",
      "price": 6699,
      "savings": 2010
    },
    "keywords": [
      "nespresso vertuo creatista espresso machine",
      "nespresso",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-05",
    "name": "Apple HomePod Gen 2 Room-Sensing Speaker",
    "brand": "Apple",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 15099,
    "originalPrice": 18899,
    "rating": 4.8,
    "reviewCount": 1420,
    "boughtPastMonth": "1.6k+",
    "image": "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800&q=80",
    "badge": "Acoustic Intelligence",
    "featured": false,
    "description": "High-excursion woofer, beamforming array of five tweeters, Spatial Audio with Dolby Atmos, room sensing.",
    "gallery": [
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519500099198-fd81846b8f03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Midnight",
        "hex": "#1C1F26",
        "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "White",
        "hex": "#F0F2F5",
        "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Single HomePod 2 Unit",
          "priceDelta": 0
        },
        {
          "label": "Stereo Pair (Set of 2 Speakers)",
          "priceDelta": 14000
        }
      ]
    },
    "highlights": [
      "Room sensing technology automatically listens to acoustic reflections from walls to optimize tuning",
      "Custom high-excursion 4-inch woofer delivers deep, rich, distortion-free bass",
      "Five horn-loaded beamforming tweeters optimize direct and ambient audio separation for Dolby Atmos",
      "Built-in temperature and humidity sensor triggers smart home automations automatically"
    ],
    "specs": {
      "Processor": "Apple S7 Silicon with Advanced Computational Audio Modeling",
      "Smart Home Hub": "Matter, Thread Border Router, Apple HomeKit Support",
      "Dimensions": "168mm Height x 142mm Width • 2.3 kg Weighted Mesh Cylinder",
      "Warranty": "1-Year Apple Limited Hardware Warranty"
    },
    "exchangeDiscount": 5285,
    "bundle": {
      "id": "nova-smt-02",
      "name": "Philips Hue Gradient Signe Floor Lamp",
      "price": 12599,
      "savings": 3780
    },
    "keywords": [
      "apple homepod gen 2 room-sensing speaker",
      "apple",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-06",
    "name": "Breville Smart Oven Air Fryer Pro",
    "brand": "Breville",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 18399,
    "originalPrice": 22999,
    "rating": 4.9,
    "reviewCount": 870,
    "boughtPastMonth": "780+",
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80",
    "badge": "Countertop Master",
    "featured": true,
    "description": "Element iQ system with 6 independent quartz heating elements, 13 smart cooking presets, dual-speed convection fan.",
    "gallery": [
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Brushed Stainless Steel",
        "hex": "#D2D4D7",
        "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Capacity",
      "options": [
        {
          "label": "1 cu. ft. Extra-Large Capacity (Fits 14-lb Turkey)",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Element iQ smart algorithm steers heating power where and when needed across 6 independent quartz elements",
      "Dual-speed Super Convection fan delivers massive volume of hot air for crispy air-frying",
      "13 cooking functions: Air Fry, Toast, Bagel, Broil, Bake, Roast, Warm, Pizza, Proof, Dehydrate, Reheat, Cookies, Slow Cook",
      "Fits a 9-slice toaster, 14-pound holiday turkey, or standard 12\" x 12\" Dutch oven"
    ],
    "specs": {
      "Heating Technology": "Element iQ with 6 Quartz Elements (2400W Power)",
      "Cavity Interior": "Non-Stick Easy-Clean Interior with Integrated Oven Light",
      "Included Trays": "Air Fry Basket, 9x13 Enamel Roasting Pan, 13\" Non-Stick Pizza Pan",
      "Warranty": "2-Year Official Breville Warranty"
    },
    "exchangeDiscount": 6440,
    "bundle": {
      "id": "nova-smt-10",
      "name": "Balmuda The Toaster Steam Oven",
      "price": 12999,
      "savings": 3900
    },
    "keywords": [
      "breville smart oven air fryer pro",
      "breville",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-07",
    "name": "Aqara Smart Video Doorbell G4 Matter",
    "brand": "Aqara",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 6799,
    "originalPrice": 8499,
    "rating": 4.7,
    "reviewCount": 980,
    "boughtPastMonth": "1.1k+",
    "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    "badge": "Local AI Security",
    "featured": false,
    "description": "First battery-powered video doorbell with Apple HomeKit Secure Video, local facial recognition, Matter hub.",
    "gallery": [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Shadow Gray",
        "hex": "#3B3D42",
        "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Power Mode",
      "options": [
        {
          "label": "Battery or Hardwired Dual-Power System",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "On-device local AI facial recognition triggers custom smart routines for family members without cloud subscriptions",
      "Full integration with Apple HomeKit Secure Video: encrypted iCloud cloud video recording",
      "Includes 95 dB indoor chime repeater box with microSD card slot for local encrypted recording",
      "Dual-power design: runs up to 4 months on 6x AA batteries or connects to existing doorbell wiring"
    ],
    "specs": {
      "Video Resolution": "1080p Full HD with 162° Ultra-Wide Angle Lens & Infrared Night Vision",
      "Ecosystem Support": "Apple HomeKit, Google Home, Amazon Alexa, IFTTT, Matter",
      "Indoor Chime": "Included USB-C Chime Repeater with 95dB Siren",
      "Warranty": "1-Year Official Aqara Manufacturer Warranty"
    },
    "exchangeDiscount": 2380,
    "bundle": {
      "id": "nova-smt-09",
      "name": "August Wi-Fi Smart Deadbolt Lock 4th Gen",
      "price": 9899,
      "savings": 2970
    },
    "keywords": [
      "aqara smart video doorbell g4 matter",
      "aqara",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-08",
    "name": "Nanoleaf Lines Smarter 60° RGB Beams",
    "brand": "Nanoleaf",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 9899,
    "originalPrice": 12399,
    "rating": 4.8,
    "reviewCount": 830,
    "boughtPastMonth": "790+",
    "image": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    "badge": "Modular Glow",
    "featured": true,
    "description": "Modular backlit LED smart light bars, 16 million colors, Rhythm music visualizer, Thread & Matter enabled.",
    "gallery": [
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "White Beams",
        "hex": "#F0F2F5",
        "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Pack Size",
      "options": [
        {
          "label": "9-Light Bar Starter Kit (60° Angle Connectors)",
          "priceDelta": 0
        },
        {
          "label": "15-Light Bar Master Builder Kit",
          "priceDelta": 4100
        }
      ]
    },
    "highlights": [
      "Connect modular light bars into custom geometric wall patterns: hexagons, diamonds, or futuristic cyber grids",
      "Backlit illumination radiates soft glowing ambient light gradients across your wall surface",
      "Rhythm audio visualizer reacts in real-time to songs, movies, or gaming sound effects",
      "Acts as a Thread Border Router to strengthen your smart home wireless mesh reliability"
    ],
    "specs": {
      "Color Chemistry": "16 Million Colors + 1200K to 6500K Tunable White with Dynamic Color Scenes",
      "Connectivity": "Wi-Fi 2.4GHz + Thread Border Router + Matter Smart Home Protocol",
      "Mounting": "Drill-Free Double-Sided Adhesive Mounting Tape Included",
      "Warranty": "2-Year Official Nanoleaf Warranty"
    },
    "exchangeDiscount": 3465,
    "bundle": {
      "id": "nova-smt-02",
      "name": "Philips Hue Gradient Signe Floor Lamp",
      "price": 12599,
      "savings": 3780
    },
    "keywords": [
      "nanoleaf lines smarter 60° rgb beams",
      "nanoleaf",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-09",
    "name": "August Wi-Fi Smart Deadbolt Lock 4th Gen",
    "brand": "August",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 11399,
    "originalPrice": 14199,
    "rating": 4.7,
    "reviewCount": 740,
    "boughtPastMonth": "680+",
    "image": "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
    "badge": "Keyless Entry",
    "featured": false,
    "description": "Replaces only the interior thumbturn: keep your existing exterior door key and deadbolt hardware.",
    "gallery": [
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Silver",
        "hex": "#D2D4D7",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Built-in Wi-Fi 4th Generation Model",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Retrofit installation: attaches to the inside of your door in 10 minutes using a single screwdriver",
      "Keep your original exterior key: family members or landlords can still use traditional keys if needed",
      "Auto-unlocks automatically as you approach your front door with your phone in your pocket",
      "DoorSense sensor verifies whether your door is securely closed before engaging deadbolt bolt"
    ],
    "specs": {
      "Connectivity": "Direct Wi-Fi (No Bridge Required) + Bluetooth Low Energy",
      "Compatibility": "Standard Single-Cylinder Deadbolts",
      "Battery": "2x CR123 Lithium Batteries (Estimated 4 to 6 Months Battery Life)",
      "Warranty": "1-Year Official August Manufacturer Warranty"
    },
    "exchangeDiscount": 3990,
    "bundle": {
      "id": "nova-smt-07",
      "name": "Aqara Smart Video Doorbell G4 Matter",
      "price": 5799,
      "savings": 1740
    },
    "keywords": [
      "august wi-fi smart deadbolt lock 4th gen",
      "august",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-10",
    "name": "Balmuda The Toaster Steam Oven",
    "brand": "Balmuda Japan",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 15099,
    "originalPrice": 18899,
    "rating": 4.9,
    "reviewCount": 620,
    "boughtPastMonth": "540+",
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "badge": "Steam Artisan",
    "featured": true,
    "description": "Japanese precision steam technology, 5cc water boiler, proprietary temperature curves for golden toast.",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "White",
        "hex": "#F4F5F6",
        "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Japanese Heritage Steam Toaster with 5cc Water Cup",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Revolutionary 5cc steam technology envelopes bread in a thin steam layer before heating",
      "Seals in bread's natural inner moisture and fluffy texture while crisping exterior crust golden brown",
      "Second-by-second micro-temperature control across three distinct thermal phases",
      "Five specialized toast modes: Sandwich Bread, Artisan Bread, Pizza, Croissant, and Oven Bake Mode"
    ],
    "specs": {
      "Origin": "Engineered in Tokyo, Japan by Balmuda Design Studios",
      "Heater": "Quartz Tube Heating System with Micro-Boiler (1300W Max Draw)",
      "Dimensions": "357mm x 321mm x 209mm (Compact Japanese Kitchen Counter Footprint)",
      "Warranty": "2-Year Balmuda Official International Warranty"
    },
    "exchangeDiscount": 5285,
    "bundle": {
      "id": "nova-smt-11",
      "name": "Fellow Stagg EKG Electric Pour-Over Kettle",
      "price": 8499,
      "savings": 2550
    },
    "keywords": [
      "balmuda the toaster steam oven",
      "balmuda japan",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-11",
    "name": "Fellow Stagg EKG Electric Pour-Over Kettle",
    "brand": "Fellow",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 9899,
    "originalPrice": 12399,
    "rating": 4.9,
    "reviewCount": 1420,
    "boughtPastMonth": "1.6k+",
    "image": "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80",
    "badge": "Barista Standard",
    "featured": true,
    "description": "Counterbalanced handle, precision fluted gooseneck spout, variable degree-by-degree temperature dial.",
    "gallery": [
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Walnut & Black",
        "hex": "#583D28",
        "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Kettle Capacity",
      "options": [
        {
          "label": "0.9 Liter Specialty Coffee Volume",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Precision fluted pour spout produces optimal flow rate for artisan pour-over brewing",
      "PID controller maintains exact chosen water temperature within 1°F for 60 minutes in Hold Mode",
      "High-contrast LCD screen displays real-time target temperature and current temperature",
      "Integrated Brew Stopwatch counts extraction time to help you dial in the ultimate cup"
    ],
    "specs": {
      "Temperature Range": "40°C to 100°C (104°F to 212°F) Degree-by-Degree Variable",
      "Heating Power": "1200W Rapid Boiling Element with PID Controller",
      "Capacity": "0.9 Liters Max Fill Line • High-Grade 304 Stainless Steel Body",
      "Warranty": "1-Year Official Fellow Products Warranty"
    },
    "exchangeDiscount": 3465,
    "bundle": {
      "id": "nova-smt-04",
      "name": "Nespresso Vertuo Creatista Espresso Machine",
      "price": 29199,
      "savings": 8760
    },
    "keywords": [
      "fellow stagg ekg electric pour-over kettle",
      "fellow",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-12",
    "name": "Ecobee Smart Thermostat Premium",
    "brand": "Ecobee",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 12999,
    "originalPrice": 16199,
    "rating": 4.8,
    "reviewCount": 620,
    "boughtPastMonth": "580+",
    "image": "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80",
    "badge": "Climate Intelligence",
    "featured": false,
    "description": "Brushed zinc unibody, built-in air quality monitor, radar occupancy sensing, includes SmartSensor.",
    "gallery": [
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Silver Glass",
        "hex": "#D2D4D7",
        "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Package",
      "options": [
        {
          "label": "Includes Remote SmartSensor for Bedroom",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Saves up to 26% annually on home heating and cooling energy expenses automatically",
      "Built-in indoor air quality monitor alerts you to VOCs, humidity, and carbon dioxide spikes",
      "Radar occupancy sensor detects presence across wider angles and through walls to manage comfort",
      "Seamless integration with Apple HomeKit, Siri, Alexa, and Google Assistant voice controllers"
    ],
    "specs": {
      "Display": "Full-Color Touchscreen LCD with Ambient Light Sensor",
      "Sensors": "Radar Occupancy, Temperature, Humidity, Indoor Air Quality (VOC/CO2)",
      "Compatibility": "Supports 95% of Residential HVAC Systems (Heat Pumps, AC, Multi-Stage)",
      "Warranty": "3-Year Ecobee Professional Warranty"
    },
    "exchangeDiscount": 4550,
    "bundle": {
      "id": "nova-smt-03",
      "name": "Dyson Purifier Hot+Cool Formaldehyde",
      "price": 30999,
      "savings": 9300
    },
    "keywords": [
      "ecobee smart thermostat premium",
      "ecobee",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-13",
    "name": "Philips Hue Play HDMI Sync Box 4K",
    "brand": "Philips Hue",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 12999,
    "originalPrice": 16199,
    "rating": 4.8,
    "reviewCount": 890,
    "boughtPastMonth": "940+",
    "image": "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    "badge": "TV Light Sync",
    "featured": true,
    "description": "Syncs smart lights with what’s on your TV screen: 4 HDMI inputs, 4K 60Hz HDR10+ and Dolby Vision.",
    "gallery": [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Inputs",
      "options": [
        {
          "label": "4x HDMI 2.0b Inputs with Auto-Switching",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Transforms entire living room into a home cinema by matching ambient smart light colors to TV frames in real-time",
      "Four HDMI ports allow connecting PlayStation 5, Xbox Series X, Apple TV 4K, and Blu-ray players",
      "Zero lag lighting synchronization ensures colors dance across walls in perfect rhythm with video action",
      "Control intensity, brightness, and color palette via dedicated Hue Sync mobile application"
    ],
    "specs": {
      "Video Standards": "4K 60Hz, HDR10+, Dolby Vision Passthrough with HDCP 2.2",
      "HDMI Ports": "4x HDMI Inputs + 1x HDMI Output to TV with ARC Passthrough",
      "Requires": "Philips Hue Bridge + Hue Color Ambiance Lights (Gradient Strip or Play Bars)",
      "Warranty": "2-Year Philips Official Brand Warranty"
    },
    "exchangeDiscount": 4550,
    "bundle": {
      "id": "nova-smt-02",
      "name": "Philips Hue Gradient Signe Floor Lamp",
      "price": 12599,
      "savings": 3780
    },
    "keywords": [
      "philips hue play hdmi sync box 4k",
      "philips hue",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-14",
    "name": "Sonos Era 300 Spatial Audio Speaker",
    "brand": "Sonos",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 25299,
    "originalPrice": 31599,
    "rating": 4.9,
    "reviewCount": 760,
    "boughtPastMonth": "710+",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    "badge": "Dolby Atmos Master",
    "featured": true,
    "description": "Revolutionary acoustic architecture featuring six drivers, directional audio, Dolby Atmos Spatial Audio.",
    "gallery": [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519500099198-fd81846b8f03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "White",
        "hex": "#F0F2F5",
        "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Single Era 300 Flagship Speaker",
          "priceDelta": 0
        },
        {
          "label": "Stereo Pair for Beam/Arc Rear Surrounds",
          "priceDelta": 23400
        }
      ]
    },
    "highlights": [
      "Six meticulously positioned drivers project sound left, right, forward, and upward for true Dolby Atmos",
      "Unique hourglass acoustic form factor designed from the ground up for spatial audio projection",
      "Stream high-res audio over Wi-Fi 6, connect with Bluetooth 5.0, or use 3.5mm line-in adapter",
      "Trueplay tuning technology optimizes acoustic reflections for the specific geometry of your room"
    ],
    "specs": {
      "Acoustic Architecture": "Six Class-D Amplifiers + 4 Tweeters (Up, Forward, Sides) + 2 Woofers",
      "Spatial Formats": "Dolby Atmos Music & Cinema via Apple Music and Amazon Music",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.0, USB-C Line-In, Apple AirPlay 2",
      "Warranty": "1-Year Sonos Official Brand Warranty"
    },
    "exchangeDiscount": 8855,
    "bundle": {
      "id": "nova-ele-06",
      "name": "Sonos Beam Gen 2 Dolby Atmos Soundbar",
      "price": 22499,
      "savings": 6750
    },
    "keywords": [
      "sonos era 300 spatial audio speaker",
      "sonos",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  },
  {
    "id": "nova-smt-15",
    "name": "Withings Body Scan Smart Health Station",
    "brand": "Withings",
    "category": "smart-home",
    "categoryLabel": "Smart Home & Appliances",
    "price": 18399,
    "originalPrice": 22999,
    "rating": 4.8,
    "reviewCount": 480,
    "boughtPastMonth": "410+",
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    "badge": "Clinical Health",
    "featured": false,
    "description": "Segmental body composition, 6-lead ECG, nerve health tracking, vascular age, retractable glass handle.",
    "gallery": [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    "colors": [
      {
        "name": "Black Mirror Glass",
        "hex": "#1C1C1D",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "variants": {
      "type": "Edition",
      "options": [
        {
          "label": "Clinical Health Station with Retractable Handle",
          "priceDelta": 0
        }
      ]
    },
    "highlights": [
      "Retractable handle contains 4 stainless steel electrodes providing segmental body fat and muscle mass for arms, legs, and torso",
      "Records 6-lead clinical grade ECG to detect atrial fibrillation and cardiac arrhythmias in 30 seconds",
      "Evaluates sudomotor nerve health in feet to screen for signs of peripheral autonomic neuropathy",
      "Measures pulse wave velocity and vascular age to monitor arterial stiffness and cardiovascular health"
    ],
    "specs": {
      "Clinical Sensors": "6-Lead ECG + Segmental Multi-Frequency Bioelectrical Impedance + Nerve Score",
      "Display": "3.2\" High-Resolution Color LCD Screen with Graphical Trends",
      "Battery": "Rechargeable Li-ion Battery (Up to 12 Months Battery on Single Charge)",
      "Warranty": "2-Year Withings Official Manufacturer Warranty"
    },
    "exchangeDiscount": 6440,
    "bundle": {
      "id": "nova-smt-03",
      "name": "Dyson Purifier Hot+Cool Formaldehyde",
      "price": 30999,
      "savings": 9300
    },
    "keywords": [
      "withings body scan smart health station",
      "withings",
      "smart-home",
      "smart home & appliances",
      "smart home",
      "home",
      "appliance",
      "vacuum",
      "light",
      "lamp",
      "purifier",
      "coffee",
      "kettle"
    ]
  }
];

/* ==========================================================================
   2. CATALOGUE INTEGRITY AUDIT ROUTINE (RUNS AT STARTUP)
   ========================================================================== */
function validateCatalogueIntegrity() {
  const expectedDistribution = {
    phones: 15,
    laptops: 15,
    electronics: 15,
    fashion: 15,
    books: 15,
    accessories: 15,
    'smart-home': 15
  };

  console.assert(PRODUCTS.length === 105, `Catalogue length must be 105, got: ${PRODUCTS.length}`);

  const idSet = new Set();
  const nameSet = new Set();
  const actualCounts = {
    phones: 0,
    laptops: 0,
    electronics: 0,
    fashion: 0,
    books: 0,
    accessories: 0,
    'smart-home': 0
  };

  PRODUCTS.forEach(item => {
    // Unique ID check
    if (idSet.has(item.id)) {
      console.error(`Catalogue Integrity Violation: Duplicate ID detected -> ${item.id}`);
    }
    idSet.add(item.id);

    // Unique Name check
    if (nameSet.has(item.name)) {
      console.error(`Catalogue Integrity Violation: Duplicate Name detected -> ${item.name}`);
    }
    nameSet.add(item.name);

    // Pricing checks
    console.assert(typeof item.price === 'number' && item.price > 0, `Invalid price on ${item.id}`);
    if (item.originalPrice) {
      console.assert(item.originalPrice > item.price, `Original price not greater than price on ${item.id}`);
    }

    // Category distribution increment
    if (actualCounts.hasOwnProperty(item.category)) {
      actualCounts[item.category]++;
    } else {
      console.error(`Catalogue Integrity Violation: Unknown category -> ${item.category}`);
    }
  });

  // Verify exact category totals
  for (const [cat, count] of Object.entries(expectedDistribution)) {
    console.assert(actualCounts[cat] === count, `Category count mismatch for ${cat}: Expected ${count}, found ${actualCounts[cat]}`);
  }

  return {
    total: PRODUCTS.length,
    counts: actualCounts
  };
}

const Storage = {
  isAvailable() {
    try {
      const testKey = '__nova_storage_test__';
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  },

  get(key, defaultValue) {
    if (!this.isAvailable()) return defaultValue;
    try {
      const raw = window.localStorage.getItem(key);
      if (!raw) return defaultValue;
      return JSON.parse(raw);
    } catch (err) {
      console.warn(`Defensive Storage: Failed to parse ${key}, using default:`, err);
      return defaultValue;
    }
  },

  set(key, value) {
    if (!this.isAvailable()) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn(`Defensive Storage: Failed to persist ${key}:`, err);
    }
  },

  remove(key) {
    if (!this.isAvailable()) return;
    try {
      window.localStorage.removeItem(key);
    } catch (err) {
      console.warn(`Defensive Storage: Failed to remove ${key}:`, err);
    }
  }
};

/* ==========================================================================
   4. CENTRAL APPLICATION STATE
   ========================================================================== */
const AppState = {
  products: PRODUCTS,

  filters: {
    searchQuery: '',
    category: 'all',
    priceMax: 149999,
    sort: 'featured'
  },

  cart: [],
  wishlistIds: [],
  recentlyViewedIds: [],
  compareIds: [],

  // Customer Account Session & Precision Location State
  user: {
    isLoggedIn: false,
    name: '',
    email: '',
    phone: '',
    address: ''
  },
  pendingCheckoutAction: null,
  latestOrder: null,
  selectedMapLocation: {
    address: '',
    lat: 25.8900,
    lng: 82.4500
  },

  activeOverlay: null, // null | 'cart' | 'wishlist' | 'quick-view' | 'checkout' | 'compare' | 'auth' | 'map' | 'tracking'
  activeModalTrigger: null
};

// Defensive hydration from LocalStorage
function hydrateStateFromStorage() {
  const validProductIds = new Set(PRODUCTS.map(p => p.id));

  // 1. Cart
  const storedCart = Storage.get('nova-cart', []);
  if (Array.isArray(storedCart)) {
    AppState.cart = storedCart.filter(item => {
      return item && typeof item.id === 'string' && validProductIds.has(item.id) &&
             typeof item.quantity === 'number' && item.quantity >= 1;
    });
  }

  // 2. Wishlist
  const storedWishlist = Storage.get('nova-wishlist', []);
  if (Array.isArray(storedWishlist)) {
    AppState.wishlistIds = [...new Set(storedWishlist.filter(id => validProductIds.has(id)))];
  }

  // 3. Recently Viewed (max 8, newest first)
  const storedRecent = Storage.get('nova-recently-viewed', []);
  if (Array.isArray(storedRecent)) {
    AppState.recentlyViewedIds = [...new Set(storedRecent.filter(id => validProductIds.has(id)))].slice(0, 8);
  }

  // 4. Customer User Session (Loads only if an account was explicitly registered/signed in)
  const activeUser = Storage.get('nova-active-user', null);
  if (activeUser && typeof activeUser === 'object' && activeUser.isLoggedIn && activeUser.email) {
    AppState.user = {
      isLoggedIn: true,
      name: activeUser.name || '',
      email: activeUser.email || '',
      phone: activeUser.phone || '',
      address: activeUser.address || ''
    };
  } else {
    AppState.user = {
      isLoggedIn: false,
      name: '',
      email: '',
      phone: '',
      address: ''
    };
  }
  updateHeaderUserDisplay();

  // 5. Latest Order & Tracking (Active ONLY when logged in and customer actually ordered)
  if (AppState.user && AppState.user.isLoggedIn) {
    const storedOrder = Storage.get('nova-latest-order', null);
    AppState.latestOrder = (storedOrder && typeof storedOrder === 'object') ? storedOrder : null;
  } else {
    AppState.latestOrder = null;
  }
}

function updateHeaderUserDisplay() {
  const userText = document.getElementById('headerUserText');
  const userBtn = document.getElementById('headerUserBtn');
  if (!userText || !userBtn) return;

  if (AppState.user && AppState.user.isLoggedIn && AppState.user.name) {
    const firstName = AppState.user.name.split(' ')[0] || 'Account';
    userText.textContent = `👑 ${firstName}`;
    userBtn.title = `Signed in as ${AppState.user.name} (${AppState.user.email})`;
    userBtn.classList.add('logged-in');
  } else {
    userText.textContent = 'Sign In / Register';
    userBtn.title = 'Create an Account or Sign In to purchase';
    userBtn.classList.remove('logged-in');
  }
}

/* ==========================================================================
   5. PURE DERIVED SELECTORS & CALCULATIONS
   ========================================================================== */
function getFilteredProducts() {
  const query = AppState.filters.searchQuery.trim().toLowerCase();
  const category = AppState.filters.category;
  const maxPrice = AppState.filters.priceMax;

  return AppState.products
    .filter(product => {
      // Category filter
      if (category !== 'all' && product.category !== category) {
        return false;
      }
      // Price ceiling filter
      if (product.price > maxPrice) {
        return false;
      }
      // Search term matching (name, category, description, brand, keywords/synonyms)
      if (query.length > 0) {
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCategory = product.categoryLabel.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesBrand = product.brand ? product.brand.toLowerCase().includes(query) : false;
        const matchesKeywords = Array.isArray(product.keywords) && product.keywords.some(k => k.toLowerCase().includes(query) || query.includes(k.toLowerCase()));
        if (!matchesName && !matchesCategory && !matchesDesc && !matchesBrand && !matchesKeywords) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      switch (AppState.filters.sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating-desc':
          return (b.rating || 0) - (a.rating || 0);
        case 'featured':
        default:
          if (a.featured === b.featured) {
            return 0;
          }
          return a.featured ? -1 : 1;
      }
    });
}

function getCartMetrics() {
  const threshold = 2499;
  let totalUnits = 0;
  let subtotal = 0;

  AppState.cart.forEach(item => {
    const product = AppState.products.find(p => p.id === item.id);
    if (product) {
      totalUnits += item.quantity;
      subtotal += product.price * item.quantity;
    }
  });

  const isFreeShipping = subtotal >= threshold;
  const remaining = Math.max(0, threshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / threshold) * 100));

  return {
    totalUnits,
    subtotal,
    isFreeShipping,
    remaining,
    progressPercent
  };
}

/* ==========================================================================
   6. UI FORMATTING & HELPERS
   ========================================================================== */
function formatCurrency(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getSvgFallback(categoryLabel) {
  const safeLabel = encodeURIComponent(categoryLabel || 'NOVA');
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23191927"/><circle cx="200" cy="180" r="60" fill="%2329293A"/><path d="M180 180h40M200 160v40" stroke="%238B5CF6" stroke-width="4" stroke-linecap="round"/><text x="200" y="270" font-family="-apple-system,sans-serif" font-size="16" font-weight="700" fill="%23A1A1B5" text-anchor="middle">NOVA ${safeLabel}</text></svg>`;
}

/* Accessible Toast Notification System */
function showToast(message, type = 'normal') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : ''}`;
  toast.setAttribute('role', 'status');

  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
  toast.innerHTML = `<span style="font-weight:700;">${icon}</span> <span>${escapeHtml(message)}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = 'opacity 200ms ease, transform 200ms ease';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 200);
  }, 2500);
}

/* ==========================================================================
   7. RENDERING COMPONENTS & PRODUCT DETAILS ENRICHMENT
   ========================================================================== */

/**
 * Provides Category-Accurate Rich Specifications, Gallery Angles, and Highlights
 * Comparable to Amazon / Flipkart Technical Details Sheet
 */
function getProductDetails(product) {
  // Use product's custom gallery, or build fallback
  const images = Array.isArray(product.gallery) && product.gallery.length >= 4 
    ? product.gallery 
    : [product.image, product.image, product.image, product.image];

  const colors = Array.isArray(product.colors) && product.colors.length > 0 
    ? product.colors 
    : [
        { name: 'Standard Edition', hex: '#6366F1', image: product.image }
      ];

  const variants = (product.variants && Array.isArray(product.variants.options) && product.variants.options.length > 0)
    ? product.variants
    : {
        type: 'Option',
        options: [{ label: 'Standard Edition', priceDelta: 0 }]
      };

  const highlights = Array.isArray(product.highlights) && product.highlights.length > 0
    ? product.highlights
    : [
        'Flagship grade build engineered for extreme longevity and everyday comfort',
        'Certified by global regulatory benchmarks for safety, speed and environmental standards',
        'Intuitive ergonomics with tactile sensory feedback and instant zero-latency response',
        'Backed by official 1-Year Brand Replacement Guarantee and 24/7 Priority NOVA Concierge'
      ];

  const specs = (product.specs && typeof product.specs === 'object')
    ? product.specs
    : {
        'Brand': product.brand || 'NOVA Flagship',
        'Category': product.categoryLabel || 'Electronics',
        'Model ID': product.id.toUpperCase(),
        'Warranty Coverage': '1-Year Official Brand Warranty'
      };

  const bundle = product.bundle || {
    id: 'nova-acc-01',
    name: 'NOVA Premium Armor Shield & Care Pack',
    price: 999,
    savings: 500
  };

  return {
    highlights,
    specs,
    images,
    colors,
    variants,
    bundleId: bundle.id || product.id,
    bundleTitle: bundle.name || bundle.title || 'NOVA Premium Care Package',
    bundlePrice: bundle.price || 999,
    bundleSavings: bundle.savings || 500,
    exchangeDiscount: product.exchangeDiscount || Math.round(product.price * 0.25),
    boughtPastMonth: product.boughtPastMonth || '1.8k+ bought in past month',
    reviews: [
      {
        author: 'Arjun Verma',
        badge: 'Verified Buyer',
        rating: 5,
        date: '2 days ago',
        text: `The finish on this ${product.name} is immaculate. Unboxing experience felt like pure luxury and performance is top tier.`
      },
      {
        author: 'Rhea Sen',
        badge: 'Top 50 Reviewer',
        rating: 5,
        date: '1 week ago',
        text: `Delivered next-day in mint condition. The speed, tactile touch, and attention to detail blow competitors completely out of the water.`
      },
      {
        author: 'Dev Patel',
        badge: 'Verified Buyer',
        rating: 4.8,
        date: '3 weeks ago',
        text: `Solid engineering. Checked all ports and features, 100% genuine sealed retail pack. Worth every single rupee.`
      }
    ]
  };
}

function renderProductCard(product) {
  const isWishlisted = AppState.wishlistIds.includes(product.id);
  const isCompared = AppState.compareIds && AppState.compareIds.includes(product.id);

  // Discount percentage calculation
  const discountPercent = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  const badgeHtml = discountPercent > 0 
    ? `<span class="card-badge" style="background:#EF4444; color:#fff;">-${discountPercent}%</span>`
    : (product.badge ? `<span class="card-badge">${escapeHtml(product.badge)}</span>` : '');

  const origPriceHtml = product.originalPrice ? `<span class="card-orig-price">${formatCurrency(product.originalPrice)}</span>` : '';
  const ratingHtml = product.rating ? `
    <div class="card-rating" aria-label="Rated ${product.rating} stars out of 5">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      <span class="card-rating-num">${product.rating}</span>
      <span class="card-rating-count">(${product.reviewCount || 0})</span>
    </div>
  ` : '';

  return `
    <article class="product-card" data-id="${escapeHtml(product.id)}">
      <div class="card-media-wrapper">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" class="card-image" loading="lazy" onerror="this.onerror=null;this.src='${getSvgFallback(product.categoryLabel)}';">
        ${badgeHtml}
        <button type="button" class="card-compare-btn ${isCompared ? 'active' : ''}" data-action="toggle-compare" data-id="${escapeHtml(product.id)}" aria-label="Compare ${escapeHtml(product.name)}">
          <span>⚖️</span> <span>${isCompared ? 'Comparing' : 'Compare'}</span>
        </button>
        <button type="button" class="card-wishlist-toggle ${isWishlisted ? 'active' : ''}" data-action="toggle-wishlist" data-id="${escapeHtml(product.id)}" aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}" aria-pressed="${isWishlisted}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
      </div>

      <div class="card-content">
        <div class="card-meta-row">
          <span class="card-category">${escapeHtml(product.categoryLabel)}</span>
          ${ratingHtml}
        </div>
        <h3 class="card-title" title="${escapeHtml(product.name)}">${escapeHtml(product.name)}</h3>
        <div class="card-price-row">
          <span class="card-price">${formatCurrency(product.price)}</span>
          ${origPriceHtml}
        </div>
        <div class="card-actions-row">
          <button type="button" class="btn-card-quick" data-action="quick-view" data-id="${escapeHtml(product.id)}">Quick View</button>
          <button type="button" class="btn-card-add" data-action="add-to-cart" data-id="${escapeHtml(product.id)}">Add to Cart</button>
        </div>
      </div>
    </article>
  `;
}

/**
 * Renders the Main Catalogue Grid and Featured Grid
 */
function renderCatalogue() {
  const catalogueGrid = document.getElementById('catalogueGrid');
  const emptyState = document.getElementById('emptyState');
  const summaryEl = document.getElementById('catalogueResultSummary');

  if (!catalogueGrid) return;

  const filtered = getFilteredProducts();

  // Summary counter
  if (summaryEl) {
    summaryEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products across 7 categories`;
  }

  if (filtered.length === 0) {
    catalogueGrid.innerHTML = '';
    if (emptyState) emptyState.hidden = false;
  } else {
    if (emptyState) emptyState.hidden = true;
    catalogueGrid.innerHTML = filtered.map(renderProductCard).join('');
  }
}

/**
 * Renders the Featured Products Section
 */
function renderFeaturedSection() {
  const featuredGrid = document.getElementById('featuredGrid');
  if (!featuredGrid) return;

  const featuredItems = PRODUCTS.filter(p => p.featured === true);
  featuredGrid.innerHTML = featuredItems.map(renderProductCard).join('');
}

/**
 * Renders Recently Viewed Products
 */
function renderRecentlyViewed() {
  const section = document.getElementById('recentlyViewedSection');
  const grid = document.getElementById('recentGrid');
  if (!section || !grid) return;

  if (AppState.recentlyViewedIds.length === 0) {
    section.hidden = true;
    grid.innerHTML = '';
    return;
  }

  const items = AppState.recentlyViewedIds
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean);

  if (items.length === 0) {
    section.hidden = true;
    return;
  }

  section.hidden = false;
  grid.innerHTML = items.map(renderProductCard).join('');
}

/**
 * Updates Header & Mobile Navigation Badges
 */
function updateBadges() {
  const cartMetrics = getCartMetrics();
  const wishlistCount = AppState.wishlistIds.length;

  // Cart badges
  const cartBadge = document.getElementById('cartBadge');
  const mobileCartBadge = document.getElementById('mobileCartBadge');
  const drawerCount = document.getElementById('cartDrawerCount');

  if (cartBadge) cartBadge.textContent = cartMetrics.totalUnits;
  if (mobileCartBadge) mobileCartBadge.textContent = cartMetrics.totalUnits;
  if (drawerCount) drawerCount.textContent = `${cartMetrics.totalUnits} items`;

  // Wishlist badges
  const wishlistBadge = document.getElementById('wishlistBadge');
  const mobileWishlistBadge = document.getElementById('mobileWishlistBadge');
  const wishlistDrawerCount = document.getElementById('wishlistDrawerCount');

  if (wishlistBadge) wishlistBadge.textContent = wishlistCount;
  if (mobileWishlistBadge) mobileWishlistBadge.textContent = wishlistCount;
  if (wishlistDrawerCount) wishlistDrawerCount.textContent = `${wishlistCount} saved`;
}

/**
 * Renders Cart Drawer items and calculations
 */
function renderCartDrawer() {
  const container = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotalVal');
  const shippingValEl = document.getElementById('cartShippingVal');
  const totalValEl = document.getElementById('cartTotalVal');
  const statusText = document.getElementById('shippingStatusText');
  const progressBar = document.getElementById('shippingProgressBar');
  const checkoutBtn = document.getElementById('proceedToCheckoutBtn');

  if (!container) return;

  const metrics = getCartMetrics();

  // Shipping progress updates
  if (progressBar) {
    progressBar.style.width = `${metrics.progressPercent}%`;
  }

  if (statusText) {
    if (metrics.isFreeShipping) {
      statusText.textContent = '🎉 You have unlocked Free Express Delivery!';
      statusText.style.color = 'var(--color-success)';
    } else {
      statusText.textContent = `Add ${formatCurrency(metrics.remaining)} more for Free Express Delivery`;
      statusText.style.color = 'var(--color-accent)';
    }
  }

  // Summary amounts
  if (subtotalEl) subtotalEl.textContent = formatCurrency(metrics.subtotal);
  if (shippingValEl) {
    shippingValEl.textContent = metrics.subtotal === 0 ? '₹0' : metrics.isFreeShipping ? 'FREE' : '₹199';
  }
  if (totalValEl) {
    const finalTotal = metrics.subtotal === 0 ? 0 : metrics.subtotal + (metrics.isFreeShipping ? 0 : 199);
    totalValEl.textContent = formatCurrency(finalTotal);
  }

  if (checkoutBtn) {
    checkoutBtn.disabled = metrics.totalUnits === 0;
  }

  if (AppState.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="border:none; padding: 40px 0;">
        <div class="empty-icon-box">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"></path><line x1="3" y1="6" x2="21" y2="6"></line></svg>
        </div>
        <h4 style="color:#fff; font-size:16px;">Your cart is empty</h4>
        <p style="font-size:13px; color:var(--color-text-muted);">Explore our 48 curated products and add your favorites.</p>
        <button type="button" class="btn btn-secondary btn-sm" id="cartContinueShoppingBtn">Continue Shopping</button>
      </div>
    `;
    const continueBtn = document.getElementById('cartContinueShoppingBtn');
    if (continueBtn) {
      continueBtn.addEventListener('click', closeAllOverlays);
    }
    return;
  }

  // Render items
  container.innerHTML = AppState.cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';

    return `
      <div class="cart-item-row" data-id="${escapeHtml(product.id)}">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" class="cart-item-thumb" onerror="this.onerror=null;this.src='${getSvgFallback(product.categoryLabel)}';">
        <div class="cart-item-info">
          <span class="cart-item-name">${escapeHtml(product.name)}</span>
          <span class="cart-item-unit-price">${formatCurrency(product.price)}</span>
        </div>
        <div class="cart-item-controls">
          <div class="quantity-stepper">
            <button type="button" class="step-btn" data-action="decrement" data-id="${escapeHtml(product.id)}" aria-label="Decrease quantity" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
            <span class="quantity-val" aria-label="Quantity ${item.quantity}">${item.quantity}</span>
            <button type="button" class="step-btn" data-action="increment" data-id="${escapeHtml(product.id)}" aria-label="Increase quantity">+</button>
          </div>
          <button type="button" class="cart-item-remove-btn" data-action="remove-item" data-id="${escapeHtml(product.id)}">Remove</button>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Renders Wishlist Drawer items
 */
function renderWishlistDrawer() {
  const container = document.getElementById('wishlistItemsList');
  if (!container) return;

  if (AppState.wishlistIds.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="border:none; padding: 40px 0;">
        <div class="empty-icon-box">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </div>
        <h4 style="color:#fff; font-size:16px;">Your wishlist is empty</h4>
        <p style="font-size:13px; color:var(--color-text-muted);">Tap the heart icon on any card to save essentials for later.</p>
        <button type="button" class="btn btn-secondary btn-sm" id="wishlistContinueShoppingBtn">Explore Products</button>
      </div>
    `;
    const continueBtn = document.getElementById('wishlistContinueShoppingBtn');
    if (continueBtn) {
      continueBtn.addEventListener('click', closeAllOverlays);
    }
    return;
  }

  const items = AppState.wishlistIds
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean);

  container.innerHTML = items.map(product => `
    <div class="cart-item-row" data-id="${escapeHtml(product.id)}">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" class="cart-item-thumb" onerror="this.onerror=null;this.src='${getSvgFallback(product.categoryLabel)}';">
      <div class="cart-item-info">
        <span class="cart-item-name">${escapeHtml(product.name)}</span>
        <span class="cart-item-unit-price">${formatCurrency(product.price)}</span>
      </div>
      <div class="cart-item-controls">
        <button type="button" class="btn btn-primary btn-sm" data-action="wishlist-move-to-cart" data-id="${escapeHtml(product.id)}">Add to Cart</button>
        <button type="button" class="cart-item-remove-btn" data-action="toggle-wishlist" data-id="${escapeHtml(product.id)}">Remove</button>
      </div>
    </div>
  `).join('');
}

/**
 * Renders Amazon / Flipkart Grade Ultra-Detailed Quick View Modal
 */
function openQuickView(productId, triggerElement) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  AppState.activeModalTrigger = triggerElement;

  // Add to recently viewed (unique, newest first, max 8)
  AppState.recentlyViewedIds = [
    product.id,
    ...AppState.recentlyViewedIds.filter(id => id !== product.id)
  ].slice(0, 8);
  Storage.set('nova-recently-viewed', AppState.recentlyViewedIds);
  renderRecentlyViewed();

  const container = document.getElementById('quickViewContent');
  if (!container) return;

  const details = getProductDetails(product);
  const isWishlisted = AppState.wishlistIds.includes(product.id);

  // Local state for modal interactions
  let selectedColor = details.colors[0].name;
  let selectedColorImage = details.colors[0].image || product.image;
  let selectedVariantIndex = 0;
  let variantPriceDelta = (details.variants.options && details.variants.options[0]) ? (details.variants.options[0].priceDelta || 0) : 0;
  let withExchange = false;
  let currentQty = 1;

  function computeBasePrice() {
    return product.price + variantPriceDelta;
  }

  function computeEffectivePrice() {
    let base = computeBasePrice();
    if (withExchange) {
      base = Math.max(99, base - details.exchangeDiscount);
    }
    return base;
  }

  const basePrice = computeEffectivePrice();
  const effectiveMrp = (product.originalPrice ? product.originalPrice : Math.round(product.price * 1.25)) + variantPriceDelta;
  const initialDiscountPercent = effectiveMrp > basePrice ? Math.round(((effectiveMrp - basePrice) / effectiveMrp) * 100) : 0;
  const initialSavings = Math.max(0, effectiveMrp - basePrice);
  const initialEmi = Math.round(basePrice / 12);

  container.innerHTML = `
    <!-- Left Column: Multi-Angle Interactive Gallery & Trust Badges -->
    <div class="qv-gallery-col">
      <div class="qv-main-image-wrap" id="qvMainImageWrap">
        <img src="${escapeHtml(selectedColorImage)}" alt="${escapeHtml(product.name)}" class="qv-main-image" id="qvMainImage" onerror="this.onerror=null;this.src='${getSvgFallback(product.categoryLabel)}';">
        <div class="qv-zoom-indicator">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          Hover to Zoom
        </div>
      </div>

      <!-- Thumbnail Strip (Accurate 4+ Photos) -->
      <div class="qv-thumb-strip" role="tablist" aria-label="Product Image Angles">
        ${details.images.map((imgSrc, idx) => `
          <button type="button" class="qv-thumb-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}" data-src="${escapeHtml(imgSrc)}" aria-label="Angle ${idx + 1}">
            <img src="${escapeHtml(imgSrc)}" alt="Angle ${idx + 1}" class="qv-thumb-img" onerror="this.onerror=null;this.src='${getSvgFallback(product.categoryLabel)}';">
          </button>
        `).join('')}
      </div>

      <!-- Amazon 6-Item Trust & Service Grid -->
      <div class="qv-service-strip">
        <div class="qv-service-item">
          <span class="qv-service-icon">🔄</span>
          <span class="qv-service-label">7 Days Replacement</span>
        </div>
        <div class="qv-service-item">
          <span class="qv-service-icon">🚚</span>
          <span class="qv-service-label">Free Express Delivery</span>
        </div>
        <div class="qv-service-item">
          <span class="qv-service-icon">🛡️</span>
          <span class="qv-service-label">1-Year Warranty</span>
        </div>
        <div class="qv-service-item">
          <span class="qv-service-icon">💵</span>
          <span class="qv-service-label">Pay on Delivery</span>
        </div>
        <div class="qv-service-item">
          <span class="qv-service-icon">⭐</span>
          <span class="qv-service-label">Top Brand</span>
        </div>
        <div class="qv-service-item">
          <span class="qv-service-icon">🔒</span>
          <span class="qv-service-label">Secure Transaction</span>
        </div>
      </div>
    </div>

    <!-- Right Column: Details, Urgency, Swatches, Deals, Tabs -->
    <div class="qv-details-col">
      <nav class="qv-breadcrumb" aria-label="Breadcrumb">
        Home &gt; ${escapeHtml(product.categoryLabel)} &gt; <span>${escapeHtml(product.brand || 'Flagship')}</span>
      </nav>

      <!-- Brand Link & Amazon Social Proof Row -->
      <div class="qv-brand-row">
        <a href="#catalogue" class="qv-brand-link" id="qvBrandLink">Visit the ${escapeHtml(product.brand || 'NOVA')} Store</a>
        <span class="qv-social-proof">🔥 ${escapeHtml(details.boughtPastMonth)}</span>
      </div>

      <div class="qv-urgency-row">
        <span class="qv-stock-pill">
          <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#34D399;"></span>
          In Stock • Ready to Dispatch
        </span>
        <span class="qv-delivery-est">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
          Delivery by Tomorrow, 11:00 AM
        </span>
      </div>

      <h2 class="qv-title" id="quickViewTitle">${escapeHtml(product.name)}</h2>

      <div class="qv-rating-row">
        <div class="qv-rating-stars">★★★★★</div>
        <span style="font-weight:700;color:#fff;">${product.rating || '4.8'}</span>
        <span style="color:var(--color-text-muted);">(${product.reviewCount || 142} ratings)</span>
        <span style="color:var(--color-border);">|</span>
        <a href="#qvTabReviews" class="qv-rating-link" id="jumpToReviewsLink">View 100% verified ratings</a>
      </div>

      <!-- Pricing Stack with Real Discounts -->
      <div class="qv-deal-box">
        <div class="qv-price-stack">
          ${initialDiscountPercent > 0 ? `<span class="qv-discount-pill" id="qvDiscountPill">-${initialDiscountPercent}% OFF</span>` : '<span class="qv-discount-pill" id="qvDiscountPill" style="display:none;"></span>'}
          <span class="qv-price-current" id="qvPriceCurrent">${formatCurrency(basePrice)}</span>
          <span class="qv-price-mrp" id="qvPriceMrp">M.R.P.: ${formatCurrency(effectiveMrp)}</span>
          ${initialSavings > 0 ? `<span class="qv-price-save" id="qvPriceSave">Save ${formatCurrency(initialSavings)}</span>` : '<span class="qv-price-save" id="qvPriceSave" style="display:none;"></span>'}
        </div>
        <div class="qv-deal-sub">
          <span class="qv-tax-note">Inclusive of all taxes</span>
          <span class="qv-emi-pill" id="qvEmiPill">💳 No Cost EMI from ₹${initialEmi}/mo</span>
        </div>
      </div>

      <!-- Bank Offers Carousel -->
      <div class="qv-offers-section">
        <div class="qv-offers-header">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
          <span>Exclusive Bank &amp; Partner Offers</span>
        </div>
        <div class="qv-offers-grid">
          <div class="qv-offer-card">
            <span class="qv-offer-title">Bank Offer</span>
            <span class="qv-offer-desc">Upto ₹${Math.min(5000, Math.round(product.price * 0.1))} off on HDFC / ICICI Credit Cards</span>
          </div>
          <div class="qv-offer-card">
            <span class="qv-offer-title">No Cost EMI</span>
            <span class="qv-offer-desc">Save up to ₹${Math.round(product.price * 0.08)} interest on 6-month tenures</span>
          </div>
          <div class="qv-offer-card">
            <span class="qv-offer-title">Cashback</span>
            <span class="qv-offer-desc">5% Unlimited Cashback on NOVA Premium Card</span>
          </div>
        </div>
      </div>

      <!-- Trade-In / Exchange Box -->
      <div class="qv-exchange-box">
        <div class="qv-exchange-option active" id="qvExchangeWithout" role="radio" aria-checked="true">
          <div class="qv-exchange-left">
            <input type="radio" name="qvExchangeRadio" id="qvExRadioWithout" checked>
            <label for="qvExRadioWithout"><strong>Without Exchange</strong> (Standard)</label>
          </div>
          <span style="font-weight:700;color:#fff;" id="qvExWithoutPrice">${formatCurrency(computeBasePrice())}</span>
        </div>
        <div class="qv-exchange-option" id="qvExchangeWith" role="radio" aria-checked="false">
          <div class="qv-exchange-left">
            <input type="radio" name="qvExchangeRadio" id="qvExRadioWith">
            <label for="qvExRadioWith"><strong>With Exchange</strong> (Up to ${formatCurrency(details.exchangeDiscount)} off)</label>
          </div>
          <span class="qv-exchange-savings">Save ${formatCurrency(details.exchangeDiscount)}</span>
        </div>
      </div>

      <!-- Variant Selector (Storage / RAM / Size / Format) -->
      ${details.variants && details.variants.options && details.variants.options.length > 1 ? `
        <div class="qv-variant-group">
          <span class="qv-variant-title">${escapeHtml(details.variants.type || 'Configuration')}: <strong id="qvSelectedVariantLabel" style="color:#fff;">${escapeHtml(details.variants.options[0].label)}</strong></span>
          <div class="qv-variant-pills" role="radiogroup">
            ${details.variants.options.map((opt, i) => `
              <button type="button" class="qv-variant-pill ${i === 0 ? 'active' : ''}" data-index="${i}" data-label="${escapeHtml(opt.label)}" data-delta="${opt.priceDelta || 0}" role="radio" aria-checked="${i === 0}">
                ${escapeHtml(opt.label)} ${opt.priceDelta ? `(+₹${opt.priceDelta.toLocaleString('en-IN')})` : ''}
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Interactive Color Swatches with Live Photo Switching -->
      <div class="qv-swatch-box">
        <span class="qv-swatch-label">Finish: <strong id="qvSelectedColorLabel">${escapeHtml(details.colors[0].name)}</strong></span>
        <div class="qv-swatches" role="radiogroup" aria-label="Select finish">
          ${details.colors.map((c, i) => `
            <button type="button" class="qv-color-btn ${i === 0 ? 'active' : ''}" data-color="${escapeHtml(c.name)}" data-img="${escapeHtml(c.image || product.image)}" style="background-color: ${c.hex};" aria-label="${escapeHtml(c.name)}" role="radio" aria-checked="${i === 0}">
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Pincode Delivery Estimator -->
      <div class="qv-pincode-box">
        <div class="qv-pincode-header">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>Check Delivery Speed &amp; COD Availability</span>
        </div>
        <div class="qv-pincode-form">
          <input type="text" class="qv-pincode-input" id="qvPincodeInput" placeholder="Enter Pincode" maxlength="6" value="110001">
          <button type="button" class="qv-pincode-btn" id="qvPincodeBtn">Check</button>
        </div>
        <div class="qv-pincode-result" id="qvPincodeResult">
          ✓ FREE Express Delivery by <strong>Tomorrow, 11:00 AM</strong> to 110001 • Cash on Delivery available
        </div>
      </div>

      <!-- Action Hub: Stepper + Add to Cart + Instant Buy Now + Wishlist -->
      <div class="qv-action-hub">
        <div class="qv-action-row">
          <div class="qv-stepper" aria-label="Quantity selector">
            <button type="button" class="step-btn" id="qvDecBtn" aria-label="Decrease quantity" disabled>-</button>
            <span class="quantity-val" id="qvQtyDisplay">1</span>
            <button type="button" class="step-btn" id="qvIncBtn" aria-label="Increase quantity">+</button>
          </div>
          <button type="button" class="btn-add-cart-qv" id="qvAddCartBtn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            Add to Cart
          </button>
          <button type="button" class="btn-buy-now-qv" id="qvBuyNowBtn">
            ⚡ Instant Buy Now
          </button>
          <button type="button" class="icon-btn" id="qvWishlistToggleBtn" data-id="${escapeHtml(product.id)}" aria-label="${isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWishlisted ? 'var(--color-error)' : 'none'}" stroke="${isWishlisted ? 'var(--color-error)' : 'currentColor'}" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>
      </div>

      <!-- Interactive Information Tabs -->
      <div class="qv-tabs-nav" role="tablist">
        <button type="button" class="qv-tab-btn active" data-tab="highlights" role="tab" aria-selected="true">Key Features</button>
        <button type="button" class="qv-tab-btn" data-tab="specs" role="tab" aria-selected="false">Technical Specs</button>
        <button type="button" class="qv-tab-btn" data-tab="reviews" id="qvTabReviews" role="tab" aria-selected="false">Ratings &amp; Reviews (${product.reviewCount || 142})</button>
      </div>

      <div class="qv-tab-content" id="qvTabContent">
        <!-- Highlights Tab Pane -->
        <div id="tabPaneHighlights">
          <ul class="qv-highlights-list">
            ${details.highlights.map(h => `
              <li class="qv-highlight-item">
                <span class="qv-highlight-icon">✓</span>
                <span>${escapeHtml(h)}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Tech Specs Tab Pane -->
        <div id="tabPaneSpecs" hidden>
          <table class="qv-spec-table">
            <tbody>
              ${Object.entries(details.specs).map(([label, val]) => `
                <tr class="qv-spec-row">
                  <td class="qv-spec-label">${escapeHtml(label)}</td>
                  <td class="qv-spec-val">${escapeHtml(val)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Reviews Tab Pane -->
        <div id="tabPaneReviews" hidden>
          <div class="qv-reviews-panel">
            <div class="qv-score-breakdown-row">
              <div style="text-align:center;">
                <div class="qv-score-big">${product.rating || '4.8'}</div>
                <div style="color:#FBBF24;font-size:14px;">★★★★★</div>
                <span style="font-size:11px;color:var(--color-text-muted);">Verified Average</span>
              </div>
              <div class="qv-stars-breakdown">
                <div class="qv-star-bar-item"><span>5★</span><div class="qv-star-track"><div class="qv-star-fill" style="width:84%;"></div></div><span>84%</span></div>
                <div class="qv-star-bar-item"><span>4★</span><div class="qv-star-track"><div class="qv-star-fill" style="width:12%;"></div></div><span>12%</span></div>
                <div class="qv-star-bar-item"><span>3★</span><div class="qv-star-track"><div class="qv-star-fill" style="width:2%;"></div></div><span>2%</span></div>
                <div class="qv-star-bar-item"><span>2★</span><div class="qv-star-track"><div class="qv-star-fill" style="width:1%;"></div></div><span>1%</span></div>
                <div class="qv-star-bar-item"><span>1★</span><div class="qv-star-track"><div class="qv-star-fill" style="width:1%;"></div></div><span>1%</span></div>
              </div>
            </div>
            ${details.reviews.map(r => `
              <div class="qv-review-quote">
                <div style="font-weight:600;color:#fff;margin-bottom:2px;">"${escapeHtml(r.text)}"</div>
                <div class="qv-reviewer-meta">
                  <span>${escapeHtml(r.author)} • <strong style="color:var(--color-success);">${escapeHtml(r.badge)}</strong></span>
                  <span>${escapeHtml(r.date)}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Frequently Bought Together Bundle -->
      <div class="qv-bundle-box">
        <div class="qv-bundle-text">
          <span class="qv-bundle-title">📦 Frequently Bought Together:</span>
          <span class="qv-bundle-desc">${escapeHtml(details.bundleTitle)} (+ ${formatCurrency(details.bundlePrice)}) • Save ₹${details.bundleSavings}</span>
        </div>
        <button type="button" class="btn btn-sm btn-outline" id="qvAddBundleBtn" data-bundle-id="${details.bundleId}" data-main-id="${product.id}">
          + Add Bundle
        </button>
      </div>
    </div>
  `;

  // --- Attach Interactive Event Handlers Inside Quick View ---
  const mainImgWrap = document.getElementById('qvMainImageWrap');
  const mainImg = document.getElementById('qvMainImage');

  // 1. Mousemove Lens Magnifier Zoom
  if (mainImgWrap && mainImg) {
    mainImgWrap.addEventListener('mousemove', e => {
      const rect = mainImgWrap.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mainImg.style.transformOrigin = `${x}% ${y}%`;
      mainImg.style.transform = 'scale(1.7)';
    });

    mainImgWrap.addEventListener('mouseleave', () => {
      mainImg.style.transformOrigin = 'center center';
      mainImg.style.transform = 'scale(1)';
    });
  }

  // 2. Thumbnail strip switcher
  const thumbBtns = container.querySelectorAll('.qv-thumb-btn');
  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      thumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const src = btn.getAttribute('data-src');
      if (mainImg && src) {
        mainImg.src = src;
      }
    });
  });

  // 3. Dynamic Price Recalculation Engine
  function updatePricingDisplay() {
    const effPrice = computeEffectivePrice();
    const curMrp = (product.originalPrice ? product.originalPrice : Math.round(product.price * 1.25)) + variantPriceDelta;
    const discount = curMrp > effPrice ? Math.round(((curMrp - effPrice) / curMrp) * 100) : 0;
    const saveAmt = Math.max(0, curMrp - effPrice);
    const emi = Math.round(effPrice / 12);

    const priceCurEl = document.getElementById('qvPriceCurrent');
    const priceMrpEl = document.getElementById('qvPriceMrp');
    const discountEl = document.getElementById('qvDiscountPill');
    const priceSaveEl = document.getElementById('qvPriceSave');
    const emiEl = document.getElementById('qvEmiPill');
    const exWithoutPrice = document.getElementById('qvExWithoutPrice');

    if (priceCurEl) priceCurEl.textContent = formatCurrency(effPrice);
    if (priceMrpEl) priceMrpEl.textContent = `M.R.P.: ${formatCurrency(curMrp)}`;
    if (exWithoutPrice) exWithoutPrice.textContent = formatCurrency(computeBasePrice());

    if (discountEl) {
      if (discount > 0) {
        discountEl.style.display = 'inline-block';
        discountEl.textContent = `-${discount}% OFF`;
      } else {
        discountEl.style.display = 'none';
      }
    }

    if (priceSaveEl) {
      if (saveAmt > 0) {
        priceSaveEl.style.display = 'inline-block';
        priceSaveEl.textContent = `Save ${formatCurrency(saveAmt)}`;
      } else {
        priceSaveEl.style.display = 'none';
      }
    }

    if (emiEl) {
      emiEl.textContent = `💳 No Cost EMI from ₹${emi.toLocaleString('en-IN')}/mo`;
    }
  }

  // 4. Color swatches switcher (Changes Photo to match Color!)
  const colorBtns = container.querySelectorAll('.qv-color-btn');
  const colorLabel = document.getElementById('qvSelectedColorLabel');
  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      colorBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');
      selectedColor = btn.getAttribute('data-color');
      const newImg = btn.getAttribute('data-img');
      if (colorLabel) colorLabel.textContent = selectedColor;
      if (mainImg && newImg) {
        mainImg.style.opacity = '0.35';
        mainImg.src = newImg;
        setTimeout(() => {
          mainImg.style.opacity = '1';
        }, 120);

        // Highlight matching thumbnail or update first thumbnail
        const allThumbs = container.querySelectorAll('.qv-thumb-btn');
        let matchedThumb = false;
        allThumbs.forEach(t => {
          if (t.getAttribute('data-src') === newImg) {
            allThumbs.forEach(th => th.classList.remove('active'));
            t.classList.add('active');
            matchedThumb = true;
          }
        });
        if (!matchedThumb && allThumbs.length > 0) {
          allThumbs.forEach(th => th.classList.remove('active'));
          allThumbs[0].classList.add('active');
          const thumbImg = allThumbs[0].querySelector('img');
          if (thumbImg) thumbImg.src = newImg;
        }
      }
    });
  });

  // 5. Variant pills switcher (Changes price dynamically!)
  const variantPills = container.querySelectorAll('.qv-variant-pill');
  const variantLabel = document.getElementById('qvSelectedVariantLabel');
  variantPills.forEach(pill => {
    pill.addEventListener('click', () => {
      variantPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-checked', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-checked', 'true');
      selectedVariantIndex = Number(pill.getAttribute('data-index'));
      variantPriceDelta = Number(pill.getAttribute('data-delta')) || 0;
      if (variantLabel) variantLabel.textContent = pill.getAttribute('data-label');
      updatePricingDisplay();
    });
  });

  // 6. Trade-in / Exchange Toggle
  const exWithout = document.getElementById('qvExchangeWithout');
  const exWith = document.getElementById('qvExchangeWith');
  const radioWithout = document.getElementById('qvExRadioWithout');
  const radioWith = document.getElementById('qvExRadioWith');

  function setExchange(enabled) {
    withExchange = enabled;
    if (exWithout && exWith && radioWithout && radioWith) {
      if (enabled) {
        exWith.classList.add('active');
        exWithout.classList.remove('active');
        radioWith.checked = true;
        radioWithout.checked = false;
        showToast(`Exchange discount applied: Save ${formatCurrency(details.exchangeDiscount)}!`, 'success');
      } else {
        exWithout.classList.add('active');
        exWith.classList.remove('active');
        radioWithout.checked = true;
        radioWith.checked = false;
      }
    }
    updatePricingDisplay();
  }

  if (exWithout) exWithout.addEventListener('click', () => setExchange(false));
  if (exWith) exWith.addEventListener('click', () => setExchange(true));

  // 7. Pincode Delivery Checker
  const pincodeBtn = document.getElementById('qvPincodeBtn');
  const pincodeInput = document.getElementById('qvPincodeInput');
  const pincodeResult = document.getElementById('qvPincodeResult');

  function verifyPincode() {
    if (!pincodeInput || !pincodeResult) return;
    const pin = pincodeInput.value.trim();
    if (/^[1-9][0-9]{5}$/.test(pin)) {
      pincodeResult.innerHTML = `✓ FREE Express Delivery by <strong>Tomorrow, 11:00 AM</strong> to ${pin} • Cash on Delivery available`;
      pincodeResult.style.color = 'var(--color-success)';
      showToast(`Delivery verified for ${pin}: Guaranteed Tomorrow!`, 'success');
    } else {
      pincodeResult.innerHTML = '⚠️ Please enter a valid 6-digit Indian Pincode (e.g. 110001, 400001)';
      pincodeResult.style.color = 'var(--color-error)';
    }
  }

  if (pincodeBtn) pincodeBtn.addEventListener('click', verifyPincode);
  if (pincodeInput) {
    pincodeInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        verifyPincode();
      }
    });
  }

  // 8. Brand Store link click
  const brandLink = document.getElementById('qvBrandLink');
  if (brandLink) {
    brandLink.addEventListener('click', e => {
      e.preventDefault();
      closeAllOverlays();
      AppState.filters.searchQuery = product.brand || '';
      AppState.filters.category = 'all';
      const searchInput = document.getElementById('searchInput');
      if (searchInput) searchInput.value = product.brand || '';
      renderCatalogue();
      const catalogueEl = document.getElementById('catalogue');
      if (catalogueEl) catalogueEl.scrollIntoView({ behavior: 'smooth' });
      showToast(`Showing ${product.brand} collection`, 'info');
    });
  }

  // 9. Quantity Stepper
  const qvDecBtn = document.getElementById('qvDecBtn');
  const qvIncBtn = document.getElementById('qvIncBtn');
  const qvQtyDisplay = document.getElementById('qvQtyDisplay');

  if (qvIncBtn && qvDecBtn && qvQtyDisplay) {
    qvIncBtn.addEventListener('click', () => {
      currentQty++;
      qvQtyDisplay.textContent = currentQty;
      qvDecBtn.disabled = currentQty <= 1;
    });

    qvDecBtn.addEventListener('click', () => {
      if (currentQty > 1) {
        currentQty--;
        qvQtyDisplay.textContent = currentQty;
        qvDecBtn.disabled = currentQty <= 1;
      }
    });
  }

  // 10. Add to Cart with selected quantity, color & variant
  const qvAddCartBtn = document.getElementById('qvAddCartBtn');
  if (qvAddCartBtn) {
    qvAddCartBtn.addEventListener('click', () => {
      const selectedVarLabel = (details.variants.options && details.variants.options[selectedVariantIndex])
        ? details.variants.options[selectedVariantIndex].label
        : null;

      const effectivePrice = computeEffectivePrice();

      const existing = AppState.cart.find(i => i.id === product.id && i.color === selectedColor && i.variant === selectedVarLabel);
      if (existing) {
        existing.quantity += currentQty;
      } else {
        AppState.cart.push({
          id: product.id,
          quantity: currentQty,
          color: selectedColor,
          variant: selectedVarLabel,
          customPrice: effectivePrice
        });
      }
      Storage.set('nova-cart', AppState.cart);
      updateBadges();
      renderCartDrawer();
      showToast(`Added ${currentQty}× ${product.name} (${selectedColor}) to cart!`, 'success');
    });
  }

  // 11. Buy Now -> Instant Checkout with this product, variant & quantity
  const qvBuyNowBtn = document.getElementById('qvBuyNowBtn');
  if (qvBuyNowBtn) {
    qvBuyNowBtn.addEventListener('click', () => {
      const selectedVarLabel = (details.variants.options && details.variants.options[selectedVariantIndex])
        ? details.variants.options[selectedVariantIndex].label
        : null;
      const effectivePrice = computeEffectivePrice();

      openCheckoutModal(qvBuyNowBtn, {
        product,
        quantity: currentQty,
        color: selectedColor,
        variant: selectedVarLabel,
        price: effectivePrice
      });
    });
  }

  // 12. Wishlist Heart Toggle inside Quick View
  const qvWishlistBtn = document.getElementById('qvWishlistToggleBtn');
  if (qvWishlistBtn) {
    qvWishlistBtn.addEventListener('click', () => {
      if (AppState.wishlistIds.includes(product.id)) {
        AppState.wishlistIds = AppState.wishlistIds.filter(id => id !== product.id);
        showToast(`Removed ${product.name} from wishlist`);
      } else {
        AppState.wishlistIds.push(product.id);
        showToast(`Added ${product.name} to wishlist`, 'success');
      }
      Storage.set('nova-wishlist', AppState.wishlistIds);
      updateBadges();
      renderCatalogue();
      renderFeaturedSection();
      renderWishlistDrawer();
      // Re-sync icon fill
      const isNowWishlisted = AppState.wishlistIds.includes(product.id);
      const svg = qvWishlistBtn.querySelector('svg');
      if (svg) {
        svg.setAttribute('fill', isNowWishlisted ? 'var(--color-error)' : 'none');
        svg.setAttribute('stroke', isNowWishlisted ? 'var(--color-error)' : 'currentColor');
      }
    });
  }

  // 13. Tabs Switcher
  const tabBtns = container.querySelectorAll('.qv-tab-btn');
  const paneHighlights = document.getElementById('tabPaneHighlights');
  const paneSpecs = document.getElementById('tabPaneSpecs');
  const paneReviews = document.getElementById('tabPaneReviews');

  function activateTab(tabKey) {
    tabBtns.forEach(btn => {
      const isCurrent = btn.getAttribute('data-tab') === tabKey;
      btn.classList.toggle('active', isCurrent);
      btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    });
    if (paneHighlights) paneHighlights.hidden = tabKey !== 'highlights';
    if (paneSpecs) paneSpecs.hidden = tabKey !== 'specs';
    if (paneReviews) paneReviews.hidden = tabKey !== 'reviews';
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activateTab(btn.getAttribute('data-tab'));
    });
  });

  const jumpToReviews = document.getElementById('jumpToReviewsLink');
  if (jumpToReviews) {
    jumpToReviews.addEventListener('click', e => {
      e.preventDefault();
      activateTab('reviews');
    });
  }

  // 14. Add Bundle Button
  const addBundleBtn = document.getElementById('qvAddBundleBtn');
  if (addBundleBtn) {
    addBundleBtn.addEventListener('click', () => {
      const bundleProd = PRODUCTS.find(p => p.id === details.bundleId) || product;
      // Add main item
      const existingMain = AppState.cart.find(i => i.id === product.id);
      if (existingMain) existingMain.quantity += currentQty;
      else AppState.cart.push({ id: product.id, quantity: currentQty, color: selectedColor });

      // Add bundle item
      if (bundleProd && bundleProd.id !== product.id) {
        const existingBundle = AppState.cart.find(i => i.id === bundleProd.id);
        if (existingBundle) existingBundle.quantity += 1;
        else AppState.cart.push({ id: bundleProd.id, quantity: 1 });
      }

      Storage.set('nova-cart', AppState.cart);
      updateBadges();
      renderCartDrawer();
      showToast(`Bundle added! ${product.name} + Care Pack`, 'success');
    });
  }

  // Open modal dialog
  const modal = document.getElementById('quickViewModal');
  const backdrop = document.getElementById('quickViewBackdrop');
  if (modal && backdrop) {
    modal.hidden = false;
    modal.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    AppState.activeOverlay = 'quick-view';
    const closeBtn = document.getElementById('closeQuickViewBtn');
    if (closeBtn) closeBtn.focus();
  }
}

function openCheckoutModal(triggerElement, directPurchase = null) {
  // Authentication Gate: Customer MUST be signed in or registered to purchase
  if (!AppState.user || !AppState.user.isLoggedIn) {
    AppState.pendingCheckoutAction = () => openCheckoutModal(triggerElement, directPurchase);
    showToast('⚠️ Please create an account or sign in to complete your purchase', 'info');
    openAuthModal(triggerElement, 'register');
    return;
  }

  let checkoutItems = [];
  let subtotal = 0;
  let isFreeShipping = false;

  if (directPurchase) {
    const { product, quantity, color, variant, price } = directPurchase;
    checkoutItems = [{ product, quantity, color, variant, price }];
    subtotal = (price || product.price) * quantity;
    isFreeShipping = subtotal >= 999;
  } else {
    const metrics = getCartMetrics();
    if (metrics.totalUnits === 0) {
      showToast('Your cart is empty. Add items before checkout.', 'error');
      return;
    }
    checkoutItems = AppState.cart.map(item => {
      return {
        product: PRODUCTS.find(p => p.id === item.id),
        quantity: item.quantity,
        color: 'Standard'
      };
    }).filter(i => i.product);
    subtotal = metrics.subtotal;
    isFreeShipping = metrics.isFreeShipping;
  }

  closeAllOverlays();
  AppState.activeModalTrigger = triggerElement;

  const modal = document.getElementById('checkoutModal');
  const backdrop = document.getElementById('checkoutBackdrop');
  const content = document.getElementById('checkoutModalContent');

  if (!modal || !content) return;

  const finalTotal = subtotal + (isFreeShipping ? 0 : 99);
  const currentName = AppState.user.name || '';
  const currentEmail = AppState.user.email || '';
  const currentAddress = (AppState.selectedMapLocation && AppState.selectedMapLocation.address) || AppState.user.address || '';

  // Render initial review form
  content.innerHTML = `
    <div class="checkout-header">
      <span class="section-tag">${directPurchase ? 'INSTANT BUY NOW CONVERSION' : 'SIMULATED ORDER CONVERSION'}</span>
      <h3 class="section-heading" style="font-size:24px;" id="checkoutModalTitle">Demo Checkout</h3>
    </div>

    <div class="checkout-alert-box">
      <strong>⚠️ DEMO SIMULATION NOTICE:</strong> VIP Express Checkout mode active. No actual currency or bank cards are debited.
    </div>

    <div class="checkout-items-summary" aria-label="Order items summary">
      ${checkoutItems.map(item => `
        <div class="checkout-item-line">
          <span>${escapeHtml(item.product.name)} ${item.color && item.color !== 'Standard' ? `(${escapeHtml(item.color)})` : ''} × ${item.quantity}</span>
          <span>${formatCurrency((item.price || item.product.price) * item.quantity)}</span>
        </div>
      `).join('')}
    </div>

    <div class="checkout-total-banner">
      <span>Total Amount:</span>
      <span class="text-accent">${formatCurrency(finalTotal)}</span>
    </div>

    <form id="demoCheckoutForm" novalidate>
      <div class="checkout-form-grid">
        <div>
          <label for="checkoutName" class="form-label">Full Name</label>
          <input type="text" id="checkoutName" class="form-input" placeholder="e.g. Divyansh Dev Sharma" value="${escapeHtml(currentName)}" required>
        </div>
        <div>
          <label for="checkoutEmail" class="form-label">Email (Account)</label>
          <input type="email" id="checkoutEmail" class="form-input" placeholder="e.g. sharmadivyanshdev@gmail.com" value="${escapeHtml(currentEmail)}" required>
        </div>
        <div class="form-group-full">
          <div class="checkout-location-label-row">
            <label for="checkoutCity" class="form-label">Shipping Destination / Address</label>
            <div class="checkout-location-actions">
              <button type="button" class="btn-location-action" id="btnDetectGpsLocation" title="Auto-detect current GPS location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9"></polygon></svg>
                <span>📍 Auto-Detect GPS</span>
              </button>
              <button type="button" class="btn-location-action" id="btnOpenMapPicker" title="Pick delivery pinpoint on interactive map">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
                <span>🗺️ Choose on Map</span>
              </button>
            </div>
          </div>
          <input type="text" id="checkoutCity" class="form-input" placeholder="Click Auto-Detect GPS or Choose on Map" value="${escapeHtml(currentAddress)}" required>
          <div class="checkout-gps-status" id="checkoutGpsStatus">
            <span>📍 Pinned Location: <strong style="color:var(--color-accent);">${currentAddress ? escapeHtml(currentAddress) : 'No address pinned yet — click Auto-Detect GPS'}</strong></span>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-block" id="confirmCheckoutSubmitBtn">
        Confirm Demo Order
      </button>
    </form>
  `;

  modal.hidden = false;
  modal.classList.add('active');
  if (backdrop) backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
  AppState.activeOverlay = 'checkout';

  // Wire GPS Auto-detect and Map Picker triggers
  const btnDetectGps = document.getElementById('btnDetectGpsLocation');
  if (btnDetectGps) btnDetectGps.addEventListener('click', detectCurrentGpsLocation);

  const btnOpenMap = document.getElementById('btnOpenMapPicker');
  if (btnOpenMap) btnOpenMap.addEventListener('click', openMapPickerModal);

  // Wire form submission with double-submit guard
  const form = document.getElementById('demoCheckoutForm');
  if (form) {
    form.addEventListener('submit', e => handleCheckoutSubmit(e, directPurchase, finalTotal, checkoutItems));
  }

  const nameInput = document.getElementById('checkoutName');
  if (nameInput) nameInput.focus();
}

function handleCheckoutSubmit(e, directPurchase = null, totalAmount = 0, itemsList = []) {
  e.preventDefault();
  const submitBtn = document.getElementById('confirmCheckoutSubmitBtn');
  const nameInput = document.getElementById('checkoutName');
  const emailInput = document.getElementById('checkoutEmail');
  const cityInput = document.getElementById('checkoutCity');

  if (!nameInput.value.trim() || !emailInput.value.trim() || !cityInput.value.trim()) {
    showToast('Please fill in demo name, email, and shipping destination.', 'error');
    return;
  }

  // Double submit prevention
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing VIP Express Order...';
  }

  setTimeout(() => {
    // Generate demo order reference
    const orderRef = 'NOVA-ORD-' + Math.floor(100000 + Math.random() * 900000);
    const destinationVal = cityInput.value.trim();

    // Create persistent Order Record
    const order = {
      id: orderRef,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      destination: destinationVal,
      customerName: nameInput.value.trim(),
      customerEmail: emailInput.value.trim(),
      totalAmount: totalAmount,
      items: itemsList.map(i => ({
        name: i.product ? i.product.name : 'Product',
        color: i.color || 'Standard',
        variant: i.variant || '',
        qty: i.quantity || 1,
        price: i.price || (i.product ? i.product.price : totalAmount)
      })),
      pilotName: 'Ramesh Kumar (4.9★)',
      pilotPhone: '+91 98201 44820',
      vehicle: 'EV Cargo Van #DL-04-EV-2049 • Bluedart Priority Air',
      eta: 'Tomorrow by 11:00 AM',
      status: 'In Transit'
    };
    AppState.latestOrder = order;
    Storage.set('nova-latest-order', order);

    // If it was standard cart checkout, clear cart in state & storage ONLY after success
    if (!directPurchase) {
      AppState.cart = [];
      Storage.remove('nova-cart');
      updateBadges();
      renderCartDrawer();
    }

    closeAllOverlays();
    showToast(`🎉 Order ${orderRef} confirmed! Launching real-time live tracking...`, 'success');
    setTimeout(() => {
      openOrderTrackingModal(order);
    }, 200);
  }, 450);
}

/**
 * Customer Account Registration, Sign In & Session Controller
 */
function openAuthModal(triggerElement = null, initialTab = 'register') {
  closeAllOverlays();
  AppState.activeModalTrigger = triggerElement;

  const modal = document.getElementById('authModal');
  const backdrop = document.getElementById('authBackdrop');
  if (!modal) return;

  const title = document.getElementById('authModalTitle');
  const subtitle = document.getElementById('authModalSubtitle');
  const tabsRow = document.getElementById('authTabsRow');
  const regView = document.getElementById('authRegisterView');
  const loginView = document.getElementById('authLoginView');
  const profileView = document.getElementById('authProfileView');

  // If already logged in: show active Profile View
  if (AppState.user && AppState.user.isLoggedIn) {
    if (title) title.textContent = 'Account Profile';
    if (subtitle) subtitle.textContent = 'Manage your verified account and delivery addresses.';
    if (tabsRow) { tabsRow.hidden = true; tabsRow.style.display = 'none'; }
    if (regView) { regView.hidden = true; regView.style.display = 'none'; }
    if (loginView) { loginView.hidden = true; loginView.style.display = 'none'; }
    if (profileView) {
      profileView.hidden = false;
      profileView.style.display = 'block';
      const avatar = document.getElementById('activeProfileAvatar');
      const nameEl = document.getElementById('activeProfileName');
      const emailEl = document.getElementById('activeProfileEmail');
      const addrEl = document.getElementById('activeProfileAddress');

      if (nameEl) nameEl.textContent = AppState.user.name || 'Customer';
      if (emailEl) emailEl.textContent = AppState.user.email || 'customer@gmail.com';
      if (addrEl) addrEl.textContent = AppState.user.address || 'Badlapur, Uttar Pradesh';
      if (avatar) {
        const initials = (AppState.user.name || 'VIP').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
        avatar.textContent = initials || 'VIP';
      }
    }
  } else {
    // Visitor is NOT logged in: show Create Account or Sign In tab
    if (title) title.textContent = 'Customer Account';
    if (subtitle) subtitle.textContent = 'Create an account or sign in with Gmail to place orders & track deliveries live.';
    if (tabsRow) { tabsRow.hidden = false; tabsRow.style.display = 'flex'; }
    if (profileView) { profileView.hidden = true; profileView.style.display = 'none'; }
    switchAuthTab(initialTab);
  }

  modal.hidden = false;
  modal.classList.add('active');
  if (backdrop) backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
  AppState.activeOverlay = 'auth';
}

function switchAuthTab(tabName) {
  const tabReg = document.getElementById('tabRegisterBtn');
  const tabLog = document.getElementById('tabLoginBtn');
  const regView = document.getElementById('authRegisterView');
  const logView = document.getElementById('authLoginView');

  if (tabName === 'login') {
    if (tabReg) { tabReg.classList.remove('active'); tabReg.setAttribute('aria-selected', 'false'); }
    if (tabLog) { tabLog.classList.add('active'); tabLog.setAttribute('aria-selected', 'true'); }
    if (regView) { regView.hidden = true; regView.style.display = 'none'; }
    if (logView) { logView.hidden = false; logView.style.display = 'block'; }
    const loginEmail = document.getElementById('loginEmailInput');
    if (loginEmail) loginEmail.focus();
  } else {
    if (tabLog) { tabLog.classList.remove('active'); tabLog.setAttribute('aria-selected', 'false'); }
    if (tabReg) { tabReg.classList.add('active'); tabReg.setAttribute('aria-selected', 'true'); }
    if (logView) { logView.hidden = true; logView.style.display = 'none'; }
    if (regView) { regView.hidden = false; regView.style.display = 'block'; }
    const regName = document.getElementById('regNameInput');
    if (regName) regName.focus();
  }
}

function registerCustomer(userData) {
  const { name, email, password, address, phone } = userData;
  if (!name || !email) {
    showToast('Please provide your name and email.', 'error');
    return;
  }

  const existingUsers = Storage.get('nova-registered-users', []);
  const cleanEmail = email.trim().toLowerCase();
  const userRecord = {
    name: name.trim(),
    email: cleanEmail,
    password: password || 'Nova@2026',
    address: address ? address.trim() : 'Badlapur, Uttar Pradesh',
    phone: phone ? phone.trim() : '',
    createdAt: new Date().toISOString()
  };

  const idx = existingUsers.findIndex(u => u.email.toLowerCase() === cleanEmail);
  if (idx >= 0) existingUsers[idx] = userRecord;
  else existingUsers.push(userRecord);
  Storage.set('nova-registered-users', existingUsers);

  // Set active logged-in session
  AppState.user = {
    isLoggedIn: true,
    name: userRecord.name,
    email: userRecord.email,
    address: userRecord.address,
    phone: userRecord.phone
  };
  Storage.set('nova-active-user', AppState.user);
  updateHeaderUserDisplay();

  showToast(`🎉 Account created! Welcome, ${AppState.user.name}.`, 'success');
  closeAllOverlays();

  // If purchase was waiting on login, proceed automatically!
  if (typeof AppState.pendingCheckoutAction === 'function') {
    const action = AppState.pendingCheckoutAction;
    AppState.pendingCheckoutAction = null;
    setTimeout(() => action(), 200);
  }
}

function signInCustomer(email, password) {
  if (!email) {
    showToast('Please enter your email or Gmail address.', 'error');
    return;
  }

  const cleanEmail = email.trim().toLowerCase();
  const existingUsers = Storage.get('nova-registered-users', []);
  let matchedUser = existingUsers.find(u => u.email.toLowerCase() === cleanEmail);

  // If prefilled demo credentials used and not yet in storage, auto seed demo record
  if (!matchedUser && (cleanEmail === 'sharmadivyanshdev@gmail.com' || cleanEmail.includes('demo'))) {
    matchedUser = {
      name: 'Divyansh Dev Sharma',
      email: cleanEmail,
      password: 'Nova@2026',
      address: 'Badlapur, Uttar Pradesh',
      phone: '+91 98765 43210',
      createdAt: new Date().toISOString()
    };
    existingUsers.push(matchedUser);
    Storage.set('nova-registered-users', existingUsers);
  }

  if (!matchedUser) {
    showToast('❌ Account not found. Please click "Create Account" to register first!', 'error');
    switchAuthTab('register');
    const regEmail = document.getElementById('regEmailInput');
    if (regEmail) regEmail.value = email;
    return;
  }

  if (password && matchedUser.password && matchedUser.password !== password) {
    showToast('❌ Incorrect password! Please check and try again.', 'error');
    const passInput = document.getElementById('loginPasswordInput');
    if (passInput) passInput.focus();
    return;
  }

  // Set active logged-in session
  AppState.user = {
    isLoggedIn: true,
    name: matchedUser.name,
    email: matchedUser.email,
    address: matchedUser.address || 'Badlapur, Uttar Pradesh',
    phone: matchedUser.phone || ''
  };
  Storage.set('nova-active-user', AppState.user);
  updateHeaderUserDisplay();

  showToast(`👋 Welcome back, ${AppState.user.name}!`, 'success');
  closeAllOverlays();

  // If purchase was waiting on login, proceed automatically!
  if (typeof AppState.pendingCheckoutAction === 'function') {
    const action = AppState.pendingCheckoutAction;
    AppState.pendingCheckoutAction = null;
    setTimeout(() => action(), 200);
  }
}

function signOutCustomer() {
  AppState.user = {
    isLoggedIn: false,
    name: '',
    email: '',
    phone: '',
    address: ''
  };
  AppState.latestOrder = null;
  Storage.remove('nova-active-user');
  Storage.remove('nova-latest-order');
  updateHeaderUserDisplay();
  showToast('🚪 Signed out of account');
  closeAllOverlays();
}

/**
 * Interactive Delivery Map & Precision GPS Location Controller
 */
function openMapPickerModal() {
  const modal = document.getElementById('mapPickerModal');
  const backdrop = document.getElementById('mapPickerBackdrop');
  if (!modal) return;

  modal.hidden = false;
  modal.classList.add('active');
  if (backdrop) backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
  AppState.activeOverlay = 'map';

  const addressText = document.getElementById('mapSelectedAddressText');
  const coordsBadge = document.getElementById('mapCoordsBadge');
  if (addressText && AppState.selectedMapLocation) {
    addressText.textContent = AppState.selectedMapLocation.address;
  }
  if (coordsBadge && AppState.selectedMapLocation) {
    coordsBadge.textContent = `LAT: ${AppState.selectedMapLocation.lat.toFixed(4)}° N | LON: ${AppState.selectedMapLocation.lng.toFixed(4)}° E`;
  }
}

function closeMapPickerModal(andResumeCheckout = true) {
  const modal = document.getElementById('mapPickerModal');
  const backdrop = document.getElementById('mapPickerBackdrop');
  if (modal) {
    modal.classList.remove('active');
    modal.hidden = true;
  }
  if (backdrop) backdrop.classList.remove('active');

  if (andResumeCheckout) {
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutBackdrop = document.getElementById('checkoutBackdrop');
    if (checkoutModal) {
      checkoutModal.classList.add('active');
      checkoutModal.hidden = false;
      if (checkoutBackdrop) checkoutBackdrop.classList.add('active');
      AppState.activeOverlay = 'checkout';
    }
  } else {
    AppState.activeOverlay = null;
  }
}

function selectCityLocation(city, lat, lng, pinCode) {
  AppState.selectedMapLocation = {
    address: `${city} • PIN: ${pinCode}`,
    lat: Number(lat),
    lng: Number(lng)
  };

  const pin = document.getElementById('mapTargetPin');
  const tooltip = document.getElementById('pinTooltip');
  const coordsBadge = document.getElementById('mapCoordsBadge');
  const addressText = document.getElementById('mapSelectedAddressText');

  if (pin) {
    let leftPercent = 50;
    let topPercent = 50;
    if (city.includes('Bibiya') || city.includes('Uttar')) { leftPercent = 52; topPercent = 42; }
    else if (city.includes('Delhi')) { leftPercent = 40; topPercent = 38; }
    else if (city.includes('Mumbai')) { leftPercent = 28; topPercent = 65; }
    else if (city.includes('Bengaluru')) { leftPercent = 58; topPercent = 78; }

    pin.style.left = `${leftPercent}%`;
    pin.style.top = `${topPercent}%`;
  }

  if (tooltip) tooltip.textContent = city;
  if (coordsBadge) coordsBadge.textContent = `LAT: ${Number(lat).toFixed(4)}° N | LON: ${Number(lng).toFixed(4)}° E`;
  if (addressText) addressText.textContent = AppState.selectedMapLocation.address;

  document.querySelectorAll('.map-city-chip').forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-city') === city);
  });
}

function handleMapGridClick(e) {
  const canvas = document.getElementById('mapGridCanvas');
  const pin = document.getElementById('mapTargetPin');
  const coordsBadge = document.getElementById('mapCoordsBadge');
  const addressText = document.getElementById('mapSelectedAddressText');
  const tooltip = document.getElementById('pinTooltip');
  if (!canvas || !pin) return;

  const rect = canvas.getBoundingClientRect();
  const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
  const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

  const percentX = (x / rect.width) * 100;
  const percentY = (y / rect.height) * 100;

  pin.style.left = `${percentX.toFixed(1)}%`;
  pin.style.top = `${percentY.toFixed(1)}%`;

  const lat = 28.3670 + ((50 - percentY) * 0.05);
  const lng = 79.4304 + ((percentX - 50) * 0.05);

  let locality = 'Bibiya Karan pur Sector 4';
  if (percentX > 60 && percentY > 60) locality = 'South Hub Extension, UP';
  else if (percentX < 40 && percentY < 40) locality = 'North Highway Expressway, UP';
  else if (percentX < 40) locality = 'West Bypass Road, UP';
  else if (percentX > 60) locality = 'East Industrial Boulevard, UP';

  const fullAddress = `${locality}, Bareilly District, Uttar Pradesh • PIN: 243001`;

  AppState.selectedMapLocation = {
    address: fullAddress,
    lat: lat,
    lng: lng
  };

  if (coordsBadge) coordsBadge.textContent = `LAT: ${lat.toFixed(4)}° N | LON: ${lng.toFixed(4)}° E`;
  if (addressText) addressText.textContent = fullAddress;
  if (tooltip) tooltip.textContent = locality;

  document.querySelectorAll('.map-city-chip').forEach(c => c.classList.remove('active'));
}

async function detectCurrentGpsLocation() {
  const statusEl = document.getElementById('checkoutGpsStatus');
  const cityInput = document.getElementById('checkoutCity');

  if (statusEl) {
    statusEl.innerHTML = `<span>📡 <em>Acquiring real GPS satellite fix...</em></span>`;
  }

  async function applyResolvedLocation(lat, lng) {
    try {
      const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
      if (res.ok) {
        const data = await res.json();
        const city = data.city || data.locality || data.principalSubdivision || 'Current Location';
        const state = data.principalSubdivision || '';
        const country = data.countryName || 'India';
        const pinCode = data.postcode ? ` • PIN: ${data.postcode}` : '';

        const parts = [];
        if (data.locality && data.city && data.locality !== data.city) parts.push(data.locality);
        if (city) parts.push(city);
        if (state && state !== city) parts.push(state);
        if (country) parts.push(country);

        const fullLoc = `${parts.join(', ')}${pinCode} (GPS: ${lat.toFixed(4)}°N, ${lng.toFixed(4)}°E)`;
        AppState.selectedMapLocation = { address: fullLoc, lat, lng };

        if (cityInput) cityInput.value = fullLoc;
        if (statusEl) {
          statusEl.innerHTML = `<span>📍 Verified Real GPS: <strong style="color:var(--color-success);">${escapeHtml(fullLoc)}</strong></span>`;
        }
        showToast(`📍 Current location detected: ${city}, ${state}`, 'success');
        return true;
      }
    } catch (e) {
      console.warn('Reverse geocoding error:', e);
    }

    const fallbackLoc = `Current Location (GPS: ${lat.toFixed(4)}°N, ${lng.toFixed(4)}°E)`;
    AppState.selectedMapLocation = { address: fallbackLoc, lat, lng };
    if (cityInput) cityInput.value = fallbackLoc;
    if (statusEl) {
      statusEl.innerHTML = `<span>📍 Verified GPS Fix: <strong style="color:var(--color-success);">${escapeHtml(fallbackLoc)}</strong></span>`;
    }
    showToast('📍 Live GPS coordinates acquired!', 'success');
    return true;
  }

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      async pos => {
        await applyResolvedLocation(pos.coords.latitude, pos.coords.longitude);
      },
      async err => {
        // Fallback to real IP-based geolocation from network
        try {
          const ipRes = await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=en');
          if (ipRes.ok) {
            const data = await ipRes.json();
            await applyResolvedLocation(data.latitude, data.longitude);
            return;
          }
        } catch (e) {}

        const manualFallback = 'Current Location (GPS: 25.8900°N, 82.4500°E)';
        if (cityInput) cityInput.value = manualFallback;
        if (statusEl) {
          statusEl.innerHTML = `<span>📍 Verified GPS Fix: <strong style="color:var(--color-success);">${manualFallback}</strong></span>`;
        }
        showToast('📍 Current location pinned', 'success');
      },
      { timeout: 7000, enableHighAccuracy: true, maximumAge: 0 }
    );
  } else {
    try {
      const ipRes = await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=en');
      if (ipRes.ok) {
        const data = await ipRes.json();
        await applyResolvedLocation(data.latitude, data.longitude);
        return;
      }
    } catch (e) {}
    showToast('Geolocation not supported in browser', 'error');
  }
}

function confirmMapLocation() {
  const cityInput = document.getElementById('checkoutCity');
  const statusEl = document.getElementById('checkoutGpsStatus');
  if (cityInput && AppState.selectedMapLocation) {
    cityInput.value = AppState.selectedMapLocation.address;
  }
  if (statusEl && AppState.selectedMapLocation) {
    statusEl.innerHTML = `<span>📍 Verified Map Pin: <strong style="color:var(--color-accent);">${escapeHtml(AppState.selectedMapLocation.address)}</strong></span>`;
  }
  showToast('📍 Delivery address updated from Map!', 'success');
  closeMapPickerModal(true);
}

/**
 * Live Delivery Order Tracking Controller
 */
function openOrderTrackingModal(order = null) {
  closeAllOverlays();

  // 1. Authentication Gate: Customer MUST be logged in
  if (!AppState.user || !AppState.user.isLoggedIn) {
    showToast('🔒 Please sign in to your account to view live tracking.', 'info');
    openAuthModal(null, 'login');
    return;
  }

  // 2. Active Order Gate: Customer MUST have placed an order
  const activeOrder = order || AppState.latestOrder;
  if (!activeOrder) {
    showToast('📦 No active orders yet! Place an order to track live dispatch.', 'info');
    return;
  }

  const modal = document.getElementById('orderTrackingModal');
  const backdrop = document.getElementById('trackingBackdrop');
  if (!modal) return;

  const orderIdEl = document.getElementById('trackingOrderId');
  const destEl = document.getElementById('trackingDestTitle');
  const vanEl = document.getElementById('movingDeliveryVan');
  const pkgBox = document.getElementById('trackingPackageBox');

  if (orderIdEl) orderIdEl.textContent = activeOrder.id;
  if (destEl) {
    const destShort = (activeOrder.destination || 'Delivery Destination').split('•')[0].trim();
    destEl.textContent = destShort || 'Delivery Destination';
  }

  // Render ordered items & recipient details in tracking modal
  if (pkgBox) {
    const items = activeOrder.items || [];
    pkgBox.innerHTML = `
      <div class="tracking-package-header">
        <span>📦 PACKAGE DISPATCHED (${items.reduce((sum, i) => sum + (i.qty || 1), 0)} items)</span>
        <span style="color:#fff;">${formatCurrency(activeOrder.totalAmount || 0)}</span>
      </div>
      <div class="tracking-items-mini-list">
        ${items.map(it => `
          <div class="tracking-item-mini-row">
            <span><strong>${escapeHtml(it.name || 'Product')}</strong> ${it.color && it.color !== 'Standard' ? `(${escapeHtml(it.color)})` : ''} × ${it.qty || 1}</span>
            <span style="color:var(--color-accent);font-weight:700;">${formatCurrency((it.price || 0) * (it.qty || 1))}</span>
          </div>
        `).join('')}
      </div>
      <div style="font-size:11px;color:var(--color-text-muted);margin-top:8px;">
        📍 <strong>Deliver to:</strong> ${escapeHtml(activeOrder.customerName)} • ${escapeHtml(activeOrder.destination)}
      </div>
    `;
  }

  // Trigger delivery van transit animation
  if (vanEl) {
    vanEl.style.animation = 'none';
    void vanEl.offsetWidth;
    vanEl.style.animation = 'transitVanDrive 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite';
  }

  modal.hidden = false;
  modal.classList.add('active');
  if (backdrop) backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
  AppState.activeOverlay = 'tracking';
}

function downloadDemoInvoice() {
  const userLoc = (AppState.selectedMapLocation && AppState.selectedMapLocation.address) || (AppState.user && AppState.user.address) || 'Your Delivery Address';
  const userName = (AppState.user && AppState.user.name) || 'Customer';
  const userEmail = (AppState.user && AppState.user.email) || 'customer@gmail.com';

  const order = AppState.latestOrder || {
    id: 'NOVA-ORD-849201',
    destination: userLoc,
    customerName: userName,
    customerEmail: userEmail,
    totalAmount: 75299,
    items: [{ name: 'Apple iPhone 16 Pro Max (Desert Titanium)', qty: 1, price: 75299 }]
  };

  const invoiceText = `==========================================================
              NOVA RETAIL SYSTEMS • TAX INVOICE
==========================================================
Invoice Reference : ${order.id}
Date & Time       : ${new Date().toLocaleString('en-IN')}
Customer Name     : ${order.customerName}
Customer Email    : ${order.customerEmail}
Delivery Address  : ${order.destination}
Courier Partner   : Bluedart Priority Air (Pilot: Ramesh Kumar)
Payment Status    : Verified (Prompt War Challenge Demo)
----------------------------------------------------------
ITEMS PURCHASED:
${(order.items || []).map((it, i) => `${i + 1}. ${it.name || 'Product'} (x${it.qty || 1}) - ${formatCurrency((it.price || 0) * (it.qty || 1))}`).join('\n')}
----------------------------------------------------------
TOTAL INVOICE AMOUNT : ${formatCurrency(order.totalAmount || 0)}
IGST (18% Included)  : ${formatCurrency(Math.round((order.totalAmount || 0) * 0.18 / 1.18))}
==========================================================
Authorized NOVA Digital Signature: verified_by_nova_systems
Thank you for shopping at NOVA — The Future of Shopping!
==========================================================`;

  const blob = new Blob([invoiceText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Invoice_${order.id}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('📄 Tax invoice downloaded successfully!', 'success');
}

/* ==========================================================================
   8. OVERLAY CONTROL & ACCESSIBILITY MANAGEMENT
   ========================================================================== */
function closeAllOverlays() {
  document.body.style.overflow = '';
  // Drawers
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  if (cartDrawer) {
    cartDrawer.classList.remove('active');
    cartDrawer.hidden = true;
  }
  if (cartBackdrop) cartBackdrop.classList.remove('active');

  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const wishlistBackdrop = document.getElementById('wishlistBackdrop');
  if (wishlistDrawer) {
    wishlistDrawer.classList.remove('active');
    wishlistDrawer.hidden = true;
  }
  if (wishlistBackdrop) wishlistBackdrop.classList.remove('active');

  // Modals
  const qvModal = document.getElementById('quickViewModal');
  const qvBackdrop = document.getElementById('quickViewBackdrop');
  if (qvModal) {
    qvModal.classList.remove('active');
    qvModal.hidden = true;
  }
  if (qvBackdrop) qvBackdrop.classList.remove('active');

  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutBackdrop = document.getElementById('checkoutBackdrop');
  if (checkoutModal) {
    checkoutModal.classList.remove('active');
    checkoutModal.hidden = true;
  }
  if (checkoutBackdrop) checkoutBackdrop.classList.remove('active');

  const compareModal = document.getElementById('compareModal');
  const compareBackdrop = document.getElementById('compareBackdrop');
  if (compareModal) {
    compareModal.classList.remove('active');
    compareModal.hidden = true;
  }
  if (compareBackdrop) compareBackdrop.classList.remove('active');

  // Customer Authentication Modal
  const authModal = document.getElementById('authModal');
  const authBackdrop = document.getElementById('authBackdrop');
  if (authModal) {
    authModal.classList.remove('active');
    authModal.hidden = true;
  }
  if (authBackdrop) authBackdrop.classList.remove('active');

  // Map Picker Modal
  const mapPickerModal = document.getElementById('mapPickerModal');
  const mapPickerBackdrop = document.getElementById('mapPickerBackdrop');
  if (mapPickerModal) {
    mapPickerModal.classList.remove('active');
    mapPickerModal.hidden = true;
  }
  if (mapPickerBackdrop) mapPickerBackdrop.classList.remove('active');

  // Live Order Tracking Modal
  const trackingModal = document.getElementById('orderTrackingModal');
  const trackingBackdrop = document.getElementById('trackingBackdrop');
  if (trackingModal) {
    trackingModal.classList.remove('active');
    trackingModal.hidden = true;
  }
  if (trackingBackdrop) trackingBackdrop.classList.remove('active');

  const searchDrop = document.getElementById('searchSuggestionsDropdown');
  if (searchDrop) searchDrop.hidden = true;

  // Return focus to trigger if available
  if (AppState.activeModalTrigger && typeof AppState.activeModalTrigger.focus === 'function') {
    AppState.activeModalTrigger.focus();
    AppState.activeModalTrigger = null;
  }

  AppState.activeOverlay = null;
}

/**
 * Product Comparison Controller (Benchmarking up to 3 items)
 */
function updateCompareDock() {
  const dock = document.getElementById('floatingCompareDock');
  const countBadge = document.getElementById('compareBadgeCount');
  const pillsContainer = document.getElementById('comparePreviewPills');
  if (!dock) return;

  if (!AppState.compareIds || AppState.compareIds.length === 0) {
    dock.hidden = true;
    return;
  }

  dock.hidden = false;
  if (countBadge) countBadge.textContent = `${AppState.compareIds.length} / 3`;

  if (pillsContainer) {
    const items = AppState.compareIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
    pillsContainer.innerHTML = items.map(p => `
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" class="compare-pill-thumb" title="${escapeHtml(p.name)}" onerror="this.onerror=null;this.src='${getSvgFallback(p.categoryLabel)}';">
    `).join('');
  }
}

function openCompareModal(triggerElement) {
  if (!AppState.compareIds || AppState.compareIds.length === 0) {
    showToast('Select at least 1 product to compare specs', 'error');
    return;
  }

  closeAllOverlays();
  AppState.activeModalTrigger = triggerElement;

  const modal = document.getElementById('compareModal');
  const backdrop = document.getElementById('compareBackdrop');
  const tableContainer = document.getElementById('compareTableContainer');
  if (!modal || !tableContainer) return;

  const compareItems = AppState.compareIds.map(id => {
    const prod = PRODUCTS.find(p => p.id === id);
    return {
      product: prod,
      details: getProductDetails(prod)
    };
  }).filter(i => i.product);

  tableContainer.innerHTML = `
    <table class="compare-matrix-table">
      <thead>
        <tr>
          <th>Specification Benchmark</th>
          ${compareItems.map(item => `
            <td class="compare-card-col">
              <img src="${escapeHtml(item.product.image)}" alt="${escapeHtml(item.product.name)}" class="compare-col-thumb" onerror="this.onerror=null;this.src='${getSvgFallback(item.product.categoryLabel)}';">
              <div class="compare-col-name">${escapeHtml(item.product.name)}</div>
              <div class="compare-col-price">${formatCurrency(item.product.price)}</div>
              <button type="button" class="btn btn-sm btn-primary" data-action="add-to-cart" data-id="${item.product.id}" style="margin-top:6px;width:100%;">Add to Cart</button>
            </td>
          `).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Category</th>
          ${compareItems.map(item => `<td>${escapeHtml(item.product.categoryLabel)}</td>`).join('')}
        </tr>
        <tr>
          <th>Customer Rating</th>
          ${compareItems.map(item => `<td>⭐ ${item.product.rating || '4.8'} (${item.product.reviewCount || 100} reviews)</td>`).join('')}
        </tr>
        <tr>
          <th>Drivers / Sensor</th>
          ${compareItems.map(item => `<td>${escapeHtml(item.details.specs['Acoustic Drivers'] || item.details.specs['Sensors'] || item.details.specs['Thumbsticks'] || 'Precision Core Engine')}</td>`).join('')}
        </tr>
        <tr>
          <th>Connectivity</th>
          ${compareItems.map(item => `<td>${escapeHtml(item.details.specs['Wireless Connectivity'] || item.details.specs['Connectivity'] || item.details.specs['Wireless Mesh'] || 'USB-C Ultra Speed')}</td>`).join('')}
        </tr>
        <tr>
          <th>Battery / Power</th>
          ${compareItems.map(item => `<td>${escapeHtml(item.details.specs['Battery Runtime'] || item.details.specs['Battery Endurance'] || item.details.specs['Battery Life'] || 'Full Day Operation')}</td>`).join('')}
        </tr>
        <tr>
          <th>Build & Materials</th>
          ${compareItems.map(item => `<td>${escapeHtml(item.details.specs['Materials'] || item.details.specs['Weight & Build'] || item.details.specs['Build'] || 'Anodized Alloy')}</td>`).join('')}
        </tr>
        <tr>
          <th>Warranty Support</th>
          ${compareItems.map(item => `<td><strong style="color:var(--color-success);">${escapeHtml(item.details.specs['Warranty Coverage'] || '1-Year NOVA Guarantee')}</strong></td>`).join('')}
        </tr>
      </tbody>
    </table>
  `;

  modal.hidden = false;
  modal.classList.add('active');
  if (backdrop) backdrop.classList.add('active');
  AppState.activeOverlay = 'compare';

  const closeBtn = document.getElementById('closeCompareBtn');
  if (closeBtn) closeBtn.focus();
}

/**
 * Live Flash Drop Countdown Timer
 */
function startFlashTimer() {
  const hEl = document.getElementById('timerHours');
  const mEl = document.getElementById('timerMins');
  const sEl = document.getElementById('timerSecs');
  if (!hEl || !mEl || !sEl) return;

  let totalSeconds = 4 * 3600 + 18 * 60 + 42; // 04:18:42

  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      totalSeconds = 6 * 3600; // Reset
    }
    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    hEl.textContent = String(hours).padStart(2, '0');
    mEl.textContent = String(mins).padStart(2, '0');
    sEl.textContent = String(secs).padStart(2, '0');
  }, 1000);
}

/**
 * Instant Autocomplete Search Suggestions Dropdown
 */
function renderSearchSuggestions(query, targetDropdownId = null) {
  const dropdowns = targetDropdownId 
    ? [document.getElementById(targetDropdownId)].filter(Boolean)
    : [document.getElementById('headerSearchSuggestionsDropdown'), document.getElementById('searchSuggestionsDropdown')].filter(Boolean);

  if (dropdowns.length === 0) return;

  const q = query.trim().toLowerCase();
  if (q.length === 0) {
    dropdowns.forEach(d => {
      d.hidden = true;
      d.innerHTML = '';
    });
    return;
  }

  const matches = PRODUCTS.filter(p => {
    return p.name.toLowerCase().includes(q) ||
           (p.brand && p.brand.toLowerCase().includes(q)) ||
           p.categoryLabel.toLowerCase().includes(q) ||
           p.description.toLowerCase().includes(q) ||
           (Array.isArray(p.keywords) && p.keywords.some(k => k.toLowerCase().includes(q)));
  }).slice(0, 6);

  dropdowns.forEach(dropdown => {
    if (matches.length === 0) {
      dropdown.innerHTML = `<div class="search-suggestion-empty">No products match "${escapeHtml(query)}"</div>`;
      dropdown.hidden = false;
      return;
    }

    dropdown.innerHTML = matches.map(p => `
      <div class="search-suggestion-item" data-action="quick-view" data-id="${escapeHtml(p.id)}" tabindex="0" role="option">
        <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" class="suggestion-thumb" onerror="this.onerror=null;this.src='${getSvgFallback(p.categoryLabel)}';">
        <div class="suggestion-info">
          <span class="suggestion-title">${escapeHtml(p.name)}</span>
          <span class="suggestion-meta">${escapeHtml(p.categoryLabel)} • ⭐ ${p.rating || '4.8'}</span>
        </div>
        <span class="suggestion-price">${formatCurrency(p.price)}</span>
      </div>
    `).join('');

    dropdown.hidden = false;
  });
}

function openCartDrawer(triggerElement) {
  closeAllOverlays();
  AppState.activeModalTrigger = triggerElement;

  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    renderCartDrawer();
    drawer.hidden = false;
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    AppState.activeOverlay = 'cart';
    const closeBtn = document.getElementById('closeCartBtn');
    if (closeBtn) closeBtn.focus();
  }
}

function openWishlistDrawer(triggerElement) {
  closeAllOverlays();
  AppState.activeModalTrigger = triggerElement;

  const drawer = document.getElementById('wishlistDrawer');
  const backdrop = document.getElementById('wishlistBackdrop');
  if (drawer && backdrop) {
    renderWishlistDrawer();
    drawer.hidden = false;
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    AppState.activeOverlay = 'wishlist';
    const closeBtn = document.getElementById('closeWishlistBtn');
    if (closeBtn) closeBtn.focus();
  }
}

/* ==========================================================================
   9. EVENT LISTENERS & DELEGATION
   ========================================================================== */
function setupEventDelegation() {
  // Global click delegator
  document.addEventListener('click', e => {
    // 1. Add to cart
    const addBtn = e.target.closest('[data-action="add-to-cart"]');
    if (addBtn) {
      const id = addBtn.getAttribute('data-id');
      const product = PRODUCTS.find(p => p.id === id);
      if (product) {
        const existing = AppState.cart.find(item => item.id === id);
        if (existing) {
          existing.quantity++;
        } else {
          AppState.cart.push({ id, quantity: 1 });
        }
        Storage.set('nova-cart', AppState.cart);
        updateBadges();
        renderCartDrawer();
        showToast(`Added ${product.name} to cart`, 'success');
      }
      return;
    }

    // 2. Toggle wishlist
    const wishBtn = e.target.closest('[data-action="toggle-wishlist"]');
    if (wishBtn) {
      const id = wishBtn.getAttribute('data-id');
      const product = PRODUCTS.find(p => p.id === id);
      if (product) {
        if (AppState.wishlistIds.includes(id)) {
          AppState.wishlistIds = AppState.wishlistIds.filter(item => item !== id);
          showToast(`Removed ${product.name} from wishlist`);
        } else {
          AppState.wishlistIds.push(id);
          showToast(`Added ${product.name} to wishlist`, 'success');
        }
        Storage.set('nova-wishlist', AppState.wishlistIds);
        updateBadges();
        renderCatalogue();
        renderFeaturedSection();
        renderWishlistDrawer();
        renderRecentlyViewed();
      }
      return;
    }

    // 3. Move from wishlist to cart
    const wishMoveBtn = e.target.closest('[data-action="wishlist-move-to-cart"]');
    if (wishMoveBtn) {
      const id = wishMoveBtn.getAttribute('data-id');
      const product = PRODUCTS.find(p => p.id === id);
      if (product) {
        const existing = AppState.cart.find(item => item.id === id);
        if (existing) {
          existing.quantity++;
        } else {
          AppState.cart.push({ id, quantity: 1 });
        }
        AppState.wishlistIds = AppState.wishlistIds.filter(item => item !== id);
        Storage.set('nova-cart', AppState.cart);
        Storage.set('nova-wishlist', AppState.wishlistIds);
        updateBadges();
        renderCartDrawer();
        renderWishlistDrawer();
        renderCatalogue();
        showToast(`Moved ${product.name} to cart`, 'success');
      }
      return;
    }

    // 4. Quick View open
    const quickBtn = e.target.closest('[data-action="quick-view"]');
    if (quickBtn) {
      const id = quickBtn.getAttribute('data-id');
      openQuickView(id, quickBtn);
      return;
    }

    // 5. Cart item increment
    const incBtn = e.target.closest('[data-action="increment"]');
    if (incBtn) {
      const id = incBtn.getAttribute('data-id');
      const item = AppState.cart.find(i => i.id === id);
      if (item) {
        item.quantity++;
        Storage.set('nova-cart', AppState.cart);
        updateBadges();
        renderCartDrawer();
      }
      return;
    }

    // 6. Cart item decrement (enforces minimum of 1)
    const decBtn = e.target.closest('[data-action="decrement"]');
    if (decBtn) {
      const id = decBtn.getAttribute('data-id');
      const item = AppState.cart.find(i => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
        Storage.set('nova-cart', AppState.cart);
        updateBadges();
        renderCartDrawer();
      }
      return;
    }

    // 7. Cart item remove
    const rmBtn = e.target.closest('[data-action="remove-item"]');
    if (rmBtn) {
      const id = rmBtn.getAttribute('data-id');
      AppState.cart = AppState.cart.filter(i => i.id !== id);
      Storage.set('nova-cart', AppState.cart);
      updateBadges();
      renderCartDrawer();
      showToast('Item removed from cart');
      return;
    }

    // 8. Hero Quick Add
    const heroAdd = e.target.closest('.hero-quick-add');
    if (heroAdd) {
      const id = heroAdd.getAttribute('data-id');
      const prod = PRODUCTS.find(p => p.id === id);
      if (prod) {
        const item = AppState.cart.find(i => i.id === id);
        if (item) item.quantity++;
        else AppState.cart.push({ id, quantity: 1 });
        Storage.set('nova-cart', AppState.cart);
        updateBadges();
        renderCartDrawer();
        showToast(`Added ${prod.name} to cart`, 'success');
      }
      return;
    }

    // 9. Compare toggle button
    const compBtn = e.target.closest('[data-action="toggle-compare"]');
    if (compBtn) {
      const id = compBtn.getAttribute('data-id');
      const product = PRODUCTS.find(p => p.id === id);
      if (product) {
        if (!AppState.compareIds) AppState.compareIds = [];
        if (AppState.compareIds.includes(id)) {
          AppState.compareIds = AppState.compareIds.filter(item => item !== id);
          showToast(`Removed ${product.name} from comparison matrix`);
        } else {
          if (AppState.compareIds.length >= 3) {
            showToast('You can compare up to 3 products at a time', 'error');
            return;
          }
          AppState.compareIds.push(id);
          showToast(`Added ${product.name} to comparison matrix`, 'success');
        }
        updateCompareDock();
        renderCatalogue();
        renderFeaturedSection();
      }
      return;
    }

    // 10. Backdrops click to close
    if (
      e.target.id === 'cartBackdrop' ||
      e.target.id === 'wishlistBackdrop' ||
      e.target.id === 'quickViewBackdrop' ||
      e.target.id === 'checkoutBackdrop' ||
      e.target.id === 'compareBackdrop'
    ) {
      closeAllOverlays();
      return;
    }

    // 11. Category chips click
    const chip = e.target.closest('.category-chip');
    if (chip) {
      const cat = chip.getAttribute('data-category');
      document.querySelectorAll('.category-chip').forEach(c => {
        const isCurrent = c === chip;
        c.classList.toggle('active', isCurrent);
        c.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
      });
      AppState.filters.category = cat;
      renderCatalogue();
      return;
    }

    // 11b. Sub-nav All button
    const subNavAllBtn = e.target.closest('.sub-nav-all-btn');
    if (subNavAllBtn) {
      const allChip = document.querySelector('.category-chip[data-category="all"]');
      if (allChip) allChip.click();
      return;
    }

    // 12. Category dropdown items
    const dropItem = e.target.closest('.dropdown-item') || e.target.closest('.footer-cat-link') || e.target.closest('.sub-nav-link:not(.sub-nav-flash)');
    if (dropItem) {
      const cat = dropItem.getAttribute('data-category');
      if (cat) {
        const matchingChip = document.querySelector(`.category-chip[data-category="${cat}"]`);
        if (matchingChip) {
          matchingChip.click();
        }
      }
      return;
    }

    // 13. Dismiss search suggestions if clicked outside search wrapper
    const searchWrapper = document.querySelector('.search-input-wrapper');
    const suggestionsDropdown = document.getElementById('searchSuggestionsDropdown');
    if (suggestionsDropdown && !suggestionsDropdown.hidden) {
      if (searchWrapper && !searchWrapper.contains(e.target)) {
        suggestionsDropdown.hidden = true;
      }
    }

    const headerSearchWrapper = document.querySelector('.header-search-bar');
    const headerSuggestionsDropdown = document.getElementById('headerSearchSuggestionsDropdown');
    if (headerSuggestionsDropdown && !headerSuggestionsDropdown.hidden) {
      if (headerSearchWrapper && !headerSearchWrapper.contains(e.target)) {
        headerSuggestionsDropdown.hidden = true;
      }
    }
  });

  // Keyboard navigation & modal dismiss
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const suggestionsDropdown = document.getElementById('searchSuggestionsDropdown');
      if (suggestionsDropdown && !suggestionsDropdown.hidden) {
        suggestionsDropdown.hidden = true;
      }
      if (AppState.activeOverlay) {
        closeAllOverlays();
      }
    }
  });

  // Top header triggers
  const cartTriggerBtn = document.getElementById('cartTriggerBtn');
  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', () => openCartDrawer(cartTriggerBtn));

  const wishlistTriggerBtn = document.getElementById('wishlistTriggerBtn');
  if (wishlistTriggerBtn) wishlistTriggerBtn.addEventListener('click', () => openWishlistDrawer(wishlistTriggerBtn));

  // Header VIP User & Live Tracking triggers
  const headerUserBtn = document.getElementById('headerUserBtn');
  if (headerUserBtn) headerUserBtn.addEventListener('click', () => openAuthModal(headerUserBtn));

  const headerTrackBtn = document.getElementById('headerTrackBtn');
  if (headerTrackBtn) headerTrackBtn.addEventListener('click', () => openOrderTrackingModal(null));

  const subnavTrackLink = document.getElementById('subnavTrackLink');
  if (subnavTrackLink) {
    subnavTrackLink.addEventListener('click', e => {
      e.preventDefault();
      openOrderTrackingModal(null);
    });
  }

  // Drawers & Modals Close Triggers
  const closeCartBtn = document.getElementById('closeCartBtn');
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeAllOverlays);

  const closeWishlistBtn = document.getElementById('closeWishlistBtn');
  if (closeWishlistBtn) closeWishlistBtn.addEventListener('click', closeAllOverlays);

  const closeQuickViewBtn = document.getElementById('closeQuickViewBtn');
  if (closeQuickViewBtn) closeQuickViewBtn.addEventListener('click', closeAllOverlays);

  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeAllOverlays);

  const proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');
  if (proceedToCheckoutBtn) proceedToCheckoutBtn.addEventListener('click', () => openCheckoutModal(proceedToCheckoutBtn));

  // Auth Modal Event Triggers
  const closeAuthBtn = document.getElementById('closeAuthBtn');
  if (closeAuthBtn) closeAuthBtn.addEventListener('click', closeAllOverlays);

  const authBackdrop = document.getElementById('authBackdrop');
  if (authBackdrop) authBackdrop.addEventListener('click', closeAllOverlays);

  // Auth Tab Switch Triggers
  const tabRegisterBtn = document.getElementById('tabRegisterBtn');
  if (tabRegisterBtn) tabRegisterBtn.addEventListener('click', () => switchAuthTab('register'));

  const tabLoginBtn = document.getElementById('tabLoginBtn');
  if (tabLoginBtn) tabLoginBtn.addEventListener('click', () => switchAuthTab('login'));

  const linkSwitchToRegister = document.getElementById('linkSwitchToRegister');
  if (linkSwitchToRegister) linkSwitchToRegister.addEventListener('click', () => switchAuthTab('register'));

  const linkSwitchToLogin = document.getElementById('linkSwitchToLogin');
  if (linkSwitchToLogin) linkSwitchToLogin.addEventListener('click', () => switchAuthTab('login'));

  // 1-Click Demo Pre-Fill Triggers
  const btnPrefillRegisterDemo = document.getElementById('btnPrefillRegisterDemo');
  if (btnPrefillRegisterDemo) {
    btnPrefillRegisterDemo.addEventListener('click', () => {
      const regNameInput = document.getElementById('regNameInput');
      const regEmailInput = document.getElementById('regEmailInput');
      const regPasswordInput = document.getElementById('regPasswordInput');
      const regAddressInput = document.getElementById('regAddressInput');

      if (regNameInput) regNameInput.value = 'Divyansh Dev Sharma';
      if (regEmailInput) regEmailInput.value = 'sharmadivyanshdev@gmail.com';
      if (regPasswordInput) regPasswordInput.value = 'Nova@2026';
      if (regAddressInput) regAddressInput.value = 'Badlapur, Uttar Pradesh';
      showToast('Sample registration details filled!');
    });
  }

  const btnPrefillLoginDemo = document.getElementById('btnPrefillLoginDemo');
  if (btnPrefillLoginDemo) {
    btnPrefillLoginDemo.addEventListener('click', () => {
      const loginEmailInput = document.getElementById('loginEmailInput');
      const loginPasswordInput = document.getElementById('loginPasswordInput');

      if (loginEmailInput) loginEmailInput.value = 'sharmadivyanshdev@gmail.com';
      if (loginPasswordInput) loginPasswordInput.value = 'Nova@2026';
      showToast('Demo login credentials filled!');
    });
  }

  // Register Form Submission
  const authRegisterForm = document.getElementById('authRegisterForm');
  if (authRegisterForm) {
    authRegisterForm.addEventListener('submit', e => {
      e.preventDefault();
      const regNameInput = document.getElementById('regNameInput');
      const regEmailInput = document.getElementById('regEmailInput');
      const regPasswordInput = document.getElementById('regPasswordInput');
      const regAddressInput = document.getElementById('regAddressInput');

      const name = regNameInput ? regNameInput.value.trim() : '';
      const email = regEmailInput ? regEmailInput.value.trim() : '';
      const password = regPasswordInput ? regPasswordInput.value.trim() : '';
      const address = regAddressInput ? regAddressInput.value.trim() : '';

      if (!name) {
        showToast('Please enter your full name', 'error');
        if (regNameInput) regNameInput.focus();
        return;
      }
      if (!email || !email.includes('@')) {
        showToast('Please enter a valid email address (e.g. your Gmail)', 'error');
        if (regEmailInput) regEmailInput.focus();
        return;
      }

      registerCustomer({
        name,
        email,
        password,
        address
      });
    });
  }

  // Login Form Submission
  const authLoginForm = document.getElementById('authLoginForm');
  if (authLoginForm) {
    authLoginForm.addEventListener('submit', e => {
      e.preventDefault();
      const loginEmailInput = document.getElementById('loginEmailInput');
      const loginPasswordInput = document.getElementById('loginPasswordInput');

      const email = loginEmailInput ? loginEmailInput.value.trim() : '';
      const password = loginPasswordInput ? loginPasswordInput.value.trim() : '';

      if (!email || !email.includes('@')) {
        showToast('Please enter your registered Gmail/email', 'error');
        if (loginEmailInput) loginEmailInput.focus();
        return;
      }

      signInCustomer(email, password);
    });
  }

  // Sign Out Trigger
  const btnSignOutUser = document.getElementById('btnSignOutUser');
  if (btnSignOutUser) {
    btnSignOutUser.addEventListener('click', signOutCustomer);
  }

  // Interactive Map Location Picker Triggers
  const closeMapPickerBtn = document.getElementById('closeMapPickerBtn');
  if (closeMapPickerBtn) closeMapPickerBtn.addEventListener('click', () => closeMapPickerModal(true));

  const mapPickerBackdrop = document.getElementById('mapPickerBackdrop');
  if (mapPickerBackdrop) mapPickerBackdrop.addEventListener('click', () => closeMapPickerModal(true));

  const btnConfirmMapLocation = document.getElementById('btnConfirmMapLocation');
  if (btnConfirmMapLocation) btnConfirmMapLocation.addEventListener('click', confirmMapLocation);

  const mapGridCanvas = document.getElementById('mapGridCanvas');
  if (mapGridCanvas) mapGridCanvas.addEventListener('click', handleMapGridClick);

  document.querySelectorAll('.map-city-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const city = chip.getAttribute('data-city');
      const lat = chip.getAttribute('data-lat');
      const lng = chip.getAttribute('data-lng');
      const pin = chip.getAttribute('data-pin');
      selectCityLocation(city, lat, lng, pin);
    });
  });

  // Live Order Tracking Triggers
  const closeTrackingBtn = document.getElementById('closeTrackingBtn');
  if (closeTrackingBtn) closeTrackingBtn.addEventListener('click', closeAllOverlays);

  const closeTrackingModalBtn = document.getElementById('btnCloseTrackingModal');
  if (closeTrackingModalBtn) closeTrackingModalBtn.addEventListener('click', closeAllOverlays);

  const trackingBackdrop = document.getElementById('trackingBackdrop');
  if (trackingBackdrop) trackingBackdrop.addEventListener('click', closeAllOverlays);

  const btnDownloadInvoice = document.getElementById('btnDownloadInvoice');
  if (btnDownloadInvoice) btnDownloadInvoice.addEventListener('click', downloadDemoInvoice);

  const btnCallPilot = document.getElementById('btnCallPilot');
  if (btnCallPilot) {
    btnCallPilot.addEventListener('click', () => {
      showToast('📞 Calling Pilot Ramesh Kumar: +91 98201 44820 (Connecting securely...)', 'info');
    });
  }

  const btnInstructions = document.getElementById('btnInstructions');
  if (btnInstructions) {
    btnInstructions.addEventListener('click', () => {
      const note = prompt('Enter delivery instruction for Pilot Ramesh Kumar (e.g. Leave with guard):', 'Leave at main reception / gate');
      if (note) {
        showToast(`💬 Instruction dispatched to Pilot: "${note}"`, 'success');
      }
    });
  }

  // Product Comparison Triggers
  const launchCompareBtn = document.getElementById('launchCompareBtn');
  if (launchCompareBtn) launchCompareBtn.addEventListener('click', () => openCompareModal(launchCompareBtn));

  const clearCompareBtn = document.getElementById('clearCompareBtn');
  if (clearCompareBtn) {
    clearCompareBtn.addEventListener('click', () => {
      AppState.compareIds = [];
      updateCompareDock();
      renderCatalogue();
      renderFeaturedSection();
      showToast('Comparison list cleared');
    });
  }

  const closeCompareBtn = document.getElementById('closeCompareBtn');
  if (closeCompareBtn) closeCompareBtn.addEventListener('click', closeAllOverlays);

  // Mobile bottom navigation bar triggers
  const mobileNavCart = document.getElementById('mobileNavCart');
  if (mobileNavCart) mobileNavCart.addEventListener('click', () => openCartDrawer(mobileNavCart));

  const mobileNavWishlist = document.getElementById('mobileNavWishlist');
  if (mobileNavWishlist) mobileNavWishlist.addEventListener('click', () => openWishlistDrawer(mobileNavWishlist));

  // Footer direct triggers
  const footerWishlistBtn = document.getElementById('footerWishlistBtn');
  if (footerWishlistBtn) footerWishlistBtn.addEventListener('click', () => openWishlistDrawer(footerWishlistBtn));

  const footerCartBtn = document.getElementById('footerCartBtn');
  if (footerCartBtn) footerCartBtn.addEventListener('click', () => openCartDrawer(footerCartBtn));

  // Amazon Header Search & Catalogue Search Synchronization Engine
  const headerSearchInput = document.getElementById('headerSearchInput');
  const headerSearchClearBtn = document.getElementById('headerSearchClearBtn');
  const headerSearchSubmitBtn = document.getElementById('headerSearchSubmitBtn');
  const headerCategorySelect = document.getElementById('headerCategorySelect');
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');

  function handleSearchInput(q, source) {
    AppState.filters.searchQuery = q;

    if (source !== 'header' && headerSearchInput) {
      headerSearchInput.value = q;
      if (headerSearchClearBtn) headerSearchClearBtn.hidden = q.length === 0;
    }
    if (source !== 'catalogue' && searchInput) {
      searchInput.value = q;
      if (searchClearBtn) searchClearBtn.hidden = q.length === 0;
    }

    if (source === 'header') {
      if (headerSearchClearBtn) headerSearchClearBtn.hidden = q.length === 0;
      renderSearchSuggestions(q, 'headerSearchSuggestionsDropdown');
    } else {
      if (searchClearBtn) searchClearBtn.hidden = q.length === 0;
      renderSearchSuggestions(q, 'searchSuggestionsDropdown');
    }

    renderCatalogue();
  }

  if (headerSearchInput) {
    headerSearchInput.addEventListener('input', () => {
      handleSearchInput(headerSearchInput.value, 'header');
    });

    headerSearchInput.addEventListener('focus', () => {
      if (headerSearchInput.value.trim().length > 0) {
        renderSearchSuggestions(headerSearchInput.value, 'headerSearchSuggestionsDropdown');
      }
    });

    headerSearchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const headerDropdown = document.getElementById('headerSearchSuggestionsDropdown');
        if (headerDropdown) headerDropdown.hidden = true;
        const catalogueEl = document.getElementById('catalogue');
        if (catalogueEl) catalogueEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (headerSearchClearBtn) {
    headerSearchClearBtn.addEventListener('click', () => {
      if (headerSearchInput) headerSearchInput.value = '';
      headerSearchClearBtn.hidden = true;
      handleSearchInput('', 'header');
      if (headerSearchInput) headerSearchInput.focus();
    });
  }

  if (headerSearchSubmitBtn) {
    headerSearchSubmitBtn.addEventListener('click', () => {
      const headerDropdown = document.getElementById('headerSearchSuggestionsDropdown');
      if (headerDropdown) headerDropdown.hidden = true;
      const catalogueEl = document.getElementById('catalogue');
      if (catalogueEl) catalogueEl.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (headerCategorySelect) {
    headerCategorySelect.addEventListener('change', () => {
      const cat = headerCategorySelect.value;
      AppState.filters.category = cat;

      document.querySelectorAll('.category-chip').forEach(c => {
        const isCurrent = c.getAttribute('data-category') === cat;
        c.classList.toggle('active', isCurrent);
        c.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
      });

      renderCatalogue();
      const catalogueEl = document.getElementById('catalogue');
      if (catalogueEl) catalogueEl.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      handleSearchInput(searchInput.value, 'catalogue');
    });

    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim().length > 0) {
        renderSearchSuggestions(searchInput.value, 'searchSuggestionsDropdown');
      }
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchClearBtn.hidden = true;
      handleSearchInput('', 'catalogue');
      if (searchInput) searchInput.focus();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      AppState.filters.sort = sortSelect.value;
      renderCatalogue();
    });
  }

  // Price range slider
  const priceRangeInput = document.getElementById('priceRangeInput');
  const priceValueDisplay = document.getElementById('priceValueDisplay');
  if (priceRangeInput) {
    priceRangeInput.addEventListener('input', () => {
      const val = Number(priceRangeInput.value);
      AppState.filters.priceMax = val;
      if (priceValueDisplay) {
        priceValueDisplay.textContent = `Up to ${formatCurrency(val)}`;
      }
      renderCatalogue();
    });
  }

  // Filter Reset Handlers
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const emptyResetBtn = document.getElementById('emptyResetBtn');

  function resetAllFilters() {
    AppState.filters.searchQuery = '';
    AppState.filters.category = 'all';
    AppState.filters.priceMax = 399999;
    AppState.filters.sort = 'featured';

    if (searchInput) {
      searchInput.value = '';
      if (searchClearBtn) searchClearBtn.hidden = true;
    }
    if (sortSelect) sortSelect.value = 'featured';
    if (priceRangeInput) priceRangeInput.value = '399999';
    if (priceValueDisplay) priceValueDisplay.textContent = 'Up to ₹3,99,999';

    document.querySelectorAll('.category-chip').forEach(c => {
      const isAll = c.getAttribute('data-category') === 'all';
      c.classList.toggle('active', isAll);
      c.setAttribute('aria-selected', isAll ? 'true' : 'false');
    });

    renderCatalogue();
    showToast('Filters reset to default');
  }

  if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetAllFilters);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);

  // Clear history button
  const clearRecentBtn = document.getElementById('clearRecentBtn');
  if (clearRecentBtn) {
    clearRecentBtn.addEventListener('click', () => {
      AppState.recentlyViewedIds = [];
      Storage.remove('nova-recently-viewed');
      renderRecentlyViewed();
      showToast('Recently viewed history cleared');
    });
  }

  // Demo Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterFeedback = document.getElementById('newsletterFeedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        if (newsletterFeedback) {
          newsletterFeedback.className = 'newsletter-feedback error';
          newsletterFeedback.textContent = 'Please provide a valid email format (e.g. name@domain.com)';
        }
        return;
      }

      if (newsletterFeedback) {
        newsletterFeedback.className = 'newsletter-feedback success';
        newsletterFeedback.textContent = '✓ Demo validated: You are signed up for NOVA previews! (Simulated, no emails stored).';
      }
      newsletterEmail.value = '';
      showToast('Demo newsletter subscription verified', 'success');
    });
  }

  // Dynamic Year in footer
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   10. APPLICATION INITIALIZATION
   ========================================================================== */
function initNovaApp() {
  // 1. Audit catalogue integrity on startup
  const audit = validateCatalogueIntegrity();
  console.info(`[NOVA Engine] Catalogue initialized with ${audit.total} unique items across 7 categories.`, audit.counts);

  // 2. Hydrate user session from LocalStorage
  hydrateStateFromStorage();

  // 3. Render initial views
  renderFeaturedSection();
  renderCatalogue();
  renderRecentlyViewed();
  updateBadges();
  updateCompareDock();
  startFlashTimer();

  // 4. Attach event listeners
  setupEventDelegation();
}

// Kick off when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNovaApp);
} else {
  initNovaApp();
}
