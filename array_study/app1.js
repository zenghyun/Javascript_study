const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {moreDetail: []}];

const analyticsData = [[1, 1.6], [-5.4, 2.1], "star"];

for(const data of analyticsData) {
    console.log(data);
    for(const dataPoint of data){
        console.log(dataPoint);
    }
}
