import { CARDS } from '../shared/cards';
import { CAROUSEL } from '../shared/carousel';
import { IMAGEHEADER } from '../shared/imageheader';
import { MEDIA } from '../shared/media';

export const initialState = {
    cards: CARDS,
    carousel: CAROUSEL,
    imageheader: IMAGEHEADER,
    media: MEDIA
};

export const Reducer = (state = initialState, action) => {
    return state;
};