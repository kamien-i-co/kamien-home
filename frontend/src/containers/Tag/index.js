import React from "react";
import { useParams } from "react-router";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import TAG_ARTICLES_QUERY from "../../queries/tag/articles";


const Tag = () => {
    let { id } = useParams();
  
    return (
      <Query query={TAG_ARTICLES_QUERY} id={id}>
        {({ data: {tag} }) => {
            console.log(tag);
          return (
            <div>
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                  <h1>{tag.name}</h1>
                  <Articles articles={tag.articles} />
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  };

export default Tag;
