export function handleSubmit(id) {
  if (!sessionStorage.getItem('shoppingCart')) {
    sessionStorage.setItem('shoppingCart', '[]');
  }
  const shoppingCart = sessionStorage.getItem('shoppingCart');
  const old = JSON.parse(shoppingCart);
  const newArray = [...old, id];
  const result = JSON.stringify(newArray);
  sessionStorage.setItem('shoppingCart', result);
}

export function recoveryFromSection() {
  const old = sessionStorage.getItem('shoppingCart');
  if (old === null) {
    return [];
  }
  const result = JSON.parse(old);
  return result;
}
