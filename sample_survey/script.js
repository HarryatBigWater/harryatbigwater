
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

// console.log(results)

var question1 = {
  'closetofamily' : 0,
  'quietandpeaceful' : 0,
  'beautifuldesert' : 0,
  'hotdogs' : 0
};

var question2 = {
  'ten' : 0,
  'thirty' : 0,
  'hour' : 0,
  'two' : 0,
  'toolong': 0,
};

var question4 = {
  'yes' : 0,
  'no' : 0,
};

var question5 = {
  'diamondbacks' : 0,
  'giants' : 0
};

// console.log(results.records)

// console.log('BEFORE')
// console.log(question1)
// console.log(question2)
// console.log(question3)

for (i in results.records) {
    // console.log('POST ' + i)
  try{  
    console.log(results.records[i].form_values['bcc2'].choice_values[0])
    // console.log(results.records[i].form_values['2355'].choice_values[0])
    // console.log(results.records[i].form_values['00a8'])

    switch(results.records[i].form_values['015e'].choice_values[0]) {
        case 'closetofamily':
            question1.closetofamily += 1
            break;
        case 'quietandpeaceful':
            question1.quietandpeaceful += 1
            break;
        case 'beautifuldesert':
            question1.beautifuldesert += 1
            break;
        case 'hotdogs':
            question1.hotdogs += 1
            break;
        default:
            console.log('Not a known value for question1')
    }
  }
  catch(err){
    console.log('Error w/ question1')
  }

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
          console.log('Not a known value for question2')
    }
  }
      catch(err){
    console.log('Error w/ question2')
  }

try{
    switch(results.records[i].form_values['68c6']) {
      case 'yes':
          question4.yes += 1
          break;
      case 'no':
          question4.no += 1
          break;
      default:
          question4.other += 1
    }
  }
  catch(err){
    console.log("error w/ question3")
  }

try{
    switch(results.records[i].form_values['f7a5'].choice_values[0]) {
      case 'diamondbacks':
          question5.diamondbacks += 1
          break;
      case 'giants':
          question5.giants += 1
          break;
      default:
          console.log('Not a known value for question 5')
    }
  }
  catch(err){
    console.log("error w/ question4")
  }
}

// console.log('after')
// console.log(question1)
// console.log(question2)
// console.log(question3)




var ctx = document.getElementById("myChart1").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Close to family', 'Quiet and peaceful', 'Beautiful deserts', 'Sonoran hot dogs'],
        datasets: [{
            data: [question1.closetofamily, question1.quietandpeaceful, question1.beautifuldesert, question1.hotdogs],
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
            data: [question4.yes, question4.no],
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
    labels: ["Diamondbacks", "Giants"],
    datasets: [
        {
            data: [question5.diamondbacks,question5.giants],
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




}
window.onload = init();