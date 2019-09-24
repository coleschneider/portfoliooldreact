import {
  css,
  ThemedCssFunction,
  DefaultTheme,
  CSSObject,
  InterpolationFunction,
  ThemeProps,
  FlattenSimpleInterpolation
} from 'styled-components';

type Device =
  | 'desktopHDMin'
  | 'desktop'
  | 'desktopMin'
  | 'tablet'
  | 'tabletMin'
  | 'orientationMin'
  | 'phone';

type Size = {
  [key in Device]: number;
};

export const sizes: Size = {
  desktopHDMin: 1200,
  desktop: 992,
  desktopMin: 992,
  tablet: 768,
  tabletMin: 768,
  orientationMin: 576,
  phone: 376
};

export const emSizes = (Object.keys(sizes) as Device[]).reduce(
  (acc, curr) => {
    acc[curr] = `${sizes[curr] / 16}em`;
    return acc;
  },
  {} as Record<Device, string>
);

export const media = (Object.keys(emSizes) as Device[]).reduce(
  (accumulator, label) => {
    const constraintLabel = label.endsWith('Min') ? 'min-width' : 'max-width';
    const constraint = `${constraintLabel}: ${emSizes[label]}`;
    // @ts-ignore
    accumulator[label] = (...args) => css`
      @media (${constraint}) {
        // @ts-ignore
        ${css(...args)}
      }
    `;
    return accumulator;
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<DefaultTheme> }
);
