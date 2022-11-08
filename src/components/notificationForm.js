import React, { useState } from "react"
import { Form } from "../index.js"

function NotificationForm({
	name,
	label,
	value,
	type,
	placeholder,
	handleChange,
	handleBlur,
	errors,
	touched,
	checked,
	checkvalue,
	checkname,
}) {
	const [error, setError] = useState("")

	const handleOnchange = e => {
		const phoneRegExp = /^[0-9\s]*$/
		const userName = /^[A-Za-z\s]*$/

		setError("")
		if (name === "phoneNumber") {
			if (phoneRegExp.test(e.target.value)) {
				handleChange(e)
			} else {
				setError("Invalid Input")
			}
		} else if (name === "firstName" || name === "lastName") {
			if (userName.test(e.target.value)) {
				handleChange(e)
			} else {
				setError("Invalid Input")
			}
		} else {
			handleChange(e)
		}
	}

	return (
		<div>
			<Form className='form'>
				<Form.Group>
					<div className='label'>
						{checked && (
							<input
								className='me-2 checkbox'
								type='checkbox'
								value={checkvalue}
								onChange={handleChange}
								name={checkname}
							/>
						)}
						<Form.Label className='label'> {label}</Form.Label>
					</div>
					<div className='control'>
						<Form.Control
							className=''
							name={name}
							value={value}
							type={type}
							onBlur={handleBlur}
							onChange={e => handleOnchange(e)}
							placeholder={placeholder}
						/>
						<p className='error'>{touched ? errors : null || (error && error)}</p>
					</div>
				</Form.Group>
			</Form>
			<br />
		</div>
	)
}

export default NotificationForm
