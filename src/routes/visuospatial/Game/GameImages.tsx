import Apple from 'assets/images/visuospatial/apple.png';
import Cherry from 'assets/images/visuospatial/cherry.png';
import Pear from 'assets/images/visuospatial/pear.png';
import Ruby from 'assets/images/visuospatial/ruby.png';
import Hen from 'assets/images/visuospatial/hen.png';

interface ImageListFormat {
  [index: number]: { id: number; image: string };
}

const ImageList: ImageListFormat = [
  {
    id: 1,
    image: Apple
  },
  {
    id: 2,
    image: Cherry
  },
  {
    id: 3,
    image: Pear
  },
  {
    id: 4,
    image: Ruby
  },
  {
    id: 5,
    image: Hen
  }
];

export default { ImageList };
