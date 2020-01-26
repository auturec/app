// import all images
import Cow from '../../../assets/images/associate/animals/cow.svg';
import Hen from '../../../assets/images/associate/animals/hen.svg';
import Pig from '../../../assets/images/associate/animals/pig.svg';

import Bento from '../../../assets/images/associate/food/bento.svg';
import Carrot from '../../../assets/images/associate/food/carrot.svg';
import Onion from '../../../assets/images/associate/food/onion.svg';
import Sushi from '../../../assets/images/associate/food/sushi.svg';

import Bike from '../../../assets/images/associate/vehicles/bike.svg';
import Scooter from '../../../assets/images/associate/vehicles/scooter.svg';
import Train from '../../../assets/images/associate/vehicles/train.svg';
import Truck from '../../../assets/images/associate/vehicles/truck.svg';
import Wheel from '../../../assets/images/associate/vehicles/wheel.svg';

interface ImageCategories {
  [id: string]: string[];
}

const ImageStructure: ImageCategories = {
  Vehicles: [Bike, Scooter, Train, Truck, Wheel],
  Food: [Bento, Carrot, Onion, Sushi],
  Animals: [Cow, Pig, Hen]
};

export const ImageKeys = () => {
  return Object.keys(ImageStructure);
};

export const GameLogic = () => {
  return ImageStructure;
};

export default { GameLogic, ImageKeys };
