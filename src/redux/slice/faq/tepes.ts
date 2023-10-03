export type FaqObject = {
  id: number;
  title: string;
  text: string;
}

export interface FaqState {
  isLoading: boolean;
  faqs: FaqObject[]
}
