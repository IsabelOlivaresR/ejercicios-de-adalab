import React from 'react';
import ArticleS2 from './ArticleS2';
import '../stylesheets/_Section2.scss';

class Section2 extends React.Component {
  render() {
    return (
      <section className='section2' id='section2'>
        <h2 class='section2__name'>3 reasons to purchase</h2>;
        <ArticleS2
          article__title='ut sed metus'
          article__info='Lorem ipsum dolor sit amet, consecteur.'
        />
        <ArticleS2
          article__title='urabitur ac erat'
          article__info='Mauris mattis urna quis lorem molestie'
        />
        <ArticleS2
          article__title='morbi dictum'
          article__info='Aliquam in dolor et dolor tincidunt.'
        />
        <div className='section2__button'>
          <a href='' title='More reasons'>
            More reasons
          </a>
        </div>
      </section>
    );
  }
}

export default Section2;
