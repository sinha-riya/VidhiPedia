//import { age } from "@/lib/queries";
import List from "./list";


const AgePage = async() => {
  

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-3xl font-bold text-blue-500 text-center mb-8">
        Define Your Journey
      </h1>
      <List />
    </div>
  )
}

export default AgePage;


























/*const coursesData = getCourses();
const userProgressData = getUserProgress();

const [courses, userProgress] = await Promise.all([
  coursesData,
  userProgressData
])
  

<List 
        courses={courses} 
        activeCourseId={userProgress?.activeCourseId}
      />*/