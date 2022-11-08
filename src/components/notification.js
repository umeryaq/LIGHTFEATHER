import React, { useEffect, useState } from "react"
import { Container, Row, Col, Button, Form } from "../index"
import { useFormik } from "formik"
import NotificationForm from "./notificationForm"
import { handleGetData, handleDataSubmit } from "../state/actionCreators/supervisorCreator"
import * as Yup from "yup"
import Select from "./select"
import { toast } from "react-toastify"

function Notification() {
	const initialValues = {
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		select: "",
		check: [],
	}

	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)

	const validationSchema = Yup.object().shape({
		firstName: Yup.string().required("First Name is required"),
		lastName: Yup.string().required("Last Name is required"),
		email: Yup.string().email("Not a proper Email"),
		phoneNumber: Yup.string(),
		select: Yup.string().required("Supervisor is required"),
	})

	const { values, handleChange, handleBlur, setFeildTouched, handleSubmit, touched, errors } = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: values => handleSend(),
	})

	const handleSend = async () => {
		try {
			const info = {
				firstName: values.firstName,
				lastName: values.lastName,
				email: values.email,
				phoneNumber: values.phoneNumber,
				Supervisor: values.select,
			}
			setLoading(true)
			const data = await handleDataSubmit(info)

			toast.success(data.message)
			setLoading(false)
		} catch (e) {
			console.log(e)
		}
	}
	const handleGet = async () => {
		try {
			const data = await handleGetData()
			setData(data)
		} catch (e) {
			console.log(e)
		}
	}
	useEffect(() => {
		handleGet()
	}, [])

	return (
		<div className='containerBody'>
			<h3 className='text-center nf'>
				<b>Notification Form</b>{" "}
			</h3>

			<Container className='text-center'>
				<Row className='text-center d-flex justify-content-center'>
					<Col className='col-12 col-md-6'>
						<NotificationForm
							name={"firstName"}
							label={"First Name"}
							value={values.firstName}
							type={"text"}
							setFeildTouched={setFeildTouched}
							handleChange={handleChange}
							handleBlur={handleBlur}
							placeholder={"Enter First Name"}
							errors={errors.firstName}
							touched={touched.firstName}
						/>
					</Col>

					<Col className='col-12 col-md-6  ln '>
						<NotificationForm
							name={"lastName"}
							label={"Last Name"}
							value={values.lastName}
							type={"text"}
							setFeildTouched={setFeildTouched}
							handleChange={handleChange}
							handleBlur={handleBlur}
							placeholder={"Enter Last Name"}
							errors={errors.lastName}
							touched={touched.lastName}
						/>
					</Col>

					<Col className='col-12 col-md-6'>
						<div className='label labelPading'>
							<p>How would you prefer to be notified?</p>
						</div>
						<NotificationForm
							name={"email"}
							label={"Email"}
							value={values.email}
							type={"email"}
							handleChange={handleChange}
							handleBlur={handleBlur}
							placeholder={"Enter Email"}
							errors={errors.email}
							touched={touched.email}
							checked={true}
							checkvalue={"email"}
							checkname={"check"}
						/>
					</Col>

					<Col className='col-12 col-md-6'>
						<div className=' labelPading2'>
							<NotificationForm
								name={"phoneNumber"}
								label={"Phone Number"}
								value={values.phoneNumber}
								type={"text"}
								handleChange={handleChange}
								handleBlur={handleBlur}
								placeholder={"Enter Phone Number"}
								errors={errors.phoneNumber}
								touched={touched.phoneNumber}
								checked={true}
								checkvalue={"phonenumber"}
								checkname={"check"}
							/>
						</div>
					</Col>

					<Col className='col-md-6 col-12'>
						<div className='select'>
							<Select
								label={"Supervisor"}
								name={"select"}
								value={values.select}
								handleChange={handleChange}
								handleBlur={handleBlur}
								errors={errors.select}
								data={data}
								touched={touched.select}
							/>
						</div>
					</Col>
				</Row>

				<div className='primary'>
					<Button type='submit' className='mt-4 text-white  ' onClick={handleSubmit} disabled={loading}>
						{loading ? "Loading... " : " Submit"}
					</Button>
				</div>
			</Container>
		</div>
	)
}

export default Notification
