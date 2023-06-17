import { realtimeTrains } from "realtime-trains-scraper";
const data = async () => {
  await realtimeTrains
    .getTrains("BRV")
    .then((data: JSON) => {
      console.log(data);
    })
    .catch((err: JSON) => {
      console.log(err);
    });
};
console.log(data());
