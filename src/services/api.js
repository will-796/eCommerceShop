export async function getCategories() {
  try {
    const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categories = await data.json();
    return categories;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    let data;
    if (!categoryId && query) {
      data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    } else if (categoryId.length > 0) {
      data = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    } else {
      throw new Error('parâmetros inválidos!');
    }

    const category = await data.json();
    return category;
  } catch (err) {
    console.error(err.message);
  }
}
