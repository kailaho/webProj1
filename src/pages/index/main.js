
document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM content to be fully loaded before accessing elements
    let popup = document.getElementById("popup");
    let text = document.getElementById("text");
    let name = document.getElementById("name");
    function popFunc(id, plantName, description){
        let element = document.getElementById(id);

        if(element){
            element.addEventListener('mouseover', function(){
                let instructions = document.getElementById("instructions");
                instructions.style.opacity = 0;
                popup.style.opacity = 1;
                name.innerText = plantName;
                text.innerText = description;
            });

            element.addEventListener('mouseout', function(){
                popup.style.opacity = 0;
                name.innerText = "";
                text.innerText = ""; 
            });
        }
    };
    popFunc("columbine", "Columbine", "The Colorado state flower, the columbine, is a delicate and vibrant wildflower known for its distinctive bi-colored petals, resembling a graceful and enchanting ballet of white and lavender hues. Its unique beauty symbolizes the diverse and picturesque landscapes of the Rocky Mountain state." );
    popFunc("paintbrush","Indian Paintbrsuh", "The Indian paintbrush, a native wildflower in Colorado, boasts vibrant spikes of orange, red, or pink, bringing a burst of color to the state's meadows and mountains. This distinctive flower is a beautiful and iconic part of Colorado's diverse floral landscape.");
    popFunc("grass","Blue Gramma Grass", "Blue grama grass, a native plant in Colorado, showcases slender stems crowned with delicate, purplish seed heads, adding a subtle yet elegant texture to the state's grasslands. This resilient grass species is an integral part of Colorado's natural beauty, contributing to the picturesque scenery of its plains and foothills.");
    popFunc("pine", "Engelmann Spruce", "The Engelmann Spruce, native to Colorado's high-altitude regions, is distinguished by its elegant, cylindrical cones that gracefully hang downward. With flexible scales and a resilient nature, this spruce species contributes to the scenic beauty and ecological diversity of Colorado's mountainous landscapes.");
    popFunc("aspen", "Aspen Tree", "The Quaking Aspen, a signature tree in Colorado, features distinctive heart-shaped leaves that flutter in the slightest breeze, creating a shimmering effect. Forming expansive groves, these trees showcase smooth, white bark, adding a striking contrast to Colorado's diverse forests and high-altitude landscapes.");
});