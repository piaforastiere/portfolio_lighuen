import React, { useState, useEffect } from 'react'
import { Dropbox } from 'dropbox'
import fetch from 'isomorphic-unfetch'

import ImageGallery from './ImageGallery'

const All = () => {

  const [files, setFiles] = useState ([])


  const getFiles = () => {
    const dbx = new Dropbox({
      accessToken: 'Ht1Z392ffvEAAAAAAAB-bKNJI2qyCRkfs6YJ4b7mJkEX2Z9pa6PafzxGmZ31hEpJ',
      fetch
    })

    dbx.filesListFolder({
      "path": "/web_portfolio_api/estructura de fotos para  web lighuen desanto/fashion & portrait",
      "recursive": false
    }).then(files =>
         setFiles(files.entries)

       )

  }
  useEffect(() => {
    getFiles()
  }, [])

  return(
      <>
      { files ?
        files && files.map(file =>
              <ImageGallery  {...file} key={file.id}/>
          )

      : <div>Nada</div>

        }

      </>
  )
}

export default All
