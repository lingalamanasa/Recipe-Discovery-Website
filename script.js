/**
 * FlavorNest - Premium Recipe Discovery Website
 * Comprehensive JavaScript Engine: Data, State Management, Filters, Scaler, Meal Planner & UI Interactions
 */

// ==========================================
// 1. COMPREHENSIVE RECIPES DATABASE
// ==========================================
const RECIPES_DATA = [
  {
    id: 1,
    name: "Tuscan Garlic Butter Salmon",
    category: "Dinner",
    tags: ["High Protein", "Gluten-Free", "Chef's Special"],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviewsCount: 184,
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    difficulty: "Easy",
    calories: 460,
    isFeatured: true,
    isPopular: true,
    description: "Crispy pan-seared wild salmon fillets immersed in an ultra-luxurious sun-dried tomato, spinach, and garlic cream reduction.",
    chefNote: "For maximum crispiness, thoroughly pat dry the salmon skin with paper towels before placing it into the smoking hot skillet.",
    nutrition: { calories: 460, protein: 42, carbs: 8, fat: 28, fiber: 2 },
    ingredients: [
      { name: "Salmon fillets (skin-on)", amount: 4, unit: "fillets (6 oz each)" },
      { name: "Olive oil", amount: 2, unit: "tbsp" },
      { name: "Unsalted butter", amount: 2, unit: "tbsp" },
      { name: "Fresh garlic", amount: 6, unit: "cloves, minced" },
      { name: "Sun-dried tomatoes", amount: 0.5, unit: "cup, sliced" },
      { name: "Baby spinach", amount: 3, unit: "cups, fresh" },
      { name: "Heavy whipping cream", amount: 0.75, unit: "cup" },
      { name: "Fresh parmesan cheese", amount: 0.5, unit: "cup, grated" },
      { name: "Fresh basil", amount: 2, unit: "tbsp, chopped" },
      { name: "Sea salt and cracked black pepper", amount: 1, unit: "tsp, to taste" }
    ],
    instructions: [
      { step: 1, title: "Prep & Season", text: "Pat salmon fillets thoroughly dry. Season generously on both sides with sea salt and cracked black pepper.", duration: 3 },
      { step: 2, title: "Sear the Salmon", text: "Heat olive oil in a wide cast-iron skillet over medium-high heat. Place salmon fillets skin-side down and sear undisturbed for 5 minutes. Gently flip and sear the other side for 3 minutes until golden. Transfer to a warm plate.", duration: 8 },
      { step: 3, title: "Aromatics & Cream", text: "Melt butter in the same pan. Sauté minced garlic until fragrant (approx. 1 minute). Add sun-dried tomatoes and heavy cream; simmer gently for 3 minutes.", duration: 4 },
      { step: 4, title: "Spinach & Parmesan", text: "Stir in grated parmesan until velvety smooth. Fold in fresh baby spinach until just wilted.", duration: 2 },
      { step: 5, title: "Glaze & Serve", text: "Return salmon fillets into the sauce. Spoon the velvety cream over each fillet, garnish with fresh basil, and serve immediately.", duration: 2 }
    ]
  },
  {
    id: 2,
    name: "Creamy Wild Forest Mushroom Risotto",
    category: "Vegetarian",
    tags: ["Vegetarian", "Gluten-Free", "Comfort Food"],
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    reviewsCount: 142,
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    difficulty: "Medium",
    calories: 410,
    isFeatured: false,
    isPopular: true,
    description: "Slow-simmered Arborio rice infused with earthy shiitake, cremini, white truffle oil, and 24-month aged Parmigiano-Reggiano.",
    chefNote: "Keep the vegetable broth at a gentle simmer in an adjacent saucepan so adding it doesn't drop the cooking temperature of the rice.",
    nutrition: { calories: 410, protein: 12, carbs: 58, fat: 14, fiber: 4 },
    ingredients: [
      { name: "Arborio rice", amount: 1.5, unit: "cups" },
      { name: "Mixed wild mushrooms (chanterelle, shiitake, cremini)", amount: 12, unit: "oz, sliced" },
      { name: "Warm vegetable or herb broth", amount: 5, unit: "cups" },
      { name: "Dry white wine (Sauvignon Blanc)", amount: 0.5, unit: "cup" },
      { name: "Shallots", amount: 2, unit: "medium, finely diced" },
      { name: "Garlic cloves", amount: 3, unit: "minced" },
      { name: "Parmigiano-Reggiano", amount: 0.75, unit: "cup, freshly grated" },
      { name: "Extra virgin olive oil", amount: 2, unit: "tbsp" },
      { name: "Unsalted butter", amount: 3, unit: "tbsp, divided" },
      { name: "White truffle oil (optional)", amount: 1, unit: "tsp, for drizzling" }
    ],
    instructions: [
      { step: 1, title: "Sauté the Mushrooms", text: "Heat 1 tbsp butter and 1 tbsp olive oil in a wide pan over high heat. Sauté sliced mushrooms with a pinch of salt until browned and caramelized. Set half aside for garnish.", duration: 7 },
      { step: 2, title: "Toast the Arborio", text: "In a heavy-bottomed Dutch oven, melt 1 tbsp butter with remaining olive oil. Add diced shallots and garlic; cook until translucent. Add Arborio rice and toast for 2 minutes until pearls become slightly translucent at the edges.", duration: 4 },
      { step: 3, title: "Deglaze with Wine", text: "Pour in dry white wine. Stir constantly until the wine is fully absorbed by the rice.", duration: 3 },
      { step: 4, title: "Slow Broth Incorporation", text: "Ladle warm broth one cup at a time into the rice, stirring gently and waiting until each addition is absorbed before pouring the next.", duration: 18 },
      { step: 5, title: "Finish Mantecatura", text: "Fold in sautéed mushrooms, remaining butter, and grated Parmigiano-Reggiano. Cover for 2 minutes off heat, then drizzle with truffle oil and serve.", duration: 3 }
    ]
  },
  {
    id: 3,
    name: "Mediterranean Quinoa Nourish Bowl",
    category: "Healthy",
    tags: ["Plant-Based", "Gluten-Free", "High Fiber"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviewsCount: 210,
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 2,
    difficulty: "Easy",
    calories: 380,
    isFeatured: false,
    isPopular: true,
    description: "Nutrient-packed fluffy tri-color quinoa paired with roasted chickpeas, Persian cucumbers, Kalamata olives, cherry tomatoes, and creamy lemon-tahini dressing.",
    chefNote: "Massage the baby spinach leaves lightly with a drop of lemon juice and salt to make them silky and flavorful.",
    nutrition: { calories: 380, protein: 16, carbs: 48, fat: 15, fiber: 9 },
    ingredients: [
      { name: "Cooked tri-color quinoa", amount: 2, unit: "cups" },
      { name: "Crispy spiced roasted chickpeas", amount: 1, unit: "cup" },
      { name: "Persian cucumbers", amount: 2, unit: "sliced" },
      { name: "Sweet cherry tomatoes", amount: 1, unit: "cup, halved" },
      { name: "Kalamata olives", amount: 0.33, unit: "cup, pitted" },
      { name: "Pickled red onions", amount: 0.25, unit: "cup" },
      { name: "Creamy tahini", amount: 3, unit: "tbsp" },
      { name: "Fresh lemon juice", amount: 2, unit: "tbsp" },
      { name: "Pure maple syrup", amount: 1, unit: "tsp" },
      { name: "Toasted pine nuts & hemp seeds", amount: 2, unit: "tbsp" }
    ],
    instructions: [
      { step: 1, title: "Whisk the Tahini Dressing", text: "In a small mason jar, combine tahini, fresh lemon juice, maple syrup, warm water, and sea salt. Shake vigorously until silky smooth and pourable.", duration: 3 },
      { step: 2, title: "Prepare Fresh Vegetables", text: "Slice crisp cucumbers, halve juicy cherry tomatoes, and drain Kalamata olives.", duration: 5 },
      { step: 3, title: "Assemble the Bowl", text: "Divide warm fluffy quinoa into serving bowls. Artfully arrange chickpeas, cucumbers, tomatoes, and olives in vibrant sections.", duration: 4 },
      { step: 4, title: "Garnish & Drizzle", text: "Generously drizzle the creamy lemon tahini dressing, scatter toasted pine nuts, and crown with fresh mint leaves.", duration: 2 }
    ]
  },
  {
    id: 4,
    name: "Classic Shakshuka with Crumbled Feta",
    category: "Breakfast",
    tags: ["High Protein", "Vegetarian", "Quick & Easy"],
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviewsCount: 312,
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    difficulty: "Easy",
    calories: 320,
    isFeatured: false,
    isPopular: true,
    description: "Farm-fresh eggs poached to runny perfection in a rich, spiced tomato and roasted bell pepper stew, topped with briny feta and fresh cilantro.",
    chefNote: "Make deep little wells in the simmering tomato sauce before gently cracking the eggs in, ensuring the whites cook evenly while the yolks stay runny.",
    nutrition: { calories: 320, protein: 18, carbs: 19, fat: 20, fiber: 4 },
    ingredients: [
      { name: "Large organic free-range eggs", amount: 4, unit: "eggs" },
      { name: "Crushed San Marzano tomatoes", amount: 1, unit: "can (28 oz)" },
      { name: "Red bell pepper", amount: 1, unit: "diced" },
      { name: "Yellow onion", amount: 1, unit: "chopped" },
      { name: "Garlic cloves", amount: 4, unit: "thinly sliced" },
      { name: "Ground cumin & smoked paprika", amount: 1.5, unit: "tsp each" },
      { name: "Aleppo chili flakes", amount: 0.5, unit: "tsp" },
      { name: "Greek feta cheese", amount: 0.5, unit: "cup, crumbled" },
      { name: "Fresh cilantro and parsley", amount: 3, unit: "tbsp, chopped" },
      { name: "Warm crusty pita or sourdough", amount: 4, unit: "slices, for dipping" }
    ],
    instructions: [
      { step: 1, title: "Sauté Aromatics", text: "Heat olive oil in a heavy cast-iron skillet over medium heat. Sauté onion and red bell pepper until soft and caramelized, about 6 minutes.", duration: 6 },
      { step: 2, title: "Bloom Spices", text: "Add sliced garlic, cumin, smoked paprika, and Aleppo chili flakes. Stir for 1 minute until fragrant.", duration: 2 },
      { step: 3, title: "Simmer Sauce", text: "Pour in San Marzano crushed tomatoes. Simmer gently uncovered for 10 minutes until sauce thickens rich and deep.", duration: 10 },
      { step: 4, title: "Poach Eggs", text: "Create 4 small wells in the sauce. Crack an egg into each well. Cover with a lid and cook on low heat for 5-7 minutes until whites are set and yolks remain soft.", duration: 6 },
      { step: 5, title: "Garnish & Serve", text: "Scatter creamy crumbled feta, chopped cilantro, and freshly cracked black pepper. Serve steaming hot with crusty warm bread.", duration: 2 }
    ]
  },
  {
    id: 5,
    name: "Berry Açai Superfood Bowl",
    category: "Breakfast",
    tags: ["Healthy", "Vegetarian", "Antioxidant-Rich"],
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    reviewsCount: 95,
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    servings: 2,
    difficulty: "Easy",
    calories: 290,
    isFeatured: false,
    isPopular: false,
    description: "Thick, velvety Brazilian açai purée blended with frozen berries and banana, crowned with toasted coconut flakes, almond butter, and golden chia seeds.",
    chefNote: "Keep the liquid minimal while blending so the açai maintains an ice-cream-thick texture capable of supporting all your favorite toppings.",
    nutrition: { calories: 290, protein: 7, carbs: 42, fat: 12, fiber: 8 },
    ingredients: [
      { name: "Organic frozen açai berry packets", amount: 2, unit: "packets (100g each)" },
      { name: "Frozen wild blueberries", amount: 1, unit: "cup" },
      { name: "Frozen ripe banana", amount: 1, unit: "large, sliced" },
      { name: "Unsweetened almond or coconut milk", amount: 0.33, unit: "cup" },
      { name: "Artisanal almond butter", amount: 2, unit: "tbsp" },
      { name: "Gluten-free toasted granola", amount: 0.5, unit: "cup" },
      { name: "Fresh strawberries & raspberries", amount: 0.5, unit: "cup" },
      { name: "Toasted coconut flakes & chia seeds", amount: 1, unit: "tbsp each" }
    ],
    instructions: [
      { step: 1, title: "Blend Base", text: "Add açai packets, frozen blueberries, frozen banana slices, and a splash of almond milk into a high-powered blender. Blend on high, tampering until silky smooth and frozen.", duration: 4 },
      { step: 2, title: "Spoon into Bowls", text: "Divide the frozen açai smoothly into chilled coconut or ceramic bowls.", duration: 2 },
      { step: 3, title: "Decorate & Garnish", text: "Neatly arrange fresh berries, crunchy granola, coconut chips, chia seeds, and a generous warm drizzle of almond butter.", duration: 4 }
    ]
  },
  {
    id: 6,
    name: "Slow-Braised Rosemary Lamb Shanks",
    category: "Dinner",
    tags: ["High Protein", "Gourmet", "Slow Cooked"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    rating: 5.0,
    reviewsCount: 167,
    prepTime: 20,
    cookTime: 150,
    totalTime: 170,
    servings: 4,
    difficulty: "Hard",
    calories: 680,
    isFeatured: false,
    isPopular: true,
    description: "Fall-off-the-bone tender lamb shanks slow-simmered in a full-bodied Cabernet Sauvignon, mirepoix, and fresh garden rosemary reduction.",
    chefNote: "Brown each lamb shank deeply on all sides in hot oil before braising—this caramelized fond is where the deep velvety flavor originates.",
    nutrition: { calories: 680, protein: 56, carbs: 14, fat: 42, fiber: 3 },
    ingredients: [
      { name: "Meaty bone-in lamb shanks", amount: 4, unit: "pieces (approx 1 lb each)" },
      { name: "Full-bodied Cabernet Sauvignon red wine", amount: 2, unit: "cups" },
      { name: "Rich beef bone stock", amount: 2.5, unit: "cups" },
      { name: "Tomato paste", amount: 3, unit: "tbsp" },
      { name: "Yellow carrots", amount: 3, unit: "cut in thick rounds" },
      { name: "Celery stalks", amount: 2, unit: "sliced" },
      { name: "Fresh rosemary and thyme bundles", amount: 4, unit: "sprigs each" },
      { name: "Whole head of garlic", amount: 1, unit: "halved crosswise" },
      { name: "Olive oil and butter", amount: 2, unit: "tbsp each" }
    ],
    instructions: [
      { step: 1, title: "Deep Sear", text: "Preheat oven to 325°F (165°C). Pat lamb shanks dry and season with salt and pepper. Sear in olive oil inside a large Dutch oven until caramelized dark golden on all sides (approx. 10 mins). Remove to a plate.", duration: 12 },
      { step: 2, title: "Sauté Mirepoix", text: "In the rendered fat, sauté carrots, celery, onion, and halved garlic for 5 minutes. Stir in tomato paste and caramelize for 2 minutes.", duration: 7 },
      { step: 3, title: "Deglaze & Simmer", text: "Pour in Cabernet Sauvignon, scraping up all brown bits from bottom of pan. Bring to a rolling boil and reduce by half.", duration: 6 },
      { step: 4, title: "Oven Braise", text: "Return lamb shanks, pour in rich beef broth, and tuck in fresh rosemary and thyme. Cover with tight lid and transfer to oven for 2.5 hours until meat is fork-tender.", duration: 140 },
      { step: 5, title: "Glaze Sauce", text: "Remove lamb, strain braising juices and reduce over stovetop for 5 minutes until glossy and syrupy. Ladle over lamb.", duration: 5 }
    ]
  },
  {
    id: 7,
    name: "Artisanal Sourdough Avocado Toast",
    category: "Breakfast",
    tags: ["Healthy", "Vegetarian", "Under 15 Mins"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    reviewsCount: 228,
    prepTime: 5,
    cookTime: 8,
    totalTime: 13,
    servings: 2,
    difficulty: "Easy",
    calories: 340,
    isFeatured: false,
    isPopular: false,
    description: "Thick-cut wood-fired sourdough toasted to golden crunch, topped with creamy crushed Hass avocado, soft jammy poached eggs, microgreens, and chili crunch.",
    chefNote: "Rub a raw peeled garlic clove across the warm toasted sourdough crust just before slathering the avocado for an irresistible aroma.",
    nutrition: { calories: 340, protein: 14, carbs: 29, fat: 20, fiber: 7 },
    ingredients: [
      { name: "Country sourdough bread", amount: 2, unit: "thick slices" },
      { name: "Ripe Hass avocados", amount: 2, unit: "avocados" },
      { name: "Pasture-raised eggs", amount: 2, unit: "eggs" },
      { name: "Fresh lime juice", amount: 1, unit: "tbsp" },
      { name: "Fresh garlic clove", amount: 1, unit: "peeled" },
      { name: "Chili crisp oil", amount: 1, unit: "tbsp" },
      { name: "Watermelon radishes & microgreens", amount: 0.25, unit: "cup" },
      { name: "Flaky Maldon sea salt & everything bagel seasoning", amount: 1, unit: "tsp" }
    ],
    instructions: [
      { step: 1, title: "Toast Bread & Garlic Rub", text: "Toast thick artisan sourdough slices in olive oil until golden and crispy. While hot, gently rub the cut side of a raw garlic clove over the surface.", duration: 4 },
      { step: 2, title: "Mash Avocado", text: "In a bowl, roughly crush Hass avocado with fresh lime juice, flaky sea salt, and freshly cracked black pepper.", duration: 3 },
      { step: 3, title: "Poach Eggs", text: "Poach two pasture-raised eggs in gently simmering water with a drop of vinegar for 3 minutes until whites are set and yolks are liquid gold.", duration: 4 },
      { step: 4, title: "Assemble & Garnish", text: "Spread creamy avocado generously over toasts, top with poached eggs, crunchy chili oil, sliced radishes, and vibrant microgreens.", duration: 2 }
    ]
  },
  {
    id: 8,
    name: "Decadent Salted Caramel Molten Lava Cake",
    category: "Desserts",
    tags: ["Decadent", "Baking", "Sweet Tooth"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    rating: 5.0,
    reviewsCount: 340,
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 4,
    difficulty: "Medium",
    calories: 520,
    isFeatured: false,
    isPopular: true,
    description: "Rich bittersweet Belgian chocolate cake with a molten, oozing dulce de leche and sea-salted caramel heart, served with vanilla bean gelato.",
    chefNote: "Do not overbake! The edges should look firm and cake-like while the center 1-inch retains a slight wobble.",
    nutrition: { calories: 520, protein: 7, carbs: 54, fat: 31, fiber: 4 },
    ingredients: [
      { name: "70% bittersweet dark chocolate", amount: 6, unit: "oz, chopped" },
      { name: "Unsalted European butter", amount: 0.5, unit: "cup (1 stick)" },
      { name: "Whole organic eggs + egg yolks", amount: 2, unit: "whole + 2 yolks" },
      { name: "Powdered confectioners' sugar", amount: 0.5, unit: "cup" },
      { name: "All-purpose unbleached flour", amount: 3, unit: "tbsp" },
      { name: "Fleur de sel caramel or dulce de leche", amount: 4, unit: "tbsp, chilled" },
      { name: "Pure vanilla extract", amount: 1, unit: "tsp" },
      { name: "Artisanal vanilla bean gelato", amount: 4, unit: "scoops, for serving" }
    ],
    instructions: [
      { step: 1, title: "Melt Chocolate & Butter", text: "Preheat oven to 425°F (220°C). Grease 4 ramekins with butter and dust with cocoa powder. Melt dark chocolate and butter together in a heatproof bowl set over simmering water.", duration: 6 },
      { step: 2, title: "Whisk Eggs & Sugar", text: "In a separate bowl, whisk whole eggs, egg yolks, powdered sugar, and vanilla until pale and frothy.", duration: 4 },
      { step: 3, title: "Combine Batter", text: "Gently fold melted chocolate into the egg mixture. Sift in flour and fold until just combined.", duration: 3 },
      { step: 4, title: "Inject Caramel Core", text: "Divide half the batter into ramekins. Place a tablespoon of chilled salted caramel in each center, then top with remaining batter.", duration: 2 },
      { step: 5, title: "Bake & Invert", text: "Bake for 11-12 minutes until edges are set. Rest for 1 minute, invert onto dessert plates, dust with powdered sugar, and serve with gelato.", duration: 12 }
    ]
  },
  {
    id: 9,
    name: "Authentic Royal Thai Green Curry",
    category: "Lunch",
    tags: ["Gluten-Free", "Aromatic", "Spicy Delight"],
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviewsCount: 198,
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: "Medium",
    calories: 440,
    isFeatured: false,
    isPopular: false,
    description: "Aromatic coconut milk simmered with handcrafted green curry paste, tender chicken breast, Thai apple eggplants, makrut lime leaves, and sweet Thai basil.",
    chefNote: "Crack the thick coconut cream over medium heat until oil separates before frying the curry paste for the most authentic fragrance.",
    nutrition: { calories: 440, protein: 32, carbs: 12, fat: 30, fiber: 3 },
    ingredients: [
      { name: "Free-range chicken breast or thighs", amount: 1.25, unit: "lbs, thinly sliced" },
      { name: "Full-fat coconut milk", amount: 2, unit: "cans (14 oz each)" },
      { name: "Authentic Thai green curry paste", amount: 3, unit: "tbsp" },
      { name: "Thai round eggplants or bamboo shoots", amount: 1, unit: "cup" },
      { name: "Fresh makrut lime leaves", amount: 5, unit: "leaves, torn" },
      { name: "Fish sauce (Nam Pla)", amount: 2, unit: "tbsp" },
      { name: "Palm sugar or coconut sugar", amount: 1, unit: "tbsp" },
      { name: "Fresh Thai holy basil leaves", amount: 1, unit: "cup" },
      { name: "Bird's eye red chilies", amount: 2, unit: "thinly sliced" }
    ],
    instructions: [
      { step: 1, title: "Crack Coconut Cream", text: "Spoon 0.5 cup of thick coconut cream from top of can into a hot wok. Fry over medium heat for 3 minutes until oil separates.", duration: 4 },
      { step: 2, title: "Fry Curry Paste", text: "Add green curry paste to the separated cream. Sauté vigorously for 2 minutes until intensely fragrant.", duration: 3 },
      { step: 3, title: "Simmer Chicken", text: "Toss in sliced chicken, coating thoroughly with paste. Cook for 3 minutes, then pour in remaining coconut milk and torn lime leaves.", duration: 6 },
      { step: 4, title: "Vegetables & Seasoning", text: "Add Thai eggplants and simmer for 8 minutes until tender. Season with fish sauce and palm sugar to balance salty and sweet.", duration: 8 },
      { step: 5, title: "Herb Finish", text: "Turn off heat, stir in fresh sweet Thai basil leaves and sliced red chilies. Serve with fragrant Jasmine rice.", duration: 2 }
    ]
  },
  {
    id: 10,
    name: "Crispy Lemon Herb Roasted Spatchcock Chicken",
    category: "Dinner",
    tags: ["High Protein", "Family Dinner", "Keto Friendly"],
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviewsCount: 245,
    prepTime: 20,
    cookTime: 45,
    totalTime: 65,
    servings: 4,
    difficulty: "Medium",
    calories: 580,
    isFeatured: false,
    isPopular: true,
    description: "Whole spatchcock chicken roasted over baby potatoes, garlic bulbs, and lemon wheels with an intoxicating thyme-rosemary compound butter under the skin.",
    chefNote: "Spatchcocking (removing the backbone and flattening the bird) ensures the chicken cooks in half the time with uniformly crisp skin and juicy meat.",
    nutrition: { calories: 580, protein: 52, carbs: 18, fat: 34, fiber: 2 },
    ingredients: [
      { name: "Whole roasting chicken", amount: 1, unit: "chicken (approx 4.5 lbs)" },
      { name: "Unsalted butter, softened", amount: 4, unit: "tbsp" },
      { name: "Fresh rosemary, thyme & sage", amount: 3, unit: "tbsp, finely minced" },
      { name: "Organic lemons", amount: 2, unit: "sliced into rounds" },
      { name: "Baby Yukon Gold potatoes", amount: 1.5, unit: "lbs, halved" },
      { name: "Garlic heads", amount: 2, unit: "halved horizontally" },
      { name: "Extra virgin olive oil", amount: 2, unit: "tbsp" },
      { name: "Smoked paprika & garlic powder", amount: 1, unit: "tsp each" }
    ],
    instructions: [
      { step: 1, title: "Spatchcock & Dry", text: "Preheat oven to 425°F (220°C). Use poultry shears to cut out chicken backbone, press breastbone firmly to flatten. Pat skin dry with towels.", duration: 8 },
      { step: 2, title: "Herb Compound Butter", text: "Mix softened butter with minced rosemary, thyme, sage, lemon zest, salt, and pepper. Gently separate skin from chicken breast and rub butter underneath.", duration: 6 },
      { step: 3, title: "Roasting Bed", text: "In a cast-iron pan or sheet tray, toss baby potatoes, garlic heads, and lemon wheels with olive oil, salt, and pepper.", duration: 4 },
      { step: 4, title: "Roast to Perfection", text: "Lay spatchcock chicken directly over the potatoes. Roast for 45 minutes until internal thermometer in thigh reads 165°F and skin is deeply golden and crackling.", duration: 45 },
      { step: 5, title: "Rest & Carve", text: "Let chicken rest for 10 minutes before carving into pieces. Spoon pan juices over roasted potatoes and serve.", duration: 10 }
    ]
  },
  {
    id: 11,
    name: "Matcha Coconut Chia Seed Pudding",
    category: "Healthy",
    tags: ["Plant-Based", "Gluten-Free", "Meal Prep"],
    image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
    reviewsCount: 88,
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    servings: 2,
    difficulty: "Easy",
    calories: 260,
    isFeatured: false,
    isPopular: false,
    description: "Ceremonial Japanese matcha whisked into creamy coconut cream and chia seeds, layered with mango coulis and passion fruit drizzle.",
    chefNote: "Stir the chia pudding again after 15 minutes of chilling to prevent the seeds from settling at the bottom of the jar.",
    nutrition: { calories: 260, protein: 6, carbs: 24, fat: 16, fiber: 11 },
    ingredients: [
      { name: "Organic black or white chia seeds", amount: 0.5, unit: "cup" },
      { name: "Full-fat coconut milk or oat milk", amount: 1.5, unit: "cups" },
      { name: "Ceremonial grade Uji matcha powder", amount: 1.5, unit: "tsp" },
      { name: "Pure grade-A maple syrup", amount: 2, unit: "tbsp" },
      { name: "Vanilla bean paste", amount: 0.5, unit: "tsp" },
      { name: "Fresh ripe mango cubes", amount: 0.75, unit: "cup" },
      { name: "Passion fruit pulp & toasted coconut chips", amount: 2, unit: "tbsp" }
    ],
    instructions: [
      { step: 1, title: "Sift & Whisk Matcha", text: "Sift ceremonial matcha powder into a small bowl. Whisk with 3 tbsp warm coconut milk until smooth with zero clumps.", duration: 3 },
      { step: 2, title: "Combine Ingredients", text: "Add remaining milk, chia seeds, maple syrup, and vanilla bean paste. Whisk thoroughly for 2 minutes.", duration: 3 },
      { step: 3, title: "Chill & Set", text: "Refrigerate for at least 3 hours (or overnight) until thick and gelatinous.", duration: 5 },
      { step: 4, title: "Layer & Serve", text: "Spoon into glasses, top with fresh mango cubes, fragrant passion fruit pulp, and crunchy toasted coconut chips.", duration: 2 }
    ]
  },
  {
    id: 12,
    name: "Spicy Sesame Chili Oil Garlic Noodles",
    category: "Lunch",
    tags: ["Vegetarian", "Quick & Easy", "Spicy Delight"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    reviewsCount: 276,
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    servings: 2,
    difficulty: "Easy",
    calories: 420,
    isFeatured: false,
    isPopular: true,
    description: "Springy chewy wheat noodles tossed in a sizzling scallion, garlic, toasted sesame, dark soy sauce, and aromatic chili crisp infusion.",
    chefNote: "Pouring screaming-hot oil directly over the minced garlic and chili flakes extracts an irresistible aroma without scorching the garlic.",
    nutrition: { calories: 420, protein: 11, carbs: 64, fat: 15, fiber: 3 },
    ingredients: [
      { name: "Fresh knife-cut noodles or ramen", amount: 8, unit: "oz" },
      { name: "Garlic cloves", amount: 5, unit: "finely minced" },
      { name: "Scallions (green onions)", amount: 3, unit: "finely chopped" },
      { name: "Toasted white sesame seeds", amount: 1.5, unit: "tbsp" },
      { name: "Sichuan chili flakes or gochugaru", amount: 1, unit: "tbsp" },
      { name: "Dark & light soy sauce", amount: 1.5, unit: "tbsp each" },
      { name: "Chinese black vinegar (Chinkiang)", amount: 1, unit: "tbsp" },
      { name: "Pure toasted sesame oil", amount: 1, unit: "tsp" },
      { name: "Hot neutral avocado or peanut oil", amount: 3, unit: "tbsp" },
      { name: "Crispy fried egg or tofu puffs (optional)", amount: 2, unit: "pieces" }
    ],
    instructions: [
      { step: 1, title: "Boil Noodles", text: "Cook noodles in boiling salted water according to package instructions until al dente. Drain and rinse briefly with warm water.", duration: 5 },
      { step: 2, title: "Aromatics Bowl", text: "In a heatproof serving bowl, place minced garlic, scallions, chili flakes, sesame seeds, and a pinch of sugar.", duration: 2 },
      { step: 3, title: "Sizzling Hot Oil Pour", text: "Heat neutral oil in a small saucepan until shimmering hot. Carefully pour the hot oil directly over the garlic-chili mixture, listening to the sizzle.", duration: 2 },
      { step: 4, title: "Sauce & Toss", text: "Stir in light soy sauce, dark soy sauce, and Chinese black vinegar. Add the drained bouncy noodles and toss vigorously until every strand is coated.", duration: 3 }
    ]
  },
  {
    id: 13,
    name: "Crispy Balsamic Honey Brussels Sprouts",
    category: "Vegetarian",
    tags: ["Vegetarian", "Gluten-Free", "Side Dish"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    reviewsCount: 119,
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 4,
    difficulty: "Easy",
    calories: 210,
    isFeatured: false,
    isPopular: false,
    description: "Deeply roasted caramelized Brussels sprouts tossed with aged balsamic reduction, wildflower honey, toasted walnuts, and dried cranberries.",
    chefNote: "Roast the sprouts cut-side down on a preheated baking sheet for maximum crispy char.",
    nutrition: { calories: 210, protein: 6, carbs: 28, fat: 10, fiber: 6 },
    ingredients: [
      { name: "Fresh Brussels sprouts", amount: 1.5, unit: "lbs, trimmed & halved" },
      { name: "Extra virgin olive oil", amount: 2.5, unit: "tbsp" },
      { name: "Aged Modena balsamic glaze", amount: 3, unit: "tbsp" },
      { name: "Raw wildflower honey", amount: 1.5, unit: "tbsp" },
      { name: "Toasted walnuts or pecans", amount: 0.33, unit: "cup, roughly chopped" },
      { name: "Dried ruby cranberries", amount: 0.25, unit: "cup" },
      { name: "Flaky sea salt & smoked pepper", amount: 1, unit: "tsp" }
    ],
    instructions: [
      { step: 1, title: "Preheat & Prep", text: "Preheat oven to 425°F (220°C). Place baking sheet in oven to get blistering hot.", duration: 5 },
      { step: 2, title: "Toss Sprouts", text: "Toss halved Brussels sprouts in olive oil, sea salt, and freshly ground black pepper.", duration: 3 },
      { step: 3, title: "Roast Flat-Side Down", text: "Arrange sprouts cut-side down onto hot baking sheet. Roast for 22-25 minutes until deep golden and charred.", duration: 25 },
      { step: 4, title: "Glaze & Toss", text: "Immediately transfer to a bowl, drizzle warm honey and balsamic glaze, and toss with toasted walnuts and cranberries.", duration: 3 }
    ]
  },
  {
    id: 14,
    name: "Fluffy Lemon Ricotta Blueberry Pancakes",
    category: "Breakfast",
    tags: ["Brunch Favorite", "Vegetarian", "Sweet Tooth"],
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviewsCount: 310,
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 4,
    difficulty: "Easy",
    calories: 390,
    isFeatured: false,
    isPopular: true,
    description: "Cloud-like artisanal pancakes infused with whole-milk Italian ricotta, Meyer lemon zest, and bursting sweet organic blueberries.",
    chefNote: "Separating the eggs and whipping the whites to soft peaks before folding them into the batter produces unrivaled soufflé-like fluffiness.",
    nutrition: { calories: 390, protein: 12, carbs: 54, fat: 14, fiber: 3 },
    ingredients: [
      { name: "All-purpose unbleached flour", amount: 1.5, unit: "cups" },
      { name: "Whole milk Italian ricotta cheese", amount: 1, unit: "cup" },
      { name: "Fresh organic blueberries", amount: 1.25, unit: "cups" },
      { name: "Meyer lemon zest & juice", amount: 2, unit: "tbsp zest + 1 tbsp juice" },
      { name: "Organic eggs", amount: 2, unit: "separated" },
      { name: "Whole buttermilk", amount: 0.75, unit: "cup" },
      { name: "Pure cane sugar", amount: 3, unit: "tbsp" },
      { name: "Baking powder & baking soda", amount: 1.5, unit: "tsp powder + 0.5 tsp soda" },
      { name: "Pure Grade-A Vermont maple syrup", amount: 0.5, unit: "cup, for serving" }
    ],
    instructions: [
      { step: 1, title: "Separate & Whip Whites", text: "Separate egg yolks and whites. In a clean bowl, whip egg whites with 1 tbsp sugar to soft glossy peaks.", duration: 5 },
      { step: 2, title: "Whisk Wet & Dry", text: "In another bowl, whisk flour, baking powder, baking soda, and salt. In a third bowl, whisk ricotta, buttermilk, egg yolks, lemon zest, lemon juice, and remaining sugar.", duration: 4 },
      { step: 3, title: "Fold Gently", text: "Combine wet and dry ingredients until just combined. Gently fold in whipped egg whites in two batches, then fold in fresh blueberries.", duration: 3 },
      { step: 4, title: "Griddle Cook", text: "Melt butter on a medium-low griddle. Drop 1/3-cup batter rounds. Cook until bubbles form on surface (approx 3-4 mins), flip gently and cook 2 minutes more.", duration: 12 },
      { step: 5, title: "Serve", text: "Stack tall, dust with powdered sugar, top with extra blueberries and warm maple syrup.", duration: 2 }
    ]
  },
  {
    id: 15,
    name: "Rich Dark Chocolate Espresso Mousse",
    category: "Desserts",
    tags: ["Gluten-Free", "Vegetarian", "Gourmet"],
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=900&q=80",
    rating: 5.0,
    reviewsCount: 164,
    prepTime: 20,
    cookTime: 5,
    totalTime: 25,
    servings: 4,
    difficulty: "Medium",
    calories: 360,
    isFeatured: false,
    isPopular: false,
    description: "Airy yet intensely decadent French dark chocolate mousse kissed with freshly pulled Italian espresso and Madagascar vanilla bean.",
    chefNote: "Ensure the melted chocolate cools to lukewarm (around 105°F / 40°C) before folding with whipped cream so it doesn't deflate or seize.",
    nutrition: { calories: 360, protein: 5, carbs: 32, fat: 26, fiber: 4 },
    ingredients: [
      { name: "72% French dark chocolate", amount: 7, unit: "oz, finely chopped" },
      { name: "Freshly pulled espresso shot", amount: 2, unit: "tbsp" },
      { name: "Heavy whipping cream", amount: 1.5, unit: "cups, chilled" },
      { name: "Pasture-raised eggs", amount: 3, unit: "separated" },
      { name: "Caster sugar", amount: 3, unit: "tbsp" },
      { name: "Madagascar vanilla extract", amount: 1, unit: "tsp" },
      { name: "Dark chocolate shavings & sea salt flakes", amount: 2, unit: "tbsp, for garnish" }
    ],
    instructions: [
      { step: 1, title: "Melt Chocolate & Espresso", text: "Melt chopped chocolate with hot espresso in a heatproof bowl over a pot of barely simmering water. Stir until glossy; cool to lukewarm.", duration: 6 },
      { step: 2, title: "Whip Cream & Yolks", text: "Whip heavy cream and vanilla to soft peaks; refrigerate. Whisk egg yolks into the cooled melted chocolate.", duration: 4 },
      { step: 3, title: "Whip Egg Whites", text: "Whip egg whites with sugar until stiff, glossy peaks form.", duration: 4 },
      { step: 4, title: "Fold Carefully", text: "Gently fold whipped whites into chocolate mixture in three additions, then fold in chilled whipped cream without deflating.", duration: 4 },
      { step: 5, title: "Chill & Serve", text: "Pipe into glass coupes and chill for 2 hours. Top with chocolate shavings and flaky sea salt.", duration: 5 }
    ]
  },
  {
    id: 16,
    name: "Zesty Baja Grilled Fish Tacos",
    category: "Lunch",
    tags: ["High Protein", "Quick & Easy", "Summer Vibe"],
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    reviewsCount: 205,
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 4,
    difficulty: "Easy",
    calories: 360,
    isFeatured: false,
    isPopular: false,
    description: "Flaky chili-lime grilled white fish nestled in warm charred corn tortillas, topped with crunchy mango slaw, cotija cheese, and cilantro crema.",
    chefNote: "Char the corn tortillas directly over an open gas burner flame for 15 seconds per side to impart an authentic street-taco smokiness.",
    nutrition: { calories: 360, protein: 29, carbs: 36, fat: 12, fiber: 5 },
    ingredients: [
      { name: "Fresh wild cod or mahi-mahi fillets", amount: 1.25, unit: "lbs" },
      { name: "White corn tortillas", amount: 8, unit: "small tortillas" },
      { name: "Chili powder, cumin & Mexican oregano", amount: 1, unit: "tsp each" },
      { name: "Shredded purple cabbage & diced ripe mango", amount: 2, unit: "cups combined" },
      { name: "Crumbled cotija cheese", amount: 0.5, unit: "cup" },
      { name: "Mexican crema or Greek yogurt", amount: 0.5, unit: "cup" },
      { name: "Fresh lime juice", amount: 3, unit: "tbsp" },
      { name: "Fresh cilantro sprigs", amount: 0.5, unit: "cup" }
    ],
    instructions: [
      { step: 1, title: "Season Fish", text: "Rub cod fillets with olive oil, chili powder, cumin, oregano, garlic powder, salt, and lime zest.", duration: 4 },
      { step: 2, title: "Prepare Slaw & Crema", text: "Toss shredded purple cabbage and diced mango with lime juice. In a small bowl, whisk Mexican crema with lime juice and chopped cilantro.", duration: 5 },
      { step: 3, title: "Grill Fish", text: "Grill or pan-sear fish over high heat for 3-4 minutes per side until flaky. Flake into generous bite-size pieces.", duration: 8 },
      { step: 4, title: "Assemble Tacos", text: "Char corn tortillas. Layer each with cabbage-mango slaw, grilled fish, cotija cheese, and a drizzle of cilantro crema.", duration: 4 }
    ]
  },
  {
    id: 17,
    name: "Roasted Butternut Squash & Crispy Sage Soup",
    category: "Healthy",
    tags: ["Plant-Based", "Vegetarian", "Autumn Comfort"],
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    reviewsCount: 153,
    prepTime: 15,
    cookTime: 35,
    totalTime: 50,
    servings: 4,
    difficulty: "Easy",
    calories: 240,
    isFeatured: false,
    isPopular: false,
    description: "Velvety roasted butternut squash simmered with caramelized honeycrisp apples, coconut cream, fresh sage brown butter, and toasted pepitas.",
    chefNote: "Roasting the squash seeds alongside the cubes creates crunchy spiced pepitas to use as a zero-waste gourmet soup topper.",
    nutrition: { calories: 240, protein: 4, carbs: 34, fat: 11, fiber: 6 },
    ingredients: [
      { name: "Butternut squash", amount: 1, unit: "large (approx 3 lbs), peeled & cubed" },
      { name: "Honeycrisp apple", amount: 1, unit: "peeled & diced" },
      { name: "Yellow onion", amount: 1, unit: "chopped" },
      { name: "Fresh sage leaves", amount: 10, unit: "leaves" },
      { name: "Vegetable broth", amount: 3.5, unit: "cups" },
      { name: "Full-fat coconut cream", amount: 0.5, unit: "cup" },
      { name: "Ground nutmeg & cinnamon", amount: 0.25, unit: "tsp each" },
      { name: "Toasted pumpkin seeds (pepitas)", amount: 0.25, unit: "cup" }
    ],
    instructions: [
      { step: 1, title: "Roast Squash & Apples", text: "Preheat oven to 400°F (200°C). Toss cubed squash, diced apple, and onion in olive oil, nutmeg, salt, and pepper. Roast for 30 minutes until tender and caramelized.", duration: 30 },
      { step: 2, title: "Simmer Broth", text: "Transfer roasted vegetables to a stockpot, pour in vegetable broth, and simmer gently for 10 minutes.", duration: 10 },
      { step: 3, title: "Blend to Silk", text: "Use an immersion blender to puree the soup until completely velvety smooth. Stir in coconut cream.", duration: 4 },
      { step: 4, title: "Crispy Sage & Serve", text: "Fry sage leaves in 1 tbsp olive oil for 30 seconds until crisp. Ladle soup into bowls, crown with crispy sage and toasted pepitas.", duration: 3 }
    ]
  },
  {
    id: 18,
    name: "Artisanal Margherita Pizza with Fresh Basil",
    category: "Lunch",
    tags: ["Vegetarian", "Italian Classic", "Family Dinner"],
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviewsCount: 290,
    prepTime: 20,
    cookTime: 10,
    totalTime: 30,
    servings: 3,
    difficulty: "Medium",
    calories: 490,
    isFeatured: false,
    isPopular: true,
    description: "48-hour fermented Neapolitan dough stretched thin, topped with crushed San Marzano tomatoes, fresh buffalo mozzarella, aromatic basil, and extra virgin olive oil.",
    chefNote: "Bake on a preheated pizza stone or steel at the maximum temperature your oven can reach (500°F - 550°F) for leopard-spotted charred crust.",
    nutrition: { calories: 490, protein: 22, carbs: 62, fat: 18, fiber: 4 },
    ingredients: [
      { name: "Neapolitan pizza dough ball", amount: 1, unit: "dough ball (250g)" },
      { name: "Crushed San Marzano tomatoes", amount: 0.5, unit: "cup" },
      { name: "Fresh buffalo mozzarella or fior di latte", amount: 5, unit: "oz, torn & drained" },
      { name: "Fresh basil leaves", amount: 8, unit: "leaves" },
      { name: "Pecorino Romano or Parmesan", amount: 2, unit: "tbsp, grated" },
      { name: "First cold-pressed extra virgin olive oil", amount: 1.5, unit: "tbsp" },
      { name: "Fine sea salt", amount: 0.5, unit: "tsp" }
    ],
    instructions: [
      { step: 1, title: "Shape the Dough", text: "Dust work surface with semolina flour. Gently press and stretch pizza dough from center outwards, leaving an airy 1-inch raised cornicione crust rim.", duration: 6 },
      { step: 2, title: "Sauce & Cheese", text: "Spread crushed San Marzano tomatoes lightly over the base with the back of a spoon. Scatter torn drained mozzarella and grated Pecorino.", duration: 3 },
      { step: 3, title: "High-Heat Bake", text: "Transfer onto scorching-hot pizza stone preheated to 500°F (260°C). Bake for 8-10 minutes until crust is blistered and cheese is bubbling.", duration: 10 },
      { step: 4, title: "Finish with Basil", text: "Remove immediately, scatter fresh basil leaves, drizzle with extra virgin olive oil, slice, and enjoy hot.", duration: 2 }
    ]
  }
];

// ==========================================
// 2. PERSISTENT STATE MANAGEMENT (LOCAL STORAGE)
// ==========================================
const STORAGE_KEYS = {
  FAVORITES: "flavornest_favorites_v1",
  MEAL_PLAN: "flavornest_mealplan_v1",
  NEWSLETTER: "flavornest_newsletter_subscribers"
};

// --- FAVORITES STORE ---
function getFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return raw ? JSON.parse(raw) : [1, 4]; // default seeded favorites for instant life
  } catch (e) {
    return [1, 4];
  }
}

function saveFavorites(favoritesArray) {
  try {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favoritesArray));
    updateHeaderBadges();
  } catch (e) {
    console.error("Failed saving favorites", e);
  }
}

function isFavorite(recipeId) {
  const favs = getFavorites();
  return favs.includes(Number(recipeId));
}

function toggleFavorite(recipeId) {
  recipeId = Number(recipeId);
  let favs = getFavorites();
  const exists = favs.includes(recipeId);
  const recipe = RECIPES_DATA.find(r => r.id === recipeId);
  const name = recipe ? recipe.name : "Recipe";

  if (exists) {
    favs = favs.filter(id => id !== recipeId);
    saveFavorites(favs);
    showToast(`Removed "${name}" from favourites`, "info");
  } else {
    favs.push(recipeId);
    saveFavorites(favs);
    showToast(`Added "${name}" to your favourites!`, "success");
  }

  // Synchronize any favorite buttons visible on the current page
  document.querySelectorAll(`[data-fav-id="${recipeId}"]`).forEach(btn => {
    btn.classList.toggle("active", !exists);
    btn.setAttribute("aria-label", !exists ? "Remove from favourites" : "Add to favourites");
    if (btn.classList.contains("active")) {
      btn.classList.add("just-liked");
      setTimeout(() => btn.classList.remove("just-liked"), 500);
    }
  });

  // If on meal-plan page and favorites tab is open, re-render favorites
  if (typeof renderMealPlanFavoritesList === "function") {
    renderMealPlanFavoritesList();
  }

  return !exists;
}

// --- MEAL PLAN STORE ---
// Structure: { monday: { breakfast: recipeId, lunch: recipeId, dinner: recipeId, snack: recipeId }, ... }
function getDefaultMealPlan() {
  return {
    monday: { breakfast: 4, lunch: 3, dinner: 1, snack: null },
    tuesday: { breakfast: 7, lunch: 12, dinner: 2, snack: 11 },
    wednesday: { breakfast: 5, lunch: 16, dinner: 10, snack: null },
    thursday: { breakfast: null, lunch: 9, dinner: 6, snack: null },
    friday: { breakfast: 14, lunch: null, dinner: 18, snack: 8 },
    saturday: { breakfast: null, lunch: null, dinner: null, snack: null },
    sunday: { breakfast: 4, lunch: null, dinner: 17, snack: 15 }
  };
}

function getMealPlan() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MEAL_PLAN);
    return raw ? JSON.parse(raw) : getDefaultMealPlan();
  } catch (e) {
    return getDefaultMealPlan();
  }
}

function saveMealPlan(plan) {
  try {
    localStorage.setItem(STORAGE_KEYS.MEAL_PLAN, JSON.stringify(plan));
    updateHeaderBadges();
  } catch (e) {
    console.error("Failed saving meal plan", e);
  }
}

function assignMealToSlot(day, mealType, recipeId) {
  const plan = getMealPlan();
  if (!plan[day]) plan[day] = {};
  plan[day][mealType] = Number(recipeId);
  saveMealPlan(plan);

  const recipe = RECIPES_DATA.find(r => r.id === Number(recipeId));
  const rName = recipe ? recipe.name : "Recipe";
  const dayCap = day.charAt(0).toUpperCase() + day.slice(1);
  const typeCap = mealType.charAt(0).toUpperCase() + mealType.slice(1);
  showToast(`Added ${rName} to ${dayCap} ${typeCap}!`, "success");
}

function removeMealFromSlot(day, mealType) {
  const plan = getMealPlan();
  if (plan[day] && plan[day][mealType]) {
    delete plan[day][mealType];
    saveMealPlan(plan);
    showToast(`Removed item from ${day.toUpperCase()} ${mealType}`, "info");
  }
}

function countTotalPlannedMeals() {
  const plan = getMealPlan();
  let count = 0;
  Object.values(plan).forEach(daySlots => {
    Object.values(daySlots).forEach(recId => {
      if (recId) count++;
    });
  });
  return count;
}

// ==========================================
// 3. UI HELPERS & NOTIFICATIONS
// ==========================================
function updateHeaderBadges() {
  const favCount = getFavorites().length;
  const mealCount = countTotalPlannedMeals();

  document.querySelectorAll(".fav-badge-count").forEach(el => {
    el.textContent = favCount;
    el.style.display = favCount > 0 ? "inline-flex" : "none";
  });

  document.querySelectorAll(".meal-badge-count").forEach(el => {
    el.textContent = mealCount;
    el.style.display = mealCount > 0 ? "inline-flex" : "none";
  });
}

function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast-card toast-${type}`;
  
  let iconSvg = "";
  if (type === "success") {
    iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
  } else if (type === "error") {
    iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
  } else {
    iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `
    ${iconSvg}
    <span class="toast-message">${message}</span>
    <button class="toast-close-btn" aria-label="Close notification">&times;</button>
  `;

  toast.querySelector(".toast-close-btn").addEventListener("click", () => {
    toast.classList.add("toast-hiding");
    setTimeout(() => toast.remove(), 300);
  });

  container.appendChild(toast);

  // Auto remove after 3.8s
  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.add("toast-hiding");
      setTimeout(() => toast.remove(), 350);
    }
  }, 3800);
}

// Fallback image handler
function handleImageError(img) {
  img.onerror = null;
  img.src = "assets/images/placeholder.svg";
}

// Global modal opener for "Add to Meal Plan"
function openMealPlanModal(recipeId) {
  const recipe = RECIPES_DATA.find(r => r.id === Number(recipeId));
  if (!recipe) return;

  let modal = document.getElementById("meal-plan-picker-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "meal-plan-picker-modal";
    modal.className = "modal-backdrop";
    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-group">
            <span class="modal-kicker">Weekly Meal Planner</span>
            <h3 class="modal-title">Schedule Recipe</h3>
          </div>
          <button class="modal-close-btn" id="close-meal-modal" aria-label="Close modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="modal-recipe-preview">
            <img src="${recipe.image}" alt="${recipe.name}" class="modal-recipe-thumb" onerror="handleImageError(this)">
            <div>
              <h4 class="preview-name">${recipe.name}</h4>
              <p class="preview-meta">${recipe.category} • ${recipe.cookTime} mins cook • ${recipe.difficulty}</p>
            </div>
          </div>
          <form id="meal-plan-assign-form" class="modal-form">
            <div class="form-group">
              <label for="select-plan-day">Select Day of Week</label>
              <select id="select-plan-day" class="form-select" required>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            </div>
            <div class="form-group">
              <label for="select-plan-meal">Select Meal Time</label>
              <select id="select-plan-meal" class="form-select" required>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner" selected>Dinner</option>
                <option value="snack">Snack / Dessert</option>
              </select>
            </div>
            <div class="modal-actions">
              <button type="button" class="btn btn-outline" id="cancel-meal-modal">Cancel</button>
              <button type="submit" class="btn btn-primary">Save to Schedule</button>
            </div>
          </form>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeHandler = () => modal.classList.remove("open");
    modal.querySelector("#close-meal-modal").addEventListener("click", closeHandler);
    modal.querySelector("#cancel-meal-modal").addEventListener("click", closeHandler);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeHandler();
    });
  } else {
    // update preview image and text
    const thumb = modal.querySelector(".modal-recipe-thumb");
    const name = modal.querySelector(".preview-name");
    const meta = modal.querySelector(".preview-meta");
    if (thumb) thumb.src = recipe.image;
    if (name) name.textContent = recipe.name;
    if (meta) meta.textContent = `${recipe.category} • ${recipe.cookTime} mins cook • ${recipe.difficulty}`;
  }

  // Setup form submission
  const form = modal.querySelector("#meal-plan-assign-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const day = document.getElementById("select-plan-day").value;
    const meal = document.getElementById("select-plan-meal").value;
    assignMealToSlot(day, meal, recipe.id);
    modal.classList.remove("open");
    if (typeof renderMealPlanGrid === "function") {
      renderMealPlanGrid();
    }
  };

  modal.classList.add("open");
}

// Global modal opener for Quick Search
function openQuickSearchModal() {
  let modal = document.getElementById("quick-search-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "quick-search-modal";
    modal.className = "modal-backdrop search-modal-backdrop";
    modal.innerHTML = `
      <div class="modal-dialog search-dialog">
        <div class="search-modal-header">
          <div class="search-modal-input-wrapper">
            <svg class="search-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="global-search-input" placeholder="Search 18+ chef-curated recipes, ingredients, tags..." autofocus autocomplete="off">
            <button class="search-clear-btn" id="global-search-clear" style="display:none;" aria-label="Clear search">&times;</button>
          </div>
          <button class="modal-close-btn" id="close-search-modal" aria-label="Close search">&times;</button>
        </div>
        <div class="search-modal-results" id="global-search-results">
          <div class="search-hints">
            <p>Popular Searches:</p>
            <div class="quick-tags">
              <span class="quick-tag" data-tag="Salmon">Salmon</span>
              <span class="quick-tag" data-tag="Gluten-Free">Gluten-Free</span>
              <span class="quick-tag" data-tag="Breakfast">Breakfast</span>
              <span class="quick-tag" data-tag="Pasta">Noodles</span>
              <span class="quick-tag" data-tag="Chocolate">Chocolate</span>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeHandler = () => modal.classList.remove("open");
    modal.querySelector("#close-search-modal").addEventListener("click", closeHandler);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeHandler();
    });

    const searchInput = modal.querySelector("#global-search-input");
    const clearBtn = modal.querySelector("#global-search-clear");
    const resultsContainer = modal.querySelector("#global-search-results");

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      renderQuickSearchResults("", resultsContainer);
      searchInput.focus();
    });

    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim();
      clearBtn.style.display = q ? "block" : "none";
      renderQuickSearchResults(q, resultsContainer);
    });

    modal.querySelectorAll(".quick-tag").forEach(tag => {
      tag.addEventListener("click", () => {
        const text = tag.getAttribute("data-tag");
        searchInput.value = text;
        clearBtn.style.display = "block";
        renderQuickSearchResults(text, resultsContainer);
      });
    });
  }

  modal.classList.add("open");
  const input = modal.querySelector("#global-search-input");
  setTimeout(() => input.focus(), 150);
}

function renderQuickSearchResults(query, container) {
  if (!query) {
    container.innerHTML = `
      <div class="search-hints">
        <p>Popular Searches:</p>
        <div class="quick-tags">
          <span class="quick-tag" data-tag="Salmon">Salmon</span>
          <span class="quick-tag" data-tag="Gluten-Free">Gluten-Free</span>
          <span class="quick-tag" data-tag="Breakfast">Breakfast</span>
          <span class="quick-tag" data-tag="Desserts">Desserts</span>
          <span class="quick-tag" data-tag="Healthy">Healthy</span>
        </div>
      </div>
    `;
    container.querySelectorAll(".quick-tag").forEach(tag => {
      tag.addEventListener("click", () => {
        const text = tag.getAttribute("data-tag");
        const input = document.getElementById("global-search-input");
        if (input) {
          input.value = text;
          renderQuickSearchResults(text, container);
        }
      });
    });
    return;
  }

  const q = query.toLowerCase();
  const matched = RECIPES_DATA.filter(r => {
    return (
      r.name.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.tags.some(t => t.toLowerCase().includes(q)) ||
      r.ingredients.some(ing => ing.name.toLowerCase().includes(q))
    );
  });

  if (matched.length === 0) {
    container.innerHTML = `
      <div class="search-empty-state">
        <p>No recipes found matching "<strong>${query}</strong>"</p>
        <a href="explore.html" class="btn btn-sm btn-outline">Explore All Recipes</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="search-results-list">
      <div class="search-count-header">${matched.length} recipes found:</div>
      ${matched.map(r => `
        <a href="recipe-details.html?id=${r.id}" class="search-result-item">
          <img src="${r.image}" alt="${r.name}" class="search-item-thumb" onerror="handleImageError(this)">
          <div class="search-item-info">
            <span class="search-item-title">${r.name}</span>
            <span class="search-item-meta">${r.category} • ${r.cookTime} mins • ★ ${r.rating}</span>
          </div>
          <span class="search-item-arrow">&rarr;</span>
        </a>
      `).join("")}
    </div>
  `;
}

// ==========================================
// 3.9 PRELOADER & BOUTIQUE-STYLE ANIMATION ENGINE
// ==========================================
function initPreloader() {
  const preloader = document.getElementById("site-preloader");
  if (!preloader) {
    runBoutiqueIntroAnimations();
    return;
  }

  const counter = document.getElementById("preloader-counter");
  const bar = document.getElementById("preloader-bar-fill");

  let progress = 0;
  const duration = 1200; // 1.2s cinematic counter
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    progress = Math.min(100, Math.round((elapsed / duration) * 100));
    if (counter) counter.textContent = progress + "%";
    if (bar) bar.style.width = progress + "%";

    if (progress < 100) {
      requestAnimationFrame(updateCounter);
    } else {
      setTimeout(() => {
        if (window.gsap) {
          gsap.to(preloader, {
            yPercent: -100,
            duration: 0.75,
            ease: "power4.inOut",
            onComplete: () => {
              preloader.style.display = "none";
              runBoutiqueIntroAnimations();
            }
          });
        } else {
          preloader.classList.add("preloader-hidden");
          setTimeout(() => {
            preloader.style.display = "none";
            runBoutiqueIntroAnimations();
          }, 500);
        }
      }, 150);
    }
  }

  requestAnimationFrame(updateCounter);
}

// Split-Text Character Physics (inspired by boutique editorial styling)
function initSplitHeadline() {
  const headlines = document.querySelectorAll(".hl");
  headlines.forEach(hl => {
    // Avoid double splitting
    if (hl.querySelector(".wd")) return;
    const walker = document.createTreeWalker(hl, NodeFilter.SHOW_TEXT, null, false);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      const fragment = document.createDocumentFragment();
      const parts = node.textContent.split(/(\s+)/);
      parts.forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          fragment.append(" ");
          return;
        }
        const wordSpan = document.createElement("span");
        wordSpan.className = "wd";
        [...part].forEach(char => {
          const charSpan = document.createElement("span");
          charSpan.className = "c";
          charSpan.textContent = char;
          wordSpan.append(charSpan);
        });
        fragment.append(wordSpan);
      });
      node.replaceWith(fragment);
    });
  });
}

// 3D Perspective Mousemove Physics on Cards
function init3DTilt() {
  const cards = document.querySelectorAll(
    ".recipe-card, .featured-card, .hero-image-card, .feature-card, .category-card"
  );
  cards.forEach(card => {
    if (card._tiltBound) return;
    card._tiltBound = true;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s";
    });
    card.addEventListener("mouseenter", () => {
      card.style.transition = "transform 0.1s ease-out";
    });
  });
}

// Magnetic Button Interaction
function initMagneticButtons() {
  const magnets = document.querySelectorAll(".mag, .nav-icon-btn");
  magnets.forEach(b => {
    if (b._magBound) return;
    b._magBound = true;

    b.addEventListener("mousemove", (e) => {
      const rect = b.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
      b.style.transform = `translate(${x}px, ${y}px)`;
    });
    b.addEventListener("mouseleave", () => {
      b.style.transform = "translate(0px, 0px)";
      b.style.transition = "transform 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    });
    b.addEventListener("mouseenter", () => {
      b.style.transition = "transform 0.1s ease-out";
    });
  });
}

// Animated Numerical Rollups
function initNumberCounters() {
  const timeEl = document.getElementById("badge-time-num");
  if (timeEl && !timeEl._counted) {
    timeEl._counted = true;
    let current = 0;
    const target = 25;
    const timer = setInterval(() => {
      current++;
      timeEl.textContent = `${current} Mins`;
      if (current >= target) clearInterval(timer);
    }, 45);
  }
}

// Master Boutique Animation Controller
function runBoutiqueIntroAnimations() {
  // 1. Initialize AOS Scroll Reveal
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: "ease-out-cubic"
    });
  }

  // 2. Headline Character Physics
  initSplitHeadline();

  // 3. GSAP Timeline Orchestration
  if (window.gsap) {
    const tl = gsap.timeline();
    tl.from(".brand-logo, .nav-menu .nav-link, .nav-actions .nav-icon-btn", {
      y: -18,
      opacity: 0,
      duration: 0.55,
      stagger: 0.04,
      ease: "power3.out",
      clearProps: "all"
    })
    .from(".hero-badge", { opacity: 0, y: 15, duration: 0.45 }, "-=0.25")
    .from(".hl .c", {
      yPercent: 120,
      rotate: 8,
      opacity: 0,
      duration: 0.7,
      stagger: 0.02,
      ease: "power4.out",
      clearProps: "all"
    }, "-=0.3")
    .from(".hero-description, .hero-cta-group", {
      y: 22,
      opacity: 0,
      duration: 0.65,
      stagger: 0.08,
      ease: "power3.out",
      clearProps: "all"
    }, "-=0.35")
    .from(".hero-image-card", {
      scale: 0.94,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      clearProps: "all"
    }, "-=0.7")
    .from(".hero-floating-badge", {
      scale: 0.75,
      opacity: 0,
      y: 18,
      duration: 0.55,
      stagger: 0.12,
      ease: "back.out(1.7)",
      clearProps: "all"
    }, "-=0.4");

    // 4. ScrollTrigger Parallax
    if (window.ScrollTrigger) {
      gsap.to(".hero-main-img", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
      gsap.to(".badge-time", {
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });
      gsap.to(".badge-rating", {
        y: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });
    }
  }

  // 5. Interactive 3D Card Tilts
  init3DTilt();

  // 6. Magnetic Buttons
  initMagneticButtons();

  // 7. Stat Rollups
  initNumberCounters();
}

// ==========================================
// 3.95 SCROLL REVEAL & STATS COUNTER ANIMATIONS
// ==========================================
function initScrollAnimations() {
  const targets = document.querySelectorAll(
    ".section-kicker, .section-heading, .section-subtext, " +
    ".featured-card, .recipe-card, .cat-card, .feature-card, " +
    ".newsletter-box, .stat-pill, .calendar-day-column, " +
    ".ingredients-card, .instructions-card, .kitchen-timer-widget, " +
    ".grocery-card, .favorites-shelf-card, .explore-toolbar, .hero-content, .hero-media"
  );

  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -20px 0px"
  });

  targets.forEach(el => {
    if (!el.classList.contains("scroll-reveal")) {
      el.classList.add("scroll-reveal");
    }
    observer.observe(el);
  });
}

function initCounterAnimations() {
  const statElements = document.querySelectorAll(".ps-val");
  if (!statElements.length) return;

  const animateValue = (el, start, end, duration, suffix = "") => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * (end - start) + start);
      el.textContent = current + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = end + suffix;
      }
    };
    window.requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent.trim();
        const numMatch = text.match(/^(\d+)(.*)$/);
        if (numMatch) {
          const targetNum = parseInt(numMatch[1], 10);
          const suffix = numMatch[2] || "";
          if (targetNum > 0) {
            animateValue(el, 0, targetNum, 800, suffix);
          }
        }
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  statElements.forEach(el => observer.observe(el));
}

// ==========================================
// 4. COMMON NAVIGATION & GLOBAL CONTROLS
// ==========================================
function initGlobalNavigation() {
  // Sticky header class toggle
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });
  }

  // Hamburger Mobile Menu & Backdrop
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navBackdrop = document.getElementById("mobile-nav-backdrop");
  const navCloseBtn = document.getElementById("mobile-nav-close");

  const closeMobileNav = () => {
    if (navMenu) navMenu.classList.remove("nav-open");
    if (mobileToggle) {
      mobileToggle.classList.remove("active");
      mobileToggle.setAttribute("aria-expanded", "false");
    }
    if (navBackdrop) navBackdrop.classList.remove("active");
    document.body.classList.remove("mobile-menu-locked");
  };

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("nav-open");
      mobileToggle.classList.toggle("active", isOpen);
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
      if (navBackdrop) navBackdrop.classList.toggle("active", isOpen);
      document.body.classList.toggle("mobile-menu-locked", isOpen);
    });

    if (navCloseBtn) {
      navCloseBtn.addEventListener("click", closeMobileNav);
    }

    if (navBackdrop) {
      navBackdrop.addEventListener("click", closeMobileNav);
    }

    // Close when clicking a nav link
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", closeMobileNav);
    });
  }

  // Global search triggers
  document.querySelectorAll(".search-trigger-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeMobileNav();
      openQuickSearchModal();
    });
  });

  // Global newsletter subscription handler
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const feedback = newsletterForm.querySelector(".newsletter-feedback");
      const email = emailInput ? emailInput.value.trim() : "";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        if (feedback) {
          feedback.textContent = "Please enter a valid email address.";
          feedback.className = "newsletter-feedback error";
        }
        showToast("Please enter a valid email address.", "error");
        return;
      }

      // Store in localStorage
      try {
        const subs = JSON.parse(localStorage.getItem(STORAGE_KEYS.NEWSLETTER) || "[]");
        if (!subs.includes(email)) subs.push(email);
        localStorage.setItem(STORAGE_KEYS.NEWSLETTER, JSON.stringify(subs));
      } catch (err) {}

      if (feedback) {
        feedback.textContent = "Welcome to the family! Fresh weekly recipes will arrive in your inbox.";
        feedback.className = "newsletter-feedback success";
      }
      showToast("Thank you for subscribing to FlavorNest!", "success");
      emailInput.value = "";
    });
  }

  // Update header counters
  updateHeaderBadges();
}

// ==========================================
// 5. RECIPE CARD HTML BUILDER (REUSABLE)
// ==========================================
function createRecipeCardHTML(recipe, options = { showMealPlanBtn: true }) {
  const isFav = isFavorite(recipe.id);
  const stars = "★".repeat(Math.round(recipe.rating));

  return `
    <article class="recipe-card" data-aos="fade-up" data-recipe-id="${recipe.id}" data-category="${recipe.category.toLowerCase()}" data-cooktime="${recipe.cookTime}">
      <div class="recipe-card-media">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-card-img" loading="lazy" onerror="handleImageError(this)">
        <span class="recipe-category-badge">${recipe.category}</span>
        <button class="fav-toggle-btn ${isFav ? 'active' : ''}" data-fav-id="${recipe.id}" aria-label="${isFav ? 'Remove from favourites' : 'Add to favourites'}">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        <span class="difficulty-pill ${recipe.difficulty.toLowerCase()}">${recipe.difficulty}</span>
      </div>
      <div class="recipe-card-body">
        <div class="recipe-meta-row">
          <span class="recipe-cooktime">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${recipe.cookTime} mins
          </span>
          <span class="recipe-rating">
            <span class="stars">${stars}</span>
            <span class="score">${recipe.rating}</span>
            <span class="reviews-count">(${recipe.reviewsCount})</span>
          </span>
        </div>
        <h3 class="recipe-card-title">
          <a href="recipe-details.html?id=${recipe.id}">${recipe.name}</a>
        </h3>
        <p class="recipe-card-desc">${recipe.description}</p>
        <div class="recipe-card-actions">
          <a href="recipe-details.html?id=${recipe.id}" class="btn btn-outline btn-view-recipe">
            View Recipe
            <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          ${options.showMealPlanBtn ? `
            <button class="btn btn-icon-secondary btn-plan-recipe" data-plan-id="${recipe.id}" title="Add to Meal Plan" aria-label="Add to Meal Plan">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <line x1="12" y1="14" x2="12" y2="18"></line>
                <line x1="10" y1="16" x2="14" y2="16"></line>
              </svg>
            </button>
          ` : ''}
        </div>
      </div>
    </article>
  `;
}

// Bind clicks for dynamically injected cards (delegation)
function bindRecipeCardInteractions(containerElement) {
  if (!containerElement) return;

  containerElement.addEventListener("click", (e) => {
    // Favorite Button click
    const favBtn = e.target.closest(".fav-toggle-btn");
    if (favBtn) {
      e.preventDefault();
      e.stopPropagation();
      const id = favBtn.getAttribute("data-fav-id");
      toggleFavorite(id);
      return;
    }

    // Add to Meal Plan Button click
    const planBtn = e.target.closest(".btn-plan-recipe");
    if (planBtn) {
      e.preventDefault();
      e.stopPropagation();
      const id = planBtn.getAttribute("data-plan-id");
      openMealPlanModal(id);
      return;
    }
  });

  if (typeof initScrollAnimations === "function") {
    setTimeout(initScrollAnimations, 50);
  }
}

// ==========================================
// 6. HOME PAGE LOGIC (index.html)
// ==========================================
function initHomePage() {
  // Render Featured Recipe
  const featured = RECIPES_DATA.find(r => r.isFeatured) || RECIPES_DATA[0];
  const featuredContainer = document.getElementById("featured-recipe-container");
  if (featuredContainer && featured) {
    const isFav = isFavorite(featured.id);
    featuredContainer.innerHTML = `
      <div class="featured-card">
        <div class="featured-media-wrapper">
          <img src="${featured.image}" alt="${featured.name}" class="featured-img" onerror="handleImageError(this)">
          <span class="badge-featured-label">Today's Highlight</span>
          <button class="fav-toggle-btn ${isFav ? 'active' : ''}" data-fav-id="${featured.id}" aria-label="Toggle favourite">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>
        <div class="featured-content">
          <div class="featured-badge-group">
            <span class="tag-pill tag-primary">${featured.category}</span>
            <span class="tag-pill tag-accent">★ ${featured.rating} (${featured.reviewsCount} reviews)</span>
          </div>
          <h2 class="featured-title">${featured.name}</h2>
          <p class="featured-description">${featured.description}</p>
          <div class="featured-highlights-grid">
            <div class="highlight-item">
              <span class="hl-label">Prep Time</span>
              <span class="hl-val">${featured.prepTime} mins</span>
            </div>
            <div class="highlight-item">
              <span class="hl-label">Cook Time</span>
              <span class="hl-val">${featured.cookTime} mins</span>
            </div>
            <div class="highlight-item">
              <span class="hl-label">Total Time</span>
              <span class="hl-val">${featured.totalTime} mins</span>
            </div>
            <div class="highlight-item">
              <span class="hl-label">Calories</span>
              <span class="hl-val">${featured.calories} kcal</span>
            </div>
          </div>
          <div class="featured-cta-group">
            <a href="recipe-details.html?id=${featured.id}" class="btn btn-primary btn-lg">
              View Full Recipe
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-arrow">
                <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <button class="btn btn-secondary btn-plan-recipe" data-plan-id="${featured.id}">
              Add to Meal Plan
            </button>
          </div>
        </div>
      </div>
    `;
    bindRecipeCardInteractions(featuredContainer);
  }

  // Render Popular Recipes (at least 6 cards)
  const popularContainer = document.getElementById("popular-recipes-grid");
  if (popularContainer) {
    const popularList = RECIPES_DATA.filter(r => r.isPopular).slice(0, 6);
    popularContainer.innerHTML = popularList.map(r => createRecipeCardHTML(r, { showMealPlanBtn: true })).join("");
    bindRecipeCardInteractions(popularContainer);
    if (window.AOS) AOS.refresh();
    init3DTilt();
    initMagneticButtons();
  }

  // Setup "Discover Today's Special" button scroll
  const specialBtn = document.getElementById("hero-special-btn");
  if (specialBtn) {
    specialBtn.addEventListener("click", () => {
      const target = document.getElementById("featured-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

// ==========================================
// 7. EXPLORE RECIPES PAGE LOGIC (explore.html)
// ==========================================
function initExplorePage() {
  const gridContainer = document.getElementById("explore-recipes-grid");
  const searchInput = document.getElementById("recipe-search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");
  const sortSelect = document.getElementById("sort-recipes-select");
  const categoryFilters = document.querySelectorAll(".category-filter-btn");
  const resultsCounter = document.getElementById("explore-results-count");
  const emptyState = document.getElementById("explore-empty-state");
  const resetFiltersBtn = document.getElementById("reset-all-filters-btn");

  if (!gridContainer) return;

  // Read URL query params
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get("category") || "all";
  let activeSearch = urlParams.get("search") || "";
  let activeSort = "default";

  // Set initial UI states from URL
  if (activeSearch && searchInput) {
    searchInput.value = activeSearch;
    if (searchClearBtn) searchClearBtn.style.display = "block";
  }

  categoryFilters.forEach(btn => {
    const cat = btn.getAttribute("data-category");
    if (cat.toLowerCase() === activeCategory.toLowerCase()) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Filter & Render Engine
  function applyFiltersAndRender() {
    let result = [...RECIPES_DATA];

    // 1. Category Filter
    if (activeCategory && activeCategory.toLowerCase() !== "all") {
      result = result.filter(r => r.category.toLowerCase() === activeCategory.toLowerCase());
    }

    // 2. Search Query Filter
    if (activeSearch.trim()) {
      const q = activeSearch.toLowerCase().trim();
      result = result.filter(r => {
        return (
          r.name.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q) ||
          r.tags.some(t => t.toLowerCase().includes(q)) ||
          r.ingredients.some(i => i.name.toLowerCase().includes(q))
        );
      });
    }

    // 3. Sorting
    if (activeSort === "time-asc") {
      result.sort((a, b) => a.cookTime - b.cookTime);
    } else if (activeSort === "time-desc") {
      result.sort((a, b) => b.cookTime - a.cookTime);
    } else if (activeSort === "rating-desc") {
      result.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
    } else if (activeSort === "quickest-prep") {
      result.sort((a, b) => a.prepTime - b.prepTime);
    }

    // Update Counter
    if (resultsCounter) {
      resultsCounter.textContent = `${result.length} recipes found`;
    }

    // Render Grid or Empty State
    if (result.length === 0) {
      gridContainer.style.display = "none";
      if (emptyState) emptyState.style.display = "block";
    } else {
      if (emptyState) emptyState.style.display = "none";
      gridContainer.style.display = "grid";
      gridContainer.innerHTML = result.map(r => createRecipeCardHTML(r, { showMealPlanBtn: true })).join("");
      if (window.gsap) {
        gsap.from(gridContainer.children, {
          y: 35,
          opacity: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power3.out",
          clearProps: "all"
        });
      }
      if (window.AOS) AOS.refresh();
      init3DTilt();
      initMagneticButtons();
    }
  }

  // Bind card interactions
  bindRecipeCardInteractions(gridContainer);

  // Search input events (with small debounce)
  let searchDebounceTimer = null;
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        activeSearch = e.target.value;
        if (searchClearBtn) {
          searchClearBtn.style.display = activeSearch ? "block" : "none";
        }
        applyFiltersAndRender();
      }, 180);
    });
  }

  if (searchClearBtn && searchInput) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      activeSearch = "";
      searchClearBtn.style.display = "none";
      applyFiltersAndRender();
      searchInput.focus();
    });
  }

  // Category buttons
  categoryFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryFilters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      applyFiltersAndRender();
    });
  });

  // Sort dropdown
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      activeSort = e.target.value;
      applyFiltersAndRender();
    });
  }

  // Reset all filters button in empty state
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      activeCategory = "all";
      activeSearch = "";
      activeSort = "default";
      if (searchInput) searchInput.value = "";
      if (searchClearBtn) searchClearBtn.style.display = "none";
      if (sortSelect) sortSelect.value = "default";
      categoryFilters.forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-category") === "all");
      });
      applyFiltersAndRender();
    });
  }

  // Initial render
  applyFiltersAndRender();
}

// ==========================================
// 8. RECIPE DETAILS PAGE LOGIC (recipe-details.html)
// ==========================================
function initRecipeDetailsPage() {
  const container = document.getElementById("recipe-details-main");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  let recipeId = Number(urlParams.get("id"));

  // Default to first recipe if invalid id
  let recipe = RECIPES_DATA.find(r => r.id === recipeId);
  if (!recipe) {
    recipe = RECIPES_DATA[0];
    recipeId = recipe.id;
  }

  // Page title update
  document.title = `${recipe.name} | FlavorNest`;

  // Dynamic Servings Scaler State
  let currentServings = recipe.servings;
  const originalServings = recipe.servings;

  function formatScaledQuantity(amount) {
    if (typeof amount !== "number" || isNaN(amount)) return "";
    const scaled = (amount / originalServings) * currentServings;
    // Pretty round fractions
    if (scaled === 0.25) return "¼";
    if (scaled === 0.33 || scaled === 0.333) return "⅓";
    if (scaled === 0.5) return "½";
    if (scaled === 0.66 || scaled === 0.667) return "⅔";
    if (scaled === 0.75) return "¾";
    if (Number.isInteger(scaled)) return scaled.toString();
    return scaled.toFixed(1).replace(/\.0$/, "");
  }

  function renderPage() {
    const isFav = isFavorite(recipe.id);
    const stars = "★".repeat(Math.round(recipe.rating));

    container.innerHTML = `
      <!-- Breadcrumbs -->
      <nav class="recipe-breadcrumb" aria-label="Breadcrumb">
        <div class="container">
          <ol class="breadcrumb-list">
            <li><a href="index.html">Home</a></li>
            <li><a href="explore.html">Explore Recipes</a></li>
            <li><a href="explore.html?category=${recipe.category.toLowerCase()}">${recipe.category}</a></li>
            <li aria-current="page">${recipe.name}</li>
          </ol>
        </div>
      </nav>

      <!-- Main Recipe Detail Hero -->
      <section class="recipe-hero-section">
        <div class="container">
          <div class="recipe-hero-grid">
            <div class="recipe-hero-media">
              <div class="recipe-hero-image-wrap">
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-hero-img" onerror="handleImageError(this)">
                <button class="hero-fav-btn ${isFav ? 'active' : ''}" id="details-fav-btn" aria-label="Toggle favourite">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="recipe-hero-info">
              <div class="details-badge-row">
                <span class="tag-pill tag-primary">${recipe.category}</span>
                <span class="difficulty-pill ${recipe.difficulty.toLowerCase()}">${recipe.difficulty} Level</span>
                ${recipe.tags.map(t => `<span class="tag-pill tag-neutral">${t}</span>`).join("")}
              </div>
              <h1 class="recipe-detail-title">${recipe.name}</h1>
              <p class="recipe-detail-desc">${recipe.description}</p>

              <div class="recipe-detail-rating-row">
                <span class="stars">${stars}</span>
                <span class="rating-num"><strong>${recipe.rating}</strong> / 5.0</span>
                <span class="reviews-num">(${recipe.reviewsCount} verified community reviews)</span>
              </div>

              <!-- Quick Stats Banner -->
              <div class="recipe-stats-strip">
                <div class="stat-pill">
                  <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline>
                  </svg>
                  <div class="stat-meta">
                    <span class="stat-title">Prep Time</span>
                    <span class="stat-val">${recipe.prepTime} mins</span>
                  </div>
                </div>
                <div class="stat-pill">
                  <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                  </svg>
                  <div class="stat-meta">
                    <span class="stat-title">Cook Time</span>
                    <span class="stat-val">${recipe.cookTime} mins</span>
                  </div>
                </div>
                <div class="stat-pill">
                  <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div class="stat-meta">
                    <span class="stat-title">Total Time</span>
                    <span class="stat-val">${recipe.totalTime} mins</span>
                  </div>
                </div>
                <div class="stat-pill">
                  <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  </svg>
                  <div class="stat-meta">
                    <span class="stat-title">Calories</span>
                    <span class="stat-val">${recipe.calories} kcal</span>
                  </div>
                </div>
              </div>

              <!-- Action Bar -->
              <div class="recipe-action-toolbar">
                <button class="btn btn-primary" id="details-add-plan-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon-svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Add to Meal Plan
                </button>
                <button class="btn btn-outline" id="print-recipe-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon-svg">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                  </svg>
                  Print Recipe
                </button>
                <button class="btn btn-outline" id="share-recipe-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon-svg">
                    <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  Share
                </button>
                <a href="explore.html" class="btn btn-ghost">&larr; Back to Explore</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Culinary Content Layout (Ingredients + Instructions) -->
      <section class="recipe-content-section">
        <div class="container">
          <div class="recipe-main-layout-grid">
            
            <!-- Left Column: Scalable Ingredients & Nutrition -->
            <aside class="recipe-ingredients-column">
              <div class="ingredients-card sticky-sidebar">
                <div class="ingredients-header">
                  <div>
                    <h3 class="section-title">Ingredients</h3>
                    <p class="section-subtitle">Check items off as you prep</p>
                  </div>
                  <!-- Servings Scaler Control -->
                  <div class="servings-stepper">
                    <span class="stepper-label">Servings:</span>
                    <button class="stepper-btn" id="servings-dec" aria-label="Decrease servings">&minus;</button>
                    <span class="servings-number" id="current-servings-val">${currentServings}</span>
                    <button class="stepper-btn" id="servings-inc" aria-label="Increase servings">&plus;</button>
                  </div>
                </div>

                <div class="ingredients-checklist" id="ingredients-list">
                  ${recipe.ingredients.map((ing, idx) => `
                    <label class="ingredient-item-row" for="ing-${idx}">
                      <input type="checkbox" id="ing-${idx}" class="ingredient-checkbox">
                      <span class="custom-checkbox"></span>
                      <span class="ingredient-text">
                        <strong class="scaled-qty">${formatScaledQuantity(ing.amount)}</strong> 
                        <span class="scaled-unit">${ing.unit || ""}</span> 
                        <span class="scaled-name">${ing.name}</span>
                      </span>
                    </label>
                  `).join("")}
                </div>

                <div class="ingredients-tools-row">
                  <button class="btn btn-xs btn-outline" id="check-all-ingredients">Select All</button>
                  <button class="btn btn-xs btn-ghost" id="clear-all-ingredients">Clear All</button>
                </div>

                <!-- Nutrition Box -->
                <div class="nutrition-card">
                  <h4 class="nutrition-title">Nutrition per Serving</h4>
                  <div class="nutrition-grid">
                    <div class="nutrition-cell">
                      <span class="nut-label">Calories</span>
                      <span class="nut-value">${recipe.nutrition.calories} kcal</span>
                    </div>
                    <div class="nutrition-cell">
                      <span class="nut-label">Protein</span>
                      <span class="nut-value">${recipe.nutrition.protein}g</span>
                    </div>
                    <div class="nutrition-cell">
                      <span class="nut-label">Carbs</span>
                      <span class="nut-value">${recipe.nutrition.carbs}g</span>
                    </div>
                    <div class="nutrition-cell">
                      <span class="nut-label">Fats</span>
                      <span class="nut-value">${recipe.nutrition.fat}g</span>
                    </div>
                    <div class="nutrition-cell">
                      <span class="nut-label">Fiber</span>
                      <span class="nut-value">${recipe.nutrition.fiber}g</span>
                    </div>
                  </div>
                </div>

                <!-- Chef's Secret Tip -->
                <div class="chef-secret-box">
                  <div class="chef-tip-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="tip-icon">
                      <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zM9 21h6"></path>
                    </svg>
                    <strong>Chef's Secret Technique</strong>
                  </div>
                  <p class="chef-tip-text">${recipe.chefNote}</p>
                </div>
              </div>
            </aside>

            <!-- Right Column: Step-by-Step Instructions & Interactive Progress -->
            <main class="recipe-instructions-column">
              <div class="instructions-card">
                <div class="instructions-header">
                  <div>
                    <h3 class="section-title">Preparation &amp; Cooking Method</h3>
                    <p class="section-subtitle">Follow along step-by-step to culinary perfection</p>
                  </div>
                  <!-- Progress Bar -->
                  <div class="cooking-progress-wrapper">
                    <span class="progress-label" id="progress-text">0 of ${recipe.instructions.length} steps completed</span>
                    <div class="progress-bar-track">
                      <div class="progress-bar-fill" id="progress-fill" style="width: 0%;"></div>
                    </div>
                  </div>
                </div>

                <div class="instructions-timeline">
                  ${recipe.instructions.map((inst, idx) => `
                    <div class="timeline-step-card" data-step-index="${idx}">
                      <div class="step-card-header">
                        <div class="step-number-badge">${inst.step}</div>
                        <h4 class="step-card-title">${inst.title}</h4>
                        <span class="step-duration">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="step-clock-icon">
                            <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline>
                          </svg>
                          ${inst.duration} mins
                        </span>
                      </div>
                      <p class="step-card-body">${inst.text}</p>
                      <div class="step-card-footer">
                        <button class="step-done-toggle" data-step="${idx}">
                          <span class="done-checkbox"></span>
                          <span class="done-text">Mark step as done</span>
                        </button>
                        <button class="step-timer-btn" data-time="${inst.duration}">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="timer-icon">
                            <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          Start ${inst.duration}m Timer
                        </button>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Interactive Floating Kitchen Timer Widget -->
              <div class="kitchen-timer-widget" id="kitchen-timer" style="display: none;">
                <div class="timer-widget-header">
                  <span class="timer-widget-title">Cooking Step Timer</span>
                  <button class="timer-close-btn" id="close-timer-btn">&times;</button>
                </div>
                <div class="timer-display" id="timer-display-clock">00:00</div>
                <div class="timer-widget-controls">
                  <button class="btn btn-xs btn-primary" id="timer-pause-btn">Pause</button>
                  <button class="btn btn-xs btn-outline" id="timer-reset-btn">Reset</button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <!-- Related Recipes Grid -->
      <section class="related-recipes-section">
        <div class="container">
          <div class="section-heading-row">
            <div>
              <span class="section-kicker">More Culinary Inspiration</span>
              <h2 class="section-heading">You Might Also Love</h2>
            </div>
            <a href="explore.html?category=${recipe.category.toLowerCase()}" class="btn btn-outline">Explore All ${recipe.category}</a>
          </div>
          <div class="related-recipes-grid" id="related-recipes-container"></div>
        </div>
      </section>
    `;

    // Render Related Recipes
    const relatedContainer = document.getElementById("related-recipes-container");
    if (relatedContainer) {
      const related = RECIPES_DATA.filter(r => r.id !== recipe.id && (r.category === recipe.category || r.tags.some(t => recipe.tags.includes(t)))).slice(0, 3);
      const toShow = related.length >= 2 ? related : RECIPES_DATA.filter(r => r.id !== recipe.id).slice(0, 3);
      relatedContainer.innerHTML = toShow.map(r => createRecipeCardHTML(r, { showMealPlanBtn: true })).join("");
      bindRecipeCardInteractions(relatedContainer);
    }

    // Attach Event Listeners for Servings Scaler
    const decBtn = document.getElementById("servings-dec");
    const incBtn = document.getElementById("servings-inc");
    const servingsVal = document.getElementById("current-servings-val");

    function updateScaledQuantities() {
      if (servingsVal) servingsVal.textContent = currentServings;
      const ingItems = document.querySelectorAll("#ingredients-list .ingredient-item-row");
      ingItems.forEach((row, idx) => {
        const qtyEl = row.querySelector(".scaled-qty");
        if (qtyEl && recipe.ingredients[idx]) {
          qtyEl.textContent = formatScaledQuantity(recipe.ingredients[idx].amount);
        }
      });
    }

    if (decBtn) {
      decBtn.addEventListener("click", () => {
        if (currentServings > 1) {
          currentServings--;
          updateScaledQuantities();
        }
      });
    }

    if (incBtn) {
      incBtn.addEventListener("click", () => {
        if (currentServings < 24) {
          currentServings++;
          updateScaledQuantities();
        }
      });
    }

    // Select/Clear all ingredients
    const checkAllBtn = document.getElementById("check-all-ingredients");
    const clearAllBtn = document.getElementById("clear-all-ingredients");
    if (checkAllBtn) {
      checkAllBtn.addEventListener("click", () => {
        document.querySelectorAll("#ingredients-list .ingredient-checkbox").forEach(cb => {
          cb.checked = true;
          cb.closest(".ingredient-item-row").classList.add("checked");
        });
      });
    }
    if (clearAllBtn) {
      clearAllBtn.addEventListener("click", () => {
        document.querySelectorAll("#ingredients-list .ingredient-checkbox").forEach(cb => {
          cb.checked = false;
          cb.closest(".ingredient-item-row").classList.remove("checked");
        });
      });
    }

    // Ingredient item click styling
    document.querySelectorAll("#ingredients-list .ingredient-checkbox").forEach(cb => {
      cb.addEventListener("change", (e) => {
        e.target.closest(".ingredient-item-row").classList.toggle("checked", e.target.checked);
      });
    });

    // Step Completion & Progress Bar
    const totalSteps = recipe.instructions.length;
    let completedSteps = new Set();
    const progressFill = document.getElementById("progress-fill");
    const progressText = document.getElementById("progress-text");

    function updateStepProgress() {
      const count = completedSteps.size;
      const pct = Math.round((count / totalSteps) * 100);
      if (progressFill) progressFill.style.width = `${pct}%`;
      if (progressText) progressText.textContent = `${count} of ${totalSteps} steps completed (${pct}%)`;

      if (count === totalSteps) {
        showToast("Chef's kiss! You've completed all cooking steps! Enjoy your meal!", "success");
      }
    }

    document.querySelectorAll(".step-done-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const stepIdx = Number(btn.getAttribute("data-step"));
        const stepCard = btn.closest(".timeline-step-card");
        if (completedSteps.has(stepIdx)) {
          completedSteps.delete(stepIdx);
          btn.classList.remove("completed");
          stepCard.classList.remove("step-completed");
          btn.querySelector(".done-text").textContent = "Mark step as done";
        } else {
          completedSteps.add(stepIdx);
          btn.classList.add("completed");
          stepCard.classList.add("step-completed");
          btn.querySelector(".done-text").textContent = "Completed";
        }
        updateStepProgress();
      });
    });

    // Cooking Step Countdown Timer Widget
    let activeTimerInterval = null;
    let timerRemainingSeconds = 0;
    let timerIsPaused = false;
    const timerWidget = document.getElementById("kitchen-timer");
    const timerClock = document.getElementById("timer-display-clock");
    const timerCloseBtn = document.getElementById("close-timer-btn");
    const timerPauseBtn = document.getElementById("timer-pause-btn");
    const timerResetBtn = document.getElementById("timer-reset-btn");

    function formatTimeDisplay(secs) {
      const mins = Math.floor(secs / 60);
      const s = secs % 60;
      return `${String(mins).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }

    function startTimerWithMinutes(minutes) {
      clearInterval(activeTimerInterval);
      timerRemainingSeconds = minutes * 60;
      timerIsPaused = false;
      if (timerPauseBtn) timerPauseBtn.textContent = "Pause";
      if (timerClock) timerClock.textContent = formatTimeDisplay(timerRemainingSeconds);
      if (timerWidget) timerWidget.style.display = "flex";

      activeTimerInterval = setInterval(() => {
        if (!timerIsPaused) {
          timerRemainingSeconds--;
          if (timerClock) timerClock.textContent = formatTimeDisplay(timerRemainingSeconds);
          if (timerRemainingSeconds <= 0) {
            clearInterval(activeTimerInterval);
            showToast(`Time is up! Check your ${recipe.name}!`, "success");
            if (timerClock) timerClock.textContent = "00:00 (Done!)";
          }
        }
      }, 1000);
    }

    document.querySelectorAll(".step-timer-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const mins = Number(btn.getAttribute("data-time")) || 5;
        startTimerWithMinutes(mins);
        showToast(`Timer started for ${mins} minutes!`, "info");
      });
    });

    if (timerCloseBtn) {
      timerCloseBtn.addEventListener("click", () => {
        clearInterval(activeTimerInterval);
        if (timerWidget) timerWidget.style.display = "none";
      });
    }

    if (timerPauseBtn) {
      timerPauseBtn.addEventListener("click", () => {
        timerIsPaused = !timerIsPaused;
        timerPauseBtn.textContent = timerIsPaused ? "Resume" : "Pause";
      });
    }

    if (timerResetBtn) {
      timerResetBtn.addEventListener("click", () => {
        timerRemainingSeconds = 0;
        if (timerClock) timerClock.textContent = "00:00";
        clearInterval(activeTimerInterval);
      });
    }

    // Favorite Button in Details
    const favBtn = document.getElementById("details-fav-btn");
    if (favBtn) {
      favBtn.addEventListener("click", () => {
        const newState = toggleFavorite(recipe.id);
        favBtn.classList.toggle("active", newState);
      });
    }

    // Add to Meal Plan Button
    const addPlanBtn = document.getElementById("details-add-plan-btn");
    if (addPlanBtn) {
      addPlanBtn.addEventListener("click", () => {
        openMealPlanModal(recipe.id);
      });
    }

    // Print Recipe
    const printBtn = document.getElementById("print-recipe-btn");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        window.print();
      });
    }

    // Share Recipe
    const shareBtn = document.getElementById("share-recipe-btn");
    if (shareBtn) {
      shareBtn.addEventListener("click", () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href).then(() => {
            showToast("Recipe link copied to clipboard!", "success");
          }).catch(() => {
            showToast("Recipe URL ready to share!", "info");
          });
        } else {
          showToast("Recipe URL ready to share!", "info");
        }
      });
    }
  }

  renderPage();
  if (window.AOS) AOS.refresh();
  init3DTilt();
  initMagneticButtons();
}

// ==========================================
// 9. MEAL PLANNER PAGE LOGIC (meal-plan.html)
// ==========================================
function initMealPlanPage() {
  renderMealPlanGrid();
  renderMealPlanFavoritesList();
  renderGroceryList();
  if (window.AOS) AOS.refresh();
  init3DTilt();
  initMagneticButtons();

  // Clear weekly plan button
  const clearBtn = document.getElementById("clear-week-plan-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear your meal plan for the entire week?")) {
        const emptyPlan = {
          monday: {}, tuesday: {}, wednesday: {}, thursday: {}, friday: {}, saturday: {}, sunday: {}
        };
        saveMealPlan(emptyPlan);
        renderMealPlanGrid();
        renderGroceryList();
        showToast("Weekly meal plan cleared.", "info");
      }
    });
  }

  // Print meal plan
  const printBtn = document.getElementById("print-meal-plan-btn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

function renderMealPlanGrid() {
  const container = document.getElementById("weekly-calendar-grid");
  if (!container) return;

  const plan = getMealPlan();
  const days = [
    { key: "monday", label: "Monday", short: "Mon" },
    { key: "tuesday", label: "Tuesday", short: "Tue" },
    { key: "wednesday", label: "Wednesday", short: "Wed" },
    { key: "thursday", label: "Thursday", short: "Thu" },
    { key: "friday", label: "Friday", short: "Fri" },
    { key: "saturday", label: "Saturday", short: "Sat" },
    { key: "sunday", label: "Sunday", short: "Sun" }
  ];
  const mealTypes = [
    { key: "breakfast", label: "Breakfast", icon: "🍳" },
    { key: "lunch", label: "Lunch", icon: "🥗" },
    { key: "dinner", label: "Dinner", icon: "🍲" },
    { key: "snack", label: "Snack / Dessert", icon: "🍓" }
  ];

  let totalMeals = 0;
  let totalCookTime = 0;
  let totalCalories = 0;

  let html = "";
  days.forEach(day => {
    const dayData = plan[day.key] || {};
    html += `
      <div class="calendar-day-column" data-day="${day.key}">
        <div class="day-column-header">
          <span class="day-label-full">${day.label}</span>
          <span class="day-label-short">${day.short}</span>
        </div>
        <div class="day-slots-list">
          ${mealTypes.map(m => {
            const recipeId = dayData[m.key];
            const recipe = recipeId ? RECIPES_DATA.find(r => r.id === recipeId) : null;
            if (recipe) {
              totalMeals++;
              totalCookTime += recipe.cookTime;
              totalCalories += recipe.calories;
              return `
                <div class="meal-slot-card filled" data-day="${day.key}" data-meal="${m.key}">
                  <div class="slot-header">
                    <span class="slot-type">${m.icon} ${m.label}</span>
                    <button class="slot-remove-btn" title="Remove meal" data-day="${day.key}" data-meal="${m.key}">&times;</button>
                  </div>
                  <div class="slot-content">
                    <img src="${recipe.image}" alt="${recipe.name}" class="slot-thumb" onerror="handleImageError(this)">
                    <div class="slot-info">
                      <a href="recipe-details.html?id=${recipe.id}" class="slot-recipe-name">${recipe.name}</a>
                      <span class="slot-meta">${recipe.cookTime}m • ${recipe.calories} kcal</span>
                    </div>
                  </div>
                </div>
              `;
            } else {
              return `
                <div class="meal-slot-card empty" data-day="${day.key}" data-meal="${m.key}">
                  <div class="slot-header">
                    <span class="slot-type">${m.icon} ${m.label}</span>
                  </div>
                  <button class="btn-add-to-slot" data-day="${day.key}" data-meal="${m.key}">
                    <span class="plus-icon">&plus;</span> Add Recipe
                  </button>
                </div>
              `;
            }
          }).join("")}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Update Summary Stats Header
  const statMeals = document.getElementById("stat-total-meals");
  const statTime = document.getElementById("stat-total-time");
  const statCals = document.getElementById("stat-total-cals");
  if (statMeals) statMeals.textContent = totalMeals;
  if (statTime) statTime.textContent = `${totalCookTime} mins`;
  if (statCals) statCals.textContent = `${totalCalories} kcal`;

  // Bind remove buttons
  container.querySelectorAll(".slot-remove-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const day = btn.getAttribute("data-day");
      const meal = btn.getAttribute("data-meal");
      removeMealFromSlot(day, meal);
      renderMealPlanGrid();
      renderGroceryList();
    });
  });

  // Bind "Add Recipe" slot click
  container.querySelectorAll(".btn-add-to-slot").forEach(btn => {
    btn.addEventListener("click", () => {
      const day = btn.getAttribute("data-day");
      const meal = btn.getAttribute("data-meal");
      openRecipePickerForSlot(day, meal);
    });
  });
}

function openRecipePickerForSlot(day, meal) {
  let modal = document.getElementById("recipe-slot-picker-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "recipe-slot-picker-modal";
    modal.className = "modal-backdrop";
    modal.innerHTML = `
      <div class="modal-dialog picker-dialog">
        <div class="modal-header">
          <div class="modal-title-group">
            <span class="modal-kicker">Meal Plan Selector</span>
            <h3 class="modal-title" id="picker-target-title">Select Recipe</h3>
          </div>
          <button class="modal-close-btn" id="close-slot-picker">&times;</button>
        </div>
        <div class="picker-search-bar">
          <input type="text" id="slot-picker-search" class="form-control" placeholder="Search recipes by name or category...">
        </div>
        <div class="picker-recipe-list" id="slot-picker-list"></div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeHandler = () => modal.classList.remove("open");
    modal.querySelector("#close-slot-picker").addEventListener("click", closeHandler);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeHandler();
    });
  }

  const dayCap = day.charAt(0).toUpperCase() + day.slice(1);
  const mealCap = meal.charAt(0).toUpperCase() + meal.slice(1);
  const title = modal.querySelector("#picker-target-title");
  if (title) title.textContent = `Assign to ${dayCap} ${mealCap}`;

  const listContainer = modal.querySelector("#slot-picker-list");
  const searchInput = modal.querySelector("#slot-picker-search");
  if (searchInput) searchInput.value = "";

  function renderPickerList(filterText = "") {
    let list = [...RECIPES_DATA];
    if (filterText.trim()) {
      const q = filterText.toLowerCase();
      list = list.filter(r => r.name.toLowerCase().includes(q) || r.category.toLowerCase().includes(q));
    }

    listContainer.innerHTML = list.map(r => `
      <div class="picker-recipe-row" data-recipe-id="${r.id}">
        <img src="${r.image}" alt="${r.name}" class="picker-row-thumb" onerror="handleImageError(this)">
        <div class="picker-row-info">
          <span class="picker-row-name">${r.name}</span>
          <span class="picker-row-meta">${r.category} • ${r.cookTime} mins • ★ ${r.rating}</span>
        </div>
        <button class="btn btn-sm btn-primary btn-select-recipe" data-recipe-id="${r.id}">Select</button>
      </div>
    `).join("");

    listContainer.querySelectorAll(".btn-select-recipe").forEach(btn => {
      btn.addEventListener("click", () => {
        const recId = btn.getAttribute("data-recipe-id");
        assignMealToSlot(day, meal, recId);
        modal.classList.remove("open");
        renderMealPlanGrid();
        renderGroceryList();
      });
    });
  }

  if (searchInput) {
    searchInput.oninput = (e) => {
      renderPickerList(e.target.value);
    };
  }

  renderPickerList();
  modal.classList.add("open");
}

function renderMealPlanFavoritesList() {
  const container = document.getElementById("plan-favorites-shelf");
  if (!container) return;

  const favIds = getFavorites();
  const favRecipes = RECIPES_DATA.filter(r => favIds.includes(r.id));

  if (favRecipes.length === 0) {
    container.innerHTML = `
      <div class="shelf-empty-state">
        <p>No favorite recipes saved yet.</p>
        <a href="explore.html" class="btn btn-xs btn-outline">Explore Recipes</a>
      </div>
    `;
    return;
  }

  container.innerHTML = favRecipes.map(r => `
    <div class="fav-shelf-item">
      <img src="${r.image}" alt="${r.name}" class="fav-shelf-thumb" onerror="handleImageError(this)">
      <div class="fav-shelf-body">
        <a href="recipe-details.html?id=${r.id}" class="fav-shelf-title">${r.name}</a>
        <span class="fav-shelf-time">${r.cookTime} mins • ${r.category}</span>
      </div>
      <button class="btn btn-xs btn-primary btn-quick-plan" data-fav-plan="${r.id}" title="Add to Meal Plan">Plan</button>
    </div>
  `).join("");

  container.querySelectorAll(".btn-quick-plan").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-fav-plan");
      openMealPlanModal(id);
    });
  });
}

// Auto-generate Grocery List based on all planned recipes
function renderGroceryList() {
  const container = document.getElementById("grocery-list-container");
  if (!container) return;

  const plan = getMealPlan();
  const plannedRecipeIds = [];
  Object.values(plan).forEach(slots => {
    Object.values(slots).forEach(id => {
      if (id && !plannedRecipeIds.includes(id)) {
        plannedRecipeIds.push(id);
      }
    });
  });

  if (plannedRecipeIds.length === 0) {
    container.innerHTML = `
      <div class="grocery-empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="empty-cart-icon">
          <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Your grocery list is empty. Add recipes to your weekly meal plan to generate ingredients automatically!</p>
      </div>
    `;
    return;
  }

  // Aggregate ingredients
  const ingredientsMap = new Map();
  plannedRecipeIds.forEach(id => {
    const recipe = RECIPES_DATA.find(r => r.id === id);
    if (recipe) {
      recipe.ingredients.forEach(ing => {
        const key = `${ing.name} (${ing.unit || ''})`.toLowerCase();
        if (ingredientsMap.has(key)) {
          const existing = ingredientsMap.get(key);
          existing.amount += ing.amount;
        } else {
          ingredientsMap.set(key, { ...ing });
        }
      });
    }
  });

  const ingredientsList = Array.from(ingredientsMap.values());

  container.innerHTML = `
    <div class="grocery-card">
      <div class="grocery-header">
        <div>
          <h4 class="grocery-title">Consolidated Grocery List</h4>
          <p class="grocery-subtitle">Generated from ${plannedRecipeIds.length} planned meals (${ingredientsList.length} unique ingredients)</p>
        </div>
        <div class="grocery-actions">
          <button class="btn btn-xs btn-outline" id="copy-grocery-list">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon-svg">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Copy List
          </button>
        </div>
      </div>
      <div class="grocery-checklist">
        ${ingredientsList.map((ing, i) => `
          <label class="grocery-item-row" for="groc-${i}">
            <input type="checkbox" id="groc-${i}" class="grocery-checkbox">
            <span class="custom-checkbox"></span>
            <span class="grocery-text">
              <strong>${typeof ing.amount === 'number' ? ing.amount : ''}</strong> ${ing.unit || ''} ${ing.name}
            </span>
          </label>
        `).join("")}
      </div>
    </div>
  `;

  // Item checkbox toggle strike-through
  container.querySelectorAll(".grocery-checkbox").forEach(cb => {
    cb.addEventListener("change", (e) => {
      e.target.closest(".grocery-item-row").classList.toggle("checked", e.target.checked);
    });
  });

  // Copy to clipboard
  const copyBtn = document.getElementById("copy-grocery-list");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const textLines = ingredientsList.map(ing => `• ${ing.amount ? ing.amount + ' ' : ''}${ing.unit ? ing.unit + ' ' : ''}${ing.name}`);
      const fullText = `FlavorNest Weekly Grocery List:\n\n${textLines.join("\n")}`;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(fullText).then(() => {
          showToast("Grocery list copied to clipboard!", "success");
        });
      } else {
        showToast("Grocery list ready to copy!", "info");
      }
    });
  }
}

// ==========================================
// 10. DOM READY DISPATCHER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Preloader management
  initPreloader();

  // Always initialize navigation, header counters, modals
  initGlobalNavigation();

  // Detect current page
  const path = window.location.pathname.toLowerCase();

  if (path.endsWith("explore.html")) {
    initExplorePage();
  } else if (path.endsWith("recipe-details.html")) {
    initRecipeDetailsPage();
  } else if (path.endsWith("meal-plan.html")) {
    initMealPlanPage();
  } else {
    // Default to Home page (index.html or root /)
    initHomePage();
  }

  // Initialize scroll-triggered reveals and stats counter animations
  initScrollAnimations();
  initCounterAnimations();
});

