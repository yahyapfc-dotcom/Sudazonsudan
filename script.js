alert("JavaScript يعمل");
const { createClient } = supabase;

const supabaseUrl = "https://dilafguuskdjnxchtnkw.supabase.co";
const supabaseKey = "sb_publishable_cQMT-we84tNljWfeCv4OmA_w4";

const client = createClient(supabaseUrl, supabaseKey);

async function fetchProducts() {
  const container = document.getElementById("products");

  try {
    const { data, error } = await client
      .from("products")
      .select("*");

    if (error) {
      container.innerHTML = "<p>❌ خطأ: " + error.message + "</p>";
      return;
    }

    if (!data || data.length === 0) {
      container.innerHTML = "<p>⚠️ لا توجد منتجات في الجدول</p>";
      return;
    }

    container.innerHTML = "";

    data.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>السعر: ${product.price} ج</p>
        <img src="${product.image_url || 'https://via.placeholder.com/150'}" width="150"/>
      `;
      container.appendChild(div);
    });

  } catch (err) {
    container.innerHTML = "<p>🔥 خطأ عام: " + err.message + "</p>";
  }
}

window.addEventListener("DOMContentLoaded", fetchProducts);// عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", fetchProducts);
