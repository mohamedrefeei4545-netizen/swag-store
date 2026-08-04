const products = [];

for (let i = 1; i <= 67; i++) {
    products.push({
        id: i,
        name: "Y2K Shirt",
        price: i % 2 === 0 ? 850 : 800,
        image: `Images/product${String(i).padStart(4, "0")}.png`,
        category: "shirts",
        description: "Premium Y2K oversized streetwear shirt.",
        sizes: ["M", "L", "XL"]
    });
}