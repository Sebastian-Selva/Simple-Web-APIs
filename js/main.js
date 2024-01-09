document.addEventListener("DOMContentLoaded", () =>{

    const copyText = document.getElementById("copyInput");
    let eyeDropper = new EyeDropper();

    //copy to clipboard API
    document.getElementById("copy-button").addEventListener("click", () =>{

        copyText.select();

        navigator.clipboard.writeText(copyText.value);
        navigator.clipboard.readText();
        window.alert("copied value: ", value);
    });

    //eyedropper API
    document.getElementById("eyedropperButton").addEventListener('click', (ev) =>{
        
        // Enter eyedropper mode
        eyeDropper.open()
        .then(colorSelectionResult => {
            // returns hex color value (#RRGGBB) of the selected pixel
            console.log(colorSelectionResult.sRGBHex);
            let display =document.getElementById("eyedropperDisply");
            display.style.backgroundColor = colorSelectionResult.sRGBHex;
        })
        .catch(error => {
            // handle the user choosing to exit eyedropper mode without a selection
        });
    });

    function invertHex(hex) {
        return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
      }

});