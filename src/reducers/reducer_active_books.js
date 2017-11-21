//state is not app state, just state this reducer is responsible for

//set state to null if undefined state, such as on init, to prevent return of undef causing err
//reducers handle actions for returns
export default function(state = null, action){
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
            
    }

    return state;
}
