import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';


export const Results = () => {
  const { loading, results, getResults, searchTerm } = useResultContext();
  return (
    <div>
      
    </div>
  )
}


