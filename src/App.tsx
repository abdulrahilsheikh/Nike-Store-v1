import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Main from "./outlet/main/Main";
import Product from "./pages/product/Product";

function App() {
	const router = createBrowserRouter(
		[
			{
				path: "",
				element: <Main />,
				children: [{ path: "", element: <Home /> }],
			},
			{
				path: "/product/:id",
				element: <Main />,
				children: [{ path: "", element: <Product /> }],
			},
		],
		{ basename: "/Nike-store-v1" }
	);
	return <RouterProvider router={router} />;
}

export default App;
