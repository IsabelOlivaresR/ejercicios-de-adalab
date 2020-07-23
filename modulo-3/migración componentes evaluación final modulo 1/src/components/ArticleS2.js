import React from 'react';

class ArticleS2 extends React.Component {
  render() {
    return (
      <article className='article article1'>
        <h3 className='article__title'>{this.props.article__title}</h3>
        <p className='article__info'>{this.props.article__info}</p>
      </article>
    );
  }
}

export default ArticleS2;
