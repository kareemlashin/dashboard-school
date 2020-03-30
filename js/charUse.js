$(document).ready(function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: '',
                backgroundColor: 'transparent',
                borderColor: '#1F78B4',
                data: [30, 20, 40, 31, 55, 41, 60, 55, 70, 60, 80, 70, 100]
            }]
        },

        // Configuration options go here
        options: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: ''
            },
        }
    });
});