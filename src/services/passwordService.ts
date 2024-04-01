export default function generatePass(){
    let password: string = ''
    let characters:string = 'abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYX@$#123456789%&*'
    let passwordLength = 8

    for (let index = 0; index < passwordLength; index++){
        password += characters.charAt(
          Math.floor(Math.random() * characters.length)
        )
    }

    return password
}