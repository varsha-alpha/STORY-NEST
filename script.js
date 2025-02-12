  gsap.from("#part2 img",{
    x:-80,
    duration:1,
    delay:1.5,
    scrollTrigger:{
        trigger:"#part2 img",
        scroll:"body",
        scrub:2
    }
  })

gsap.from("#part2 #storytext" , {
    x:90,
    duration:1,
    delay:1.5,
    stagger:1,
    scrollTrigger:{
        trigger:"#part2 #storytext",
        scroll:"body",
        scrub:2
    }
})
gsap.from("#part3 img",{
  x:90,
  duration:1,
  delay:1.5,
  scrollTrigger:{
      trigger:"#part2 img",
      scroll:"body",
      scrub:2
  }
})

gsap.from("#part3 #textofpart3" , {
  x:-80,
  duration:1,
  delay:1.5,
  stagger:1,
  scrollTrigger:{
      trigger:"#part3 #textofpart3",
      scroll:"body",
      scrub:2
  }
})

gsap.from("#part4 img",{
  x:-80,
  duration:1,
  delay:1.5,
  scrollTrigger:{
      trigger:"#part2 img",
      scroll:"body",
      scrub:2
  }
})

gsap.from("#part4 #textofpart4" , {
  x:90,
  duration:1,
  delay:1.5,
  stagger:1,
  scrollTrigger:{
      trigger:"#part4 #textofpart4",
      scroll:"body",
      scrub:2
  }
})

gsap.from("#part5 img",{
  x:90,
  duration:1,
  delay:1.5,
  scrollTrigger:{
      trigger:"#part5 img",
      scroll:"body",
      scrub:2
  }
})

gsap.from("#part5 #textofpart5" , {
  x:-50,
  duration:0.5,
  delay:1.5,
  stagger:1,
  scrollTrigger:{
      trigger:"#part5 #textofpart5",
      scroll:"body",
      scrub:2
  }
})

let searchBox = document.querySelector(".search-box");
let searchBtn = document.querySelector("#search-btn");

const fetchStories = async (query) => {
    try {
        let response = await fetch("https://shortstories-api.onrender.com/stories");
        let stories = await response.json();
        
        // Filter stories based on the query
        let filteredStories = stories.filter(story =>
            story.title.toLowerCase().includes(query.toLowerCase()) ||
            story.story.toLowerCase().includes(query.toLowerCase())
        );

        displayStories(filteredStories);
    } catch (error) {
        console.error("Error fetching stories:", error);
    }
};

// Function to display stories
const displayStories = (stories) => {
    let storyContainer = document.getElementById("main");
    storyContainer.innerHTML = ""; // Clear previous stories

    if (stories.length === 0) {
        storyContainer.innerHTML = "<p>No stories found.</p>";
        return;
    }

    stories.forEach(story => {
        let storyDiv = document.createElement("div");
        storyDiv.classList.add("story");
        storyDiv.innerHTML = `
            <h2>${story.title}</h2>
            <p>${story.story}</p>
            <hr>
        `;
        storyContainer.appendChild(storyDiv);
    });
};

// Trigger search on button click
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let searchQuery = searchBox.value.trim();
    if (searchQuery) fetchStories(searchQuery);
});
