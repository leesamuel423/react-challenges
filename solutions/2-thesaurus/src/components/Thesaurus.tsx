import React, { useState, useEffect } from 'react';


const Thesaurus = () => {
  const [word, setWord] = useState<string>("");
  const [synonyms, setSynonyms] = useState<string[]>([]);
  const [antonyms, setAntonyms] = useState<string[]>([]);

  useEffect(() => {
    console.log("useEffect called");
    const getSynonyms = async () => {
      const response = await fetch(`https://api.datamuse.com/words?rel_syn=${word}`);
      const data = await response.json();
      const synonyms = data.map((item: any) => item.word);
      setSynonyms(synonyms);
    }

    const getAntonyms = async () => {
      const response = await fetch(`https://api.datamuse.com/words?rel_ant=${word}`);
      const data = await response.json();
      const antonyms = data.map((item: any) => item.word);
      setAntonyms(antonyms);
    }

    console.log('synonyms', synonyms);
    console.log('antonyms', antonyms);

    if (word) {
      getSynonyms();
      getAntonyms();
    }
  }, [word]);

  const handleSubmit = () => {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const word = formData.get('word') as string;
      setWord(word);
    }
  }

  return (
    <div className="thesaurus">
      <p>Thesaurus component</p>
      <form onSubmit={ handleSubmit() }>
        <input type="text" placeholder="Enter a word" style={{ width: "25rem" }}/>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Thesaurus