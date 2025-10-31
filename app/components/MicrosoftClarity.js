'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';



const MicrosoftClarity = ({ CLARITY_PROJECT_ID }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && CLARITY_PROJECT_ID) {
      Clarity.init(CLARITY_PROJECT_ID);
      
    }
  }, [CLARITY_PROJECT_ID]);

  return null;
};

export default MicrosoftClarity;
