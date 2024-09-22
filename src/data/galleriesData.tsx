import PhotosCarousel from "../components/galleries/photos-carousel";
import VideosCarousel from "../components/galleries/videos-carousel"; // Ajoutez cette ligne

export const galleries = [
  {
    id: "photos",
    title: "Photos",
    component: <PhotosCarousel />,
    articleClass: "px-12",
    h3Class: "sr-only",
  },
  {
    id: "videos",
    title: "Videos",
    component: <VideosCarousel />,
    articleClass: "px-12",
    h3Class: "sr-only",
  },
];
