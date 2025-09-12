const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategory(json.categories));
};

const displayCategory = (categorys) => {
  //   console.log(Category);
  //   Get the conainer & Empty
  const categoryName = document.getElementById("categories");
  categoryName.innerHTML = "";

  //   get all the Category Name
  for (let category of categorys) {
    btnCategory = document.createElement("div");
    console.log(category);
    btnCategory.innerHTML = `<button class="btn btn-outline btn-primary w-[200px] border-none">${category.category_name}</button>`;
    categoryName.append(btnCategory);
  }
};
loadCategory();
