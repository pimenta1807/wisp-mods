window.addEventListener("load", async function () {
    let s = setInterval(async function () {
      const A = document.getElementsByClassName("flex-grow mt-12 md:mt-0 pl-0 md:pl-64")
      const B = document.getElementsByClassName("w-full 2xl:even:pl-3 2xl:odd:pr-3")
      if (A.length > 0) {
        // adding the class for styling the image
        A[0].classList.add('bg-image'); 
      }
      for (let i = 0; i < B.length; i++) {
         // adding a class for every server on the servers list, so we can add a background color to it
         // otherwise the opacity of the game image will show the bg-image 
        B[i].classList.add('server-page-fix' );
      }
    }, 100); // works well for me
  });