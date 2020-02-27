import BLACK_BLUE_BTM_LEFT from 'assets/images/tiles/black_blue_btm_left.svg';
import BLACK_BLUE_BTM_RIGHT from 'assets/images/tiles/black_blue_btm_right.svg';
import BLACK_BLUE_TOP_LEFT from 'assets/images/tiles/black_blue_top_left.svg';
import BLACK_BLUE_TOP_RIGHT from 'assets/images/tiles/black_blue_top_right.svg';
import BLUE_TILE from 'assets/images/tiles/blue_tile.svg';
import BLACK_TILE from 'assets/images/tiles/black_tile.svg';
import GREY_TILE from 'assets/images/tiles/grey_tile.svg';

const TilesImageList = [
  BLACK_BLUE_BTM_LEFT,
  BLACK_BLUE_BTM_RIGHT,
  BLACK_BLUE_TOP_LEFT,
  BLACK_BLUE_TOP_RIGHT,
  BLUE_TILE,
  BLACK_TILE
];

export const TilesImageMap = () => {
  return TilesImageList;
};

export default { TilesImageMap, GREY_TILE };
