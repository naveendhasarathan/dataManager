import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    formControl: {
       // margin: this.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        //marginTop: this.spacing(2),
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('tblUsers', 'ID', 'int', 'NULL', 'Primary Key'),
    createData('tblUsers', 'FirstName', 'varchar', 20, 'First Name'),
    createData('tblUsers', 'LastName', 'varchar', 50, 'Last Name'),
    createData('tblUsers', 'LoginId', 'varchar', 67, 'Login Id'),
    createData('tblUsers', 'Password', 'varchar', 49, 'Password'),
];

export default function SimpleTable() {
    const classes = useStyles();


        const [age, setAge] = React.useState('');

        const inputLabel = React.useRef(null);
        const [labelWidth, setLabelWidth] = React.useState(0);
        React.useEffect(() => {
            //setLabelWidth(inputLabel.current.offsetWidth);
        }, []);

        const handleChange = event => {
            setAge(event.target.value);
        };


    return (
        <Paper className={classes.root}>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-autowidth-label">Tables List</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>tblUsers</MenuItem>
                    <MenuItem value={20}>tblSetup</MenuItem>
                    <MenuItem value={30}>tblRoles</MenuItem>
                </Select>
            </FormControl>
            <br />

            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Table Name</TableCell>
                        <TableCell align="right">Column Name</TableCell>
                        <TableCell align="right">Data Type</TableCell>
                        <TableCell align="right">CharacterMaxLength</TableCell>
                        <TableCell align="right">Notes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}