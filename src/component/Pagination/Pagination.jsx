import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function PaginationRounded({changePage, totalPage}) {
    const classes = useStyles();

    const onChangePage = (page) =>{
        changePage(page)
     }
    return (
        <div className={classes.root}>
            <Pagination  siblingCount={0}
                         onChange={(e, page)=> onChangePage(page)}
                         count={totalPage}
                         defaultPage={1}
                         variant="outlined"
                         shape="rounded"/>
        </div>
    );
}

PaginationRounded.propTypes = {
    changePage: PropTypes.func,
    totalPage: PropTypes.number,
}

export default PaginationRounded