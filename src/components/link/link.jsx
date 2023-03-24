import { db } from "../../services/firebase"
import { deleteDoc, doc } from "firebase/firestore"
import { dataLinkContext } from "../../context/dataLinkContext";
import { useContext } from "react";
export function Link({nameLink, descriptionLink, id, url}) {
  const {setDataLink} = useContext(dataLinkContext);
  const deleteLink = async()=>{
    if(confirm('are you sure?')){
      await deleteDoc(doc(db, 'links', id));
    }
  }
  const editLink = ()=>{
    const data = {
      'nameLink':nameLink,
      'descriptionLink':descriptionLink,
      'url':url,
      'id':id
    }
    setDataLink(data);
  }
  return(
    <div class="alert alert-dismissible">
      <h4 class="alert-heading"><a href={url}>{nameLink}</a></h4>
      <p class="mb-0">{descriptionLink}.</p>
      <div className="btn-group">
        <button type="button" className="btn btn-secondary" onClick={editLink}>edit</button>
        <button type="button" className="btn btn-secondary" onClick={deleteLink}>delete</button>
      </div>
    </div>
      // <div className="toast show mt-2">
      //   <div className="toast-header">
      //     <strong className="me-auto"><a href={url}>{nameLink}</a></strong>
      //     <div className="btn-group">
      //       <button type="button" className="btn btn-secondary" onClick={editLink}>edit</button>
      //       <button type="button" className="btn btn-secondary" onClick={deleteLink}>delete</button>
      //     </div>
      //   </div>
      //   <div className="toast-body">
      //     {descriptionLink}
      //   </div>
      // </div>
  )
}