import React from 'react'

import {Main, MenuList, MenuItem} from './nav-style'

export default function Nav({children}) {
    return (
        <Main>
            <MenuList>
                {children && children.map(menuItem => {
                    return <MenuItem>
                        {menuItem}
                    </MenuItem>
                })}
            </MenuList>
        </Main>
    )
}
