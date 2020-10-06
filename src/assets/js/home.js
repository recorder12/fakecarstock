import axios from "axios";
import imageDataURI from "image-data-uri";
const compare = require("resemblejs").compare;
const base64Img = require("base64-img");
const searchButton = document.getElementById("search");
const resultContainer = document.getElementById("jsList");

const app = async () => {
  searchButton.removeEventListener("click", app);
  const carModel = document.getElementById("car-model").value;
  const uploadedImg = document.getElementById("car-image");
  const img1 = uploadedImg.src;
  if (document.getElementById("lists")) {
    document.getElementById("lists").remove();
  }

  if (img1 === "https://fakecarstock.herokuapp.com/") {
    alert("차량 이미지를 업로드해주세요");
    init();
    return;
  }

  if (!carModel || carModel === "" || carModel === " " || carModel === "  ") {
    alert("차량 모델명을 입력해주세요");
    init();
    return;
  }

  makeDelay();

  const response = await axios({
    url: "/api/search",
    method: "POST",
    data: {
      carModel,
      img1,
    },
  });

  const Lists = await response.data.db;
  console.log("DB arrived!");

  const SearchedList = await matchImage(img1, Lists);

  displayList(SearchedList);

  init();
};

const matchImage = async (img1, searchedDB) => {
  return new Promise((resolve, reject) => {
    // let errorCount = 0;
    // let cm = 0;
    // let matchNm = 0;
    let lm = 0;
    let Lists = [];
    let confirmUri = 0;

    const options = {
      scaleToSameSize: false,
      ignore: ["antialiasing", "colors"],
    };

    const length = searchedDB.length;

    searchedDB.forEach(async (element) => {
      confirmUri = element.imageURL.indexOf("data:image");
      if (confirmUri === -1) {
        // console.log("image Uri is null or URL");
        lm++;
        return;
      }

      try {
        await compare(img1, element.imageURL, options, function (err, data) {
          if (data.misMatchPercentage < 10) {
            Lists.push(element);
            // matchNm++;
          }

          //   cm++;
          //   console.log(
          //     `Counting Nm / total Count : ${cm} / ${
          //       length - errorCount
          //     } (matching Number : ${matchNm})`
          //   );
        });
      } catch (error) {
        console.log(error);
      } finally {
        lm++;
        if (lm === length - 1) {
          resolve(Lists);
        }
      }
    });
  });
};

const makeDelay = () => {
  const delayBox = document.createElement("div");
  delayBox.className = "delayBox";
  delayBox.id = "delayBox";

  const moveBar1 = document.createElement("div");
  const moveBar2 = document.createElement("div");
  const moveBar3 = document.createElement("div");
  const moveBar4 = document.createElement("div");
  const moveBar5 = document.createElement("div");
  moveBar1.className = "moving";
  moveBar2.className = "moving";
  moveBar3.className = "moving";
  moveBar4.className = "moving";
  moveBar5.className = "moving";
  moveBar1.id = "moveBar1";
  moveBar2.id = "moveBar2";
  moveBar3.id = "moveBar3";
  moveBar4.id = "moveBar4";
  moveBar5.id = "moveBar5";
  delayBox.appendChild(moveBar1);
  delayBox.appendChild(moveBar2);
  delayBox.appendChild(moveBar3);
  delayBox.appendChild(moveBar4);
  delayBox.appendChild(moveBar5);
  resultContainer.appendChild(delayBox);
};

const displayList = (array) => {
  document.getElementById("delayBox").remove();

  if (document.getElementById("lists")) {
    document.getElementById("lists").remove();
  }

  const lists = document.createElement("div");
  lists.id = "lists";
  resultContainer.appendChild(lists);

  if (array.length === 0) {
    const noMatch = document.createElement("span");
    noMatch.className = "noMatch";
    noMatch.innerHTML = "검색된 결과가 없습니다.";
    lists.appendChild(noMatch);
    return;
  }

  array.forEach((element) => {
    const listsChild = document.createElement("div");
    const spanBox = document.createElement("div");
    const link = document.createElement("a");
    const title = document.createElement("span");
    const price = document.createElement("span");
    const image = document.createElement("img");

    listsChild.className = "listsChild";
    spanBox.className = "spanBox";
    title.className = "title";
    price.className = "price";
    image.className = "image";

    title.innerHTML = "글 제목 : " + element.title;
    price.innerHTML = "가격 : " + element.price + " (만원)";
    link.href = element.pageURL;
    link.target = "_blank";
    image.src = element.imageURL;
    image.width = 300;

    lists.appendChild(listsChild);
    listsChild.appendChild(link);
    link.appendChild(spanBox);
    link.appendChild(image);
    spanBox.appendChild(title);
    spanBox.appendChild(price);
  });
};

const init = () => {
  searchButton.addEventListener("click", app);
};

if (searchButton) {
  init();
}
