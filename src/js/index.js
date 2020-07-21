//Not expected result? One of the reason could be not enough example images
//want to integrate this kind of feature? see the starter template or use this
//facing bug/issues, create a github issue here
//like this project? give it a star
// about- this project is part of cluster-11 organization
//view a similar application from google teachable machine
//download the model
//remove console.log
//test on gpu slowdown, create new js for mobile
//use teachable machine show result css
//ask for images if none is provided
//add the main-header as most voted type on result-video
//give it a star on github, [top progress bar]
//show good job when they add more images

import "../styles.css";
import "./handle-training";
import "./handle-result";
import Mobilenet from "./knn-classifier&mobileNet/mobileNet";
import KNNClassifier from "./knn-classifier&mobileNet/knn-classifier";

// alert("==================================================================");

export let ml5Features = new Mobilenet("MobileNet", () => {});
export let knn = new KNNClassifier();

//CLOSED FOR DEVELOPMENT
//ask before leaving/quitting the application
// window.onbeforeunload = function () {
//   return "Changes you made may not be saved";
// };
