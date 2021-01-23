import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DelIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const DeliveryList = ({ deliveries, onDelete,onSelect }) => {
    const classes = useStyles();
    return (
        <div className="DeliveryList" >
            {deliveries.map((currDelivery, index) => (
                <div  key={currDelivery.id} >
                    <Box  className="delivery" m={2} display="flex" >
                        {index+1} &nbsp;&nbsp;&nbsp;&nbsp; {currDelivery.date} &nbsp;&nbsp;&nbsp;&nbsp; {currDelivery.name} &nbsp;&nbsp;&nbsp;&nbsp;{currDelivery.city }&nbsp; &nbsp;&nbsp;&nbsp;
                        <div className={classes.root}  >
                            <Fab color="secondary" size="small"  onClick={() => onSelect(currDelivery.id)}><EditIcon /></Fab>
                            <Fab color="secondary" size="small"  onClick={() => onDelete(currDelivery.id)}><DelIcon /></Fab>
                        </div>
                    </Box>
                </div>
            ))}
        </div>
    );
}

export default DeliveryList;