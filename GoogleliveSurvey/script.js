
//MAP
function init() {
  Chart.defaults.global.defaultFontColor = "#7d7d7b";
  Chart.defaults.global.defaultFontFamily = "'open sans','sans-serif'";
  Chart.defaults.global.defaultFontSize = 16;

var jsonPoints = 'https://spreadsheets.google.com/feeds/list/1b_LFls7DDmUjuNhUzaK1aFqYOhQXDL7wzGpeow8CSSE/1/public/values?alt=json'

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

// console.log(results.feed.entry)

var question1 = {
  'Stick built home/traditional construction' : 0,
  'Modular home' : 0,
  'Mobile home or trailer' : 0,
  'Apartment' : 0,
  'Duplex' : 0,
  'Other' : 0
};
var question2 = {
  'Yes' : 0,
  'No' : 0
};

var question3 = {
  '0 days' : 0,
  '1 day' : 0,
  '2 days' : 0,
  '3 days' : 0,
  '4 days' : 0,
  '5 days' : 0,
  '6 days' : 0,
  '7 days' : 0
};



for (i in results.feed.entry) {
    // console.log('POST ' + i)
    //console.log(results.feed.entry[i].form_values['bcc2'].choice_values[0])
    // console.log(results.feed.entry[i].form_values['2355'].choice_values[0])
    // console.log(results.feed.entry[i].form_values['00a8'])
    try {
      switch(results.feed.entry[i].gsx$whattypeofconstructionbestdescribesyourcurrenthome.$t) {
          case 'Stick built home/traditional construction':
              question1['Stick built home/traditional construction'] += 1
              break;
          case 'Modular home':
              question1['Modular home'] += 1
              break;
          case 'Mobile home or trailer':
              question1['Mobile home or trailer'] += 1
              break;
          case 'Apartment':
              question1['Apartment'] += 1
              break;
          case 'Duplex':
              question1['Duplex'] += 1
              break;
          case 'Other':
              question1['Other'] += 1
              break;
          default:
              // console.log('Not a known value for question1')
      }
    }catch(err) { console.log('nope')}
    try {
      switch(results.feed.entry[i]['gsx$haveyoueverservedonactivedutyintheu.s.armedforces'].$t) {
        case 'Yes':
            question2.Yes += 1
            break;
        case 'No':
            question2.No += 1
            break;
        default:
            // console.log('Not a known value for question2')
      } 
    }catch(err) { console.log('nope')}
    try {
      switch(results.feed.entry[i]['gsx$duringthepast7daysonhowmanydaysdidyoueatfoodfromafastfoodrestaurantsuchasmcdonaldsortacojohns'].$t) {
        case '0 days':
            question3['0 days'] += 1
            break;
        case '1 day':
            question3['1 day'] += 1
            break;
        case '2 days':
            question3['2 days'] += 1
            break;
        case '3 days':
            question3['3 days'] += 1
            break;
        case '4 days':
            question3['4 days'] += 1
            break;
        case '5 days':
            question3['5 days'] += 1
            break;
        case '6 days':
            question3['6 days'] += 1
            break;
        case '7 days':
            question3['7 days'] += 1
            break;                                                  
        default:
            // console.log('Not a known value for question3')
      } 
    }catch(err) { console.log('nope')}
    
}

// console.log('after')
// console.log(question1)
// console.log(question2)
// console.log(question3)


var ctx = document.getElementById("myChart1").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
            data: [question3['0 days'], question3['1 day'],question3['2 days'],question3['3 days'],question3['4 days'],question3['5 days'],question3['6 days'], question3['7 days']],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(216, 191, 216, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(43, 136, 158, 0.2)',
              'rgba(59, 83, 173, 0.2)',
              'rgba(0, 0, 0, 0.2)',
            ],
            borderColor: [
              'rgba(255, 159, 64, 1.0)',
              'rgba(0, 0, 0, 1.0)',
              'rgba(54, 162, 235, 1.0)',
              'rgba(216, 191, 216, 1.0)',
              'rgba(75, 192, 192, 1.0)',
              'rgba(43, 136, 158, 1.0)',
              'rgba(59, 83, 173, 1.0)',
              'rgba(0, 0, 0, 1.0)',

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


var ctx = $("#myChart2");
var data = {
    labels: ["Yes", "No"],
    datasets: [
        {
            data: [question2.Yes, question2.No],
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



var ctx = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ['Stick built', 'Modular home', 'Mobile home/trailer', 'Apartment', 'Duplex', 'Other'],
        datasets: [{
            data: [question1['Stick built home/traditional construction'],question1['Modular home'],question1['Mobile home or trailer'],question1['Apartment'],question1['Duplex'],question1['Other'],],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(222, 184, 135, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(222, 184, 135, 1)'
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
                beginAtZero: true,
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


function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }


// This reloads the window when the iframe goes to a second webpage (i.e. when the user has submitted something)
count = 0
$("#theIframe").load(function(){
  count += 1
  if (count == 2){
    document.getElementById('theIframe').style.height = "0px"
    document.getElementsByTagName('iframe')[0].src=""
    sleep(1200).then(() => {
      location.reload();
    })
    
  }
}) 