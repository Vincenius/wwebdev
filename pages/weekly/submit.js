import React, { useState } from 'react'
import Link from 'next/link'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import * as ui from '../../ui'
import Layout from '../../components/Layout'
import Ad  from '../../components/Ads/Ad'
import NewsletterLink from '../../components/NewsletterLink'
import SponsorNinjaWidget from '../../components/SponsorNinja'

const defaultValues = { link: '', email: '', message: '' }

const WeeklySubmit = () => {
  const [formValues, setFormValues] = useState(defaultValues)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const submitForm = e => {
    e.preventDefault()
    setIsLoading(true)
    fetch('/api/submit/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    }).then(res => {
      if (res.status === 200) {
        setIsLoading(false)
        setFormValues(defaultValues)
        setShowSuccess(true)
      } else {
        setIsLoading(false)
        setShowError(true)
      }
    }).catch(() => {
      setIsLoading(false)
      setShowError(true)
    })
  }

  const updateValue = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return <Layout title="Submit a resource">
    <ui.Container>
        <ui.SidebarContainer>
            <ui.ArticleContainer>
              <h1>Submit a Resource</h1>
              <p>Do you want to share your latest web project or something that you found online?
              To be added to the next weekly web development newsletter your resource should:</p>

              <ul>
                <li>be relevant for web developers / designers</li>
                <li>be free (or at least offer a free plan)</li>
              </ul>

              <p>
                If you want to promote your startup or commercial project, you should take a look at the <Link href="/sponsorship">sponsorship option</Link> of the newsletter.
              </p><br/>

              <form onSubmit={submitForm}>
                <TextField name="link" label="Resource Link" variant="outlined" fullWidth required value={formValues.link} onChange={updateValue} />
                <TextField name="email" type="email" label="E-Mail (optional)" variant="outlined" fullWidth style={{ margin: '1em 0' }} value={formValues.email} onChange={updateValue} />
                <TextField name="message" label="Message (optional)" variant="outlined" fullWidth multiline rows={4} value={formValues.message} onChange={updateValue} />
                <Button variant="contained" fullWidth type="submit" style={{ background: '#017a8c', margin: '1em 0' }}>
                  { !isLoading && 'Submit' }
                  { isLoading && <CircularProgress size={26} sx={{ color: '#fff', '& svg': { width: '26px' } }} /> }
                </Button>
              </form>
            </ui.ArticleContainer>
            <ui.Sidebar>
                <SponsorNinjaWidget />
                <Ad />
                <NewsletterLink />
            </ui.Sidebar>
        </ui.SidebarContainer>
    </ui.Container>
    <Snackbar
      open={showSuccess}
      autoHideDuration={5000}
      onClose={() => setShowSuccess(false)}
    >
      <Alert elevation={6} variant="filled" onClose={() => setShowSuccess(false)} severity="success" >
        Successfully submitted resource!
      </Alert>
    </Snackbar>

    <Snackbar
      open={showError}
      autoHideDuration={5000}
      onClose={() => setShowError(false)}
    >
      <Alert elevation={6} variant="filled" onClose={() => setShowError(false)} severity="error" >
        Something went wrong. Please try again or contact info@wweb.dev
      </Alert>
    </Snackbar>
  </Layout>
}

export default WeeklySubmit
