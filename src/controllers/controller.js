import resemble from "resemblejs";
const compare = require("resemblejs").compare;
const fs = require("mz/fs");
import imageDataURI from "image-data-uri";
// const base64Img = require("base64-img");
const base64Img = require("base64-img-promise");

import { updateCyber, updateKorea, updateIncome } from "./scrapping";
import Bobae from "../models/Bobae";
import dotenv from "dotenv";
import routes from "../routes";

dotenv.config();

//Home
export const home = (req, res) => {
  res.render("home", { PageTitle: "Home" });
};
//Admin
export const admin = (req, res) => {
  res.render("admin");
};
//APIs

//search API
export const postSearchDB = async (req, res) => {
  // let errorCount = 0;
  // let cm = 0;
  // let matchNm = 0;
  // let lm = 0;
  // let Lists = [];

  // const options = {
  //   scaleToSameSize: false,
  //   ignore: ["antialiasing", "colors"],
  // };

  const {
    body: { carModel, img1 },
  } = req;

  const searchedDB = await Bobae.find({
    title: { $regex: carModel, $options: "i" },
  });

  res.json({ db: searchedDB });
  res.end();
};

//   const length = searchedDB.length;

//   searchedDB.forEach(async (element) => {
//     try {
//       const img2 = element.imageURL;
//       await compare(img1, img2, options, function (err, data) {
//         if (data.misMatchPercentage < 10) {
//           Lists.push(element);
//           matchNm++;
//         }

//         cm++;
//         console.log(
//           `Counting Nm / total Count : ${cm} / ${
//             length - errorCount - 1
//           } (matching Number : ${matchNm})`
//         );
//       });
//       if (cm === length - errorCount - 1) {
//         res.json({ db: Lists });
//         res.end();
//       }
//     } catch (error) {
//       console.log(error);
//       errorCount++;
//       if (cm === length - errorCount - 1) {
//         res.json({ db: Lists });
//         res.end();
//       }
//     }
//   });
// };

// try {

//   // res.json({ db: searchedDB });
//   // res.end();

//   // const length = searchedDB.length;

//   // searchedDB.forEach(async (element) => {
//   //   try {
//   //     img2 = await imageDataURI
//   //       .encodeFromURL(element.imageURL)
//   //       .then((res) => {
//   //         return res;
//   //       });
//   //   } catch (error) {
//   //     errorCount++;
//   //     console.log(error);
//   //     if (cm >= length - errorCount - 1) {
//   //       console.log("ended!");
//   //       res.json({ db: Lists });
//   //       res.end();
//   //     }
//   //     return false;
//   //   }

//   //   try {
//   //     await compare(img1, img2, options, function (err, data) {
//   //       if (err) {
//   //         console.log("An error!");
//   //       }
//   //       if (data.misMatchPercentage < 10) {
//   //         Lists.push(element);
//   //         matchNm++;
//   //       }
//   //       cm++;
//   //       if (cm === length - errorCount - 1) {
//   //         console.log("ended!");
//   //         res.json({ db: Lists });
//   //         res.end();
//   //       }
//   //       console.log(
//   //         `Counting Nm / totla Count : ${cm} / ${
//   //           length - errorCount - 1
//   //         } (matching Number : ${matchNm})`
//   //       );
//   //     });
//   //   } catch (error) {
//   //     if (cm === length - errorCount - 1) {
//   //       console.log("ended!");
//   //       res.json({ db: Lists });
//   //       res.end();
//   //     }
//   //     console.log(error);
//   //   }
//   // });
// } catch (error) {
//   console.log(error);
//   res.redirect(routes.home);
// }

//update DB API
export const postUpdateCommmand = async (req, res) => {
  // const {
  //   body: { password },
  // } = req;

  // if (password === process.env.admin_Password) {
  //   const updateResult = await postUpdateDB();
  //   console.log("done!");

  //   res.json({ text: "update is completed!" });
  //   res.end();
  // } else {
  //   res.json({ text: "password is incorrect" });
  //   res.end();
  // }

  const updateResult = await postUpdateDB();
  console.log("done!");
};

//Update DB function
export const postUpdateDB = async (req, res) => {
  console.log("Updating...");

  for (let a = 331; a <= 1165; a += 5) {
    const db = await updateCyber(a);
    console.log(`until ${a + 4}, done!`);

    db.forEach(async (element) => {
      const findSameData = await Bobae.findOne({ pageURL: element.pageURL });

      if (findSameData) {
        return;
      } else {
        try {
          const imgUri = await imageDataURI
            .encodeFromURL(element.imageURL)
            .then((res) => {
              return res;
            });

          const newDB = await Bobae.create({
            siteName: element.siteName,
            title: element.title,
            pageURL: element.pageURL,
            imageURL: imgUri,
            price: element.price,
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  for (let a = 1; a <= 60; a += 5) {
    const db = await updateKorea(a);
    console.log(`until ${a + 4}, done!`);

    db.forEach(async (element) => {
      const findSameData = await Bobae.findOne({ pageURL: element.pageURL });

      if (findSameData) {
        return;
      } else {
        try {
          const newDB = await Bobae.create({
            siteName: element.siteName,
            title: element.title,
            pageURL: element.pageURL,
            imageURL: element.imageURL,
            price: element.price,
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  for (let a = 1; a <= 60; a += 5) {
    const db = await updateIncome(a);
    console.log(`until ${a + 4}, done!`);

    db.forEach(async (element) => {
      const findSameData = await Bobae.findOne({ pageURL: element.pageURL });

      if (findSameData) {
        return;
      } else {
        try {
          const newDB = await Bobae.create({
            siteName: element.siteName,
            title: element.title,
            pageURL: element.pageURL,
            imageURL: element.imageURL,
            price: element.price,
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  }
};

const matchImage = async (img1, searchedDB) => {
  return new Promise((resolve, reject) => {
    let errorCount = 0;
    let cm = 0;
    let matchNm = 0;
    let lm = 0;
    let Lists = [];

    const options = {
      scaleToSameSize: false,
      ignore: ["antialiasing", "colors"],
    };

    const length = searchedDB.length;

    searchedDB.forEach(async (element) => {
      lm++;
      try {
        // img2 = base64Img.requestBase64(element.imageURL, function (
        //   err,
        //   res,
        //   body
        // ) {
        //   return body;
        // });

        // const img2 = await base64Img.requestBase64then.then(function (data) {
        //   return data;
        // });

        // console.log(img2);

        // const img2 = await imageDataURI
        //   .encodeFromURL(element.imageURL)
        //   .then((res) => {
        //     return res;
        //   });

        await compare(
          img1,
          await base64Img.requestBase64(element.imageURL, function (
            err,
            res,
            body
          ) {
            return body;
          }),
          options,
          function (err, data) {
            if (data.misMatchPercentage < 10) {
              Lists.push(element);
              matchNm++;
            }

            cm++;
            console.log(
              `Counting Nm / totla Count : ${cm} / ${
                length - errorCount - 1
              } (matching Number : ${matchNm})`
            );
          }
        );
      } catch (error) {
        errorCount++;
        console.log(error);
      }

      console.log("lm : ", lm);
    });
    resolve(Lists);
  });
};

// (img2 = base64Img.requestBase64(element.imageURL, function (
//   err,
//   res,
//   body
// ) {
//   return body;
// }))
