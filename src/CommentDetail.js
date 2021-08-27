import React from 'react';
import faker from 'faker';
import formatRelative from 'date-fns/formatRelative';

const CommentDetail = () => {
   const now = new Date();
   return (
      <div className="comment">
         <a href="/" className="avatar">
            <img src={faker.image.avatar()} alt="avatar" />
         </a>
         <div className="content">
            <a href="/" className="author">
               {faker.name.firstName()}
            </a>
            <div className="metadata">
               <span className="date">
                  {formatRelative(faker.date.recent(), now)}
               </span>
            </div>
            <div className="text">{faker.lorem.sentence(undefined, 12)}</div>
         </div>
      </div>
   );
};

export default CommentDetail;
