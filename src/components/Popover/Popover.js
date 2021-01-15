import React, { PureComponent } from 'react'
import './Popover.scss'
import { Collapse } from 'antd'
import Button from '../../components/Button/Button'
import PopoverContent from '../../components/PopoverContent/PopoverContent'
import uuid from 'react-uuid'
import { capitalize } from '../../utils/helpers'
const { Panel } = Collapse

export default class Popover extends PureComponent {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.node = React.createRef()
    this.state = {
      popupVisible: false,
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false)
  }

  handleClick() {
    if (!this.state.popupVisible) {
      document.addEventListener('click', this.handleOutsideClick, false)
    } else {
      this.setState({
        filteredItems: this.props.items,
      })
      document.removeEventListener('click', this.handleOutsideClick, false)
    }

    this.setState((prevState) => ({
      popupVisible: !prevState.popupVisible,
    }))
  }

  handleOutsideClick(e) {
    if (this.node.current.contains(e.target)) {
      return
    }

    this.handleClick()
  }

  customExpandIcon = (props) => {
    if (props.isActive) {
      return (
        <a
          style={{ color: 'black' }}
          onClick={(e) => {
            props.onExpand(props.record, e)
          }}
        >
          -
        </a>
      )
    } else {
      return (
        <a
          style={{ color: 'black' }}
          onClick={(e) => {
            props.onExpand(props.record, e)
          }}
        >
          +
        </a>
      )
    }
  }

  render() {
    const { buttonItems, filterItem, mobileIndex } = this.props
    const activatedItems =
      filterItem !== 'more filters' && buttonItems.filter((item) => item.active)

    return (
      <div className="popover-container" ref={this.node}>
        <div className="button-container">
          <Button
            className={this.state.popupVisible ? `active-button ${filterItem}` : `${filterItem}`}
            onClick={this.handleClick}
          >
            {capitalize(filterItem)}{' '}
            {activatedItems && activatedItems.length ? `(${activatedItems.length})` : null}
          </Button>
        </div>
        {this.state.popupVisible && (
          <div className="popover-container__popover">
            {filterItem === 'more filters' ? (
              Object.keys(buttonItems)
                .filter((buttonItemFiltered, index) => index > mobileIndex)
                .map((buttonItemName, index) => (
                  <Collapse
                    accordion
                    defaultActiveKey={['0']}
                    onChange={() => {}}
                    expandIconPosition={'right'}
                    expandIcon={(props) => this.customExpandIcon(props)}
                  >
                    <Panel header={`${capitalize(buttonItemName)}`} key={index}>
                      <PopoverContent
                        key={uuid()}
                        {...this.props}
                        filterItem={buttonItemName}
                        items={buttonItems[buttonItemName]}
                        handleClick={this.handleClick}
                      />
                    </Panel>
                  </Collapse>
                ))
            ) : (
              <PopoverContent {...this.props} items={buttonItems} handleClick={this.handleClick} />
            )}
          </div>
        )}
      </div>
    )
  }
}
