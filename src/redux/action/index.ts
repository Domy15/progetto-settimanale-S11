export const getSong = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=blackpink')
            if (response.ok) {
                const data = await response.json()
                dispatch({
                    type: 'GET_SONGS',
                    payload: data.data
                })               
            } else {
                throw new Error('errore nei dati')
            }
        } catch (error) {
            console.log(error);
        }
    }
}