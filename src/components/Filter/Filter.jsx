import React from "react";

import {Input, FormField, } from './Filter.styled';
import {setFilter} from '../../redux/filterSlice';
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
const filter = useSelector(state => state.filter.filter);
const dispatch = useDispatch();

const onChange = e =>{
    dispatch(setFilter(e.currentTarget.value));
};
return(
  <FormField>
    Find contacts by name
    <br />
    <Input type="text"
    value={filter}
    onChange={onChange}
    />
</FormField>  
)
    
}
   


export default Filter;