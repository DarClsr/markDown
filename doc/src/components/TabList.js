
import React, { useState } from 'react'
import Prototype from 'prop-types'
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './TabList.scss'


const Tablist = ({ tabs, activeId, unSaveIds, onTabClick, onCloseTab }) => {

    return (
        <ul className="nav nav-pills tablist-component">
            {
                tabs.map(v => {
                    if(v){
                        const unsaved=unSaveIds.includes(v&&v.id)
                        const fcClassName = classNames({
                            'nav-link': true,
                            'active': v&&v.id === activeId,
                            "unsaved":unsaved
                        })
    
                        return (
                            <li role="presentation" className="nav-item" key={v.id}>
                                <a
                                    href="#"
                                    className={fcClassName}
                                    onClick={(e) => {e.preventDefault(); onTabClick(v.id) }}
                                >
                                    {v.title}
                                    <span className="ml-2 close-icon"
                                    onClick={(e)=>{e.stopPropagation(); onCloseTab(v.id)}}
                                    >
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                    />
    
                                </span>
                                {
                                    unsaved && 
                                    <span className="rounded-circle unsaved-icon ml-2"></span>
                                }
                                </a>
                              
                            </li>
                        )
                    }
               
                })
            }
        </ul>
    )

}

Tablist.prototype = {
    tabs: Prototype.array,
    activeId: Prototype.string,
    unSaveIds: Prototype.array,
    onTabClick: Prototype.func,
    onCloseTab: Prototype.func,
}

Tablist.defaultProps={
    unSaveIds:[]
}

export default Tablist