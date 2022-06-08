import React from 'react';
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {makeStyles, styled} from "@mui/styles";
import Link from "next/link";
import theme from "../config/theme";


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const useStyles = makeStyles(({
    columnData: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    }
}));


function AppTable({data, columns, headers, caption, path = '', disable = false}) {
    const classes = useStyles();

    return (
        <Box >
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    {caption && (<caption>{caption}</caption>)}
                    <TableHead>
                        <TableRow>
                            {
                                headers.map((header, index) => (
                                    <StyledTableCell key={index}>{header}</StyledTableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <>
                                {
                                    disable ? (
                                        <StyledTableRow key={row.id}>
                                            {
                                                columns.map((column, index) => (

                                                    <StyledTableCell key={index}>{row[column]}</StyledTableCell>
                                                ))
                                            }
                                        </StyledTableRow>
                                    ) : (<Link key={row.id} href={`${path}/${row.id}`}>
                                        <StyledTableRow className={classes.columnData} key={row.name}>
                                            {
                                                columns.map((column, index) => (

                                                    <StyledTableCell key={index}>{row[column]}</StyledTableCell>
                                                ))
                                            }
                                        </StyledTableRow>
                                    </Link>)
                                }
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default AppTable;
