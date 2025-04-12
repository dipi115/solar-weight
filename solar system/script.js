const gravitationalAccelerations = {
    mercury: 3.7,
    venus: 8.87,
    earth: 9.81,
    mars: 3.71,
    jupiter: 24.79,
    saturn: 10.44,
    uranus: 8.69,
    neptune: 11.15,
};

const planetImages = {
    mercury: "https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-mercury-planet-isolated-on-white-background-png-image_4682542.png",
    venus: "https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-venus-planet-isolated-on-white-background-png-image_4682545.png",
    earth: "https://clipart-library.com/images/kTMbe7b9c.png",
    mars: "https://png.pngtree.com/png-vector/20221224/ourmid/pngtree-planet-mars-png-image_6534557.png",
    jupiter: "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-3d-jupiter-planet-illustration-png-image_9199325.png",
    saturn: "https://static.vecteezy.com/system/resources/previews/037/929/137/non_2x/ai-generated-fictional-3d-cartoon-planets-isolated-on-transparent-background-free-png.png",
    uranus: "https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-uranus-planet-isolated-on-white-background-png-image_4682552.png",
    neptune: "https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-neptun-planet-illustration-universe-neptune-png-image_4943955.png",
};

// Function to calculate weight on each planet
function calculateWeightOnPlanets(weightOnEarth) {
    const weightsOnPlanets = {};
    for (const planet in gravitationalAccelerations) {
        const gravityOnPlanet = gravitationalAccelerations[planet];
        const weightOnPlanet = (weightOnEarth * gravityOnPlanet) / gravitationalAccelerations.earth;
        weightsOnPlanets[planet] = weightOnPlanet;
    }
    return weightsOnPlanets;
}

// Function to handle button click and display results
function calculateWeights() {
    const earthWeightInput = document.getElementById("earthWeight");
    const resultDiv = document.getElementById("result");

    const weightOnEarth = parseFloat(earthWeightInput.value);

    if (!isNaN(weightOnEarth) && weightOnEarth > 0) {
        const weightsOnPlanets = calculateWeightOnPlanets(weightOnEarth);
        let resultText = "";

        for (const planet in weightsOnPlanets) {
            resultText += `
            <div class="planet-box">
                <img src="${planetImages[planet]}" alt="${planet} Image">
                <p>${planet.charAt(0).toUpperCase() + planet.slice(1)}<br>
                ${weightsOnPlanets[planet].toFixed(2)} kg</p>
            </div>`;
        }

        resultDiv.innerHTML = resultText;
    } else {
        resultDiv.innerHTML = "<p>Please enter a valid weight greater than zero.</p>";
    }
}
