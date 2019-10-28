type DimensionCallback = (dimensions: ClientRect | DOMRect) => void
type Icons = 'PointerRight' | 'Close' | 'LeftArrow'

interface Card {
  description: string[]
  id: string | number
  cardImage: string
  placeholder: string
}

type ConstantPaths = '/mywork' | '/' | '/static/media/Resume.pdf'

function shallowFn<C extends Component, P = C['props'], S = C['state']>(
  node: import('react').ReactElement<P>,
  options?: import('react').ShallowRendererProps
): import('enzyme').ShallowWrapper<P, S, C>;

 function shallowFn<P>(node: import('react').ReactElement<P>, options?: import('enzyme').ShallowRendererProps): import('enzyme').ShallowWrapper<P, any>;
 function shallowFn<P, S>(node: import('react').ReactElement<P>, options?: import('enzyme').ShallowRendererProps): import('enzyme').ShallowWrapper<P, S>;

 declare const shallow: typeof shallowFn

 declare namespace NodeJS {
  interface Global {
    shallow: typeof shallowFn;
    mount: import('enzyme').MountRendererProps;
    render: import('enzyme').render;

    }
  }