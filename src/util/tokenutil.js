export function hasToken(){
    const token = sessionStorage.getItem('token')
    const hasToken = token!==null
    return hasToken;
}