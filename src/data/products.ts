export const products = [
  // Dairy Products
  {
    id: 'milk-1',
    name: 'Amul Taaza Homogenized Toned Milk (1L)',
    description: 'Fresh and pure toned milk, rich in calcium and vitamins.',
    price: 60,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150',
    category: 'dairy',
    stock: 100,
    nutrition: {
      calories: '120 kcal',
      protein: '3.2g',
      fat: '3.0g',
      calcium: '120mg'
    }
  },
  {
    id: 'butter-1',
    name: 'Amul Butter (100g)',
    description: 'Rich and creamy butter made from pure milk. Perfect for cooking and spreading.',
    price: 50,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d',
    category: 'dairy',
    stock: 80,
    nutrition: {
      calories: '720 kcal',
      protein: '0.6g',
      fat: '81g',
      calcium: '15mg'
    }
  },
  {
    id: 'curd-1',
    name: 'Mother Dairy Curd (500g)',
    description: 'Thick and creamy curd, made from fresh milk.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e',
    category: 'dairy',
    stock: 60,
    nutrition: {
      calories: '98 kcal',
      protein: '3.3g',
      fat: '3.1g',
      calcium: '150mg'
    }
  },

  // Snacks and Chips
  {
    id: 'chips-1',
    name: 'Lays Classic Salted Chips (50g)',
    description: 'Crispy and delicious potato chips with a classic salted flavor.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b',
    category: 'snacks',
    stock: 200,
    nutrition: {
      calories: '270 kcal',
      fat: '17g',
      carbs: '26g',
      protein: '3g'
    }
  },
  {
    id: 'chips-2',
    name: 'Uncle Chipps Indian Masala (70g)',
    description: 'Spicy and tangy potato chips with Indian flavors.',
    price: 25,
    image: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f',
    category: 'snacks',
    stock: 150,
    nutrition: {
      calories: '380 kcal',
      fat: '21g',
      carbs: '29g',
      protein: '4g'
    }
  },
  {
    id: 'biscuit-1',
    name: 'Parle-G Biscuits (100g)',
    description: 'Iconic glucose biscuits, perfect for tea time.',
    price: 10,
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e',
    category: 'snacks',
    stock: 300,
    nutrition: {
      calories: '450 kcal',
      fat: '12g',
      carbs: '72g',
      protein: '6g'
    }
  },

  // Beverages
  {
    id: 'drink-1',
    name: 'Coca-Cola (750ml)',
    description: 'Refreshing carbonated drink, perfect for any occasion.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7',
    category: 'beverages',
    stock: 120,
    nutrition: {
      calories: '320 kcal',
      sugar: '39g',
      sodium: '45mg'
    }
  },
  {
    id: 'tea-1',
    name: 'Tata Tea Gold (500g)',
    description: 'Premium tea leaves with a rich aroma and flavor.',
    price: 200,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9',
    category: 'beverages',
    stock: 80,
    nutrition: {
      calories: '1 kcal',
      antioxidants: 'High',
      caffeine: '25mg per cup'
    }
  },
  {
    id: 'energy-1',
    name: 'Red Bull Energy Drink (250ml)',
    description: 'Energy drink to boost your performance and focus.',
    price: 115,
    image: 'https://images.unsplash.com/photo-1613214049841-7fd1ff2d5c2f',
    category: 'beverages',
    stock: 100,
    nutrition: {
      calories: '110 kcal',
      caffeine: '80mg',
      sugar: '27g'
    }
  },

  // Bakery and Breakfast
  {
    id: 'bread-1',
    name: 'Britannia Whole Wheat Bread (400g)',
    description: 'Healthy and nutritious whole wheat bread.',
    price: 40,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    category: 'bakery',
    stock: 50,
    nutrition: {
      calories: '70 kcal per slice',
      fiber: '2g',
      protein: '4g'
    }
  },
  {
    id: 'cereal-1',
    name: 'Kellogg\'s Corn Flakes (500g)',
    description: 'Crispy corn flakes, ideal for a healthy breakfast.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1521483451569-e33803c0330c',
    category: 'bakery',
    stock: 70,
    nutrition: {
      calories: '120 kcal per serving',
      iron: '45% DV',
      vitamins: 'A, C, D'
    }
  },
  {
    id: 'mix-1',
    name: 'MTR Instant Rava Idli Mix (500g)',
    description: 'Ready-to-make mix for soft and fluffy idlis.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc',
    category: 'bakery',
    stock: 60,
    nutrition: {
      calories: '165 kcal per serving',
      protein: '5g',
      carbs: '30g'
    }
  },

  // Personal Care
  {
    id: 'soap-1',
    name: 'Dove Soap Bar (100g)',
    description: 'Moisturizing soap with ¼ moisturizing cream.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec',
    category: 'personal-care',
    stock: 150,
    features: {
      type: 'Moisturizing',
      skin_type: 'All skin types',
      benefits: 'Soft and smooth skin'
    }
  },
  {
    id: 'toothpaste-1',
    name: 'Colgate Strong Teeth Toothpaste (100g)',
    description: 'Toothpaste with calcium and fluoride for strong teeth.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c',
    category: 'personal-care',
    stock: 200,
    features: {
      benefits: 'Cavity protection',
      ingredients: 'Calcium, Fluoride',
      type: 'Daily use'
    }
  },
  {
    id: 'shampoo-1',
    name: 'Head & Shoulders Anti-Dandruff Shampoo (180ml)',
    description: 'Shampoo for dandruff-free and healthy hair.',
    price: 190,
    image: 'https://images.unsplash.com/photo-1626784215021-2e39ccf971cd',
    category: 'personal-care',
    stock: 100,
    features: {
      benefits: 'Dandruff control',
      hair_type: 'All hair types',
      usage: 'Regular use'
    }
  },

  // Household Essentials
  {
    id: 'detergent-1',
    name: 'Surf Excel Easy Wash Detergent Powder (1kg)',
    description: 'Detergent powder for tough stains and bright clothes.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473',
    category: 'household',
    stock: 80,
    features: {
      type: 'Powder',
      clothes_type: 'All fabrics',
      benefits: 'Stain removal'
    }
  },
  {
    id: 'cleaner-1',
    name: 'Harpic Toilet Cleaner (1L)',
    description: 'Powerful toilet cleaner that kills germs and removes stains.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17',
    category: 'household',
    stock: 100,
    features: {
      type: 'Liquid',
      usage: 'Toilet cleaning',
      benefits: 'Germ protection'
    }
  },
  {
    id: 'repellent-1',
    name: 'Good Knight Advanced Fast Card (30 Nights)',
    description: 'Mosquito repellent for a peaceful sleep.',
    price: 90,
    image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1',
    category: 'household',
    stock: 120,
    features: {
      type: 'Electric',
      duration: '30 nights',
      benefits: 'Mosquito protection'
    }
  },

  // Frozen Foods
  {
    id: 'fries-1',
    name: 'McCain French Fries (500g)',
    description: 'Crispy and golden french fries, ready to fry.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d',
    category: 'frozen',
    stock: 50,
    nutrition: {
      calories: '270 kcal per 100g',
      fat: '12g',
      protein: '3g'
    }
  },
  {
    id: 'pizza-1',
    name: 'Amul Frozen Pizza (300g)',
    description: 'Delicious frozen pizza with cheese and veggies.',
    price: 200,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    category: 'frozen',
    stock: 40,
    nutrition: {
      calories: '250 kcal per 100g',
      protein: '10g',
      carbs: '30g'
    }
  },
  {
    id: 'nuggets-1',
    name: 'Venky\'s Chicken Nuggets (250g)',
    description: 'Crunchy and juicy chicken nuggets, perfect for snacks.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710',
    category: 'frozen',
    stock: 60,
    nutrition: {
      calories: '220 kcal per 100g',
      protein: '14g',
      fat: '13g'
    }
  },

  // Spices and Condiments
  {
    id: 'spice-1',
    name: 'Everest Garam Masala (100g)',
    description: 'A blend of aromatic spices for rich flavor.',
    price: 60,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d',
    category: 'spices',
    stock: 150,
    features: {
      type: 'Blend',
      usage: 'All Indian dishes',
      ingredients: 'Mixed spices'
    }
  },
  {
    id: 'spice-2',
    name: 'MDH Chana Masala (100g)',
    description: 'Spice mix for making delicious chana masala.',
    price: 50,
    image: 'https://images.unsplash.com/photo-1599492816933-c6f914151fa0',
    category: 'spices',
    stock: 120,
    features: {
      type: 'Blend',
      usage: 'Chickpea curry',
      ingredients: 'Mixed spices'
    }
  },
  {
    id: 'salt-1',
    name: 'Tata Salt (1kg)',
    description: 'Iodized salt for everyday cooking.',
    price: 25,
    image: 'https://images.unsplash.com/photo-1518110925495-49ca33b3d661',
    category: 'spices',
    stock: 200,
    features: {
      type: 'Iodized',
      usage: 'All cooking',
      benefits: 'Essential minerals'
    }
  },

  // Cereals and Pulses
  {
    id: 'atta-1',
    name: 'Fortune Chakki Fresh Atta (5kg)',
    description: 'Whole wheat flour for soft and healthy rotis.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    category: 'cereals',
    stock: 40,
    nutrition: {
      calories: '340 kcal per 100g',
      protein: '12g',
      fiber: '11g'
    }
  },
  {
    id: 'rice-1',
    name: 'Daawat Basmati Rice (5kg)',
    description: 'Premium basmati rice with long grains and rich aroma.',
    price: 500,
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99',
    category: 'cereals',
    stock: 30,
    nutrition: {
      calories: '350 kcal per 100g',
      protein: '6g',
      carbs: '78g'
    }
  },
  {
    id: 'dal-1',
    name: 'Tata Sampann Toor Dal (1kg)',
    description: 'High-quality toor dal for delicious dal recipes.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246',
    category: 'cereals',
    stock: 70,
    nutrition: {
      calories: '340 kcal per 100g',
      protein: '22g',
      fiber: '15g'
    }
  },

  // Cleaning Supplies
  {
    id: 'cleaner-2',
    name: 'Lizol Floor Cleaner (1L)',
    description: 'Multi-surface floor cleaner with a pleasant fragrance.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17',
    category: 'cleaning',
    stock: 90,
    features: {
      type: 'Liquid',
      usage: 'All floors',
      benefits: 'Germ protection'
    }
  },
  {
    id: 'dishwash-1',
    name: 'Vim Dishwash Bar (155g)',
    description: 'Dishwashing bar for tough grease and stains.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473',
    category: 'cleaning',
    stock: 150,
    features: {
      type: 'Bar',
      usage: 'Utensil cleaning',
      benefits: 'Grease removal'
    }
  },
  {
    id: 'scrub-1',
    name: 'Scotch-Brite Scrub Pad (1pc)',
    description: 'Durable scrub pad for cleaning utensils.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1622503174772-02f41da39b5f',
    category: 'cleaning',
    stock: 200,
    features: {
      type: 'Scrubber',
      usage: 'Multi-purpose',
      durability: 'Long-lasting'
    }
  }
];

// Group products by category
export const productsByCategory = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {} as Record<string, typeof products>);