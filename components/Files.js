import React, { Component, useState, useEffect } from 'react';
import { Dropbox } from 'dropbox'
import fetch from 'isomorphic-unfetch'


const Files = () => {

  const [files, setFiles] = useState (null)

  const getFiles = () => {
    const dbx = new Dropbox({
      accessToken: 'Ht1Z392ffvEAAAAAAAB-bKNJI2qyCRkfs6YJ4b7mJkEX2Z9pa6PafzxGmZ31hEpJ',
      fetch
    })

    dbx.filesListFolder({
      "path": "/web_portfolio_api/estructura de fotos para  web lighuen desanto/SLIDER HOME",
      "recursive": false
      }).then(files => setFiles(files.entries))



  }

  useEffect(() => {
    getFiles()
  }, [])



  return (

    <div>
      {files && files.map(
        file => ( <div>{file.name}</div>)

      )}

    </div>
  )
}

export default Files
