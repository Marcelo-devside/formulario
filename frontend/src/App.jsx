import React from 'react';

import './Header.css'
import './Form.css'
import './index.css'

import HandleHeader from './Header'
import Former from './Form'

const handleSubmit = values => alert(JSON.stringify(values))
const initialValues = {}

const App = () => {
  return (
    <>
    <HandleHeader/>
    <Former handleSubmit={handleSubmit} initialValues={initialValues}/>
    </>
  )
}

export default App;
