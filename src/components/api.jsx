// import React from 'react'
// import { useEffect, useState } from 'react';

// const [products, setProducts]

// const api = () => {
//   return (
//         useEffect(() => {
//     fetch("https://www.boredapi.com/api/activity")
//       .then((response) => {
//         return response.json();
//       })
//       .then((res) => {
//         //throw new error("mal");
//         setProducts(res);
//       })
//       .catch((e) => {
//         setError(true);
//       })
//       .finally(() => setLoading(false));
//   }, []);
    
//   )
// }

// export default api


















// useEffect(() => {
//     setProducts([
//       {
//         id: 1,
//         image:
//           "https://oldschool.runescape.wiki/images/Infernal_max_cape_detail_animated.gif?a0413",
//         title: "Infernal",
//         price: 260,
//         description:
//           "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
//         stock: 15,
//       },
//       {
//         id: 2,
//         image:
//           "https://oldschool.runescape.wiki/images/archive/20170202215319%21Max_cape_detail.png?5aae9",
//         title: "Max Cape",
//         price: 320,
//         description:
//           "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
//         stock: 20,
//       },
//       {
//         id: 3,
//         image:
//           "https://oldschool.runescape.wiki/images/thumb/Saradomin_max_cape_detail.png/309px-Saradomin_max_cape_detail.png?e6940&20210821230023",
//         title: "TNF",
//         price: 2200,
//         description:
//           "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
//         stock: 20,
//       },
//       {
//         id: 4,
//         image:
//           "https://oldschool.runescape.wiki/images/thumb/Imbued_guthix_max_cape_detail.png/155px-Imbued_guthix_max_cape_detail.png?6adc5",
//         title: "TNF",
//         price: 2200,
//         description:
//           "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
//         stock: 20,
//       },
//       {
//         id: 5,
//         image:
//           "https://oldschool.runescape.wiki/images/thumb/Fire_max_cape_detail.png/77px-Fire_max_cape_detail.png?01d65",
//         title: "TNF",
//         price: 2200,
//         description:
//           "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
//         stock: 20,
//       },
//       {
//         id: 6,
//         image:
//           "https://oldschool.runescape.wiki/images/thumb/Assembler_max_cape_detail.png/77px-Assembler_max_cape_detail.png?0a7a9",
//         title: "TNF",
//         price: 2200,
//         description:
//           "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
//         stock: 20,
//       },
//       {
//         id: 7,
//         image:
//           "https://oldschool.runescape.wiki/images/thumb/Accumulator_max_cape_detail.png/155px-Accumulator_max_cape_detail.png?9aee6",
//         title: "TNF",
//         price: 2200,
//         description:
//           "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
//         stock: 20,
//       },
//       {
//         id: 8,
//         image:
//           "https://oldschool.runescape.wiki/images/thumb/Ardougne_max_cape_detail.png/155px-Ardougne_max_cape_detail.png?18f77",
//         title: "TNF",
//         price: 2200,
//         description:
//           "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
//         stock: 20,
//       },
//       {
//         id: 9,
//         image:
//           "https://oldschool.runescape.wiki/images/thumb/Zamorak_max_cape_detail.png/155px-Zamorak_max_cape_detail.png?f52af",
//         title: "TNF",
//         price: 2200,
//         description:
//           "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
//         stock: 20,
//       },
//       {
//         id: 10,
//         image:
//           "https://oldschool.runescape.wiki/images/thumb/Max_cape_emote.gif/190px-Max_cape_emote.gif?99a54",
//         title: "TNF",
//         price: 2200,
//         description:
//           "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
//         stock: 20,
//       }
     
//     ]);
//   }, []);