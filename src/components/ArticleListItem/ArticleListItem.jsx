import React from "react";
import ArticleItemDetails from "../ArticleItemDetails/ArticleItemDetails";
import "./styles.scss";
class ArticleListItem extends React.Component {
  render() {
    const { article, src } = this.props;

    return (
      <div
        className={`w-100 d-flex mb-auto justify-content-between align-start  pb-4 ${
          this.props.articleImg === "top" && "flex-column-reverse"
        }`}
      >
        <ArticleItemDetails {...this.props} />
        {this.props.articleImg && (
          <a href="/">
            <img
              alt="cover"
              className={
                this.props.articleImg === "top" ? "img-large" : "img-small"
              }
              src={
                src
                  ? `https://source.unsplash.com/random/house`
                  : `${article.author.img}`
              }
            />
          </a>
        )}
      </div>
    );
  }
}

export default ArticleListItem;
