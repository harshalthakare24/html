function greetUser(name){
    const userName = name || 'Guest';
    console.log(`Hello, ${userName}!`);
}
greetUser(`Harshal`,`Sagar`);
greetUser();
greetUser(`Harsh`);