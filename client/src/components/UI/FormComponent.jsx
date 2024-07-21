import React, { useState } from 'react';
import FormInput from "./FormInput.jsx";
import Divider from './Divider.jsx';
import Loading from './Loading.jsx';
import FormCategory from "./FormCategory.jsx";
import styles from '../../cssModules/Form.module.css';

import { useDispatch, useSelector } from 'react-redux'
import { changeOutputState , resetOutputState } from '../../reducers/index.js';
import { changeOutputLoading } from '../../reducers/isLoadingSlice.js';

function FormComponent() {
  const isLoading = useSelector((state) => state.loadingOutput.value);
  const dispatch = useDispatch();

  function cleanResponse(text) {
    // Remove unwanted formatting or text
    // This example strips out code blocks and extraneous lines
    return text
      .trim();                          // Trim leading/trailing whitespace
  }
  

  async function handleSubmit(event) {
    console.log('Start');

    dispatch(changeOutputLoading(true));

    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      frontendFramework: formData.get('frontendFramework'),
      frontendLanguage: formData.get('frontendLanguage'),
      frontendBuildTool: formData.get('buildTool'),
      backendFramework: formData.get('backendFramework'),
      backendEnvironment: formData.get('environment'),
      backendLanguage: formData.get('backendLanguage'),
      database: formData.get('database'),
    };

    try {
      dispatch(resetOutputState());
      const outputText = document.getElementById('outputText');
      outputText.value = '';
      
      const response = await fetch('https://llama-hackathon-server.onrender.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      const cleanedText = cleanResponse(responseData.response);

      dispatch(changeOutputState(cleanedText));

    } catch (error) {
      console.error('Error:', error);
    } finally {
      dispatch(changeOutputLoading(false));
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3 className={styles.h3}>Your Technologies</h3>
      </div>


      <div className={styles.box_container}>
        <FormCategory title='Front End :'/>
        <div className={styles.formInput_container}>
          <FormInput
            id='dropdown'
            label='Framework'
            name='frontendFramework'
            value1='Node.js'
            value2='React.js'
            value3='Express.js'
            value4='Vue.js'
          />
          <FormInput
            id='dropdown'
            label='Language'
            name='frontendLanguage'
            value1='Node.js'
            value2='React.js'
            value3='Express.js'
            value4='Vue.js'
          />
          <FormInput
            id='dropdown'
            label='Build Tool'
            name='buildTool'
            value1='Node.js'
            value2='React.js'
            value3='Express.js'
            value4='Vue.js'
          />
        </div>
      </div>
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <Divider black/>
      </div>


      <div className={styles.box_container}>
        <FormCategory title='Back End :'/>
        <div className={styles.formInput_container}>
          <FormInput
            id='dropdown'
            label='Framework'
            name='backendFramework'
          />
          <FormInput
            id='dropdown'
            label='Environment'
            name='environment'
          />
          <FormInput
            id='dropdown'
            label='Language'
            name='backendLanguage'
          />
        </div>
      </div>
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <Divider black/>
      </div>


      <div className={styles.box_container}>
        <FormCategory title='Database :'/>
        <div className={styles.formInput_container}>
          <FormInput
            id='dropdown'            
            name='database'
          />
        </div>
      </div>
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <Divider black/>
      </div>


      <div className={styles.submitForm_container}>
        <p className={styles.p}>
          For instructions, <span className={styles.span}>Click here.</span>
        </p>
        <button 
          type="submit" 
          className={styles.btn}
          disabled = {isLoading ? true : false}
        >
          {isLoading ? <Loading /> : 'Submit'}
        </button>
      </div>

      {isLoading && 
        <p className={styles.p2}>Please wait while your answer is getting processed...</p>
      }
      

      {/* <div>
        {output.map((chunk , index) => (
          <p key={index}>{chunk}</p>
        ))}
      </div> */}
    </form>
  )
}

export default FormComponent;


