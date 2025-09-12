const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayPlant(json.plants));
};

const loadPlantsCard = (id) => {
  console.log(id);
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
    btnDiv.innerHTML = `<button onclick="loadPlantsCard(${plant.name})" class="btn btn-outline btn-primary w-[200px] border-none">${plant.name}</button>`;
    // 4. appnd into th container
    plantCon.append(btnDiv);
  }
};
loadLessons();
