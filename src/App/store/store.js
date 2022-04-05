import { combineReducers, createStore } from "redux";
import { SERVER_URL } from '../config/config'
import { DummyMeme } from "../interfaces/meme";

const initialRessourcesState={
    images:[],
    memes:[]
}

export const RessourcesActions=Object.freeze({
    ADD_INIT_IMAGES: 'ADD_INIT_IMAGES',
    ADD_INIT_MEMES: 'ADD_INIT_MEMES',
    ADD_MEME: 'ADD_MEME',
    ADD_INIT_ALL: 'ADD_INIT_ALL'
});

function ressourceReducer(state=initialRessourcesState, action) {
    switch(action.type) {
        case RessourcesActions.ADD_INIT_IMAGES : return {...state, images:action.values};
        case RessourcesActions.ADD_INIT_MEMES: return {...state, memes:action.values};
        case RessourcesActions.ADD_INIT_ALL: return {...state, memes:action.memes, images:action.images};
        case RessourcesActions.ADD_MEME: return {...state, memes:[...state.memes, action.values]};
        case 'INIT_LOADING':
            const prm = fetch(`${SERVER_URL}/memes`).then((f) => f.json());
            const pri = fetch(`${SERVER_URL}/images`).then((f) => f.json());
            Promise.all([prm, pri]).then(aResp => store.dispatch({type: RessourcesActions.ADD_INIT_ALL, images: aResp[1], memes: aResp[0]}));
            return state;
        default: return state;
    }
}

function modalReducer(state={isShown:false, content:''}, action) {
    switch(action.type) {
        case 'HIDE_MODAL': return { isShown: false, content:'' };
        case 'SHOW_MODAL': return { isShown: true, content:action.value };
        default: return state;
    }
}

function currentReducer(state=DummyMeme, action) {
    switch(action.type) {
        case 'RESET_CURRENT': return {...DummyMeme};
        case 'UPDATE_CURRENT': return {...state, ...action.value};
        default: return state;
    }
}

const reducers = combineReducers({modal:modalReducer, ressources:ressourceReducer, current:currentReducer})
export const store = createStore(reducers);
store.subscribe(() => console.log(store.getState()));
store.dispatch({type: 'INIT_LOADING'});
store.dispatch({type: 'RESET_CURRENT'});