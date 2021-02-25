import {
  Avatar,
  Box,
  Card,
  Checkbox,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@material-ui/core'
import moment from 'moment'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: theme.spacing(2),
  },
}))
const CustomerContent = ({ customers }) => {
  const classes = useStyles()
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }
  const handleLimitChange = (event) => {
    setLimit(event.target.value)
  }
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email </TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers?.slice(0, limit).map((customer, i) => (
            <TableRow key={i}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar className={classes.avatar} />
                  <Typography>{customer.name}</Typography>
                </Box>
              </TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.address.city}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{moment(Date.now()).format('DD/MM/YYYY')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={customers?.length}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
      />
    </Card>
  )
}

export default CustomerContent
