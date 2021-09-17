import React, {useState, useEffect} from "react";
import CounterComponent from "./CounterButton/counter_btn";
import SearchBar from "./SearchBar/search_bar"
import ChildrenButton from "./ChildrenButton/children_btn";


export default function ReactComponent (){
    const [productState, setProductState] = useState([]);

    // useEffect(()=>{
    //     setTimeout(()=>{setProductState([
    //     "pillow",
    //     "sofa",
    //     "chair",
    //     "table",
    //     "window",
    //     "wind",
    //     "shield",
    //     "product",
    //     "pink",
    //     "pear",
    //     "prod"
    // ])},2000)
    // }, []);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response=>response.json())
        .then(data=>data.map(ele=>{
            return ele.title;
        }))
        .then(data=>setProductState(data))
        .catch(err=>console.log(err));
    },[]);
    

    //CSS styling should be defined in an object
    const divStyle = {
        backgroundColor: "pink",
        fontWeight: "bolder"
    }

    return (
        <div style = {divStyle}>
            {/* [COMMENTS] props can be passed in as a children as text in between the opening and closing tags */}
            {/* <ChildrenButton>Hello World</ChildrenButton> */}
            {productState.length>0?<SearchBar products = {productState}/>:"Loading..."}
            {/* [COMMENTS] addBy here is the props */}
            {/* <CounterComponent addBy = {5} addColor = {"blue"} addBorderRadius = {"7px"}/> */}
            {/* <CounterComponent addBy = {10} addColor = {"brown"} addBorderRadius = {"9px"}/>
            <CounterComponent addBy = {15} addColor = {"peach"} addBorderRadius = {"10px"}/> */}
        </div>
    );
}