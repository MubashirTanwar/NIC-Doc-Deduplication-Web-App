import React, {useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import App from './Upload';
import { ExtractedText } from '../pages/ExtractedText';
import { FeaturedImageGallery } from '../pages/ExtractedImages';
import Search from './Search';
const steps = ['Upload a PDF', 'Extracted Pages',  'Extracted Texts', 'Search For Duplicates'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [pdf, setPdf] = useState(null);
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
  const [searchResults, setSearchResults] = useState({});


  //make a post rq to the backend to upload the pdf
  //get the response and display the images
  // http://127.0.0.1:8000/api/text/

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getText = async (pdf) => {
    const formData = new FormData();
    formData.append('pdf', pdf);
    const response = await fetch('http://127.0.0.1:8000/api/ocr/', 
    {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log(data)
    setTexts(data.extracted_text);
  }

  const getElasticSearch = async (pdf) => {
    const formData = new FormData();
    formData.append('pdf', pdf);
    const response = await fetch('http://127.0.0.1:8000/api/es/',
    {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();

    setSearchResults(data[0]);
    console.log(searchResults)
  }

  useEffect(() => {
    if(pdf) {
  getText(pdf);
  getElasticSearch(pdf);
    }
}, [pdf]);


  return (
    <div className='w-full lg:w-[1200px] items-center align-middle justify-center m-auto  my-4'>
        <Box >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>

          {activeStep === 0 ? <App activeStep={activeStep} setActiveStep={setActiveStep} setPdf= {setPdf} setImages={setImages} pdf={pdf}/> : null}
          {activeStep === 1 ? <FeaturedImageGallery images={images}/> : null}
            {activeStep === 2 ? <ExtractedText pdf={pdf} texts= {texts}/> : null}
          {activeStep === 3 ? <Search texts= {texts} searchResults={searchResults}/> : null}
        </>
      )}
    </Box>
    </div>
    
  );
}
