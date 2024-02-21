import React, { createContext,useState } from 'react'

export const usercontext = createContext()

function Usestate({children}) {

    const [name, setName] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [newData, setNewData] = useState([])
    const [image, setImage] = React.useState([]);


    const Data ={
        name,setName,
        pass,setPass,
        newData,setNewData,
        image,setImage
    };
  return (
    <usercontext.Provider value={Data}>
          {children}
    </usercontext.Provider>
  )
}

export default Usestate