
import 'jest-styled-components'
import { emSizes } from '../../theme'
import * as React from 'react';
import * as Section from './Section';


describe('Section Styles', () => {
    it('Main', () => {
        const Tree = mount(<Section.Main />)
        expect(Tree.find('Main')).toHaveStyleRule('margin-left', '280px', {
            media: '(min-width: 48em)'
        })
    })
    
    it('Wrapper', () => {
        const Tree = mount(<Section.Wrapper />)
        expect(Tree.find('Wrapper')).toHaveStyleRule('padding', '3rem', {
            media: `(min-width: ${emSizes.desktopMin})`
        })
        expect(Tree.find('Wrapper')).toHaveStyleRule('padding', '1rem')
    })
    it('Container', () => {
        const Tree = mount(<Section.Container />)
        const StyledWrapper = Tree.find('Container')
        expect(StyledWrapper).toHaveStyleRule('max-width', '540px', {
            media: `(min-width: ${emSizes.orientationMin})`
        })
        expect(StyledWrapper).toHaveStyleRule('max-width', '720px', {
            media: `(min-width: ${emSizes.tabletMin})`
        })
        expect(StyledWrapper).toHaveStyleRule('max-width', '960px', {
            media: `(min-width: ${emSizes.desktopMin})`
        })
        expect(StyledWrapper).toHaveStyleRule('max-width', '1140px', {
            media: `(min-width: ${emSizes.desktopHDMin})`
        })      
    })
    it('Heading', () => {
        const Tree = mount(<Section.Heading />)
        const StyleComponent = Tree.find('Heading')
        expect(StyleComponent).toHaveStyleRule('margin-bottom', '4em')
        expect(StyleComponent).toHaveStyleRule('margin-bottom', '3em', {
            media: `(max-width: ${emSizes.tablet})`
        })
    })
})