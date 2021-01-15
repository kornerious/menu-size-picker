import React, { PureComponent } from 'react'
import Button from '../../components/Button/Button'
import uuid from 'react-uuid'

export default class PopoverContent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      filteredItems: props.items,
      filterItem: props.filterItem,
    }
  }

  handleActivateFilter(id) {
    this.setState({
      filteredItems: this.state.filteredItems.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      ),
    })
  }

  render() {
    const { filteredItems, filterItem } = this.state
    const { applyFilter, items, handleClick } = this.props

    const activatedItems = items.filter((filterItem) => filterItem.active)

    return (
      <>
        {filteredItems.map((filtersItem) => (
          <Button
            className={filtersItem.active ? 'active-filter' : ''}
            tooltip={'up'}
            key={uuid()}
            onMouseDown={() => this.handleActivateFilter(filtersItem.id)}
          >
            {filtersItem.title}
          </Button>
        ))}
        <div className="popover-footer">
          <Button
            onMouseDown={() => {
              applyFilter(filteredItems, filterItem)
            }}
          >
            Apply
          </Button>
          {activatedItems && (
            <Button
              onMouseDown={() => {
                handleClick()
              }}
            >
              Cancel
            </Button>
          )}
        </div>
      </>
    )
  }
}
