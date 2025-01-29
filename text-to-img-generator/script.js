import { HUGGINGFACE_API_KEY } from "./token.js"; 

//model name - stabilityai/stable-diffusion-2
async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  
    if (!response.ok) {
      console.error("API Error:", await response.text()); 
      throw new Error("Failed to generate image.");
    }      
    return await response.blob();
  }

const btn = document.getElementById("search-btn");
const output_container = document.getElementById("results");
const input = document.getElementById("search-content");

btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please enter a prompt!");
    return;
  }
  btn.textContent='Loading...';
  btn.disabled = true;
  query({ inputs: input.value })
  .then((blob) => {
    const imgUrl = URL.createObjectURL(blob); 

    const img = document.createElement("img");
    img.src = imgUrl;
    output_container.innerHTML = ""; 
    output_container.appendChild(img);
  })
  .catch((error) => console.error("Error:", error))  
  .finally(() => {
    // Reset the button text and re-enable it after the process is finished
    btn.textContent = "search";
    btn.disabled = false;
  });
});
