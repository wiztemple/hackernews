import React, { useEffect, useState } from 'react';
import { getStory } from '../services/hnApi';

import { mapTime } from '../mappers/mapTime';

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, [storyId])
  return story && story.url ? (
    <>
      <a href={story.url}>{story.title}</a><br />
      By: <p>{story.by}</p>
      Posted by: <p>{mapTime(story.time)}</p>
    </>
  ) : null;
}

export default Story;

