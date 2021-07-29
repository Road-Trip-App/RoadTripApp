
import axios from 'axios';
const obj = {

    getDirections : () => { return axios.get('https://maps.googleapis.com/maps/api/directions/json?origin=1600+pennsylvania+Avenue+Washingston+DC&destination=Austin+Texas&key=AIzaSyCSJOPWqDbtmik2Bzu9gN0D59r9WFo7nBo')}
}

export default obj;