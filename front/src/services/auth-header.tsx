export default function authHeader(): Record<string, string> {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}