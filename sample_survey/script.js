
//MAP
function init() {

var jsonPoints = 'https://web.fulcrumapp.com/shares/f70a1e6ac699e75c.json'

var results  = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': jsonPoints,
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
})();

console.log(results)

var question1 = {
  'closetofamily' : 0,
  'harvesting' : 0,
  'beautifuldesert' : 0
};

var question2 = {
  'ten' : 0,
  'thirty' : 0,
  'hour' : 0,
  'two' : 0,
  'toolong': 0,
};

var question3 = {
  'yes' : 0,
  'no' : 0,
};

var question4 = {
  'cardinals' : 0,
  'bruins' : 0
};

var question5 = {
  'redchili' : 0,
  'greenchili' : 0,
  'hotdog' : 0,
  'baithaj': 0,
  "vegan": 0,
  "hotfood": 0
};

// console.log(results.records)

// console.log('BEFORE')
// console.log(question1)
// console.log(question2)
// console.log(question3)

for (i in results.records) {
    // console.log('POST ' + i)


//question1
// console.log(results.records[i].form_values['015e'].choice_values[0])
  try{  

    switch(results.records[i].form_values['015e'].choice_values[0]) {
        case 'closetofamily':
            question1.closetofamily += 1
            break;
        case 'harvesting':
            question1.harvesting += 1
            break;
        case 'beautifuldeserts':
            question1.beautifuldesert += 1
            break;
        default:
            console.log('Not a known value for question 1')
            console.log(results.records[i].form_values['015e'].choice_values[0])
    }
  }
  catch(err){
    console.log('Error w/ question 1')
  }


//question 2
  try{
    switch(results.records[i].form_values['bcc2'].choice_values[0]) {
      case 'ten':
          question2.ten += 1
          break;
      case 'thirty':
          question2.thirty += 1
          break;
      case 'hour':
          question2.hour += 1
          break;
      case 'two':
          question2.two += 1
          break;
      case 'toolong':
          question2.toolong += 1
          break;
      default:
          console.log('Not a known value for question 2')
    }
  }
      catch(err){
    console.log('Error w/ question 2')
  }


//question 3
try{
    switch(results.records[i].form_values['68c6']) {
      case 'yes':
          question3.yes += 1
          break;
      case 'no':
          question3.no += 1
          break;
      default:
          console.log('Not a known value for question 3')
          console.log(results.records[i].form_values['68c6'])
    }
  }
  catch(err){
    console.log("error w/ question 3")
  }


// question 4
// console.log(results.records[i].form_values['f7a5'].choice_values[0])
try{
    switch(results.records[i].form_values['f7a5'].choice_values[0]) {
      case 'cardinals':
          question4.cardinals += 1
          break;
      case 'bruins':
          question4.bruins += 1
          break;
      default:
          console.log('Not a known value for question 4')
    }
  }
  catch(err){
    console.log("error w/ question 4")
  }

// question 5
// console.log(results.records[i].form_values['ee72'].choice_values[0])
try{
    switch(results.records[i].form_values['ee72'].choice_values[0]) {
      case 'redchili':
          question5.redchili += 1
          break;
      case 'greenchili':
          question5.greenchili += 1
          break;
      case 'hotdog':
          question5.hotdog += 1
          break;
      case 'baithaj':
          question5.baithaj += 1
          break;
      case 'vegan':
          question5.vegan += 1
          break;
      case 'hotfood':
          question5.hotfood += 1
          break;
      default:
          console.log('Not a known value for question 5')
    }
  }
  catch(err){
    console.log("error w/ question 5")
  }

}

// console.log('after')
// console.log(question1)
// console.log(question2)
// console.log(question3)
// console.log(question4)
console.log(question5)



var ctx = document.getElementById("myChart1").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Close to family', 'Beautiful deserts', 'Saguaro (bahidaj) harvesting'],
        datasets: [{
            data: [question1.closetofamily, question1.beautifuldesert, question1.harvesting],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(216, 191, 216, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(222, 184, 135, 0.2)',
              'rgba(222, 184, 135, 0.2)',
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(117, 107, 177, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255,99,132,1)',
              'rgba(160, 82, 45, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
          legend: {
        display: false
    },
        scales: {
            xAxes: [{
              ticks: {
                beginAtZero:true,
                autoSkip: false
              }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    autoSkip: false
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Responses'
                  }

            }]
        }
    }
});



var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ["10 Minutes", "30-45 minutes", "An hour", "Two", "Too long"],
        datasets: [{
            data: [question2.ten,question2.thirty,question2.hour,question2.two,question2.toolong],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
          legend: {
        display: false
    },
        scales: {
            xAxes: [{
              ticks: {
                autoSkip: false
              },
              scaleLabel: {
                    display: true,
                    labelString: 'Responses'
                  }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    autoSkip: false
                }
            }]
        }
    }
});



var ctx = $("#myChart4");
var data = {
    labels: ["Yes", "No"],
    datasets: [
        {
            data: [question3.yes, question3.no],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(0, 0, 0, 0.2)',

            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
            ]
        }]
};
var myPieChart = new Chart(ctx,{
    type: 'doughnut',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});


var ctx = $("#myChart5");
var data = {
    labels: ["Cardinals", "UCLA Bruins"],
    datasets: [
        {
            data: [question4.cardinals,question4.bruins],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)'
              ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)'
            ]
        }]
};
var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});


var ctx = document.getElementById("myChart6").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ["Red Chili", "Green Chili", "Sonoran Hot Dogs", "Baithaj", "Vegan", "Hot food"],
        datasets: [{
            data: [question5.greenchili,question5.redchili,question5.hotdog,question5.baithaj,question5.vegan,question5.hotfood],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderWidth: 1
        }]
    },
    options: {
          legend: {
        display: false
    },
        scales: {
            xAxes: [{
              ticks: {
                autoSkip: false
              },
              scaleLabel: {
                    display: true,
                    labelString: 'Responses'
                  }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    autoSkip: false
                }
            }]
        }
    }
});





}
window.onload = init();