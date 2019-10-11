import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

// component
import Story from '../components/Story';

const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, [])
  return storyIds.slice(0, count).map(storyId => <Story key={storyId} storyId={storyId}/>)
  
}

export default StoriesContainer;