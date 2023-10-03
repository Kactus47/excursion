export type ReviewsObject = {
  id: number;
  name: string;
  text: string;
  isFront: number;
}

export interface ReviewsSlice {
  isLoading: boolean;
  reviews: ReviewsObject[]
}