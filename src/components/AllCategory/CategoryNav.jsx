import React from 'react'
import { NavLink } from 'react-router'

const CategoryNav = () => {
  return (
    <div>
        <h2>All Category</h2>
        <div>
            <ul>
                <li>
                    <NavLink >data</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CategoryNav