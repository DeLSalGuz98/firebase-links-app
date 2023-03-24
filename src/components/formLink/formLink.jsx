import { useContext, useEffect, useState } from "react";
import { dataLinkContext } from "../../context/dataLinkContext";
//import firebase
import { db } from "../../services/firebase"; //importamos los datos de coneccion
import { collection, addDoc, updateDoc, doc } from "firebase/firestore"; //importamos los metodos de almacenamiento

export function FormLink() {
  const {dataLink, setDataLink} = useContext(dataLinkContext)
  const [editing, setEditing] = useState(false)
  const linkObject ={
    'url': '',
    'nameLink': '',
    'descriptionLink':''
  }
  const [link, setlink] = useState(linkObject)
  useEffect(()=>{
    if (JSON.stringify(dataLink) != '{}') {
      setEditing(true)
      setlink({
        'url': dataLink.url,
        'nameLink': dataLink.nameLink,
        'descriptionLink':dataLink.descriptionLink
      })
    }
  },[dataLink])
  const cancelEdit = ()=>{
    setDataLink({})
    setlink(linkObject)
    setEditing(false)
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    await saveLink(link)
    setlink(linkObject)
  }
  const saveLink = async(data)=>{
    if(editing === true){
      //actualizamos un documento de firebase
      await updateDoc(doc(db, 'links', dataLink.id), data)
      setEditing(false)
      setDataLink({})
    }else{
      //creamos un nuevo documento de firebase
      //la conexion recive 2 parametros los datos de coexion y el nombre de la "tabla"
      await addDoc(collection(db, 'links'), data);
    }
  }
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setlink({...link, [name]: value});
  }
  return(
    <div className=" col-12 col-md-7 card bg-light mb-1">
      <div className="card-header">{editing?'Edit Link': 'Add New Link'}</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className = "form-group">
            <label htmlFor="url">Link</label>
            <input type="text" className="form-control" name="url" onChange={handleChange} value={link.url}/>
          </div>
          <div className = "form-group  mt-2">
            <label htmlFor="nameLink">Name Link</label>
            <input type="text" className="form-control" name="nameLink" onChange={handleChange} value={link.nameLink}/>
          </div>
          <div className="form-group">
            <label htmlFor="descriptionLink" className="form-label mt-2">Description Link</label>
            <textarea className="form-control" name="descriptionLink" rows="3" onChange={handleChange} value={link.descriptionLink}></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-2">{editing?'Save Changes': 'Add Link'}</button>
          {
            editing?<button type="submit" className="btn btn-secondary mt-2 ms-1" onClick={cancelEdit}>Cancel</button>: <></>
          }
        </form>
      </div>
    </div>
  )
}