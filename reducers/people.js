import { 
    FETCHING_PEOPLE, 
    FETCHING_PEOPLE_SUCCESS, 
    FETCHING_PEOPLE_FAILURE} from '../constants';

initialState = {
    people: [],
    isFetching: false,
    errors: false
}
export default people = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_PEOPLE: 
            return {...state, isFetching: true, people: []};
        case FETCHING_PEOPLE_SUCCESS:
            return {... state, isFetching: false, people: action.data};
        case FETCHING_PEOPLE_FAILURE:
            return {...state, isFetching: false, errors: true};
        default:
            return state;
    }
}