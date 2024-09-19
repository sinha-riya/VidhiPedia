import List from "./list"; // Importing the List component

// Define an asynchronous component named AgePage
const AgePage = async() => {
  
  // Return the JSX to render
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      {/* Page title */}
      <h1 className="text-3xl font-bold text-blue-500 text-center mb-8">
        Let's Play a Game, Just Me and You!
      </h1>
      {/* Render the List component */}
      <List />
    </div>
  )
}

// Export the AgePage component as the default export
export default AgePage;
