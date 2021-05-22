window.onload = (e) => {
    console.log("Loaded!");
    // giving a shorthand name to the requestAnimationFrame call,
    // if unavailable it becomes a simple function that triggers a passed callback every 60th of a second
    let frameUpdate = window.requestAnimationFrame || 
    function(callback){window.setTimeout(callback, 1000 / 60)};

    // grab everything contained within the svg element (aka all the svg items)
    // let svgElements = document.querySelector('svg').childNodes;

    // gives us access to the root element, and thereby any css vars set up globally within :root
    let root = document.documentElement;

    let updateSVGs = () => {
        let scrollTop = $(window).scrollTop();
        let docHeight = $(document).height();
        let winHeight = $(window).height();
        let scrollPercent = (scrollTop) / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent*100);
        root.style.setProperty('--scroll-percentage', -scrollPercentRounded + "s");
        //console.log("New scroll percent is " + scrollPercentRounded);
        // hook this up the the requestanimationframe so that it fires it in a timely interval
        frameUpdate(updateSVGs);
    }

    updateSVGs();
}