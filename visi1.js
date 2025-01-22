const dataset = [
    { date: '2022-04-10', age: '15-25', gender: 'Male', A: 437, B: 808, C: 603, D: 520, E: 86, F: 151 },
    { date: '2022-04-10', age: '>25', gender: 'Male', A: 165, B: 741, C: 652, D: 683, E: 261, F: 716 },
    { date: '2022-04-10', age: '15-25', gender: 'Female', A: 390, B: 648, C: 503, D: 986, E: 977, F: 285 },
    { date: '2022-04-10', age: '>25', gender: 'Female', A: 511, B: 895, C: 753, D: 333, E: 91, F: 44 },
    { date: '2022-05-10', age: '15-25', gender: 'Male', A: 316, B: 617, C: 26, D: 319, E: 426, F: 226 },
    { date: '2022-05-10', age: '>25', gender: 'Male', A: 566, B: 474, C: 959, D: 393, E: 780, F: 742 },
    { date: '2022-05-10', age: '15-25', gender: 'Female', A: 746, B: 155, C: 969, D: 516, E: 63, F: 2 },
    { date: '2022-05-10', age: '>25', gender: 'Female', A: 218, B: 949, C: 279, D: 976, E: 113, F: 391 },
    { date: '2022-06-10', age: '15-25', gender: 'Male', A: 1000, B: 557, C: 0, D: 454, E: 144, F: 611 },
    { date: '2022-06-10', age: '>25', gender: 'Male', A: 12, B: 947, C: 472, D: 854, E: 20, F: 795 },
    { date: '2022-06-10', age: '15-25', gender: 'Female', A: 343, B: 859, C: 951, D: 945, E: 579, F: 10 },
    { date: '2022-06-10', age: '>25', gender: 'Female', A: 311, B: 959, C: 977, D: 574, E: 695, F: 489 },
    { date: '2022-07-10', age: '15-25', gender: 'Male', A: 551, B: 422, C: 488, D: 991, E: 780, F: 454 },
    { date: '2022-07-10', age: '>25', gender: 'Male', A: 781, B: 854, C: 261, D: 535, E: 286, F: 818 },
    { date: '2022-07-10', age: '15-25', gender: 'Female', A: 182, B: 521, C: 75, D: 785, E: 630, F: 46 },
    { date: '2022-07-10', age: '>25', gender: 'Female', A: 510, B: 969, C: 916, D: 336, E: 150, F: 218 },
    { date: '2022-08-10', age: '15-25', gender: 'Male', A: 824, B: 950, C: 650, D: 74, E: 739, F: 519 },
    { date: '2022-08-10', age: '>25', gender: 'Male', A: 291, B: 108, C: 694, D: 887, E: 123, F: 242 },
    { date: '2022-08-10', age: '15-25', gender: 'Female', A: 299, B: 708, C: 681, D: 321, E: 319, F: 290 },
    { date: '2022-08-10', age: '>25', gender: 'Female', A: 256, B: 511, C: 789, D: 450, E: 884, F: 541 },
    { date: '2022-09-10', age: '15-25', gender: 'Male', A: 877, B: 412, C: 156, D: 286, E: 310, F: 268 },
    { date: '2022-09-10', age: '>25', gender: 'Male', A: 363, B: 819, C: 845, D: 757, E: 691, F: 64 },
    { date: '2022-09-10', age: '15-25', gender: 'Female', A: 308, B: 698, C: 699, D: 476, E: 543, F: 417 },
    { date: '2022-09-10', age: '>25', gender: 'Female', A: 761, B: 821, C: 772, D: 569, E: 421, F: 517 },
    { date: '2022-10-10', age: '15-25', gender: 'Male', A: 433, B: 411, C: 516, D: 733, E: 301, F: 847 },
    { date: '2022-10-10', age: '>25', gender: 'Male', A: 141, B: 113, C: 278, D: 265, E: 454, F: 219 },
    { date: '2022-10-10', age: '15-25', gender: 'Female', A: 807, B: 677, C: 458, D: 721, E: 645, F: 325 },
    { date: '2022-10-10', age: '>25', gender: 'Female', A: 946, B: 27, C: 840, D: 847, E: 996, F: 977 },
    { date: '2022-11-10', age: '15-25', gender: 'Male', A: 559, B: 648, C: 914, D: 240, E: 637, F: 445 },
    { date: '2022-11-10', age: '>25', gender: 'Male', A: 952, B: 125, C: 621, D: 798, E: 291, F: 828 },
    { date: '2022-11-10', age: '15-25', gender: 'Female', A: 348, B: 941, C: 297, D: 167, E: 501, F: 620 },
    { date: '2022-11-10', age: '>25', gender: 'Female', A: 130, B: 867, C: 878, D: 788, E: 967, F: 305 },
    { date: '2022-12-10', age: '15-25', gender: 'Male', A: 875, B: 932, C: 909, D: 166, E: 765, F: 302 },
    { date: '2022-12-10', age: '>25', gender: 'Male', A: 961, B: 786, C: 547, D: 830, E: 903, F: 535 },
    { date: '2022-12-10', age: '15-25', gender: 'Female', A: 188, B: 651, C: 969, D: 443, E: 331, F: 1 },
    { date: '2022-12-10', age: '>25', gender: 'Female', A: 816, B: 725, C: 989, D: 48, E: 62, F: 317 }
]

const colors = ['#E91E63', '#4CAF50', '#FFC107', '#00BCD4', '#9C27B0', '#FF9800'];  // Different colors for each dataset

const ctxLine = document.getElementById('myLineChart').getContext('2d');
const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['A', 'B', 'C', 'D', 'E', 'F'],
        datasets: [{
            label: 'Total Time Spent',
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: colors,
            borderColor: '#4CAF50',
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y', // Horizontal bar chart
        responsive: true,
        onClick: (e, elements) => {
            if (elements.length) {
                const selectedLabel = elements[0].index;
                showLineChart(selectedLabel);
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Total Time Spent (Minutes)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Selected Date Range'
                }
            }
        }
    }
});
// Line chart initialization
let lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Feature Time',
            data: [],
            borderColor: '#FF5733',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Time (Minutes)'
                }
            }
        }
    }
});

function filterData(startDate, endDate, ageGroup, gender) {
    return dataset.filter(item => {
        const itemDate = new Date(item.date);
        const isWithinDateRange = (!startDate || itemDate >= startDate) && (!endDate || itemDate <= endDate);
        const matchesAgeGroup = ageGroup === 'all' || item.age === ageGroup;
        const matchesGender = gender === 'all' || item.gender === gender;
        return isWithinDateRange && matchesAgeGroup && matchesGender;
    });
}

function updateChart() {
    const ageGroup = document.getElementById('ageGroup').value;
    const gender = document.getElementById('gender').value;
    const startDate = document.getElementById('startDate').value ? new Date(document.getElementById('startDate').value) : null;
    const endDate = document.getElementById('endDate').value ? new Date(document.getElementById('endDate').value) : null;

    const filteredData = filterData(startDate, endDate, ageGroup, gender);

    const totals = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
    
    filteredData.forEach(item => {
        totals.A += item.A;
        totals.B += item.B;
        totals.C += item.C;
        totals.D += item.D;
        totals.E += item.E;
        totals.F += item.F;
    });

    const chartData = [
        totals.A, totals.B, totals.C, totals.D, totals.E, totals.F
    ];

    myChart.data.datasets[0].data = chartData;
    myChart.update();
}

function showLineChart(featureIndex) {
    const labels = dataset.map(item => item.date);
    const featureData = dataset.map(item => item[Object.keys(item)[featureIndex + 3]]); // A is index 3

    lineChart.data.labels = labels;
    lineChart.data.datasets[0].data = featureData;
    lineChart.update();

    // Show the line chart and hide the bar chart
    // document.getElementById('myChart').style.display = 'none';
    document.getElementById('myLineChart').style.display = 'block';
}
