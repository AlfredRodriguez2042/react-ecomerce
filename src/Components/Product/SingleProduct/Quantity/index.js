import { FormControl, NativeSelect } from '@material-ui/core'
import React from 'react'

const Quantity = ({ stock }) => {
  return (
    <div>
      <span>Quantity: </span>
      <FormControl disabled={stock === 0}>
        <NativeSelect style={{ padding: 0 }}>
          {[...Array(stock).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>
              {' '}
              unity {i + 1}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default Quantity
