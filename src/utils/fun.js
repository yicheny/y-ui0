import {curry} from 'lodash';

export const withNext = curry(function (next,fn){
    return next ? fn : ()=>{};
})
