// types.ts

export interface IPhoto {
  name: string;
  url: string;
  authorName: string;
  authorLink: string;
}

export interface IVideo extends IPhoto {
  videoUrl: string;
}

export interface IMedias {
  photos: IPhoto[];
  videos: IVideo[];
}