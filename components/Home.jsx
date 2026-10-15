import React, { useState } from 'react'
import Main from './Main'
import List from './List'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ListShimmer from './ListShimmer';

export default function Home() {
  const [searchQuery, updateQuery] = useState("");
  return (
    <>
      <Main key="2" updateQuery={updateQuery} />
      <List key="3" searchQuery={searchQuery} />
    </>
  );
}
