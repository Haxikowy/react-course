import '../scss/Search.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
   const [term, setTerm] = useState('programming');
   const [debouncedTerm, setDebouncedTerm] = useState(term);
   const [searchData, setSearchData] = useState([]);

   useEffect(() => {
      const timerID = setTimeout(() => {
         setDebouncedTerm(term);
      }, 500);

      return () => {
         clearTimeout(timerID);
      };
   }, [term]);

   useEffect(() => {
      const search = async () => {
         const { data } = await axios.get(
            'https://en.wikipedia.org/w/api.php',
            {
               params: {
                  action: 'query',
                  format: 'json',
                  list: 'search',
                  origin: '*',
                  srlimit: '10',
                  srsearch: debouncedTerm,
               },
            }
         );

         setSearchData(data.query.search);
      };

      if (debouncedTerm) search();
   }, [debouncedTerm]);

   const renderedData = searchData.map(data => {
      return (
         <div key={data.pageid} className="item">
            <div className="right floated content">
               <a
                  className="ui button"
                  href={`https://en.wikipedia.org?curid=${data.pageid}`}>
                  Go
               </a>
            </div>
            <div className="content">
               <div className="header">{data.title}</div>
               <span dangerouslySetInnerHTML={{ __html: data.snippet }}></span>
            </div>
         </div>
      );
   });

   return (
      <div className="search">
         <div className="ui form">
            <div className="field">
               <label>Enter Search Term</label>
               <input
                  onChange={e => setTerm(e.target.value)}
                  className="ui input"
                  value={term}
               />
            </div>
         </div>
         <div className="ui celled list">{renderedData}</div>
      </div>
   );
};

export default Search;
