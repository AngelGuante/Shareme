import sanityClient from '@sanity/client'

const sanityClientApi = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-01-25',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
})

export default sanityClientApi