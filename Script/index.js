// const loadlessons = () => {
//   fetch("https://openapi.programming-hero.com/api/categories").then((res) =>
//     res.json().then((json) => displayCat(json.categories))
//   );
// };

// const displayCat = (cats) => {
//   // console.log(cats);

//   // 1. get the container and empty
//   const levelContainer = document.getElementById("categories");
//   levelContainer.innerHTML = "";

//   // 2. get into every lesssons
//   for (let cat of cats) {
//     // 3. Create elements
//     const btnDiv = document.createElement("div");
//     btnDiv.innerHTML = `<button
//               class="btn btn-active btn-warning bg-[#FACC15] text-[#15803D] rounded-[200px]">Button ${}</button>`;
//     // 4. append in container

//     levelContainer.append(btnDiv);
//   }
// };
// loadlessons();
// *******************************************

const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayPlant(json.plants));
};

const displayPlant = (plants) => {
  // console.log(plants);

  // 1. get the container and empty

  const plantCon = document.getElementById("categories");
  plantCon.innerHTML = "";
  // 2. get into every lessons
  for (let plant of plants) {
    // 3. create Elemens
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `<button class="btn btn-outline btn-primary w-[200px] border=0">${plant.name}</button>`;
    // 4. appnd into th container
    plantCon.append(btnDiv);
  }
};
loadLessons();
