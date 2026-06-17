import InputCards from "./Components/InputCards"

function App () {

  const contactFields = ["name","email","phone" , "linkedin"]
  const educationFields = ["university","degree","graduation","GPA"]
  const practicalExperience = ["company name","position","responsibilities","responsibilities1","responsibilities2","start-date", "end-date"]
  

  return (
    <>
    <InputCards 
    title= "Personal Information"
    Info = {contactFields}
    />

    <InputCards 
    title = "Education"
    Info = {educationFields}
    />

<InputCards
    title = "Work History"
    Info = {practicalExperience}
    />
    </>
  )
}

export default App