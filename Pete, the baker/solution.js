function cakes(recipe, available) {
  const recipeKeys = [];
  const availableKeys = [];
  for (const [k, v] of Object.entries(recipe)) recipeKeys.push(k);
  for (const [k, v] of Object.entries(available)) availableKeys.push(k);
  for (let i = 0; i < recipeKeys.length; i++) {
    if (!availableKeys.includes(recipeKeys[i])) {
      return 0;
    }
  }
  let count = recipeKeys.map((v) => {
    return Math.floor(available[v] / recipe[v]);
  });
  return count.sort((a, b) => a - b)[0];
}
