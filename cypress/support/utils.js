export const format = (value) => {
    let formatedValue;

    formatedValue = value.replace(',','.');
    formatedValue = Number(formatedValue.split('$')[1].trim())

    formatedValue = String(value).includes('-') ? -formatedValue : formatedValue;

    return formatedValue
}

export const randonNumber = () => {
    return Math.floor(Math.random()*200)
}

export const prepareLocalStorange = (win) => {
    win.localStorage.setItem('dev.finances:transactions', JSON.stringify([
        {
            description: "Mesada",
            amount: randonNumber() * 500,
            date: "2022-05-22"
        },
        {
            description: "Mercado",
            amount: - randonNumber() * 500,
            date: "2022-05-27"
        },
    ]))
}