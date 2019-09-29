import * as React from "react";
import { useLocation, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import useDevice from './hooks/useDevice'
import usePrevious from './hooks/usePrevious'
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header/Header";
import About, {AboutSections} from "./components/About/About";
import Helmet from "react-helmet";
import { useTransition, animated, useChain } from "react-spring";


const LayoutContainer = styled.div`
    margin: 0 auto;
    display: block;
`;

const App: React.FC = () => {
    const routeRef = React.useRef();
    const routeItem = React.useRef()
    const [isOpen, setSidebar] = React.useState(true);
    
    const [isMobile] = useDevice(() => setSidebar(false))
    const location = useLocation()
    
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
      })
    return (
    <LayoutContainer>
    <Helmet meta={[{name: 'description', content: 'Portfolio Website for Cole Schneider'}, {meta: 'keywords', content: 'Web,Developer,cole,schneider,software,engineer'}]}/>
        <Header isOpen={isOpen} isMobile={isMobile} onClick={() => setSidebar(!isOpen)} />
        {transitions.map(({item, props, key}) => (
        <animated.div key={key} style={props}>
            <Switch location={item}>
                <Route exact path="/" render={(props) => (
                    <Home {...props} />
                )} />
            </Switch>
            </animated.div>
        ))}
        </LayoutContainer>
    );
};

export default App;
