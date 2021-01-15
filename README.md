# menu-size-picker

**Versions**: node v14.15.1, npm 6.14.8

1. Install dependencies: **npm install**

1. Start project: **npm run start**

------------


The web application consists of the main container called `CatalogFilter`.
`CatalogFilter` manages Redux storage, controls responsive web design, displays all selected tags. 
Filter picker popover logic and handlers located in the `Popover` component. 
`Popover` component displays bar buttons, Collapse blocks, and passes filter values to child component - `PopoverContent`. 
PopoverContent component display filter values. 

The web application is built with custom styles and Ant Design library. 

Added filter tags overflow, so the user can scroll when there are too many tags on the screen.

Filter button box-shadow matches the tag color, so the user can visually understand which category filter tags are activated.

Filter popover closes when user click Apply button, Cancel button, or click outside of Popover component.

Provided basic tests for components, helper and reducer

------------


Tools used:
>

**react, redux, antd, react-responsive, eslint linter and prettier**

