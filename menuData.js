/* ==========================================================
   BITE BUZZ – ALL WEBSITE CONTENT LIVES IN THIS FILE
   Edit anything below, save, refresh. Nothing else to touch.
   ========================================================== */

const SITE = {
  name: "Bite Buzz",
  tagline: "Good Food. Good Mood.",
  subtitle: "Fresh cravings. Delicious bites.",
  logo: "images/logo.jpg",              // hero banner (your Bite Buzz banner)
  logoMark: "images/logo-mark.png",   // small logo used in the footer
  menuTitle: "Our Menu",
  trendingTitle: "Trending Now 🔥",
  feedbackTitle: "How was your bite?",
  feedbackText: "Tell us what you loved. It takes ten seconds.",
  footerNote: "Made with ❤️ by Bite Buzz",

  // Feedback goes to a Google Form. Paste your form link here.
  // OPTIONAL: to pre-fill rating/comment, add the form's "entry.123456" ids below.
  feedbackFormUrl: "https://forms.gle/REPLACE_WITH_YOUR_FORM_LINK",
  ratingEntryId: "",   // e.g. "entry.1111111111"
  commentEntryId: ""   // e.g. "entry.2222222222"
};

/* ----------------------------------------------------------
   MENU ITEMS
   available: true  -> shows normally | false -> shows SOLD OUT
   trending:  true  -> also appears in Trending Now + badge
   image: put photos in the /images folder and use the file name
   emoji: shown only if the photo file is missing
   ---------------------------------------------------------- */
const MENU = [
  { name: "McCain Smileys", price: 50, unit: "plate", image: "images/smileys.jpg", emoji: "😊",
    description: "Crispy, smiley-shaped potato bites.", available: true, trending: true },

  { name: "Veg Burger", price: 80, unit: "plate", image: "images/veg-burger.jpg", emoji: "🍔",
    description: "Loaded, juicy and fresh off the tawa.", available: true, trending: true },

  { name: "French Fries (Normal)", price: 30, unit: "pouch", image: "images/fries-normal.jpg", emoji: "🍟",
    description: "Golden, crunchy and lightly salted.", available: true, trending: false },

  { name: "French Fries (Peri Peri)", price: 40, unit: "pouch", image: "images/fries-peri-peri.jpg", emoji: "🌶️",
    description: "Tossed in spicy peri peri masala.", available: true, trending: true },

  { name: "Sandwich (Full)", price: 80, unit: "", image: "images/sandwich-full.jpg", emoji: "🥪",
    description: "Grilled and stuffed, the full works.", available: true, trending: false },

  { name: "Sandwich (Half)", price: 45, unit: "", image: "images/sandwich-half.jpg", emoji: "🥪",
    description: "A lighter bite of the same goodness.", available: true, trending: false },

  { name: "Mini Samosa (2 pieces)", price: 30, unit: "plate", image: "images/mini-samosa.jpg", emoji: "🔺",
    description: "Two crispy mini samosas, hot and spiced.", available: true, trending: false },

  { name: "Mirinda", price: 15, unit: "glass", image: "images/mirinda.jpg", emoji: "🧃",
    description: "Ice-cold orange fizz.", available: true, trending: false },

  { name: "Real Pomegranate Juice", price: 15, unit: "glass", image: "images/pomegranate-juice.jpg", emoji: "🍹",
    description: "Sweet, ruby-red and refreshing.", available: true, trending: false }
];
