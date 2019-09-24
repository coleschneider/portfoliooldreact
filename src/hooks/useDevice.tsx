import * as React from 'react';
type UseDeviceCb = () => void
const getIsMobile = () => window.innerWidth <= 768
const useDevice = (cb: UseDeviceCb) => {
    const [isMobile, setDevice] = React.useState(getIsMobile());
    React.useEffect(() => {
        const onResizeHandler = () => {
            if(!isMobile && getIsMobile()){
                cb()
            }
            setDevice(getIsMobile())
        }
        window.addEventListener('resize', onResizeHandler)
        return () => {
            window.removeEventListener('resize', onResizeHandler)
        }
    })
    return [isMobile]
}

export default useDevice