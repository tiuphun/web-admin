import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import {Grid } from '@material-ui/core'

import Header from '../components/Header'
import VerticalTabs from '../components/VerticalTabs'
import Content from '../components/Content'


export default function Admin() {
  return (
    <Router>
      <Header />
      <Grid container>
        <Grid xs={2}>
          <VerticalTabs />
        </Grid>
        <Grid xs={10}>
          <Content />
        </Grid>
      </Grid>
    </Router>
  )
}
