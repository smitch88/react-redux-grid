import {
    GET_DATA,
    SET_DATA,
    SET_CURRENT_RECORDS
} from '../constants/ActionTypes';

import Request from '../components/plugins/ajax/Request';

export function getAsyncData(datasource) {

    return (dispatch) => {

        return Request.api({
            route: datasource,
            method: 'GET'
        }).then((response) => {

            if (response) {

                dispatch({
                    type: SET_DATA,
                    data: response.data,
                    total: response.total,
                    currentRecords: response.data,
                    success: true
                });

            }

            else {
                dispatch({
                    type: SET_DATA,
                    data: [],
                    success: false
                });
            }

        });

    };
}

export function setData(data) {
    return { type: SET_DATA, data };
}
