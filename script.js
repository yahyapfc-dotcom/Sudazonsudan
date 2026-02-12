// إعداد Supabase
const supabaseUrl = "https://dilafguuskdjnxchtnkw.supabase.co";
const supabaseKey = "sb_publishable_cQMT-we84tNljWfeCv4OmA_w4";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// جلب وعرض المنتجات
async function fetchProducts() {
  const { data, error } = await supabase.from("products").select("*");
  const container = document.getElementById("products");
  container.innerHTML = "";

  if (error) {
    container.innerHTML = "<p>حدث خطأ أثناء تحميل المنتجات</p>";
    console.error("Error:", error);
    return;
  }

  if (!data || data.length === 0) {
    container.innerHTML = "<p>لا توجد منتجات بعد</p>";
    return;
  }

  data.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML =
