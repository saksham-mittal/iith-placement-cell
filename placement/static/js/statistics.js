var ctx = document.getElementById("myChart").getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                "#0094FF",
                "#FF0058",
                "#FFCF45",
                "#FFC400",
                "#00C5C3",
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Red",
            "Orange",
            "Yellow",
            "Green",
            "Blue"
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'B.Tech'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }

    }
});

var ctx1 = document.getElementById("myChart-1").getContext('2d');
var myDoughnutChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                "#0094FF",
                "#FF0058",
                "#FFCF45",
                "#FFC400",
                "#00C5C3",
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Red",
            "Orange",
            "Yellow",
            "Green",
            "Blue"
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'M.Sc'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }

    }
});

var ctx2 = document.getElementById("myChart-2").getContext('2d');
var myDoughnutChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                "#0094FF",
                "#FF0058",
                "#FFCF45",
                "#FFC400",
                "#00C5C3",
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Red",
            "Orange",
            "Yellow",
            "Green",
            "Blue"
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'M.Des M.Phil'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }

    }
});

var ctx3 = document.getElementById("myChart-3").getContext('2d');
var myDoughnutChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                "#0094FF",
                "#FF0058",
                "#FFCF45",
                "#FFC400",
                "#00C5C3",
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Red",
            "Orange",
            "Yellow",
            "Green",
            "Blue"
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'M.Tech'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }

    }
});

var ctx4 = document.getElementById("myChart-4").getContext('2d');
var myDoughnutChart = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug'],
        datasets: [{
            backgroundColor: '#FFA3BC',
            borderColor: '#FF447B',
            data: [12, -16, 3, -5, 2, 14, 0, -1],
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
  spanGaps: true,
        elements: {
            line: {
                tension: 0
            }
        },
        plugins: {
            filler: {
                propagate: false
            }
        }
    }
});

var ctx5 = document.getElementById("myChart-5").getContext('2d');
var myDoughnutChart = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug'],
        datasets: [{
            backgroundColor: '#FFA3BC',
            borderColor: '#FF447B',
            data: [12, -16, 3, -5, 2, 14, 0, -1],
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
  spanGaps: true,
        elements: {
            line: {
                tension: 0
            }
        },
        plugins: {
            filler: {
                propagate: false
            }
        }
    }
});

var ctx6 = document.getElementById("myChart-6").getContext('2d');
var myDoughnutChart = new Chart(ctx6, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug'],
        datasets: [{
            backgroundColor: '#FFA3BC',
            borderColor: '#FF447B',
            data: [12, -16, 3, -5, 2, 14, 0, -1],
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
  spanGaps: true,
        elements: {
            line: {
                tension: 0
            }
        },
        plugins: {
            filler: {
                propagate: false
            }
        }
    }
});
