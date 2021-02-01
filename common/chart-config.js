const createDataset = (data,isPoly=null,labels=null)=>{
    let bgColor = 'white';
    let label = "dataset1"
    if(isPoly != null){
        bgColor = isPoly;
    }
    if(labels != null){
        label = labels
    }
    return(
        {
            pointStyle:'rect',
            label: label,
            fill: false,
            showLine: false,  //!\\ Add this line
            backgroundColor: bgColor,
            pointBorderColor: bgColor,
            pointBackgroundColor: bgColor,
            pointBorderWidth: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'black',
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 15,
            pointShape:"square",
            data: data
    }
    )
}
const xstepSize = 10000;
const ystepSize = 10000;
  const options = {
    // layout: {
    //     padding: 50
    // },
    legend:{
        display:false
    },
    responsive:true,
    scales: {
        xAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 250000,
                    min:0,
                    stepSize:xstepSize,
                    maxTicksLimit:250000
                },
                gridLines: {
                    display: false
                },
                display: false
            }],
        yAxes: [{
            ticks: {
                    beginAtZero: true,
                    max: 250000,
                    min:0,
                    stepSize:ystepSize,
                    maxTicksLimit:250000
                },
                gridLines: {
                    display: false
                },
                display: false
            }]
    }
}

module.exports = {options,createDataset};