import React from 'react'
import IconLink from './core/IconLink'
import Text from './core/Text'
import Title from './core/Title'

type HeadingWithTextType = {
    title: string;
    style?: string;
    text: string;
    label: string;
    href?: string;
}

function HeadingWithText({ title, style, text, label, href }: HeadingWithTextType) {
    return (
        <div>
            <Title title={ title } style={ style } />
            <Text text={ text } />
            <IconLink label={ label }  href={ href } />
        </div>
    )
}

export default HeadingWithText