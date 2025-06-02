import axios from "axios";

export function request(dta) {
  const reqData = dta;
  reqData.headers = {
    "Content-Type": "application/json",
  };

  // reqData.url = `${process.env.API_URL}${reqData.route}`;
  reqData.url = reqData.route;
  return new Promise((resolve, reject) => {
    axios(reqData)
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
