function InputCards({info}) {
  return (
    <>
    <h1>{info.title}</h1>
    <div>
      
      <input type="text" />
    </div>
    
    <button>Edit</button>
    <button>Submit</button>
    </>
  )
}


function App () {
  return (
    <>
      <InputCards info={{
        title:'Personal Information'
      }} />
       <InputCards info={{
        title:'Educational Experience'
      }} />
       <InputCards info={{
        title:'Practical Experience'
      }} />
    </>
  )
}

export default App
