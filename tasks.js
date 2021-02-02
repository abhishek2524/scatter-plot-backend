const {dataset,polygon1,polygon2} = require('./datasets/datasets');
const {options,createDataset} = require('./common/chart-config');
const { response } = require('express');
var inside = require('point-in-polygon');

const task1 = ()=>{
    let plotData = [];
    dataset.map((res)=>{
        plotData.push([res[0],res[1],'white'])
    })
    return plotData;
}

const task2 = ()=>{
    let polygonList = []
    let notPolygonList = []
    let plotData = []
    const polygon = polygon1;
    let new_dataset = []
    dataset.map((data)=>{
        new_dataset.push(data)
    })
    new_dataset.map((data)=>{
        if(inside([data[0],data[1]], polygon)){
            polygonList.push([data[0],data[1],'red'])
        }else{
            notPolygonList.push([data[0],data[1],'white'])
        }
    })
    plotData = polygonList.concat(notPolygonList);
    return plotData;
}

const task3 = ()=>{
    let polyData = []
    const polygon = polygon1;
    let new_dataset = []
    dataset.map((data)=>{
        if(inside([data[0],data[1]],polygon)){
            new_dataset.push(data)
        }
    })
    polyData = new_dataset.map((res)=>{
        return [res[3],res[2],'red']
    })
    return polyData;
}

const task4 = ()=>{
    let new_dataset = []
    let data = []
    dataset.map((data)=>{
        if(inside([data[0],data[1]],polygon1)){
            new_dataset.push(data)
        }
    })
    new_dataset.map((res)=>{
        if(inside([res[3],res[2]],polygon2)){
            data.push([res[3],res[2],'green'])
        }
    })
    return data;
}

const bonusTask = ()=>{
    let response = {}
    const data = []
    let polygonList = []
    let notPolygonList = []
    let secPolygonList = []
    let secNotPolygonList = []
    let resData = {}
    let new_dataset = []

    dataset.map((data)=>{
        new_dataset.push(data)
    })
    
    new_dataset.map((data)=>{
        if(inside([data[0],data[1]], polygon1)){
            if(inside([data[3],data[2]],polygon2)){
                secPolygonList.push(data);
            }else{
                polygonList.push(data);
            }
        }else{
            notPolygonList.push(data)
        }
    })

    notPolygonList.map((res)=>{
        data.push([res[0],res[1],'white']);
    });
    polygonList.map((res)=>{
        data.push([res[0],res[1],'red']);
    });
    secPolygonList.map((res)=>{
        data.push([res[0],res[1],'green']);
    });
    
    return data;
}
module.exports = {task1,task2,task3,task4,bonusTask}