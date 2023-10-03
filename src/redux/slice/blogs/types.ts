export type BlogsObject = {
  id: string;
  title: string;
  descriptionTitle: string;
  text: string;
  postDate: number;
  image: string;
  imagePoster: string;
}

export interface BlogsSlice {
  isLoading: boolean;
  blogs: BlogsObject[]
}