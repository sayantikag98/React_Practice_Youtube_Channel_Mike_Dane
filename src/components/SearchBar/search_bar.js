import React, {useState} from "react";
import "./search_bar.css"


export default function SearchBar (props){
    const products = props.products;
    const [searchValue, setSearchValue] = useState("");

    const ValueChange = (event) => {
        //setSearchValue sets the value of searchValue
        setSearchValue(event.target.value);
    };

    const clearValue = () => {
        setSearchValue("");
    };

    const FilterFunc = () => {
        const ans = products.filter(ele => ele.startsWith(searchValue));
        return(
            ans.map(ele=><li key = {ele}>{ele}</li>)
        );
    };


    return(
        <div>
            <input id = "search" type = "text" value = {searchValue} onChange = {ValueChange}/>
            {/*conditional rendering down below*/}
            {searchValue.length>0 && <button id = "clear-btn" onClick = {clearValue}>CLEAR</button>}
            <ul>
                <FilterFunc/>
            </ul>
        </div>
    );
}