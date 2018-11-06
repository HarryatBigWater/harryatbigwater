
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
  'ilikecorn' : 0,
  'proximitytoocean' : 0
};

var question2 = {
  'threetosixinches' : 0,
  'sixtoeightinches' : 0,
  'fivefeettoonefoot' : 0,
  'cm' : 0,
  'hand': 0,
};

var question3 = {
  'reallybig' : 0,
  'verybig' : 0,
  'extremelybig' : 0,
  'unbelievablybig' : 0
};

var question4 = {
  'yes' : 0,
  'no' : 0,
};

var question5 = {
  'cornhuskers' : 0,
  'sooners' : 0
};

// console.log(results.records)

// console.log('BEFORE')
// console.log(question1)
// console.log(question2)
// console.log(question3)

for (i in results.records) {
    // console.log('POST ' + i)
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
        case 'ilikecorn':
            question1.ilikecorn += 1
            break;
        case 'proximitytoocean':
            question1.proximitytoocean += 1
            break;
        default:
            console.log('Not a known value for question1')
    }

    switch(results.records[i].form_values['bcc2'].choice_values[0]) {
      case 'threetosixinches':
          question2.threetosixinches += 1
          break;
      case 'sixtoeightinches':
          question2.sixtoeightinches += 1
          break;
      case 'fivefeettoonefoot':
          question2.fivefeettoonefoot += 1
          break;
      case 'cm':
          question2.cm += 1
          break;
      case 'hand':
          question2.hand += 1
          break;
      default:
          console.log('Not a known value for question2')
    }

    switch(results.records[i].form_values['24e4'].choice_values[0]) {
      case 'reallybig':
          question3.reallybig += 1
          break;
      case 'verybig':
          question3.verybig += 1
          break;
      case 'extremelybig':
          question3.extremelybig += 1
          break;
      case 'unbelievablybig':
          question3.unbelievablybig += 1
          break;
      default:
          console.log('Not a known value for question 3')
  }

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
    switch(results.records[i].form_values['f7a5'].choice_values[0]) {
      case 'cornhuskers':
          question5.cornhuskers += 1
          break;
      case 'sooners':
          question5.sooners += 1
          break;
      default:
          console.log('Not a known value for question 5')
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
        labels: ['Close to family', 'Quiet and peaceful', 'I like corn', 'Proximity to ocean'],
        datasets: [{
            data: [question1.closetofamily, question1.quietandpeaceful, question1.ilikecorn, question1.proximitytoocean],
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
      labels: ["3 to 6 inches", "6 to 8 inches", ".5 feet to one foot", "480cm to 650cm", "The size of my hand"],
        datasets: [{
            data: [question2.threetosixinches,question2.sixtoeightinches,question2.fivefeettoonefoot,question2.cm,question2.hand],
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



var ctx = $("#myChart3");
var data = {
    labels: ["Really big", "Very big", "Extremely big", "Unbelievably big"],
    datasets: [
        {
            data: [question3.reallybig,question3.verybig,question3.extremelybig,question3.unbelievablybig],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(188, 189, 220, 0.8)'
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
    labels: ["Nebraska Cornhuskers", "Oklahoma Sooners"],
    datasets: [
        {
            data: [question5.cornhuskers,question5.sooners],
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