import React from "react";
import {Pagination , PaginationItem} from '@material-ui/lab';
import useStyles from './styles';
import { Link } from "react-router-dom";


const Paginate = () => {
    const classes = useStyles();

    return (
        <Pagination

            classes={{ ul: classes.ul }}
            //nbr of pages 
            count={5}
            //current page
            page={1}
            //size of the pagination
            variant="outlined"
            //color of the pagination
            color="primary"
            //shape of the pagination
            renderItem={(item) => (

                <PaginationItem {...item} 
                component={Link} to={`/posts?page=${item.page}`}

                />
            )}
        />
    )




};

export default Paginate;
