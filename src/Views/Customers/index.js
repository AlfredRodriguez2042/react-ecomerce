import React, { useEffect, useState } from 'react'
import Page from 'src/Components/Base/Page'
import CustomerContent from 'src/Components/Customers/CustomerContent'

const Customers = () => {
  const [customers, setCustomers] = useState()
  const getCustomer = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await result.json()
    setCustomers(data)
  }
  console.log(customers)
  useEffect(() => getCustomer(), [])
  return (
    <Page title="customers">
      <CustomerContent customers={customers} />
    </Page>
  )
}

export default Customers
