function calculateBMI() {

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100;
    const pointer = document.getElementById("pointer");
    const img = document.getElementById("bmiImage");

    let bmi = weight / (height * height);

    let status, position, description;

    if (bmi < 18.5) {
        status = "Underweight";
        description = "Your weight is below the recommended range. Consider maintaining a balanced diet and healthy lifestyle.";
        position = 8;
        img.src = "kurus.png";
    }

    else if (bmi < 25) {
        status = "Normal";
        description = "Your weight is within the normal range. Keep up the good work!";
        position = 25;
         img.src = "fit.png";
    }

    else if (bmi < 30) {
        status = "Overweight";
        description = "Your weight is above the recommended range. Regular exercise and healthy eating may help improve your BMI.";
         position = 42;
         img.src = "gemoi.png";
    }

    else if (bmi < 35) {
        status = "Obese Class I";
        description = "Your BMI falls within Obese Class I. Consider consulting a healthcare professional for personalized advice.";
         position = 58;
          img.src = "obese.png";
    }

    else if (bmi < 40) {
        status = "Obese Class II";
        description = "Your BMI falls within Obese Class II. Health risks may increase at this level.";
        position = 75;
         img.src = "obese.png";
    }

    else if (bmi >= 40) {
        status = "Obese Class III";
        description = "Your BMI falls within Obese Class III. It is recommended to seek professional medical guidance.";
        position = 92;
         img.src = "obese.png";
    }
    else {
        status = "Invalid input";
        position = 0;
    }
document.getElementById("bmi-number").textContent =
    bmi.toFixed(1);

document.getElementById("bmi-status").textContent =
    `${status}`;

    document.getElementById("bmi-description").textContent =
    description;

document.querySelector(".container")
    .classList.add("show-result");
    pointer.style.left = position + "%";
    
let targetBMI = 21.7;
    let targetWeight = targetBMI * height * height;
    let weightToLose = weight - targetWeight;

    if (weightToLose > 0) {
        document.getElementById("target-weight").textContent =
            weightToLose.toFixed(1) + " kg";
    } else {
        document.getElementById("target-weight").textContent = "0 kg";
    }
}
