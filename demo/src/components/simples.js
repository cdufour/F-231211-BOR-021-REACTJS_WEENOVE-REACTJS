function Simple() {
    return <p>Simple</p>
}

function Simple2(props) {
    return <p>Formation: {props.formation}</p>
}

function Simple3(props) {
    return (
        <>
            <h3>Formation: {props.formation}</h3>
            <p>Durée: {props.duration} jours</p>
        </>
    )
}

function Simple4(props) {

    if (props.accessible === true) {
        return <p>Accès autorisé</p>
    } else {
        return <p>Accès refusé</p>
    }

}

function Simple5(props) {
    const { operand1, operand2, operator } = props

    let operation = ""
    let result = 0
    if (operator === "add") {
        operation = '+'
        result = operand1 + operand2
    } else if (operator === "mult") {
        operation = '*'
        result = operand1 * operand2
    }
    return <p>{operand1} {operation} {operand2} = {result}</p>
}

export { Simple, Simple2, Simple3, Simple4, Simple5 }