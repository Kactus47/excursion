export type ExcursionObject = {
  id: string;
  infoTour: {
    duration: number;
    days: string;
    time: string[];
    transfer: number;
    callTimes: string;
  }
  location: string;
  placeDescription: {
    bottomText: string;
    photoReport: [{
      fullImage: string;
      teazer: string;
    }];
    title: string;
    topText: string;
    type: string;
  }
  price: [{
    priceChildren: number;
    priceGrown: number;
    title: string;
  }];
  recomendation: number;
  sliderPhoto: string[];
  teazerPhoto: string;
  teazerPhotoSmall: string;
  title: string;
  typeTur: string;
}

export interface ExcursionsSlice {
  isLoading: boolean;
  excursions: ExcursionObject[]
}