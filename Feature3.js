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
            function oddrandom () {
                const randomIndex = Math.floor(Math.random() * odd.length);
                const item = odd[randomIndex];
                return item;
            }
            resultodd = oddrandom(odd);
            console.log("Looks like I'm having " + resultodd +' today'); 
        }
        if (time % 2 == 0){
            var even =['ice cream', 'cookies', 'candy']
            function evenrandom () {
                const randomIndex = Math.floor(Math.random() * even.length);
                const item = even[randomIndex];
                return item;
            }
            resulteven = evenrandom(even);
            console.log("Looks like I'm having " + resulteven +' today');
            if (resulteven == 'ice cream' && day == 'wednesday'){
                console.log("Let's have Strawberry Ice Cream!");
            }
            else if (resulteven == 'ice cream' && day != 'wednesday'){
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

Reward('wednesday', 16)


// Building off Feature 2, I want my options for the 3 pm - 6 pm slot to be a random selection: if the time is even, I want my selections to be ice cream, cookies, or candy. If the time is odd, I want my selections to be hot chocolate, tea, or cake.

