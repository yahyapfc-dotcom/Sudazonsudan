// إعداد Supabase
const supabaseUrl = "https://dilafguuskdjnxchtnkw.supabase.co";  
const supabaseKey = "sb_publishable_cQMT-we84tNljWfeCv4OmA_w4";   
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// دالة لجلب وعرض المنتجات
async function fetchProducts() {
  const { data, error } = await supabase.from("products").select("*");
  const container = document.getElementById("products");
  container.innerHTML = ""; // تفريغ المحتوى السابق

  if (error) {
    container.innerHTML = "<p>حدث خطأ أثناء تحميل المنتجات</p>";
    console.error("Error:", error);
    return;
  }

  if (!data || data.length === 0) {
    container.innerHTML = "<p>لا توجد منتجات بعد</p>";
    return;
  }

  // عرض كل منتج
  data.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>السعر: ${product.price} ج</p>
      <img src="${product.image_url || 'https://via.placeholder.com/150'}" alt="${product.name}" />
      <hr/>
    `;
    container.appendChild(div);
  });
}

// عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", fetchProducts);
