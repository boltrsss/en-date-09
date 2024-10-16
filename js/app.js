// State ==============================================
const infoPopup = document.querySelector(".popup-wrapper");
const firstPopup = document.querySelector("#firstPopup");
const firstPopupInner = document.querySelector(".first__popup");

const coordinates = {
  latitude: 1,
  longitude: 1,
};

// Methods ================================================

// Fill Popup

const fillPopup = function (
  img,
  name,
  age,
  zodiac,
  height,
  weight,
  relationship,
  lookingForAge
) {
  const modelPopup = document.querySelector("#modelPopup");
  const modelName = modelPopup.querySelector("#modelName");
  const modelAge = modelPopup.querySelector("#modelAge");
  const modelZodiac = modelPopup.querySelector("#modelZodiac");
  const modelHeight = modelPopup.querySelector("#modelHeight");
  const modelWeight = modelPopup.querySelector("#modelWeight");
  const modelRelationship = modelPopup.querySelector("#modelRelationship");
  const modelLookingForAge = modelPopup.querySelector("#modelLookingForAge");
  const modelImage = modelPopup.querySelector("#modelImage");

  modelImage.src =
    "images/" +
    img;
  modelName.innerHTML = name;
  modelAge.innerHTML = age;
  modelZodiac.innerHTML = zodiac;
  modelHeight.innerHTML = height;
  modelWeight.innerHTML = weight;
  modelRelationship.innerHTML = relationship;
  modelLookingForAge.innerHTML = lookingForAge;
};

const closePopup = () => {
  infoPopup.classList.add("hide");
  firstPopupInner.classList.remove("hide");
};

// User's Geolocation

async function getGeolocation() {
  try {
    const response = await fetch(
      "https://api.ipapi.is/"
    );
    const data = await response.json();

    coordinates.latitude = data.location.latitude.toFixed(3);
    coordinates.longitude = data.location.longitude.toFixed(3);
  } catch (e) {
    coordinates.latitude = 25.878;
    coordinates.longitude = -80.304;
    console.log(e);
  }
}

// Set Map (LeafLet)

const setMap = async function () {
  let map = await L.map("map", {
    attributionControl: false,
    zoomControl: false,
  }).setView([coordinates.latitude, coordinates.longitude], 14);

  await L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 16,
    zoomControl: false,
    attributionControl: false,
  }).addTo(map);

  // Set Models Array

  const models = [
    {
      lat: coordinates.latitude,
      lon: coordinates.longitude,

      img: "1.jpg",
      name: "Maria",
      age: 36,
      zodiac: "Gemini",
      height: "5'7(169cm)",
      weight: "125 lbs (57kg)",
      relationship: "Single",
      lookingForAge: "37 - 59",
      id: 1,
    },
    {
      lat: Number(coordinates.latitude) + -0.02,
      lon: Number(coordinates.longitude) + 0.01,

      img: "2.jpg",
      name: "Ana",
      age: 39,
      zodiac: "Sagittarius",
      height: "5' 2 (158cm)",
      weight: "135 lbs (61 kg)",
      relationship: "Single",
      lookingForAge: "25 - 57",
      id: 2,
    },
    {
      lat: Number(coordinates.latitude) + 0.015,
      lon: Number(coordinates.longitude) + -0.007,

      img: "3.jpg",
      name: "Sofia",
      age: 54,
      zodiac: "Gemini",
      height: "5' 5 (166cm)",
      weight: "121 lbs (55 kg)",
      relationship: "Divorced",
      lookingForAge: "50 - 70",
      id: 3,
    },
    {
      lat: Number(coordinates.latitude) + -0.018,
      lon: Number(coordinates.longitude) + -0.016,

      img: "4.jpg",
      name: "Isabella",
      age: 47,
      zodiac: "Gemini",
      height: "5' 4 (162cm)",
      weight: "121 lbs (55 kg)",
      relationship: "Divorced",
      lookingForAge: "35 - 65",
      id: 4,
    },
    {
      lat: Number(coordinates.latitude) + 0.012,
      lon: Number(coordinates.longitude) + -0.03,

      img: "5.jpg",
      name: "Valentina",
      age: 61,
      zodiac: "Sagittarius",
      height: "5' 7 (170 cm)",
      weight: "110 lbs (51 kg)",
      relationship: "Single",
      lookingForAge: "28 - 75",
      id: 5,
    },
    {
      lat: Number(coordinates.latitude) + -0.007,
      lon: Number(coordinates.longitude) + -0.035,

      img: "6.jpg",
      name: "Camila",
      age: 41,
      zodiac: "Aries",
      height: "5' 2 (158 cm)",
      weight: "140lbs (65 kg)",
      relationship: "Single",
      lookingForAge: "18 - 70",
      id: 6,
    },

    {
      lat: Number(coordinates.latitude) + 0.0009,
      lon: Number(coordinates.longitude) + -0.06,

      img: "7.jpg",
      name: "Gabriela",
      age: 34,
      zodiac: "Virgo",
      height: "5' 2 (158 cm)",
      weight: "136lbs (62 kg)",
      relationship: "Single",
      lookingForAge: "18 - 67",
      id: 7,
    },
    {
      lat: Number(coordinates.latitude) + 0.02,
      lon: Number(coordinates.longitude) + -0.073,

      img: "8.jpg",
      name: "Carolina",
      age: 39,
      zodiac: "Leo",
      height: "5' 3 (160 cm)",
      weight: "115 lbs (52 kg)",
      relationship: "Divorced",
      lookingForAge: "35 - 70",
      id: 8,
    },
    {
      lat: Number(coordinates.latitude) + 0.008,
      lon: Number(coordinates.longitude) + 0.055,

      img: "9.jpg",
      name: "Valeria",
      age: 29,
      zodiac: "Cancer",
      height: "5' 5 (165 cm)",
      weight: "117 lbs (53 kg)",
      relationship: "Widowed",
      lookingForAge: "45 - 67",
      id: 9,
    },
    {
        lat: Number(coordinates.latitude) + -0.005,
      lon: Number(coordinates.longitude) + 0.025,
      

      img: "10.jpg",
      name: "Susana",
      age: 69,
      zodiac: "Scorpio",
      height: "5' 4 (162 cm)",
      weight: "180 lbs (82 kg)",
      relationship: "Widowed",
      lookingForAge: "35 - 65",
      id: 10,
    },
  ];

  models.forEach((item) => {
    let popupMarker = L.popup([item.lat, item.lon], {
      content: `<div class="marker" >
      <div class="marker__image-wrapper">
        <img src="images/${item.img}" alt="woman nearby" class="marker__image" data-index=${item.id} />
      </div>
    </div>`,
      closeButton: false,
      closeOnClick: false,
      interactive: true,
    }).addTo(map);

    popupMarker._container.addEventListener("click", (e) => {
      if (e.target.querySelector("img")) {
        const model = models.find((item) => {
          return (
            item.id === Number(e.target.querySelector("img").dataset.index)
          );
        });

        fillPopup(
          model.img,
          model.name,
          model.age,
          model.zodiac,
          model.height,
          model.weight,
          model.relationship,
          model.lookingForAge
        );
        infoPopup.classList.remove("hide");
        firstPopup.classList.add("hide");
      } else {
        const model = models.find((item) => {
          return item.id === Number(e.target.dataset.index);
        });

        fillPopup(
          model.img,
          model.name,
          model.age,
          model.zodiac,
          model.height,
          model.weight,
          model.relationship,
          model.lookingForAge
        );
        infoPopup.classList.remove("hide");
        firstPopup.classList.add("hide");
      }
    });
  });
};

const InitPage = async function () {
  await getGeolocation();
  await setMap();
};

InitPage();
