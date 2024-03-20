import React, { createContext, useState } from 'react';

// Create a new context
export const StepContext = createContext();

// StepContext component
const StepContextProvider = ({ children }) => {
    // State to keep track of the current step
    const [currentStep, setCurrentStep] = useState(0);



    return (
        <StepContext.Provider value={currentStep}>
            {children}
        </StepContext.Provider>
    );  
};

export default StepContextProvider;