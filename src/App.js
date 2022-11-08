import "./App.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Notification from "./components/notification"
function App() {
	return (
		<>
			<ToastContainer />
			<Notification />
		</>
	)
}

export default App
