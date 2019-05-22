import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const SimpleTable = props => {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {props.days.map((day, i) => (
                            <TableCell align="center" key={i}>{day}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {props.temperature_daily_max.map(row => (
                            <TableCell align="center" style={{ color: 'red' }}>{row.toFixed(2)}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {props.temperature_daily_min.map(row => (
                            <TableCell align="center" style={{ color: '#00b0ff' }}>{row.toFixed(2)}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {props.rel_humidity_daily_avg.map(row => (
                            <TableCell align="center" style={{ color: '#333' }}>{row.toFixed(2)}</TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );

}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);