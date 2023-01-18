import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About me',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       I am Dat Le, an R&D engineer who loves to work on new technologies. 
       A simple human being who loves to learn and share knowledge. 
       I am a big fan of open source and always looking for new ways to contribute to the community.
      </>
    ),
  },
  {
    title: 'Some of my personal favorites',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        I love playing trivia games, chess, sudoku, mines(i'm the best in this game, LOL),...
        I also love read several book genres such as science & discovery books, history, and detective & science fiction novels
      </>
    ),
  },
  {
    title: 'About my second brain',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This is my second brain, a place where I store all my knowledge and share it with the world.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
