import InputCards from "./Components/InputCards"

function App () {

  const contactFields = ["name","email","phone"]
  const educationFields = ["school name","degree","graduation","GPA"]
  const practicalExperience = ["company name","position","title","responsibilities","years worked","final date worked"]
  

  return (
    <>
    <InputCards 
    title= "Personal Information"
    Info = {contactFields}
    />

    <InputCards 
    title = "Educational Experience"
    Info = {educationFields}
    />

<InputCards
    title = "Work Experience"
    Info = {practicalExperience}
    />
    </>
  )
}

export default App