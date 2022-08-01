import React from "react";
import ThumbnailItem from "./ThumbnailItem";

import classes from "./Thumbnails.module.css";

// const DUMMY = [
//   {
//     adult: false,
//     backdrop_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
//     belongs_to_collection: {
//       id: 948485,
//       name: "The Batman Collection",
//       poster_path: "/rTCJB5axQ8XOmGbpJBsiHkhKq14.jpg",
//       backdrop_path: "/qS2ViQwlWUECiAdkIuEaJZoq0QW.jpg",
//     },
//     budget: 185000000,
//     genres: [
//       {
//         id: 80,
//         name: "Crime",
//       },
//       {
//         id: 9648,
//         name: "Mystery",
//       },
//       {
//         id: 53,
//         name: "Thriller",
//       },
//     ],
//     homepage: "https://www.thebatman.com",
//     id: 414906,
//     imdb_id: "tt1877830",
//     original_language: "en",
//     original_title: "The Batman",
//     overview:
//       "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
//     popularity: 814.74,
//     poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
//     production_companies: [
//       {
//         id: 174,
//         logo_path: "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
//         name: "Warner Bros. Pictures",
//         origin_country: "US",
//       },
//       {
//         id: 101405,
//         logo_path: null,
//         name: "6th & Idaho",
//         origin_country: "US",
//       },
//       {
//         id: 119245,
//         logo_path: null,
//         name: "Dylan Clark Productions",
//         origin_country: "US",
//       },
//       {
//         id: 128064,
//         logo_path: "/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
//         name: "DC Films",
//         origin_country: "US",
//       },
//     ],
//     production_countries: [
//       {
//         iso_3166_1: "US",
//         name: "United States of America",
//       },
//     ],
//     release_date: "2022-03-01",
//     revenue: 770836163,
//     runtime: 177,
//     spoken_languages: [
//       {
//         english_name: "English",
//         iso_639_1: "en",
//         name: "English",
//       },
//     ],
//     status: "Released",
//     tagline: "Unmask the truth.",
//     title: "The Batman",
//     video: false,
//     vote_average: 7.758,
//     vote_count: 5689,
//   },

//   {
//     adult: false,
//     backdrop_path: "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
//     belongs_to_collection: {
//       id: 618529,
//       name: "Doctor Strange Collection",
//       poster_path: "/oa5uQOTY9Y4ERNrsDk7E0eC1E3h.jpg",
//       backdrop_path: "/5ZuctJh5uX5L2dz1CjA7WsTJwZk.jpg",
//     },
//     budget: 200000001,
//     genres: [
//       {
//         id: 14,
//         name: "Fantasy",
//       },
//       {
//         id: 28,
//         name: "Action",
//       },
//       {
//         id: 12,
//         name: "Adventure",
//       },
//     ],
//     homepage:
//       "https://www.marvel.com/movies/doctor-strange-in-the-multiverse-of-madness",
//     id: 453395,
//     imdb_id: "tt9419884",
//     original_language: "en",
//     original_title: "Doctor Strange in the Multiverse of Madness",
//     overview:
//       "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
//     popularity: 3590.164,
//     poster_path: "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
//     production_companies: [
//       {
//         id: 420,
//         logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
//         name: "Marvel Studios",
//         origin_country: "US",
//       },
//       {
//         id: 176762,
//         logo_path: null,
//         name: "Kevin Feige Productions",
//         origin_country: "US",
//       },
//     ],
//     production_countries: [
//       {
//         iso_3166_1: "US",
//         name: "United States of America",
//       },
//     ],
//     release_date: "2022-05-04",
//     revenue: 953200000,
//     runtime: 126,
//     spoken_languages: [
//       {
//         english_name: "Cantonese",
//         iso_639_1: "cn",
//         name: "广州话 / 廣州話",
//       },
//       {
//         english_name: "English",
//         iso_639_1: "en",
//         name: "English",
//       },
//       {
//         english_name: "Spanish",
//         iso_639_1: "es",
//         name: "Español",
//       },
//     ],
//     status: "Released",
//     tagline: "Enter a new dimension of Strange.",
//     title: "Doctor Strange in the Multiverse of Madness",
//     video: false,
//     vote_average: 7.512,
//     vote_count: 4880,
//   },

//   {
//     adult: false,
//     backdrop_path: "/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
//     belongs_to_collection: {
//       id: 131296,
//       name: "Thor Collection",
//       poster_path: "/yw7gr7DhHHVTLlO8Se8uH17TDMA.jpg",
//       backdrop_path: "/3KL8UNKFWgIKXzLHjwY0uwgjzYl.jpg",
//     },
//     budget: 250000000,
//     genres: [
//       {
//         id: 28,
//         name: "Action",
//       },
//       {
//         id: 12,
//         name: "Adventure",
//       },
//       {
//         id: 14,
//         name: "Fantasy",
//       },
//     ],
//     homepage: "https://www.marvel.com/movies/thor-love-and-thunder",
//     id: 616037,
//     imdb_id: "tt10648342",
//     original_language: "en",
//     original_title: "Thor: Love and Thunder",
//     overview:
//       "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
//     popularity: 18514.843,
//     poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
//     production_companies: [
//       {
//         id: 420,
//         logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
//         name: "Marvel Studios",
//         origin_country: "US",
//       },
//       {
//         id: 176762,
//         logo_path: null,
//         name: "Kevin Feige Productions",
//         origin_country: "US",
//       },
//     ],
//     production_countries: [
//       {
//         iso_3166_1: "US",
//         name: "United States of America",
//       },
//     ],
//     release_date: "2022-07-06",
//     revenue: 598220698,
//     runtime: 119,
//     spoken_languages: [
//       {
//         english_name: "English",
//         iso_639_1: "en",
//         name: "English",
//       },
//     ],
//     status: "Released",
//     tagline: "The one is not the only.",
//     title: "Thor: Love and Thunder",
//     video: false,
//     vote_average: 6.709,
//     vote_count: 1423,
//   },

//   {
//     adult: false,
//     backdrop_path: "/wEQ0Pu2jEyqHKOJRAdAKaeTFCML.jpg",
//     belongs_to_collection: {
//       id: 87096,
//       name: "Avatar Collection",
//       poster_path: "/gC3tW9a45RGOzzSh6wv91pFnmFr.jpg",
//       backdrop_path: "/6qkJLRCZp9Y3ovXti5tSuhH0DpO.jpg",
//     },
//     budget: 250000000,
//     genres: [
//       {
//         id: 878,
//         name: "Science Fiction",
//       },
//       {
//         id: 28,
//         name: "Action",
//       },
//       {
//         id: 12,
//         name: "Adventure",
//       },
//     ],
//     homepage: "https://www.avatar.com/movies/avatar-the-way-of-water",
//     id: 76600,
//     imdb_id: "tt1630029",
//     original_language: "en",
//     original_title: "Avatar: The Way of Water",
//     overview:
//       "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
//     popularity: 146.428,
//     poster_path: "/fjaoD0ZfPOf2C5BalCziPUaf4Zk.jpg",
//     production_companies: [
//       {
//         id: 574,
//         logo_path: "/iB6GjNVHs5hOqcEYt2rcjBqIjki.png",
//         name: "Lightstorm Entertainment",
//         origin_country: "US",
//       },
//       {
//         id: 127928,
//         logo_path: "/h0rjX5vjW5r8yEnUBStFarjcLT4.png",
//         name: "20th Century Studios",
//         origin_country: "US",
//       },
//     ],
//     production_countries: [
//       {
//         iso_3166_1: "US",
//         name: "United States of America",
//       },
//     ],
//     release_date: "2022-12-14",
//     revenue: 0,
//     runtime: 0,
//     spoken_languages: [
//       {
//         english_name: "English",
//         iso_639_1: "en",
//         name: "English",
//       },
//     ],
//     status: "Post Production",
//     tagline: "Wherever we go, this family is our fortress",
//     title: "Avatar: The Way of Water",
//     video: false,
//     vote_average: 0.0,
//     vote_count: 0,
//   },
//   // 20220729170028
//   // https://api.themoviedb.org/3/movie//438148?api_key=40a83ffba11bd9299a9e6a2c60b74c41

//   {
//     adult: false,
//     backdrop_path: "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
//     belongs_to_collection: {
//       id: 544669,
//       name: "Minions Collection",
//       poster_path: "/AfYGGvHufd8cIosTvBtnzUExxe4.jpg",
//       backdrop_path: "/62Qe28oi9PaK3P2ljDYUDTGAyST.jpg",
//     },
//     budget: 85000000,
//     genres: [
//       {
//         id: 10751,
//         name: "Family",
//       },
//       {
//         id: 16,
//         name: "Animation",
//       },
//       {
//         id: 12,
//         name: "Adventure",
//       },
//       {
//         id: 35,
//         name: "Comedy",
//       },
//       {
//         id: 14,
//         name: "Fantasy",
//       },
//     ],
//     homepage: "https://www.minionsmovie.com/",
//     id: 438148,
//     imdb_id: "tt5113044",
//     original_language: "en",
//     original_title: "Minions: The Rise of Gru",
//     overview:
//       "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
//     popularity: 7110.952,
//     poster_path: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
//     production_companies: [
//       {
//         id: 33,
//         logo_path: "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
//         name: "Universal Pictures",
//         origin_country: "US",
//       },
//       {
//         id: 6704,
//         logo_path: "/acf3yqGq8Bm9smHwkQGRDVO5CM5.png",
//         name: "Illumination Entertainment",
//         origin_country: "US",
//       },
//     ],
//     production_countries: [
//       {
//         iso_3166_1: "US",
//         name: "United States of America",
//       },
//     ],
//     release_date: "2022-06-29",
//     revenue: 640000000,
//     runtime: 87,
//     spoken_languages: [
//       {
//         english_name: "English",
//         iso_639_1: "en",
//         name: "English",
//       },
//     ],
//     status: "Released",
//     tagline: "A villain will rise.",
//     title: "Minions: The Rise of Gru",
//     video: false,
//     vote_average: 7.5,
//     vote_count: 527,
//   },
// ];

function Thumbnails(props) {
  const movieList = props.thumbnailList.map(show => (
    <ThumbnailItem
      key={show.id}
      id={show.id}
      url={show.posterUrl}
      title={show.title}
      rate={Math.ceil(show.rating * 10)}
      media={show.media}
    />
  ));

  return (
    <div className={classes.section}>
      <h2>Recommend for you</h2>

      <div className={classes.container}>{movieList}</div>
    </div>
  );
}

export default Thumbnails;
