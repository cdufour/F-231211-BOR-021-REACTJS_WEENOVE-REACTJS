export default function Lorem({limit}) {
    const defaultTxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tempor metus. Donec sagittis sit amet nisl eget sagittis. Praesent et est pellentesque, ultrices odio eu, mollis dui. Nam aliquam metus vel ex eleifend condimentum. Suspendisse nulla ante, hendrerit ut quam eget, pretium faucibus orci. Cras imperdiet congue feugiat. Aliquam pharetra, ex ut vehicula suscipit, nisi enim placerat enim, eu viverra quam est eu mauris. In hac habitasse platea dictumst. Etiam non odio a magna cursus molestie. Donec et iaculis justo."
    const text = limit ? defaultTxt.substr(0,limit) : defaultTxt

    return <p>{text}</p>

    // alternative syntaxique
    //return <p>{ limit ? defaultTxt.substr(0,limit) : defaultTxt  }</p>
}
