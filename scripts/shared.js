import { get, post, put, del } from './requester.js';

export function getPartials(){
    return {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    };
}

export function setHeaderInfo(ctx){
    ctx.isAuth = sessionStorage.getItem('authtoken') !== null;
    ctx.fullName = sessionStorage.getItem('fullName');
}