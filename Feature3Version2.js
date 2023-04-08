var day;
var time;
function Reward(day, time){
    if (time < 10){
        console.log('I want a latte');
    }
    else if (time >= 10 && time < 15){
            console.log('I want a hot chocolate');
    }
    else if (time >= 15 && time < 18){
        if (time % 2 != 0){
            var odd=['hot chocolate', 'tea', 'cake'];
            const itemOdd = odd[Math.floor(Math.random() * odd.length)];
            console.log("Looks like I'm having " + itemOdd +' today'); 
        }
        if (time % 2 == 0){
            var even =['ice cream', 'cookies', 'candy']
            const itemEven = even[Math.floor(Math.random() * even.length)];
            console.log("Looks like I'm having " + itemEven +' today');
            if (itemEven == 'ice cream' && day == 'wednesday'){
                console.log("Let's have Strawberry Ice Cream!");
            }
            else if (itemEven == 'ice cream' && day != 'wednesday'){
                console.log("Let's have Vanilla Ice Cream!");
            }
        }}
    else if (time >= 18 && time < 22){
        console.log('I want ice cream');
        if (day == 'wednesday'){
            console.log("Let's have Strawberry Ice Cream!");
        }
        else{
            console.log("Let's have Vanilla Ice Cream!");
        }
    }
    else if (time >= 22 && time <=24 ){
        console.log("I don't want anything other than sleep!");
    }
    else {
        console.log ('Invalid Day or Time');
    }
}
Reward('monday', 16)



