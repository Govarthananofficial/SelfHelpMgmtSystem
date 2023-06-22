import React, {useState} from 'react';
const Searchbar = () => {
const [searchInput, setSearchInput] = useState("");
const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};
return <div class="searchbar">
<input  id="searchbar" type="search" placeholder="Search here" onChange={handleChange} value={searchInput} />
</div>
};
export default Searchbar;