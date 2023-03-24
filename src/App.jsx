import { useEffect, useState } from 'react';
//import components
import { FormLink } from './components/formLink/formLink';
import { Link } from './components/link/link';

//import firebase
import { db } from './services/firebase';
import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore';

function App() {
  const [allLinks, setAllLinks] = useState([]);
  useEffect(()=>{
    getLinks();
  },[]);
  //creamos una funcion para obtener los links cada que surja un cambio - mantiene un canal de escucha
  const getLinks = ()=>{
    onSnapshot(collection(db, 'links'), (res)=>{
      const listLinks = [];
      res.forEach((doc)=>{
        const objLink = {
          'id': doc.id,
          'url': doc.data().url,
          'nameLink': doc.data().nameLink,
          'descriptionLink': doc.data().descriptionLink
        }
        listLinks.push(objLink);
      })
      setAllLinks(listLinks);
    })
  }
  
  //obtenemos todos los datos de firebase
  // const getLinsk = async()=>{
  //   const listLinks = []
  //   const res  = await getDocs(collection(db,'links'));
  //   res.forEach((doc)=>{
  //     const objLink = {
  //       'id': doc.id,
  //       'url': doc.data().url,
  //       'nameLink': doc.data().nameLink,
  //       'descriptionLink': doc.data().descriptionLink
  //     }
  //     listLinks.push(objLink)
  //   })
  //   setAllLinks(listLinks);
  //   console.log(allLinks)
  // }

  return (
    <div className="container p-3">
      <div className='row'>
        <FormLink></FormLink>
        <div className="col-12 col-md-5 p-1">
          {
            allLinks.map((link)=>{
              return(
                <Link 
                  key={link.id}
                  id={link.id}
                  nameLink={link.nameLink}
                  descriptionLink={link.descriptionLink}
                  url={link.url}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
