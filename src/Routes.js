import React from "react";
import { Routes, Route } from "react-router-dom";
import {
ProductCreate, ProductEdit, ProductView, 
ProductList
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="Products/view/:id" element={<ProductView {...props} title={'View Product'} />} />
                        <Route path="Products/edit/:id" element={<ProductEdit {...props} title={'Edit Product'} />} />
                        <Route path="Products/create" element={<ProductCreate {...props} title={'Create Product'} />} />

                <Route path="/p_list" element={<ProductList {...props} title={'Products List'} />} />
        </Routes>
    )

};

export default Component;