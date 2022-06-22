const Greeting = (props) => {

    console.log(props);
    const ageSentence = `Your age is ${props.age}`;
    return <p>Hello...{props.name} .{ageSentence}</p>;
}

export default Greeting;