function Message(){
    const name='lili';
    if(name)
        return <h1>Hello {name} World</h1>;
    return <h1>Hello World there</h1>    
}
export default Message;