import React from 'react'
import Layout from '../components/layout'
import {AdminRoutes} from '../auth/adminRoutes'

const Dashboard = () => {
	return(
		<Layout>
			<h1>Dashboard</h1>
		</Layout>
	)
}

export default AdminRoutes(Dashboard);