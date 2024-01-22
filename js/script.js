function calculate()
{
        let weightData = parseFloat(document.getElementById('weight-input').value);
        let heightData = parseFloat(document.getElementById('height-input').value);
        if (isNaN(weightData) || isNaN(heightData))
        {
            alert('No data has been entered.');
            return;
        }
        let result=weightData/((heightData/100)*(heightData/100));
        showResult(result);
}

function showResult(result)
{
        let resultBox = document.getElementById('result-box');
        result = result.toFixed(2);
        let resultMessage = 'BMI: ' + result + ' - ';
        
        if (result < 16)
        {
            resultMessage += 'Severe Thinness';
        }
        else if (result >= 16 && result <= 16.99)
        {
            resultMessage += 'Moderate Thinness';
        }
        else if (result >= 17 && result <= 18.49)
        {
            resultMessage += 'Mild Thinness';
        }
        else if (result >= 18.5 && result <= 24.99)
        {
            resultMessage += 'Normal';
        }
        else if (result >= 25 && result <= 29.99)
        {
            resultMessage += 'Overweight';
        }
        else if (result >= 30 && result <= 34.99)
        {
            resultMessage += 'Obese Class I';
        }
        else if (result >= 35 && result <= 39.99)
        {
            resultMessage += 'Obese Class II';
        }
        else if (result >= 40) 
        {
            resultMessage += 'Obese Class III';
        }

        resultBox.innerHTML = resultMessage;
}

document.addEventListener("DOMContentLoaded", function()
{
    let icon1 = document.querySelector('#icon1');
    let navBox = document.querySelector('.nav-box');
    let navBoxA= document.querySelectorAll('.nav-box a');

    icon1.onclick = () =>
    {
        navBox.classList.toggle('active');
    };

    navBoxA.forEach(link =>
        {
        link.onclick = () =>
        {
            navBox.classList.remove('active');
        };
    });
});