export function handleSubmit(key, id) {
  if (!sessionStorage.getItem(key)) {
    sessionStorage.setItem(key, '[]');
  }
  const data = sessionStorage.getItem(key);
  const old = JSON.parse(data);
  const newArray = [...old, id];
  const result = JSON.stringify(newArray);
  sessionStorage.setItem(key, result);
}

export function recoveryFromSection(key) {
  const old = sessionStorage.getItem(key);
  if (old === null) {
    return [];
  }
  const result = JSON.parse(old);
  return result;
}
