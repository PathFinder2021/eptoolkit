import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Box, Collapse, Grid, Button, Paper } from "@material-ui/core";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useBackend } from "../../utils/BackendProvider";
import history from "../../utils/history";
import TextField from '@material-ui/core/TextField';
import Colors from '../Styles/colors';
import InfoIcon from '@material-ui/icons/Info';
import BannerImage from "../../external/images/misc/stairs1.JPG"
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core/";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import '../../components/Styles/fonts.scss';
import { linkButton, overviewContainer, overviewTitleContainer, overviewIcon } from '../Styles/classes';
import BuildingsTable2 from "./BuildingsTable2";
import BuildingsTableHead from "./BuildingsTableHead";
import ImageWithModal from "../reusable/ImageWithModal";

import { useAuth0 } from "../../utils/react-auth0-spa"

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    width: '100%',
    margin: "auto",
    flexGrow: 1,
    overflowX: "hidden"
  },
  banner: {
    [theme.breakpoints.down('sm')]: {
      height: 270,
    },
    [theme.breakpoints.up('md')]: {
      height: 500,
    },
    [theme.breakpoints.only('xl')]: {
      height: 700,
    },
    backgroundImage: "url(" + BannerImage + ")",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
  },
  titleGrid: {
    [theme.breakpoints.down('sm')]: {
      height: "auto",
      maxWidth: "100%",
      borderLeft: "0px solid",
    },
    [theme.breakpoints.up('md')]: {
      height: "auto",
      maxWidth: "50%",
    },
    [theme.breakpoints.only('xl')]: {
      height: "auto",
      maxWidth: "35%",
    },
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: theme.spacing(4),
    backgroundColor: "#000000D9",
    borderLeft: "7px solid",
    borderColor: Colors.primaryColor1,
    "&:hover": {
      cursor: "default"
    }
  },
  accordion: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.only('md')]: {
      width: '95%',
    },
    [theme.breakpoints.only('lg')]: {
      width: '93%',
    },
    [theme.breakpoints.only('xl')]: {
      width: '87%',
    },
    margin: "0 auto", //centers horizontally
    boxShadow: "0px 10px 10px -5px #00000040",
    '&.Mui-expanded': {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.only('md')]: {
        width: '95%',
      },
      [theme.breakpoints.only('lg')]: {
        width: '93%',
      },
      [theme.breakpoints.only('xl')]: {
        width: '87%',
      },
      margin: "0 auto", //centers horizontally
    },
  },
  accordionSummary: {
    backgroundColor: Colors.primaryColor1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: Colors.border1,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: Colors.primaryColorHover,
    }
  },
  paper: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '75%',
    },
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    borderRadius: 0,
  },
  table1: {
  },
  linkButton: linkButton,
  overviewContainer: overviewContainer,
  overviewTitleContainer: overviewTitleContainer,
  overviewIcon: overviewIcon,
}));

const BuildingsTable = () => {
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('date');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { getStoredBuildings } = useBackend();
  const [rows, setRows] = useState([]);
  
  const [tableIsExpanded, setTableIsExpanded] = React.useState(false);

  const [expanded, setExpanded] = React.useState(false);
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { loading } = useAuth0();

  useEffect(() => {
    async function fetchData() {
      const data = await getStoredBuildings();
      if (data) {
        setRows(data);
      }
    }
    if (!loading) {
      fetchData();
    }
  }, [loading, getStoredBuildings]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const redirectTo = (addr) => {
    history.push("#/"+addr);
    history.go(0);
    window.scrollTo(0, 0);
};

  const onMouseOverButton = event => {
    const el = event.currentTarget;
    el.style.cursor = "pointer";
  };

  const [alertOpen, alertSetOpen] = React.useState(false);

  const handleAlertClickOpen = () => {
    alertSetOpen(true);
  };

  const handleAlertClose = () => {
    alertSetOpen(false);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Saved building name' },
    { id: 'image', numeric: false, disablePadding: false, label: 'Image' },
    { id: 'creationDate', numeric: true, disablePadding: false, label: 'Creation date' },
    { id: 'slug', numeric: true, disablePadding: false, label: 'Open in detail' },
  ];

  const _handleClick = (slug) => {
    const addr = "/buildings/" + slug;
    history.push("#/"+addr);
    history.go(0);
  }

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} className={classes.banner}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            className={classes.titleGrid}>
            <Typography align="left">
              <p className="bannerText">Welcome back!</p>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Paper className={classes.paper}>
          <Grid container
            direction="row"
            alignItems="center"
            justify="center">

            <Grid item xs={12} sm={10}>
              <div className={classes.overviewContainer}>
                <React.Fragment>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={0}
                    className={classes.overviewTitleContainer}>
                    <Grid item>
                      <InfoIcon className={classes.overviewIcon} style={{ color: Colors.primaryColor1 }} />
                    </Grid>
                    <Grid item>
                      <header className="overviewTitle">Overview</header>
                    </Grid>
                  </Grid>
                </React.Fragment>
                <Typography>
                  <ul className="overviewText">
                    <li className="listItem">After entering the name of your new project, you will be taken through a guided process to describe the building process
                    before you can start planning its retrofit.
                    </li>
                    <li className="listItem">If you've previously created projects, you can return to these by selecting them on the list below.
                    </li>
                  </ul>
                </Typography>
              </div>
            </Grid>
          </Grid>

          <br></br>

          <Grid
            container direction="row"
            alignItems="center"
            justify="center"
            spacing={3}
            style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Grid item xs="auto">
              <div style={{ fontSize: 18, visibility: "visible" }}>
                Name of new project:
                    </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField id="name-input" label="Name" variant="outlined" fullWidth style={{ visibility: "visible" }} />
            </Grid>
            <Grid item xs="auto">
              <button className={classes.linkButton}
                onMouseEnter={event => onMouseOverButton(event)}
                onClick={() => {
                  redirectTo("design");
                }}>
                Create project
              </button>
            </Grid>
          </Grid>

          <br></br>

          <Accordion className={classes.accordion} expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
            <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon />}>
              <div className="accordionHeader">Saved projects</div>
            </AccordionSummary>

            <AccordionDetails style={{ borderStyle: "solid", borderWidth: 1, borderColor: Colors.border1, padding: 0 }}>
              <Grid item xs={12} sm={12}>
                <TableContainer>
                  <Table
                    className={classes.table1}
                    aria-labelledby="tableTitle"
                    size={'medium'}
                    aria-label="enhanced table1">
                    <TableBody>
                      {stableSort(rows, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => {
                          const labelId = `enhanced-table1-checkbox-${index}`;
                          return (
                            <React.Fragment>
                              <TableRow
                                className={classes.row}
                                hover
                                tabIndex={-1}
                                key={row.slug}>
                                <TableCell align="left">
                                  <IconButton onClick={() => setTableIsExpanded(!tableIsExpanded)}>
                                     {tableIsExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                  </IconButton>
                                </TableCell>
                                <TableCell component="th" id={labelId} scope="row" align="left">
                                  {row.name}
                                </TableCell>
                                {/*
                                <TableCell align="left">
                                  {row.image && (<ImageWithModal image={row.image} width={'15vw'} height={'10vh'} />)}
                                </TableCell>
                                */}
                                <TableCell align="right">
                                  <IconButton onClick={() => { _handleClick(row.slug) }}>
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                                <TableCell align="right">
                                  <IconButton onClick={handleAlertClickOpen}>
                                    <DeleteIcon />
                                  </IconButton>
                                  <Dialog
                                    open={alertOpen}
                                    onClose={handleAlertClose}>
                                    <DialogTitle id="alert-dialog-title">{"Delete project"}</DialogTitle>
                                    <DialogContent>
                                      <DialogContentText id="alert-dialog-description">
                                        Selecting "DELETE" will permanently delete the whole project. Are you sure you wish to proceed?
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button onClick={handleAlertClose} color="primary" autoFocus>
                                        CANCEL
                                      </Button>
                                      <Button onClick={handleAlertClose} color="primary">
                                        DELETE
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                                </TableCell>
                                <TableCell align="right">
                                  {new Date(Date.parse(row["creationDate"])).toLocaleDateString()}
                                  {/* 
                                  Uncommenting this adds hours, minutes and seconds to the time stamp
                                  {new Date(Date.parse(row["creationDate"])).toLocaleTimeString()} 
                                */}
                                </TableCell>
                                <TableCell align="right">
                                  <Button className={classes.linkButton} 
                                    style={{paddingTop: 2, paddingBottom: 2}} 
                                    onMouseEnter={event => onMouseOverButton(event)} 
                                    onClick={() => { _handleClick(row.slug) }}> 
                                    Open project 
                                  </Button>
                                </TableCell>
                              </TableRow>


                              {tableIsExpanded && (
                              
                              <TableRow> {/* This is what opens when clicking the expand icon at the beginning of a row */}
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0, backgroundColor: Colors.border1 }} colSpan={6}>
                                  <Collapse in={tableIsExpanded} timeout="auto" unmountOnExit>
                                    <Box margin={1}>
                                      <Typography variant="h6" gutterBottom component="div">
                                        {row.name}
                                      </Typography>
                                    </Box>
                                  </Collapse>
                                </TableCell>
                              </TableRow>
                              
                               
                               )}



                            </React.Fragment>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]} /* If we want to remove the option for changing this: rowsPerPageOptions={[5]} */
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage} />
              </Grid>
            </AccordionDetails>
          </Accordion>
          <br></br><br></br><br></br>


          <Accordion className={classes.accordion} expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
            <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon />}>
              <div className="accordionHeader">Saved projects</div>
            </AccordionSummary>

            <AccordionDetails style={{ borderStyle: "solid", borderWidth: 1, borderColor: Colors.border1, padding: 0 }}>

          <BuildingsTable2 />

          </AccordionDetails>
          </Accordion>

          <br></br><br></br><br></br>


        </Paper>
      </Grid>
    </div>
  );
}

export default BuildingsTable;