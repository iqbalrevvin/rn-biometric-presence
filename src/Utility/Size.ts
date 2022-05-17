/*
  Calculate size in difference screen size based on standard size.
  Use iPhone 6 specification as a default standard size.
  Only support for Native Potrait mode.
*/
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

// Zeplin use iPhone 6 as a workspace
const base = {
  width: 375,
  height: 667,
  pixelRatio: 2,
  fontScale: 2,
};


const screenSize = {
    base: Math.sqrt((base.height * base.height) + (base.width * base.width)),
    current: Math.sqrt((height * height) + (width * width)),
};

// Calculate the new size into responsive size using screen size percentage.
export const scaleSize = (size: number) => (size / screenSize.base) * screenSize.current;

// Calculate the new size into responsive size using screen width percentage.
export const scaleWidth = (w: number) =>  (w / base.width) * width;

// Calculate the new size into responsive size using screen height percentage.
export const scaleHeight = (h: number) => (h / base.height) * height;

// Calculate the new font size into responsive font size using screen width percentage.
export const scaleFont = (fontSize: number) => (fontSize / base.width) * width;

export default {
    scaleSize,
    scaleWidth,
    scaleHeight,
    scaleFont,
};
