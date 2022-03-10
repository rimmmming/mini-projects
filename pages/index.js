import ProjectList from "../components/ProjectList";

export default function Home() {
	return (
		<>
			<div className="App">
				<h1>Mini Projects</h1>
				<ProjectList />
			</div>
			<style jsx>{`
				h1{margin-bottom:20px}
			`}
			</style>
		</>
	)
}
