export interface PhotoTO {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
}

export interface PhotoSearchParams {
  query?: string;
  albumId?: number;
}