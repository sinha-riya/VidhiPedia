import ListPage from "./list";

const AgePage = async() => {
  

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-3xl font-bold text-blue-500 text-center mb-8">
        Create Your Learning Path
      </h1>
      <ListPage />
    </div>
  )
}

export default AgePage;



