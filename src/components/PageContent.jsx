import React from 'react';
import classes from './PageContent.module.css';

const PageContent = props => {
  return (
    <section className={classes.page}>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
};

export default PageContent;
