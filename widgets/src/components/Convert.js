import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
   const [debouncedText, setDebouncedText] = useState('');
   const [translated, setTranslated] = useState('');

   useEffect(() => {
      const timerId = setTimeout(() => {
         setDebouncedText(text);
      }, 500);

      return () => {
         clearTimeout(timerId);
      };
   }, [text]);

   useEffect(() => {
      const doTranslation = async () => {
         const { data } = await axios.post(
            'https://translation.googleapis.com/language/translate/v2',
            {},
            {
               params: {
                  q: debouncedText,
                  target: language.value,
                  key: 'ADD_YOUR_API_KEY',
               },
            }
         );
         setTranslated(data.data.translations[0].translatedText);
      };

      doTranslation();
   }, [debouncedText, language]);

   return <div className="ui header">{translated}</div>;
};

export default Convert;
