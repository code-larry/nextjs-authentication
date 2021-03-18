import React, {useEffect, useState} from 'react'
import Layout from '../components/layout'
import style from '../styles/login.module.css'
import useAuth from '../auth/context'
import {useRouter} from "next/router"
import {redirectFromServer} from '../auth/cookie'

const Login = () => {
	const {login, isAuthenticated} = useAuth();
	
	const router = useRouter();
	const [value, setValue] = useState({
		username: "",
		password: ""
	});

	useEffect(() => {
		if(isAuthenticated) router.push('/')
	}, [isAuthenticated])

	const handleChange = name => event => {
		setValue({...value, [name]: event.target.value})
	}

	const onSubmit = event => {
		event.preventDefault();

		login(value.username, value.password)
	}

	return (
		<Layout>

			<div className={style.main}>
				<h1>Formulaire de connexion</h1>

				<form action="">
					<label htmlFor="username">Nom d'utilisateur</label><br/>
					<input className={style.input} type="text" id="username" name="username" placeholder="Entrez votre nom d'utilisateur" onChange={handleChange("username")}/>
					<br/>
					<label htmlFor="password">Mot de passe</label><br/>
					<input className={style.input} type="password" id="password" name="password" placeholder="Entrez votre mot de passe" onChange={handleChange("password")}/> <br/>
					<button className={style.button} type="submit" onClick={onSubmit}>Connexion</button>
				</form>

			</div>
		</Layout>
	)
}

export const getServerSideProps = async(context) => {
	redirectFromServer(context)

	return {
		props: {}
	}
}

export default Login;