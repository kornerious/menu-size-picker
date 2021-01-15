import React from 'react'
import catalogReducer from './catalogReducer'
import updateFilter from '../actions/catalogActions'
import { UPDATE_FILTER } from '../actions/types'

/* eslint-disable default-case, no-param-reassign */
describe('catalogReducer', () => {
  let state
  beforeEach(() => {
    state = {
      filters: {
        size: [
          {
            id: '2x3',
            title: "2' X 3'",
          },
          {
            id: '3x5',
            title: "3' X 5'",
          },
          {
            id: '4x6',
            title: "4' X 6'",
          },
          {
            id: '5x8',
            title: "5' X 8'",
          },
          {
            id: '6x9',
            title: "6' X 9'",
          },
          {
            id: '8x10',
            title: "8' X 10'",
          },
          {
            id: '9x12',
            title: "9' X 12'",
          },
          {
            id: '10x14',
            title: "10' X 14'",
          },
          {
            id: '12x15',
            title: "12' X 15'",
          },
          {
            id: 'runners',
            title: 'Runners',
          },
          {
            id: 'roundsovals&squares',
            title: 'Rounds, Ovals & Squares',
          },
        ],
        color: [
          {
            id: 'blue',
            title: 'Blue',
          },
          {
            id: 'black',
            title: 'Black',
          },
          {
            id: 'neutral',
            title: 'Neutral',
          },
          {
            id: 'orange',
            title: 'Orange',
          },
          {
            id: 'white',
            title: 'White',
          },
          {
            id: 'gray',
            title: 'Gray',
          },
          {
            id: 'red',
            title: 'Red',
          },
          {
            id: 'brown',
            title: 'Brown',
          },
          {
            id: 'multi',
            title: 'Multicolor',
          },
          {
            id: 'yellow',
            title: 'Yellow',
          },
          {
            id: 'green',
            title: 'Green',
          },
          {
            id: 'pink',
            title: 'Pink',
          },
          {
            id: 'purple',
            title: 'Purple',
          },
        ],
        room: [
          {
            id: 'bedroom',
            title: 'Bedroom',
          },
          {
            id: 'living room',
            title: 'Living Room',
          },
          {
            id: 'hallway',
            title: 'Hallway',
          },
          {
            id: 'kitchen',
            title: 'Kitchen',
          },
          {
            id: 'bathroom',
            title: 'Bathroom',
          },
          {
            id: 'kids',
            title: 'Kids',
          },
          {
            id: 'dining room',
            title: 'Dining Room',
          },
          {
            id: 'outdoor',
            title: 'Outdoor',
          },
          {
            id: 'office',
            title: 'Office',
          },
        ],
        price: [
          {
            id: 'from0to100',
            title: '$0-100',
          },
          {
            id: 'from101to300',
            title: '$101-300',
          },
          {
            id: 'from301to700',
            title: '$301-700',
          },
          {
            id: 'from701',
            title: '$701 & above',
          },
        ],
        material: [
          {
            id: 'synthetics',
            title: 'Synthetics',
          },
          {
            id: 'jute & natural fibers',
            title: 'Jute & Natural Fibers',
          },
          {
            id: 'wool',
            title: 'Wool',
          },
          {
            id: 'blends',
            title: 'Blends',
          },
          {
            id: 'cotton',
            title: 'Cotton',
          },
        ],
        construction: [
          {
            id: 'machine made',
            title: 'Machine Made',
          },
          {
            id: 'hand woven',
            title: 'Hand Woven',
          },
          {
            id: 'hand knotted',
            title: 'Hand Knotted',
          },
          {
            id: 'hand tufted',
            title: 'Hand Tufted',
          },
          {
            id: 'hand hooked',
            title: 'Hand Hooked',
          },
          {
            id: 'shag',
            title: 'Shag',
          },
          {
            id: 'dhurrie',
            title: 'Dhurrie',
          },
          {
            id: 'hand loomed',
            title: 'Hand Loomed',
          },
        ],
        style: [
          {
            id: 'casual',
            title: 'Casual',
          },
          {
            id: 'contemporary',
            title: 'Contemporary',
          },
          {
            id: 'southwestern',
            title: 'Southwestern',
          },
          {
            id: 'moroccan',
            title: 'Moroccan',
          },
          {
            id: 'transitional',
            title: 'Transitional',
          },
          {
            id: 'modern',
            title: 'Modern',
          },
          {
            id: 'shag',
            title: 'Shag',
          },
          {
            id: 'boho&bohemian',
            title: 'Boho/Bohemian',
          },
          {
            id: 'traditional',
            title: 'Traditional',
          },
          {
            id: 'vintage',
            title: 'Vintage',
          },
          {
            id: 'updated traditional',
            title: 'Updated Traditional',
          },
          {
            id: 'kilim&tribal',
            title: 'Kilim/Tribal',
          },
        ],
      },
      activatedItems: false,
    }
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(catalogReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the updateFilter action correctly', () => {
    let action = updateFilter({
      filterItem: 'price',
      selectedItems: [
        { id: 'from0to100', title: '$0-100' },
        { id: 'from101to300', title: '$101-300', active: true },
        { id: 'from301to700', title: '$301-700' },
        { id: 'from701', title: '$701 & above' },
      ],
    })
    const expectedResult = catalogReducer(state, action)

    expect(catalogReducer(state, updateFilter())).toEqual(expectedResult)
  })

  it('activate items', () => {
    let expectedResult = catalogReducer(undefined, {
      type: UPDATE_FILTER,
      payload: {
        filterItem: 'price',
        selectedItems: [
          { id: 'from0to100', title: '$0-100' },
          { id: 'from101to300', title: '$101-300', active: true },
          { id: 'from301to700', title: '$301-700' },
          { id: 'from701', title: '$701 & above' },
        ],
      },
    })
    expect(expectedResult.activatedItems).toBe(true)
  })

  it('unactivate items', () => {
    let expectedResult = catalogReducer(undefined, {
      type: UPDATE_FILTER,
      payload: {
        filterItem: 'price',
        selectedItems: [
          { id: 'from0to100', title: '$0-100', active: false },
          { id: 'from101to300', title: '$101-300', active: false },
          { id: 'from301to700', title: '$301-700', active: false },
          { id: 'from701', title: '$701 & above', active: false },
        ],
      },
    })
    expect(expectedResult.activatedItems).toBe(false)
  })
})
