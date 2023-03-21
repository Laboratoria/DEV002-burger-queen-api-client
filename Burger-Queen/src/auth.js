const auth = async ({email, password}) => {
    let token = null;
    await fetch('http://127.0.0.1:5173/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password})
    })
    .then(res => {
        token = {
            ...token,
            ok: false,
            status: res.status
        }
        return res.json()
    })
    .then(res => {
        token = {
            ok:(token.status == 200) ? true : false,
            message: (token.status == 200) ? 'Login' : res,
            token: (token.status == 200) ? res : null
        };
    })
    .catch(err => {
        token = {
            ok: false,
            message: 'Error of login',
            token: null
        }
    });
    return token;
}

export {
    auth
}