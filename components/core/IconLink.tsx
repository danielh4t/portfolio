import React from 'react'
import Arrow from '../icons/ArrowIcon';

type LinkType = {
    label: string;
    href?: string;
}

function IconLink({ label, href }: LinkType) {
    return (
            <a href={ href }>
                <div className='flex items-center space-x-1 hover:underline'>
                    <span>
                        { label }
                    </span>
                    <Arrow/>
                </div>
            </a>
    )
}

export default IconLink