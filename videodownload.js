// Test run within browser console, does not work in iframe in streamlit component
var x = document.getElementsByClassName("stVideo");
var url = x[0].src;
var ele = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('videodownload');
ele.href = url;
