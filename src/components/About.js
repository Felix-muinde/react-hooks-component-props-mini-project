import React from 'react';

const About = ({ imageUrl, aboutText }) => {
  const defaultImage = "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={imageUrl || defaultImage} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;
