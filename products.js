// =============================================
// পণ্যের তালিকা এখানে সম্পাদনা করুন
// এই ফাইলটি Products, Placeholder, Admin Password এবং Deadline সেট করতে ব্যবহৃত হয়।
// =============================================

const PRODUCTS = [
  { id: 1, name: "কটন শার্ট", image: "images/item01.jpg" },
  { id: 2, name: "স্টেপ শার্ট", image: "images/item02.jpg" },
  { id: 3, name: "সিল্ক শাড়ি", image: "images/item03.jpg" },
  { id: 4, name: "কটন কুর্তি", image: "images/item04.jpg" },
  { id: 5, name: "ডেনিম জ্যাকেট", image: "images/item05.jpg" },
  { id: 6, name: "ব্লক প্রিন্ট ফতুয়া", image: "images/item06.jpg" },
  { id: 7, name: "জামদানি শাড়ি", image: "images/item07.jpg" },
  { id: 8, name: "খাদি পাঞ্জাবি", image: "images/item08.jpg" },
  { id: 9, name: "টাই-ডাই টপ", image: "images/item09.jpg" },
  { id: 10, name: "মসলিন শাড়ি", image: "images/item10.jpg" },
  { id: 11, name: "ফ্লোরাল কুর্তি", image: "images/item11.jpg" },
  { id: 12, name: "স্ট্রাইপ শার্ট", image: "images/item12.jpg" },
  { id: 13, name: "এমব্রয়ডারি পাঞ্জাবি", image: "images/item13.jpg" },
  { id: 14, name: "চেক লুঙ্গি", image: "images/item14.jpg" },
  { id: 15, name: "বাটিক শাড়ি", image: "images/item15.jpg" },
  { id: 16, name: "ক্যাজুয়াল টি-শার্ট", image: "images/item16.jpg" },
  { id: 17, name: "ফর্মাল শার্ট", image: "images/item17.jpg" },
  { id: 18, name: "শীতের কার্ডিগান", image: "images/item18.jpg" },
  { id: 19, name: "হাফহাতা পাঞ্জাবি", image: "images/item19.jpg" },
  { id: 20, name: "প্রিন্টেড সালোয়ার", image: "images/item20.jpg" },
  { id: 21, name: "ভেলভেট কুর্তি", image: "images/item21.jpg" },
  { id: 22, name: "অক্সফোর্ড শার্ট", image: "images/item22.jpg" },
  { id: 23, name: "কটন পাজামা", image: "images/item23.jpg" },
  { id: 24, name: "সিল্ক কুর্তি", image: "images/item24.jpg" },
  { id: 25, name: "লেস শাড়ি", image: "images/item25.jpg" },
  { id: 26, name: "ডেনিম শার্ট", image: "images/item26.jpg" },
  { id: 27, name: "ফ্লানেল শার্ট", image: "images/item27.jpg" },
  { id: 28, name: "পোলো টি-শার্ট", image: "images/item28.jpg" },
  { id: 29, name: "ক্রেপ শাড়ি", image: "images/item29.jpg" },
  { id: 30, name: "ম্যাক্সি ড্রেস", image: "images/item30.jpg" },
];

// ইমেজ লোড না হলে এই placeholder দেখাবে
const PLACEHOLDER = "https://placehold.co/400x400/1a1a2e/ffffff?text=No+Image";

// Admin পাসওয়ার্ড
const ADMIN_PASSWORD = "ADMIN2024";

// ভোটিং শেষ হওয়ার তারিখ (null = কোনো সীমা নেই)
const VOTING_DEADLINE = null; // Example: "2025-12-31"

// Expose to window so other scripts can access them even if Vite loads this as a module
window.PRODUCTS = PRODUCTS;
window.PLACEHOLDER = PLACEHOLDER;
window.ADMIN_PASSWORD = ADMIN_PASSWORD;
window.VOTING_DEADLINE = VOTING_DEADLINE;
