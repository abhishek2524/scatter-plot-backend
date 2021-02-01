const {dataset,polygon1,polygon2} = require('./datasets/datasets');
const {options,createDataset} = require('./common/chart-config');
const { response } = require('express');
var inside = require('point-in-polygon');

const getParameterByIndex = (data,index1,index2)=>{
    let new_dataset = []
    data.map((data)=>{
        new_dataset.push({x:data[index1],y:data[index2]})
    })
    return new_dataset
}

const task1 = ()=>{
    let resData = {};
    let datasets = getParameterByIndex(dataset,0,1);
    let data = createDataset(datasets,'white',labels="dataset")
    resData["datasets"] = [data]
    response["options"] = options;
    response['data'] = resData;
    return response;
}

const task2 = ()=>{
    let response = {}
    let polygonList = []
    let notPolygonList = []
    let resData = {}
    const polygon = polygon1;
    let new_dataset = []
    dataset.map((data)=>{
        new_dataset.push([data[0],data[1]])
    })
    new_dataset.map((data)=>{
        if(inside(data, polygon)){
            polygonList.push(data)
        }else{
            notPolygonList.push(data)
        }
    })
    const isPolyData = getParameterByIndex(polygonList,0,1)
    const notPolyData = getParameterByIndex(notPolygonList,0,1)
    let data1 = createDataset(isPolyData,'red',labels="dataset1")
    let data2 = createDataset(notPolyData,'white',labels="dataset2")

    resData["datasets"] = [data1,data2]
    response["options"] = options;
    response['data'] = resData;
    return response;
}

const task3 = ()=>{
    let response = {}
    let resData = {}
    const polygon = polygon1;
    let new_dataset = []
    dataset.map((data)=>{
        if(inside([data[0],data[1]],polygon)){
            new_dataset.push(data)
        }
    })
    const isPolyData = getParameterByIndex(new_dataset,3,2)
    let data = createDataset(isPolyData,'red',labels="dataset")
    resData["datasets"] = [data]
    response["options"] = options;
    response['data'] = resData;

    return response;
}

const task4 = ()=>{
    let response = {}
    let resData = {}
    let new_dataset = []
    let data = []
    dataset.map((data)=>{
        if(inside([data[0],data[1]],polygon1)){
            new_dataset.push(data)
        }
    })
    new_dataset.map((res)=>{
        if(inside([res[3],res[2]],polygon2)){
            data.push(res)
        }
    })
    const isPolyData = getParameterByIndex(data,3,2)
    data = createDataset(isPolyData,'green',label="dataset")
    resData["datasets"] = [data]
    response["options"] = options;
    response['data'] = resData;

    return response;
}

const bonusTask = ()=>{
    let response = {}
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

    const notPolyData = getParameterByIndex(notPolygonList,0,1)
    let data1 = createDataset(notPolyData,'white',labels="dataset1")

    const polyData = getParameterByIndex(polygonList,0,1)
    let data2 = createDataset(polyData,'red',labels="dataset2")

    const secPolyData = getParameterByIndex(secPolygonList,0,1)
    let data3= createDataset(secPolyData,'green',labels="dataset3")

    resData["datasets"] = [data1,data2,data3]
    response["options"] = options;
    response['data'] = resData;
    return response;
}
module.exports = {task1,task2,task3,task4,bonusTask}