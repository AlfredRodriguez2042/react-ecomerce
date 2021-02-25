import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Page from 'src/Components/Base/Page'
import ProfileForm from 'src/Components/Forms/Profile'
import ProfileContent from 'src/Components/Profile/ProfileContent'

const Profile = () => {
  const user = useSelector((state) => state.user?.user)
  return (
    <Page title={`${user.name}`}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ProfileContent />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProfileForm />
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default Profile
