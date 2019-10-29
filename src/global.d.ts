type DimensionCallback = (dimensions: ClientRect | DOMRect) => void
type Icons = 'PointerRight' | 'Close' | 'LeftArrow'

interface Card {
  description: string[]
  id: string | number
  cardImage: string
  placeholder: string
}

type ConstantPaths = '/mywork' | '/' | '/static/media/Resume.pdf'

// function shallowFn<C extends Component, P = C['props'], S = C['state']>(
//   node: import('react').ReactElement<P>,
//   options?: import('react').ShallowRendererProps
// ): import('enzyme').ShallowWrapper<P, S, C>;

//  function shallowFn<P>(node: import('react').ReactElement<P>, options?: import('enzyme').ShallowRendererProps): import('enzyme').ShallowWrapper<P, any>;
//  function shallowFn<P, S>(node: import('react').ReactElement<P>, options?: import('enzyme').ShallowRendererProps): import('enzyme').ShallowWrapper<P, S>;

//   function mountFn<C extends Component, P = C['props'], S = C['state']>(
//   node: import('react').ReactElement<P>,
//   options?: import('enzyme').MountRendererProps
// ): import('react').ReactWrapper<P, S, C>;
//  function mountFn<P>(node: import('react').ReactElement<P>, options?: import('enzyme').MountRendererProps): import('react').ReactWrapper<P, any>;
//  function mountFn<P, S>(node: import('react').ReactElement<P>, options?: import('enzyme').MountRendererProps): import('react').ReactWrapper<P, S>;

//  function renderFn<P, S>(node: import('react').ReactElement<P>, options?: any): import('cheerio').Cheerio;
type renderFn = typeof import('enzyme').render
type mountFn = typeof import('enzyme').mount
type shallowFn = typeof import('enzyme').shallow

declare const shallow: shallowFn
declare const mount: mountFn
declare const render: renderFn
type c = typeof import('enzyme').render
declare namespace NodeJS {
  interface Global {
    shallow: shallowFn
    mount: mountFn
    render: renderFn
    IS_TEST: boolean
    IS_TEST: boolean
    WEBPACK_BUILD_TYPE: 'development' | 'production'
    GA_ID: 'test-id'
  }
}

// declare namespace jest {
//   interface AsymmetricMatcher {
//     $$typeof: Symbol;
//     sample?: string | RegExp | object | Array<any> | Function;
//   }

//   type Value = string | number | RegExp | AsymmetricMatcher | undefined;

//   interface Options {
//     media?: string;
//     modifier?: string;
//     supports?: string;
//   }

//   interface Matchers<R> {
//     toHaveStyleRule(property: string, value?: Value, options?: Options): R;
//   }
// }
