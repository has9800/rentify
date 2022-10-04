import { LandingPg } from "@/components/index";

export default function Home() {
  return (
    <div className="">
      <LandingPg />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   try {
//     const fetchUrl = "";

//     const options = {
//       headers: {
//         "X-API-KEY": process.env.ACCESS_KEY,
//         "Access-Control-Allow-Origin": "*",
//       },
//     };

//     const imagesResponse = await fetch(fetchUrl, options);

//     const { data: imagesData } = await imagesResponse.json();

//     // map over image urls and add to an array to later fetch
//     const images = [];
//     imagesData.forEach(({ Key }) =>
//       images.push(
//         `https://rk41tqnpyd.execute-api.eu-west-2.amazonaws.com/dev/signed-url?key=${Key}` //replace url with mine
//       )
//     );

//     // fetch those urls stored in the array in prev lines
//     const requests = images.map((url) => fetch(url, options));

//     const responses = await Promise.all(requests);

//     const data = [];
//     await Promise.all(
//       responses.map(async (r) => {
//         const json = await r.json();

//         data.push(json);
//       })
//     );

//     if (!data) throw new Error("Data not found ~ API");

//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// }
