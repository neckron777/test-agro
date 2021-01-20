;(function (global) {
    function addButtonFunctionality() {
        let toTopButton = document.getElementById("to-top")
        
        let onScroll = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                toTopButton.style.display = "block";
            }else {
                toTopButton.style.display = "none";
            }
        }

        let toTop = (event) => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        toTopButton.addEventListener("click", toTop);

        global.onscroll = onScroll;
        onScroll();
    }

    addButtonFunctionality();
})(window);