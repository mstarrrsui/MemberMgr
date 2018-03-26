function welcomeScreen( firstName, lastName, emailAddr) {
    return `
        <div>
            <h1>Hello, ${firstName} ${lastName}.</h1>
            <i>Your email is ${emailAddr}</i>
        </div>
    `
}