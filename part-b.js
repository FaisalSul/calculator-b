function calculatePartB() {
    const standardPremium = 174.70; // 2024 value
    const monthsWithoutCoverage = parseInt(document.getElementById('partB-months').value);

    if (isNaN(monthsWithoutCoverage)) {
        alert('Please enter a valid number of months');
        return;
    }

    const yearsWithoutCoverage = Math.floor(monthsWithoutCoverage / 12);
    const penaltyPercentage = yearsWithoutCoverage * 0.10;
    const penaltyAmount = standardPremium * penaltyPercentage;
    // const totalMonthlyPremiumWithPenalty = standardPremium + penaltyAmount;

    const resultElement = document.getElementById('partB-result');
    resultElement.innerText = `$${penaltyAmount.toFixed(2)}`;
    resultElement.classList.add('visible');
}

function clearPartB() {
    document.getElementById('partB-months').value = '';
    const resultElement = document.getElementById('partB-result');
    resultElement.classList.remove('visible');
    setTimeout(() => {
        resultElement.innerText = '';
    }, 500); // Wait for the animation to complete
}
