import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import useDevice from './hooks/useDevice'
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Helmet from "react-helmet";
const LayoutContainer = styled.div`
    margin: 0 auto;
    display: block;
`;

const App: React.FC = () => {
    const [isOpen, setSidebar] = React.useState(true);
    const [isMobile] = useDevice(() => setSidebar(false))
    return (
    <Router>
        <Helmet meta={[{name: 'description', content: 'Portfolio Website for Cole Schneider'}, {meta: 'keywords', content: 'Web,Developer,cole,schneider,software,engineer'}]}/>
        <LayoutContainer>
        <Header isOpen={isOpen} isMobile={isMobile} onClick={() => setSidebar(!isOpen)} />
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
        </LayoutContainer>
    </Router>
    );
};

export default App;
