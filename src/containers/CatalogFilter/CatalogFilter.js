import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './CatalogFilter.scss'
import { Tag } from 'antd'
import Popover from '../../components/Popover/Popover'
import uuid from 'react-uuid'
import MediaQuery from 'react-responsive'
import { updateFilter } from '../../actions/catalogActions'
import { removeFilter } from '../../actions/catalogActions'

class CatalogFilter extends PureComponent {
  handleApplyFilters = (selectedItems, filterItem) => {
    this.props.updateFilter({ selectedItems, filterItem })
  }

  handleRemoveFilter = (payload) => {
    this.props.removeFilter(payload)
  }

  render() {
    const { filters, activatedItems } = this.props

    return (
      <div className="filter">
        <div className="filter__content">
          <div className="filter-bar">
            {Object.keys(filters).map((key, index) => (
              <span className="buttons-container" key={uuid()}>
                <MediaQuery maxWidth={992}>
                  {index === 2 && (
                    <Popover
                      filterItem={'more filters'}
                      buttonItems={filters}
                      key={uuid()}
                      mobileIndex={index}
                      applyFilter={this.handleApplyFilters}
                    />
                  )}
                  {index < 2 && (
                    <Popover
                      filterItem={key}
                      buttonItems={filters[key]}
                      key={uuid()}
                      applyFilter={this.handleApplyFilters}
                    />
                  )}
                </MediaQuery>
                <MediaQuery minWidth={992}>
                  <Popover
                    filterItem={key}
                    buttonItems={filters[key]}
                    key={uuid()}
                    applyFilter={this.handleApplyFilters}
                  />
                </MediaQuery>
              </span>
            ))}
          </div>
          <div className="filter__tags">
            Applied filters:{' '}
            {activatedItems ? (
              <span key={uuid()}>
                {Object.keys(filters).map((key) =>
                  filters[key].map(
                    (filterItem) =>
                      filterItem.active && (
                        <Tag
                          className={`edit-tag ${key}`}
                          closable={true}
                          key={uuid()}
                          onClose={() =>
                            this.handleRemoveFilter({ id: filterItem.id, key, all: false })
                          }
                        >
                          {filterItem.title}
                        </Tag>
                      )
                  )
                )}
                <Tag
                  className="cursor-pointer"
                  key={uuid()}
                  onMouseDown={() => this.handleRemoveFilter({ all: true })}
                >
                  Clear All
                </Tag>
              </span>
            ) : (
              <div className="no-filter">-none-</div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.catalog.filters,
  activatedItems: state.catalog.activatedItems,
})

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (payload) => {
      dispatch(updateFilter(payload))
    },
    removeFilter: (payload) => {
      dispatch(removeFilter(payload))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogFilter)
