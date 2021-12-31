const breakpoints = {
  desktop: 992,
  tablet: 768,
  mobile: 576,
};

export const media = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};
