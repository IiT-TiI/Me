<template>
  <div class="main">
        <div class="header">要做的事</div>
        <hr style="height: 10px;background-color: white;">
        <div class="content">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="nav-bar">
            <button class="add" @click='add'>+</button>
        </div>
        <div class="add-type">
            
        </div>
    </div>
</template>

<script>
import dt from '/src/dataOperations.js'





export default{
    setup(props, context) {
    dt.init_data()
    function add(){
        dt.insert_item({},2)
        dt.init_data()
    }
    return { changePic };
  },
}
</script>

<style>
        *{
            border: 0;
            margin: 0;
        }
        .main{
            width: 100%;
            background-color: lightgray;
        }
        .header{
            width: 100%;
            height: 60px;
            background-color: lightpink;
            display: flex;
            justify-content: center;
            align-items: center;

        }
        .content{
            width: 100%;
            height: 500px;
            background-color: lightblue;

        }
        .nav-bar{
            width: 100%;
            height: 60px;
            background-color: lightgreen;
            position: fixed;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;

        }
        .add{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    </style>