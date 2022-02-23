import { ActionTypes } from "../constants/imageAction-Types";

const initialState = {
    images:[],
};

export const ImageReducer = (state = initialState,{type, payload}) => {
    switch(type){
        case ActionTypes.SET_IMAGE:
            let existImages = state.images.filter((image) => !image.imagename.toLowerCase().includes(payload.imagename.toLowerCase()) );

            return { ...state,
                images:[...existImages, payload]
            };
        default :
            return state;
    }
}