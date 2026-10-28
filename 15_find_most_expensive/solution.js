const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
];

function findMostExpensive(products) {
  if (products.length === 0) {
    return undefined;
  }

  const mostExpensiveItem = products.reduce((item, currentItem) => {
    {
      return currentItem.price > item.price ? currentItem : item;
    }
  });
  return mostExpensiveItem;
}

console.log(findMostExpensive(products));

module.exports = { findMostExpensive };
