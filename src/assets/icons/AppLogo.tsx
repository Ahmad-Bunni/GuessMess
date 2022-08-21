import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={1600} height={1600} viewBox="0 0 1200 1200" {...props}>
    <Path d="M120 555v195h360v-15H135V375h930v360H720v15h360V360H120v195z" />
    <Path d="M747.3 479.5c-9.9 4.3-22.4 21.9-39.6 56-8.6 17-6.8 17.6-17.8-5.3-10.4-21.3-13.4-25.5-20.2-27.3-6.1-1.6-20.1-.6-26.8 2-13 5-20.4 16.4-17.9 27.6 1.7 7.3 8.8 11.5 16.2 9.4 7-1.9 10.3-10.3 5.7-14.4-1.9-1.8-2.1-1.8-5.3-.1-8.8 4.7-13.3-3.6-6.7-12.4 2.2-3 9.4-6.8 14.3-7.7 3.2-.5 4.1-.1 6.9 2.6l3.2 3.2-.7 16c-.7 16.6-3.2 46.2-4.2 50.8-2.3 9.7-9.4 16.1-17.7 16.1-4.9 0-10-3.2-11.2-7-1-3.2-5-2.6-6.5.9-2.7 6.5 2.8 9.6 17 9.6 7.9 0 10.2-.4 13.7-2.3 9.5-5 12.9-14 14.4-37.7.6-8.8 1.4-19.2 1.8-23l.7-7 11.7 23.2c11.7 23.2 11.7 23.3 15 23.3 2.9 0 3.4-.5 5.1-4.8 2.9-7.3 17.2-36.5 18.9-38.6 1.3-1.8 1.5-1.3 2.1 6.5 1.2 14.4 4.6 44.1 5.8 50.1.7 3.8 1.9 6.7 3.5 8.2 4.6 4.6 14.9 4.4 24.4-.5 5.2-2.6 5-4-.6-3.2-4.1.5-4.5.4-5.4-2-1.7-4.3-9.1-77-9.1-88.7 0-12.5 13.3-24.4 18.4-16.5.9 1.4 2.3 2.5 3.1 2.5 3.8 0 3.7-8.9 0-10.4-2.8-1-8.8-.6-12.2.9zM301.8 503.9c-7.6 2.5-14.8 7.2-20.3 13.3-8.6 9.5-12.5 21.3-12.5 37.3 0 15 3.3 25.2 10.9 33.7 7.8 8.8 22.3 13.7 36.8 12.4l7.3-.7-.6 6.3c-1.3 13.9-7.8 21.8-18.5 22.6-6.7.5-9.6-.9-12.5-5.8-3.1-5.1-7.4-3-7.4 3.5 0 6.3 18.9 9 33.1 4.6 11.7-3.7 18.6-10.3 22-21.2 1.6-5.2 1.9-9.3 1.9-28.5V559h4.8c4.5 0 4.8-.2 4.8-2.5V554H312v2.5c0 2.2.4 2.4 5.8 2.7l5.7.3.3 15.9c.2 10.8-.1 16.3-.9 17.2-.7.9-3.3 1.4-7.4 1.4-15.5 0-22.8-10.6-24.1-35-1.3-23.5 6.7-43.5 20-49.9 8.9-4.4 12.8-2.3 15.1 8.3 2.1 9.3 3.2 10.9 7.6 10.8 2.5-.1 4.2-.9 6.2-3.2 5.6-6.2 2.5-15.2-6.8-19.9-6.9-3.4-23.2-4.1-31.7-1.2zM368.2 534.1c-4 2-8.8 6.7-7.8 7.6.2.3 1.4-.1 2.6-.7 4.7-2.5 4.9-1.8 5.2 24.7.3 21.5.5 25.2 2.1 28 3.8 7.1 11.4 9 20 5 3-1.3 7.2-4.1 9.4-6.1s4.3-3.6 4.7-3.6c.3 0 .6 1.4.6 3 0 6.4 8.2 10.5 16.2 8.1 4.3-1.3 12.1-7.8 11.2-9.3-.3-.5-1.4-.2-2.5.8-1 .9-2.5 1.4-3.4 1.1-1.3-.6-1.5-4.1-1.5-26 0-16-.4-26.6-1.1-28.6-2.9-8.2-17-8.1-24.8.3-2.4 2.5-2.2 5.1.1 2.8 1.7-1.7 4.5-1.5 5.2.4.3.9.6 10.5.6 21.4v19.8l-4 3.6c-5.3 4.8-8.8 5.6-11.2 2.6-1.6-2-1.8-4.5-1.8-26.6 0-24 0-24.3-2.3-27-3.3-3.8-11.4-4.4-17.5-1.3zM466.9 534.4c-7.1 2.9-11 5.6-14.9 10.6-10.1 12.7-10.2 34.2-.3 45.5 8.8 10 23.9 12.9 36.8 7 4.7-2.1 12.5-8.8 12.5-10.7 0-1.2-.6-1-5.7 2.2-7.5 4.8-15.5 4-22.2-2.3-3.6-3.4-8.1-11.9-8.1-15.2 0-1.5 3.6-4.1 14.9-10.7 12.4-7.2 15.1-9.3 16.5-12.3 2-4.1 1-8.9-2.4-12-5.4-4.9-18-5.9-27.1-2.1zm11.5 5.9c2.7 2.7 4.3 10.6 2.7 13.6-1 1.7-14.7 10.1-16.5 10.1-.9 0 .1-9.5 1.5-16.2 1.2-5.1 5-9.8 8.1-9.8 1 0 2.9 1 4.2 2.3zM522.5 533.9c-6.4 2.9-9.5 7.2-9.5 13.4 0 6.9 2.5 11.5 11.6 21.7 11.1 12.4 12.7 16.8 8 21.5-4.4 4.4-13.9 4.2-18.1-.5-1.9-2.1-4.5-2.7-4.5-1.1 0 .5 2.1 2.8 4.7 5 8.2 7.3 20.7 9 30.1 4.2 4.6-2.3 6.7-4.6 8.7-9.4 3.7-9 .8-16.7-10.9-28.1-4.5-4.4-9.1-9.3-10.3-11-2.8-3.6-3-8.7-.5-10.9 2.4-2.2 9.5-2.2 11.7-.1 1.5 1.6 1.5 1.9-.9 4.1-1.4 1.3-2.6 2.9-2.6 3.6 0 4.3 8 5.2 10.6 1.2 3.2-4.9-1.2-12.5-8.5-14.5-5.7-1.6-15.1-1.2-19.6.9zM578.5 533.9c-6.4 2.9-9.5 7.2-9.5 13.4 0 6.9 2.5 11.5 11.6 21.7 11.1 12.4 12.7 16.8 8 21.5-4.4 4.4-13.9 4.2-18.1-.5-1.9-2.1-4.5-2.7-4.5-1.1 0 .5 2.1 2.8 4.7 5 8.2 7.3 20.7 9 30.1 4.2 4.6-2.3 6.7-4.6 8.7-9.4 3.7-9 .8-16.7-10.9-28.1-4.5-4.4-9.1-9.3-10.3-11-2.8-3.6-3-8.7-.5-10.9 2.4-2.2 9.5-2.2 11.7-.1 1.5 1.6 1.5 1.9-.9 4.1-1.4 1.3-2.6 2.9-2.6 3.6 0 4.3 8 5.2 10.6 1.2 3.2-4.9-1.2-12.5-8.5-14.5-5.7-1.6-15.1-1.2-19.6.9zM788.9 534.4c-7.1 2.9-11 5.6-14.9 10.6-10.1 12.7-10.2 34.2-.3 45.5 8.8 10 23.9 12.9 36.8 7 4.7-2.1 12.5-8.8 12.5-10.7 0-1.2-.6-1-5.7 2.2-7.5 4.8-15.5 4-22.2-2.3-3.6-3.4-8.1-11.9-8.1-15.2 0-1.5 3.6-4.1 14.9-10.7 12.4-7.2 15.1-9.3 16.5-12.3 2-4.1 1-8.9-2.4-12-5.4-4.9-18-5.9-27.1-2.1zm11.5 5.9c2.7 2.7 4.3 10.6 2.7 13.6-1 1.7-14.7 10.1-16.5 10.1-.9 0 .1-9.5 1.5-16.2 1.2-5.1 5-9.8 8.1-9.8 1 0 2.9 1 4.2 2.3zM844.5 533.9c-6.4 2.9-9.5 7.2-9.5 13.4 0 6.9 2.5 11.5 11.6 21.7 11.1 12.4 12.7 16.8 8 21.5-4.4 4.4-13.9 4.2-18.1-.5-1.9-2.1-4.5-2.7-4.5-1.1 0 .5 2.1 2.8 4.7 5 8.2 7.3 20.7 9 30.1 4.2 4.6-2.3 6.7-4.6 8.7-9.4 3.7-9 .8-16.7-10.9-28.1-4.5-4.4-9.1-9.3-10.3-11-2.8-3.6-3-8.7-.5-10.9 2.4-2.2 9.5-2.2 11.7-.1 1.5 1.6 1.5 1.9-.9 4.1-1.4 1.3-2.6 2.9-2.6 3.6 0 4.3 8 5.2 10.6 1.2 3.2-4.9-1.2-12.5-8.5-14.5-5.7-1.6-15.1-1.2-19.6.9zM900.5 533.9c-6.4 2.9-9.5 7.2-9.5 13.4 0 6.9 2.5 11.5 11.6 21.7 11.1 12.4 12.7 16.8 8 21.5-4.4 4.4-13.9 4.2-18.1-.5-1.9-2.1-4.5-2.7-4.5-1.1 0 .5 2.1 2.8 4.7 5 8.2 7.3 20.7 9 30.1 4.2 4.6-2.3 6.7-4.6 8.7-9.4 3.7-9 .8-16.7-10.9-28.1-4.5-4.4-9.1-9.3-10.3-11-2.8-3.6-3-8.7-.5-10.9 2.4-2.2 9.5-2.2 11.7-.1 1.5 1.6 1.5 1.9-.9 4.1-1.4 1.3-2.6 2.9-2.6 3.6 0 4.3 8 5.2 10.6 1.2 3.2-4.9-1.2-12.5-8.5-14.5-5.7-1.6-15.1-1.2-19.6.9zM553 685v18h29v29h36v-29h29v-36h-94v18zm29 0v11h-22v-22h22v11zm29 0v11h-22v-22h22v11zm29 0v11h-22v-22h22v11zm-29 29v11h-22v-22h22v11z" />
    <Path d="M525 771.5V818h150v-93h-35v28h-29v29h-22v-29h-29v-28h-35v46.5zm28-29V753h-22v-21h22v10.5zm116 0V753h-22v-21h22v10.5zM553 771v11h-22v-10.3c0-5.7.3-10.7.7-11 .3-.4 5.3-.7 11-.7H553v11zm29 0v11h-22v-10.3c0-5.7.3-10.7.7-11 .3-.4 5.3-.7 11-.7H582v11zm57.8.2.3 10.8H618v-22.1l10.8.3 10.7.3.3 10.7zm29 0 .3 10.8H647v-22.1l10.8.3 10.7.3.3 10.7zM553 800v11h-22v-22h22v11zm29 0v11h-22v-22h22v11zm29 0v11h-22v-22h22v11zm29 0v11h-22v-22h22v11zm29 0v11h-22v-22h22v11z" />
  </Svg>
);

export default SvgComponent;
