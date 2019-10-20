import {
  css,
  DefaultTheme,
  ThemedCssFunction,
  StyledComponentPropsWithRef,
  ThemedStyledProps
} from 'styled-components'
import PropTypes, { Requireable } from 'prop-types'

type Dimensions = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const DIMENSIONS: Dimensions[] = ['xs', 'sm', 'md', 'lg', 'xl']
export type ConfigDimensions<T> = {
  [k in Dimensions]: T
}
export interface Baseconfig {
  mediaQuery: 'only screen'
  columns: ConfigDimensions<number>
  gutterWidth: ConfigDimensions<number>
  paddingWidth: ConfigDimensions<number>
  container: ConfigDimensions<number | 'full'>
  breakpoints: ConfigDimensions<number>
  [key: string]: any
}

export const BASE_CONF: Baseconfig = {
  mediaQuery: 'only screen',
  columns: {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12,
    xl: 12
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5
  },
  container: {
    xs: 'full', // 'full' = max-width: 100%
    sm: 'full', // 'full' = max-width: 100%
    md: 'full', // 'full' = max-width: 100%
    lg: 90, // max-width: 1440px
    xl: 90 // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 90, // 1440px
    xl: 120 // 1920px
  }
}
export interface ConfigMedia extends Baseconfig {
  media: ConfigDimensions<ThemedCssFunction<DefaultTheme>>
}

function makeMedia(media: string): ThemedCssFunction<DefaultTheme> {
  return (...args) => css`
    @media ${media} {
      ${css(...args)}
    }
  `
}

export const media = (Object.keys(BASE_CONF.breakpoints) as Dimensions[]).reduce(
  (media, breakpoint) => {
    const breakpointWidth = BASE_CONF.breakpoints[breakpoint]
    media[breakpoint] = makeMedia(
      [BASE_CONF.mediaQuery, breakpointWidth >= 0 && `(min-width: ${breakpointWidth}rem)`]
        .filter(Boolean)
        .join(' and ')
    )
    return media
  },
  {} as ConfigDimensions<ThemedCssFunction<DefaultTheme>>
)

function transformConfig(config: Baseconfig): ConfigMedia {
  const keys = Object.keys(config.breakpoints) as Dimensions[]
  config.media = keys.reduce(
    (media, breakpoint) => {
      const breakpointWidth = config.breakpoints[breakpoint]
      media[breakpoint] = makeMedia(
        [config.mediaQuery, breakpointWidth >= 0 && `(min-width: ${breakpointWidth}rem)`]
          .filter(Boolean)
          .join(' and ')
      )
      return media
    },
    {} as ConfigDimensions<ThemedCssFunction<DefaultTheme>>
  )
  return config as ConfigMedia
}
function config(props: ThemedStyledProps<ConfigMedia, DefaultTheme>) {
  const conf = transformConfig({ ...BASE_CONF })
  return conf
}
// function config(props: StyledComponentPropsWithRef<any>){
//         console.log
//         const conf = transformConfig({...BASE_CONF})
//     console.log(conf)
// }
export const sizeProps = () =>
  DIMENSIONS.reduce(
    (acc, key) => {
      acc[key] = PropTypes.number
      return acc
    },
    {} as { [k in Dimensions]: Requireable<number> }
  )
export default config
