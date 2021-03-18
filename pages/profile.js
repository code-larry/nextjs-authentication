import React from 'react'
import Layout from '../components/layout'
import {ProtectedRoutes} from '../auth/protectedRoutes'

const Profile = () => {
	return(
		<Layout>
			<h1>Profile</h1>
		</Layout>
	)
}

export default ProtectedRoutes(Profile);